# String Character Frequency

Counts occurrences of each character in a string, preserving first appearance.

## Setup
1. Clone repository
2. `npm install`

## Run Example
`node src/charFrequency.js`

## Run Tests
`npm test`

## Assumptions
- Case-sensitive
- Spaces and special characters included
- Empty string returns empty output

## Architecture
- `src/charFrequency.js` - main logic
- `tests/charFrequency.test.js` - unit tests

## Run with custom input

```bash
node src/charFrequency.js "your text here"

## Test Evidence

The project includes:
- local Jest execution report in `test-reports/test-report.txt`
- terminal screenshots showing successful local test execution
- GitHub Actions screenshots showing successful CI runs
- uploaded CI artifact for test report

## Cross-Browser Testing

Cross-browser testing is not applicable because this project is a Node.js command-line application and does not contain a browser-based interface.