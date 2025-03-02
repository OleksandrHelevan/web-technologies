function sumOfFifty() {
    let i = 1;
    let sum = 0;
    while (i <= 50) {
        sum += i;
        i++;
    }
    return sum;
}

function factorial(number) {
    if (number === 0)
        return 1;
    let res = 1;
    for (let i = 1; i <= number; i++) {
        res *= i;
    }
    return res;
}

function determineMonth(month) {
    switch (month) {
        case 1:
            return 'January';
        case 2:
            return 'February';
        case 3:
            return 'March';
        case 4:
            return 'April';
        case 5:
            return 'May';
        case 6:
            return 'June';
        case 7:
            return 'July';
        case 8:
            return 'August';
        case 9:
            return 'September';
        case 10:
            return 'October';
        case 11:
            return 'November';
        case 12:
            return 'December';
        default:
            return 'ERROR';
    }
}

function sumOfEven(numbers) {
    let res = 0;
    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            res += numbers[i];
        }
    }
    return res;
}

function pow(base, exponent) {
    let res = base
    for (let i = 1; i < exponent; i++) {
        res *= base;
    }
    return res;
}

console.log("1: " + sumOfFifty());

let num = prompt("Enter number for calculating factorial");
console.log("2: " + factorial(num));

let month = prompt("Enter number of month");
console.log("3: " + determineMonth(parseInt(month)));

let array = [1, 2, 3, 4, 5, 6];
console.log("4: " + sumOfEven(array));
let word = "Олександр";

const numberOfVowels = (str) => {
    const vowels = ['А', 'О', 'Е', 'И', 'У', 'І', 'а', 'о', 'е', 'и', 'у', 'і'];
    return str.split("").filter(char => vowels.includes(char)).length;
};

console.log("5: " + numberOfVowels(word));

console.log("6: " + pow(4, 3));