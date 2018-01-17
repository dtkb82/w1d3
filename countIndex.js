//pushing the index of each character in a string to an array. 

function countLetters(word) {

    var removeSpace = word.replace(/\s/g, '');
    console.log(removeSpace);

    var letterCount = {};

    for (var i = 0; i < removeSpace.length; i++) {
        
        var charIndex = removeSpace.charAt(i);

        if (letterCount[charIndex]) {
            letterCount[charIndex].push(i)
        } else {
            letterCount[charIndex] = [i]
            
        }
    }
    console.log(letterCount);
}

countLetters('lighthouse in the house');