var binarySearch =(arr, target)=>{
    var low = 0;
    var high = arr.length -1;
    var mid = Math.floor( (low + high)/2);
    // console.log(low, mid, high);
    while(low<high){
        if(target === arr[mid]){
            return mid; // found the number
    }
    else if(target< arr[mid]){
        high= mid-1;
    }
    else {   
        low= mid+1;
        
    }

}
 return -1; 
}
console.log(binarySearch([0,3,5], 1));

