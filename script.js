const add = function(a, b) {
    return a + b;
  };
  
  const subtract = function(a, b) {
    return a - b;
  };
  
  const sum = function(array) {
    return array.reduce(
      (total, current) => {
        return total + current;
      },
    0)
  };
  
  const multiply = function(array) {
    return array.reduce(
      (total, current) => {
        return total * current;
      },
    1)
  };

  const operate = function(a, b) {
    
  }