 //counting number of times each character appears in a string

 var removeSpace = word.replace(/\s/g, '');
    console.log(removeSpace);

    var letterCount = {};

    for (var i = 0; i < removeSpace.length; i++) {
        
        var charIndex = removeSpace.charAt(i);

        if (letterCount[charIndex]) {
            letterCount[charIndex]++;
        } else {
            letterCount[charIndex] = 1;
        }
    }
    console.log(letterCount);
}

countLetters('light house happy blah');