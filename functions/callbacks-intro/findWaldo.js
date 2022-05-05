const findWaldo = function(names, found) {
  names.forEach(function (name, index) {
    if (name === "Waldo") {
      found(index);
    }
  });
}

//const actionWhenFound = function(index) {

//console.log(`Found Waldo at index ${index}!`);
//}

//findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

findWaldo(["Alice", "Bob", "Waldo", "Winston"], index => console.log(`Found Waldo at index ${index}!`));