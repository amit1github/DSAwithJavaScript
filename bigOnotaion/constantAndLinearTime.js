// about big O basics like linear time and constant time.

// ---------- CONSTANT TIME ----------------

const nemo = ['nemo']

const everyone = ['cow', 'cat', 'dog', 'rat']

const large = new Array(100).fill('nemo')  // filling array

function findNemo(array){
  let t0 = performance.now()
  for(let i=0; i < array.length; i++) {
    if(array[i] === 'nemo'){
    console.log("Found nemo")
    } 
  }
  let t1 = performance.now()
  console.log('time taken for this execution is ' + (t1-t0) + ' milliseconds')
}

findNemo(large) // O(n) --> Linear Time

// ---------- LINEAR TIME ----------------

const boxes = [0, 1, 2, 3, 4, 5]

function logFirstTwoBoxes() {
  console.log(boxes[0]) // O(1) --> constant time
  console.log(boxes[1]) // O(1) --> constant time
}

logFirstTwoBoxes(boxes)