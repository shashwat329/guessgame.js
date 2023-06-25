let guess = prompt('guess any number');
let x = Math.floor((Math.random() * 100) + 1);
console.log(x);
for (i = 4; i > 0; i--) {
    if (x == guess) {
        alert("you guess right!");
        break;
    }
    else {
        guess = prompt(`you have only ${i} attempts left `);

    }

}
if(i==0){
    alert("game over!!");
}
