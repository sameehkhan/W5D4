Array.prototype.bubbleSort = function (){
  var sorted = true; 
  while (sorted) {
    sorted = false;
    
    for(var i = 0; i < this.length -1; i++) {
        var num =  this[i];
        var nextNum =  this[i+1];
        
        if (num > nextNum) {
          this[i] = nextNum;
          this[i + 1] = num;
          sorted = true;
        }
    }
  }
  return this;
};

// [4, 3, 2, 6, 9, 8].bubbleSort();

Array.prototype.bubbleSort = function () {
  
}
