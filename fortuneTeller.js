/*Store the following into variables: number of children, partner's name, 
geographic location, job title. Output your fortune to the screen like so: 
"You will be a X in Y, and married to Z with N kids."*/

function fortuneTeller(noOfChildren, partnerName,location, jobTitle){
    return `My fortune: 
    I'll be a ${jobTitle} in ${location}, and married to ${partnerName} 
    with ${noOfChildren} kids.`
}

let result = fortuneTeller(7, "Somke", "Canada", "Developer");
console.log(result)