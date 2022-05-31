function quicksort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    var pivot = array[0];
    
    var left = []; 
    var right = [];
  
    for (var i = 1; i < array.length; i++) {
      array[i]["product-name"] < pivot["product-name"] ? left.push(array[i]) : right.push(array[i]);
    }
  
    return quicksort(left).concat(pivot, quicksort(right));
  };
  
  // var unsorted = [
  //   {
  //     '_id': "62957301f5a0025fa2e976ae",     
  //     'product-name': 'monitor',
  //     'product-description': 'A high resolution monitor',
  //     'quantity': 2
  //   },
  //   {
  //     '_id': "629573e4f5a0025fa2e976af",
  //     'product-name': 'keyboard',
  //     'product-description': 'A mechanical keyboard',
  //     'quantity': 1
  //   },
  //   {
  //     '_id': "629573e4f5a0025fa2e976b0",
  //     'product-name': 'mouse',
  //     'product-description': 'A laser mouse',
  //     'quantity': 1
  //   }
  // ];
  // var sorted = quicksort(unsorted);
  
  // console.log('Sorted array', sorted);

  module.exports = {quicksort}