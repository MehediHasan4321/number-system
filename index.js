window.onload = ()=>{
    main()
}

function main (){
const inputField = document.getElementById("valu-input");
const displayBinaryInput = document.getElementById("display-binary-input");
const displayHexadecimalInput = document.getElementById("display-hexadecimal-input");
const displayOctalInput = document.getElementById("display-octal-input");
const displayDecimalInput = document.getElementById("display-decimal-input");


inputField.addEventListener("keypress",function(e){
    if(e.keyCode ===13){
        var value = e.target.value;
        value = Number(value)
        displayDecimalInput.value = generateDecimalCode(value)
        displayBinaryInput.value= gelerateBinaryCode(value)
        displayHexadecimalInput.value = generateHexadecimalCode(value).toUpperCase();
        displayOctalInput.value = generateOctalCode(value);
        e.target.value = ''
    }
})
}

function generateDecimalCode(num){
    return num.toString(10)
}
function gelerateBinaryCode(num){

    return num.toString(2)
}

function generateHexadecimalCode (num){
    return num.toString(16);
}
function generateOctalCode (num){
    return num.toString(8)
}