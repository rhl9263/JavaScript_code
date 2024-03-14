var nums= [0,1,2,3,4,5] 

    var low= 0;
    var high= nums.length-1
    var mid= Math.floor((low+ high)/2);
    var lastArrayNumber = nums[high];
    var firstArrayNumber = nums[low];
    var midArrayNumber = nums[mid];
    while(low < high){ //[4,0,1,2]
        var mid= Math.floor((low+ high)/2);
        if (midArrayNumber > lastArrayNumber) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    var startIndex= low;
    console.log(startIndex);