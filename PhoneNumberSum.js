const phoneNumber = 492531984;
let tempArray = [];

console.log(sum(phoneNumber));

function sum(number) {
    let numberArray = number.toString().match(/\d{1,2}/g)
    for (let index = 0; index < numberArray.length; index++) {
        let elementSum = numberArray[index].split('').map(Number).reduce(function (a, b) { return a + b; }, 0);
        tempArray.push(elementSum);
    }
    console.log(tempArray)
    output = tempArray;
    tempArray = [];
    if (numberArray.length > 1) {
        sum(output.join(''));
    }
    return output.join('');
}