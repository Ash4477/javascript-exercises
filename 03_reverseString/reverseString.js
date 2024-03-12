const reverseString = function(word) {
    let revWord = "";

    for (let i = 0; i < word.length(); i++) {
        revWord += word.charAt(i);
    }

    return revWord;
};

// Do not edit below this line
module.exports = reverseString;
