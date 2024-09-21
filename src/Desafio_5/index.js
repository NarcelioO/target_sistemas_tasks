
function invertString(string){
    let invertedString = ""
    for(let i = string.length; i >= 0 ;i--){
        invertedString += string.charAt(i)
    }
    console.log(invertedString)
}
invertString("narcelio")
