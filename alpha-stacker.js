console.log("Hello World!");

// Create an array that contains the letters of the alphabet
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w","x","y","z"];

// The stackLetter function should accept the array as the sole argument
function stackLetters (theAlphabetArray) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the letters.
     */
     for (i = 0; i < alphabet.length; i ++) {
    	stackLetters += alphabet[i];
}

// Invoke the function and pass in the array
stackLetters(alphabet);