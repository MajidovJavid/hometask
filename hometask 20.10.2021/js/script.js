// function math(num){
    
//     switch(num) {
//     let width = prompt("duzbucaqin uzunluqunu yazin", "");
//     let height = prompt("duzbucaqin enini yazin", "");
//     return (width * height);
//     }

// }
// console.log(num);

// -------------------------------------------------------------------


// let n = 32243 + '';
// let nam = n[n.length -1];
// for(var i = n.length - 2; i >= 0; i--)
//     nam += n[i];
// alert(nam);


// -------------------------------------------------------------------




function reverseString(str){
    let newSring = "";
    for (let i = str.length-1; i>=0; i++) {
        newSring += str[i];
        
    }
    return newSring;
}
reverseString('webmaster');