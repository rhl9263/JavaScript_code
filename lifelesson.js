//  5 4 3 2 1 1 2 3 4 5 
//  5 4 3 2     2 3 4 5 
//  5 4 3         3 4 5 
//  5 4             4 5 
//  5                 5 

// *
// **
// *** 
// ****
// *****

// ABCabcaabb234
var str1="ABCabcaabb234";
var arr1= str1.split("");
console.log(arr1);
var arrnew=[];
var sum=0;
var count=0;
var result="";
for(let i=0;i<arr1.length;i++){
    //if(arr1[i]=="0"||arr1[i]=="1"||arr1[i]=="2"||arr1[i]=="3"||arr1[i]=="4"||arr1[i]=="5"||arr1[i]=="6"||arr1[i]=="7"||arr1[i]=="8"||arr1[i]=="9"){
        if(/\d/.test(arr1[i])){
        sum=sum+ parseInt(arr1[i]);
}
    else{
        arrnew.push(arr1[i]);
    }
}
console.log(arrnew);

for(let j=0;j< arrnew.length;j++){
    count=1;

    if(result.includes(arrnew[j]))
    {
        //skip
    }
    else
    {result= result+arrnew[j];
    // console.log(result);
    for(let k=j+1;k<arrnew.length;k++){
        if(arrnew[j]==arrnew[k]){
            count++;
            // arrnew= arrnew.splice(k,0,"_");
            // arrnew.remove(arrnew[j]);
        }
        // result= result+arrnew[j]+count;
    }
    result= result+ count;
    // console.log(result);}
    
}
}
result=result+sum;
console.log(result);

