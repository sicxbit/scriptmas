/*  Santas Emoji Hack!

During Christmas, Santa wants to ban negative emojis, so when people
use negative emoji shortcodes, he wants positive emojis to appear instead.

In other words, :angry: should result in 🎁 instead of 😠.


*/

const hackedEmojis = {
    "angry":            "🎁",   // 😠
    "thumbsdown":       "👏",   // 👎  
    "man_facepalming":  "🎅",   // 🤦‍♂️
    "cry":              "‍😄",   // 😭
    "puke":             "🤩"    // 🤮
}


/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, check if it exists in the hackedEmojis object, 
and replace it with the corresponding emoji. If not, return the original word.


Example input: ":cry:"
Example output: ‍😄

*/ 
function emojifyWord(word){
    if (word.startsWith(':') && word.endsWith(":")){
        const shortCode = word.slice(1,-1);
        return hackedEmojis[shortCode] || word
    } else {
        return word
    }
}

console.log(emojifyWord(":angry:"));


/* 2. Write a function to find any emoji shortcodes in a phrase.
Use your emojify function from the previous exercise!

Example input: "Just read your article :thumbsdown:"
Example output: "Just read your article 👏"
*/ 

function emojifyPhrase(phrase){
    const words = phrase.split(' ');
    const emojifiedWords = words.map(emojifyWord);
    return emojifiedWords.join(' ');
}

console.log(emojifyPhrase("Those shoes :puke:"));


// Stretch goal: don't just replace the shortcodes, but also 
// any emojis are added directly to the text.

function emojifyEverything (phrase) {
    const words = phrase.split(' ');
    const emojifiedwords = words.map( word => {
        if (word.startsWith(':') && word.endsWith(':')) {
            return emojifyWord(word)
        }else {
            return emojifyTheWord(word)
        }
    })
    return emojifiedwords.join(' ');
}

function emojifyTheWord(word) {
    return hackedEmojis[word.toLowerCase()] || word
}

// to check 
console.log(emojifyEverything("i should cry and puke angry"));