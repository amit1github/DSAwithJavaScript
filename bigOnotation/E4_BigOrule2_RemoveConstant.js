// Print first item then first half then say hi 100 times.

// RULE 2: remove  constants


function problem(items) {
  console.log(items[0]);

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (var i = 0; i < 100; i++) {
    console.log("hi");
  }
}

//We are ignoring variable assignments and small calculations for this example

// problem(items)

// BIG O(1 + n/2 + 100)
// BIG O(n/2 + 101)
// BIG O(n/2 + 101)
// BIG O(n + 1)
