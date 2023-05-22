let numbers = [10, 8, 4, 7, 2, 1] // array we're looping through to find the target

function findValue(arr, target){
    return arr.indexOf(target)
}

console.log(findValue(numbers, 10))