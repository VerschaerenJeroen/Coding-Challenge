const phoneNumber = 492531984;

console.log(sum(phoneNumber));

function sum(number) {
    let tempArray = [];
    let numberArray = number.toString().match(/\d{1,2}/g)
    for (let index = 0; index < numberArray.length; index++) {
        let elementSum = numberArray[index].split('').map(Number).reduce(function (a, b) { return a + b; }, 0);
        tempArray.push(elementSum);
    }
    console.log(tempArray)
    if (numberArray.length > 1) {
        sum(tempArray.join(''));
    }
    return tempArray.join('');
}