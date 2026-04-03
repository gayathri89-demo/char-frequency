// Function to count character frequency in a string
function countCharacterFrequency(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    const frequencyMap = new Map();

    for (const char of input) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }

    // Convert Map to string like "h:1, e:1, l:3, ..."
    return Array.from(frequencyMap.entries())
        .map(([char, count]) => `${char}:${count}`)
        .join(', ');
}

// Export for use in tests or CLI
export default { countCharacterFrequency };

// Optional CLI example
if (require.main === module) {
    const input = "hello world";
    console.log(countCharacterFrequency(input));
}

if (require.main === module) {
    const input = "hello world";
    console.log(countCharacterFrequency(input));
}