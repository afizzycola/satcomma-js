const choiceOfDelimiters = [",", "'", " ", "-", "_"];

export function getRandomDelimiter () {
    return choiceOfDelimiters[Math.floor(Math.random() * choiceOfDelimiters.length)];
}