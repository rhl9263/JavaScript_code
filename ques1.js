
// // function uniqueMap(str){
// //     var uniqueMap= new Map();
// //     for (var i = 0; i < str.length; i++) {
// //         if(!uniqueMap.has(str[i])){
// //             uniqueMap.set(str[i],1);
// //             }else{
// //                 let count=uniqueMap.get(str[i]);
// //                 uniqueMap.set(str[i],count+1)
// //                 }
// //                 }
// //     var str1='';
// //     
// //     // uniqueMap.forEach((value, key) => {
// //     //     str1= str1+ key;
// //     // });
// //                 return str1;
// // }

// // console.log(uniqueMap("KomalKumari12324"));

// function countCharacters(str) {
//     var charCountMap = new Map();

//     for (var i = 0; i < str.length; i++) {
//         var char = str[i];
//         if (!charCountMap.has(char)) {
//             charCountMap.set(char, 1);
//         } else {
//             var count = charCountMap.get(char);
//             charCountMap.set(char, count + 1);
//         }
//     }

//     var result = '';
//     for (let [char, count] of charCountMap) {
//         result = result + char ;
//     }

//     return result;
// }

// console.log(countCharacters("KomalKumari12324"));
function moveZerosToRight(arr) {
    // Iterate through the array and move non-zero elements to the left
    let nonZeroIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            // Swap non-zero element to the left
            [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
            nonZeroIndex++;
        }
    }
    
    // Fill the remaining positions with zeros
    for (let i = nonZeroIndex; i < arr.length; i++) {
        arr[i] = 0;
    }

    return arr;
}
console.log(moveZerosToRight([0,1,2,0,3,5,4,0,5]))

