//  5 4 3 2 1 1 2 3 4 5 
//  5 4 3 2     2 3 4 5 
//  5 4 3         3 4 5 
//  5 4             4 5 
//  5                 5 

var pattern=5;
var m= 2*pattern;
var n= pattern;
var p= 0;
var output="";
for(let i=0;i<pattern;i++){
    output="";
    for(let j=0;j<m+1;j++){
        if(Math.abs(n-j)==0){}
        else{
                output=output+ Math.abs(n-j);
        }
    }
    for(let k=1; k<=i;k++){
        //let result = text.replace(/blue/g, "red");
        output=output.replace(k," ");
        output=output.replace(k," ");
    }
    console.log(output);

}