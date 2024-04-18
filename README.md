# Word Count Command-Line Tool

This is a command-line application that counts the occurrences of each word in a given text file and prints the word count in descending order of frequency.

## Installation

1. Clone the repository or download the source code:

    ```bash
    git clone https://github.com/nil12347/wordcount.git
    ```

2. Navigate to the project directory:

    ```bash
    cd wordcount
    ```

3. Install dependencies:
    Make sure you have Node.js installed on your system.
    ```bash
    npm install
    ```

## Usage


To use the word count tool, run the `wordcount.js` script from the command line with the path to the text file as an argument:

```bash
node .\src\wordcount.js <filepath>
```
Replace <filepath> with the actual path to the text file you want to analyze. e.g. 'D:\count.txt'

# Example
Suppose we have a text file named example.txt with the following contents:

```bash
This is a test file. This file contains some sample text. The text is used for testing purposes.
```

Run command
```bash
node wordcount.js example.txt
```
will produce the following output:
```
text: 2
this: 2
is: 1
a: 1
test: 1
file: 1
contains: 1
some: 1
sample: 1
the: 1
used: 1
for: 1
testing: 1
purposes: 1
```
# Logging

This application includes basic logging functionality to capture errors and events during execution. Errors are logged to the error.log and combined.log with detailed error messages to aid troubleshooting and debugging.

To customize logging behavior or integrate with existing logging infrastructure, you can modify the logging implementation in the wordcount.js script.

