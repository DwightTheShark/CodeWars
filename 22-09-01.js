// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

const order = words => {
    const findNumber = words.match(/[1-9]/g);
    const arrayWords = words.split(' ');
    let result = [];
    if (words.length === 0) return words;
    
    arrayWords.map((item, i) => {}
      const index = findNumber.indexOf(i+1));
      result.push(arrayWords[index]);
    };
    return result.join(' ');
  

//I didn't actually get this solution, but this one is much more clever
function order(words){
  
    return words.split(' ').sort(function(a,b){
      return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
  }