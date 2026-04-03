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

// Optional CLI
if (require.main === module) {
    const input = "hello world";
    console.log(countCharacterFrequency(input));
}