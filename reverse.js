// var reverse = (str1) => {
//     let str=str1.split("");  //convert string to array
//     for( let i=0; i<str.length/2; i++){
//         // let temp = str[i];
//         str[i]= str[str.length-1-i]+ str[i];
//         str[str.length-1-i] = str[i].splice(1);
//     }
//     return  str.join("");
// }
// console.log(reverse("hello, world!!")); //olleh
var reverse = (str) => {
    let charArray = str.split(''); // Convert string to an array of characters
    let length = charArray.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        // XOR swap without using a temporary variable
        charArray[i] = charArray[i] ^ charArray[length - 1 - i];
        charArray[length - 1 - i] = charArray[i] ^ charArray[length - 1 - i];
        charArray[i] = charArray[i] ^ charArray[length - 1 - i];
    }
    return charArray.join(''); // Convert the reversed array back to a string
}

console.log(reverse("hello")); // Output: olleh
