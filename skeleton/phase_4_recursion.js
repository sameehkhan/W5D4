function range(start, end) {
  var arr = [];
  
  if (start === end) {
    return arr;
  }
  
  range(start+1, end);
}