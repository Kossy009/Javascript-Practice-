/*Create and array of your choice of length and elements then write a 
JavaScript program to remove duplicate items from an array.*/

const array = [0, 3, 1, 3, 5, 1, 8, 7]
const noDuplicates = []
const result = removeDuplicates(array, noDuplicates)
console.log(result)

function removeDuplicates(arr1, newArr){
    for(let i of arr1){
        if(newArr.indexOf(i) === -1){
            newArr.push(i)
        }
    }
    return newArr
}

