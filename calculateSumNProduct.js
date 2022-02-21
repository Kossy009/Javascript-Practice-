/*Create an array of your choice of length and elements then write a 
JavaScript program to compute the sum and product of an array of integers.*/

let total = 0 
let product = 1
const calcSum = arr => {
    for(let x of arr){
        total += x;
    }
    console.log(total);
    return total; 
}
const calcProduct = arr => {
    for(let x of arr){
        product *= x;
    }
    console.log(product);
    return product;
}
const numbers = [2, 5, 8, 6, 3, 7, 2, 4, 1, 3];
calcSum(numbers);
calcProduct(numbers);