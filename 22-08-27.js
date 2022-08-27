// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    //tell the computer what the complete alphabet is that we're looking for
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    //get rid of all the uppercase letters
    const str = string.toLowerCase();
    //loop through the alphabet
    for (let i = 0; i < alphabet.length-1; i += 1) {
      //check for each letter
        if (str.indexOf(alphabet[i]) === -1) {
        //if it's not there return false
            return false;
      }
    }
    //if every letter is there return true
    return true;
  }