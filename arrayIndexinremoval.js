/*## Release 0
Write a JavaScript program which return the first element of an array which 
have 5 elements by removing in different ways.*/
const array = [4, 6, 8, 9, 10]
const firstEl = arr => console.log(`The first Element is ${arr[0]}\n`)

const removeElFromBack = arr =>{
    const removed = arr.pop();
    console.log(`The Element removed is ${removed}
    Array is ${arr}\n`);
}

const removeFromFront = arr => {
    const removed = arr.shift();
    console.log(`The element removed from the front is ${removed}
    Array is ${arr}`)
}

firstEl(array)
removeElFromBack(array)
removeFromFront(array)


