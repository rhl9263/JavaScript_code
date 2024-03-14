var name= 'pari'
var geeks = {
    name : "ABC",
    printFunc: function(){
       console.log(this.name);}
       }
       
    var printFunc2= geeks.printFunc;
    printFunc2();