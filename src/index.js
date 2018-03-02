module.exports = function longestConsecutiveLength(array) {
  // your solution here
    if(array.length == 0){
        return 0;
    }
    array.sort((a,b) => a - b);
    let count = 1;
    let count_array = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] == array[i+1]-1){
            count++;
        } else if(array[i] != array[i+1]-1 && array[i] != array[i+1]){
            count_array.push(count);
            count = 1;
        }
    }
    let max = count_array[0];
    for(let i = 0; i < count_array.length; i++){
        if(count_array[i] > max){
            max = count_array[i];
        }
    }
    return max;
}

