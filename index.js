/*
Convert decimal to binary
formula:

    binary = decimal * 2^0
    binary = decimal * 2^1
    binary = decimal * 2^2
    binary = decimal * 2^3

*/
function decimalToBinary(decimal) {
    var binary = "";
    while (decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
    }
    return binary;
}


/*
Convert binary to decimal
formula:
    binary * 2^position[0~...] = result -> sum all results 

    binary = 10011011 -> decimal = 155
*/
function binaryStrToDecimal(str) {
    var decimal = 0;
    var position = 0;
    for (var i = str.length - 1; i >= 0; i--) {
        decimal += parseInt(str[i]) * Math.pow(2, position);
        position++;
    }
    return decimal;
}


//Test
let binary = decimalToBinary(10)
console.log(binary)
let decimal = binaryStrToDecimal(binary)
console.log(decimal)
