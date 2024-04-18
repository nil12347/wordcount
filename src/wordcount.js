const fs = require('fs');
const { createLogger, format, transports } = require('winston');

// Create logger instance
const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.simple()
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.File({ filename: 'combined.log' })
    ]
});

function wordCount(filePath) {
    try {
        // Check if file exists
        if (!fs.existsSync(filePath)) {
            throw new Error('File not found:'+filePath);
        }

        // Read file contents
        const fileContents = fs.readFileSync(filePath, 'utf-8');
        
        // Tokenize contents into words
        const words = fileContents.toLowerCase().split(/\s+/);

        // Count occurrences of each word
        const wordCountMap = new Map();
        for (const word of words) {
            const count = wordCountMap.get(word) || 0;
            wordCountMap.set(word, count + 1);
        }
        // Sort words by occurrence count in descending order
        //const sortedWordCount = Array.from(wordCountMap).sort((a, b) => b[1] - a[1]);
        const sortedWordCount = Array.from(wordCountMap).sort((a, b) => {
            if(a[1] !== b[1]){
                return b[1] - a[1];
            }

        //sort alphabetically - The results should be consistent between two files which contain the exact same words in the same frequency but in a different order
            return a[0].localeCompare(b[0]);
        });
        // Print sorted word count
        sortedWordCount.forEach(([word, count]) => {
            console.log(`${word}: ${count}`);
        });
        
    } catch (err) {
        logger.error(`Error: ${err.message}`);
    }
}

// Command-line argument handling
const args = process.argv.slice(2);
if (args.length !== 1) {
    console.error('No file found. Usage: node wordcount.js <file_path>');
    process.exit(1);
}

const filePath = args[0];
wordCount(filePath);
