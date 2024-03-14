

// map1.set('a', 1);
// map1.set('b', 2);
// map1.set('c', 3);
var str1="ABCabcaabb234";
var arr1= str1.split("");
console.log(arr1);
var arrnew=[];
var sum=0;
var count=0;
var result="";
for(let i=0;i<arr1.length;i++){
    if(arr1[i]=="0"||arr1[i]=="1"||arr1[i]=="2"||arr1[i]=="3"||arr1[i]=="4"||arr1[i]=="5"||arr1[i]=="6"||arr1[i]=="7"||arr1[i]=="8"||arr1[i]=="9"){
        sum=sum+ parseInt(arr1[i]);
}
    else{
        arrnew.push(arr1[i]);
    }
}
str1= arrnew.join("");
var output = "";

var info = {};

for (var i = 0; i < str1.length; i++) {
    var char = str1[i];
    info[char] = info[char] || { count: 0, order: i };
    info[char].count++;
}

for (var i = 0; i < str1.length; i++) {
    var char = str1[i];
    if (info[char].count > 0) {
        output += char + info[char].count;
        info[char].count = 0;
    }
}
output=output+sum;
console.log(output);

