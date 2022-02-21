const findEven = array => {
    let newArray = array.filter(x => x % 2 == 0)
    return newArray
}

let numbers = [1,2,3,4,5,6,7,8,9,10]
console.log(findEven(numbers));

/*
const findEven = array = {
    let newArray = []
    for(let x of array){
        if(x % 2 === 0)
            newArray.push(x)
    }
    return newArray
}
*/