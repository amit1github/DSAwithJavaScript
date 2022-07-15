// solving a first problem solution: Numbers of BIG O in program

// What is the Big O of the below function? (Hint, you may want to go line by line)

function funChallenge(input) {
    let a = 10;  // O(1)
    a = 50 + 3; // O(1)
  
    for (let i = 0; i < input.length; i++) { // O(n)
      anotherFunction(); // O(n)
      let stranger = true; // O(n)
      a++; // O(n)
    }
    return a; // O(1)
  }
  
  
  // ans: 3* O(1) +  4 * O(n)
  // BIG O(3 + 4n)