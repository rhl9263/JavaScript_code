var restart= (index) => {
    console.log("restart");
    index--;
    if(-1){
        restart(index);
    }
}
restart(5);