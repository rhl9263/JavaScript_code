// function removeusingSet(arr) {
//     let outputArray = Array.from(new Set(arr))
//     return outputArray
// }
var threeSum = function(nums) {
    var newArr=new Map();
    for(let i=0; i<=nums.length-1; i++){
        for(let j=i+1; j< nums.length; j++){
            newArr.set([i,j], nums[i]+nums[j]);
        }
    }
    // console.log(newArr)
     var twoSum = new Map();
     var target= 0;
     var indexArray=new Set();
     
     for (let [key, value] of newArr){ 
         var compliment= 0 - value
         for (let x=0; x< nums.length-1; x++){
            if (compliment == nums[x] && (x!= key[0] && x!= key[1] )){
                var temp = [nums[key[0]],nums[key[1]],nums[x]].sort().join(",")
                indexArray.add(temp);
            }
         }
        
     }   
    //  console.log(indexArray);
     console.log(indexArray);
     

    //  for(let y= 0; y< indexArray.length-1; y++){
    //     if(indexArray[y][0]== && indexArray[y][1]== && indexArray[y][2]==)
    //  }
    
 };
 console.log(threeSum([-1,0,1,2,-1,-4]));