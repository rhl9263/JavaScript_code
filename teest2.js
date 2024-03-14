var pattern = 5;
var m = 2 * pattern;
var n = pattern;

for (let i = 0; i < pattern; i++) {
    let output = "";

    for (let j = 1; j <= m; j++) {
        if (Math.abs(n - j) === 0) {
            output += Math.abs(n - j);
        } else {
            output += " ";
        }
    }

    console.log(output);
    n--;
}
