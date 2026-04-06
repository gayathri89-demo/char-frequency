const fs = require('fs');
const path = require('path');
function countCharacterFrequency(input) {
    if (typeof input !== 'string') throw new TypeError('Input must be a string');

    const frequencyMap = new Map();
    for (const char of input) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }

    return Array.from(frequencyMap.entries())
        .map(([char, count]) => `${char}:${count}`)
        .join(', ');
}

module.exports = { countCharacterFrequency }; // CommonJS export


// ✅ CLI logic with external file fallback
if (require.main === module) {
    let input = process.argv.slice(2).join(' ');

    if (!input) {
        const filePath = path.join(__dirname, 'data', 'input.txt');
        input = fs.readFileSync(filePath, 'utf8').trim();
    }

    console.log(countCharacterFrequency(input));
}

