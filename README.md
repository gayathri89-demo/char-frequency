# String Character Frequency

# Overview

This project is a Node.js application that counts the occurrences of each character in a string while preserving the order of first appearance.

# Example

Input: hello world
Output: h:1, e:1, l:3, o:2, :1, w:1, r:1, d:1


---

# Features

- Counts all characters (letters, spaces, special characters)
- Maintains order of first appearance
- Case-sensitive handling
- CLI support for dynamic input
- Unit testing using Jest
- CI/CD integration using GitHub Actions
- Test report generation for validation

---

## Project Structure
char-frequency/
├─ src/
│ └─ charFrequency.js
├─ tests/
│ └─ charFrequency.test.js
├─ test-reports/
│ └─ test-report.txt
├─ .github/
│ └─ workflows/
│ └─ ci.yml
├─ package.json
├─ package-lock.json
├─ README.md

# Setup
1. Clone the repository

git clone https://github.com/your-username/char-frequency.git
cd char-frequency

2. Install dependencies 
`npm install`


---

# Usage

# Run with custom input (CLI)
node src/charFrequency.js "your text here"

# Run with external file input
node src/charFrequency.js

When no CLI input is provided, input is read from:
src/data/input.txt

# Example

node src/charFrequency.js "hello world"
Output: h:1, e:1, l:3, o:2, :1, w:1, r:1, d:1

# Expected Output
Test Suites: 1 passed, 1 total
Tests: 5 passed, 5 total

# Generate Test Report

# Windows Command Prompt
npx jest --verbose > test-reports\test-report.txt 2>&1

# Run Tests
`npm test`

# Assumptions
- Case-sensitive
- Spaces and special characters included
- Empty string returns empty output

# Architecture
- `src/charFrequency.js` - main logic
- `tests/charFrequency.test.js` - unit tests

# Test Evidence

This project includes:

Local test report (test-reports/test-report.txt)
CLI execution examples
GitHub Actions workflow logs
CI artifact uploads

# Cross-Browser Testing

Cross-browser testing is not applicable because this project is a Node.js CLI application and does not involve browser-based UI.

# CI/CD (GitHub Actions)

This project uses GitHub Actions to automate testing.

# Workflow Features

- Runs on push and pull request
- Tests on multiple Node versions (18, 20)
- Executes Jest tests
- Generates test report
- Uploads report as artifact

# Sample Workflow Step

```yaml
- name: Run tests
  run: npm test

### CLI Execution in CI
- name: Run CLI example
  run: node src/charFrequency.js "hello world"

### Artifact Upload Fix

name: test-report-${{ matrix.node-version }}