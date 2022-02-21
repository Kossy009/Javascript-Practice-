/*Want to find out how old you'll be? Calculate it!
Store your birth year in a variable.
Store a future year in a variable.
Calculate your 2 possible ages for that year based on the stored values.*/

function checkFutureAge (birthYear, futureYear){
    let futureAge = futureYear - birthYear;
    console.log(`
    I'll be either ${futureAge - 1} or ${futureAge} in ${futureYear}.\n`)
}
checkFutureAge(1993, 2022);