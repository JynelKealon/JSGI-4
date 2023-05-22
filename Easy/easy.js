let numArr = [2, 4, 6, 8]

function findAverage(x){
    let sum = 0
    for(i = 0; i < x.length; i++){
        sum += x[i];
    }
    return sum / x.length
}
console.log(findAverage(numArr))