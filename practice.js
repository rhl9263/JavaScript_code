function printPattern(rows) {
    let num = 1;
    for (let i = 1; i <= rows; i++) {
        let line = "";
        // when odd line, append new integer in front. prefix add
        if (i % 2 !== 0) {
            for (let j = 1; j <= i; j++) {
                line = num + " " + line;
                num++;
            }
        }
        // when even line correct flow of number
        else {
            let temp = num + i - 1;
            for (let j = 1; j <= i; j++) {
                line = temp + " " + line;
                temp--;
                num++;
            }
        }
        console.log(line);
    }
}

// Call the function with the number of rows
printPattern(1);
// time complexity o(n^2) as we are using nested loops