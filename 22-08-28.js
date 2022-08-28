// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
//set out all the vowels in every case
    let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
//make a new array that is the string  split into each letter
    let arr = str.split('')
//make a new empty array
    let newArr = []
//iterate through the single letter arrar
    for (let i = 0; i < arr.length; i++) {
//if something isn't a vowel
        if (!vowel.includes(arr[i])) {
//put it in the new array
            newArr.push(arr[i])
      }
    }
//give back the new array joined together
    return newArr.join('')
  }