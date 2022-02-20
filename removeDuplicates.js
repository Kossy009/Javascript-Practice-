/*Create and array of your choice of length and elements then write a 
JavaScript program to remove duplicate items from an array.*/

const array = [0, 3, 1, 3, 5, 1, 8, 7]
const noDuplicates = []

for(let i of array){
    if(noDuplicates.indexOf(i) === -1){
        noDuplicates.push(i)
    }
}
console.log(noDuplicates)