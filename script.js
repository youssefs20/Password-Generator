const empty="";
const uCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase="abcdefghigklmnopqrstuvwxyz";
const number="0123456789";
const symbol="!@$%^&*_-";

const pLength= document.getElementById("p-length");
const upperCase= document.getElementById("p-uppercase");
const lowerCase= document.getElementById("p-lowercase");
const pNumber= document.getElementById("p-number");
const pSymbol= document.getElementById("p-symbol");
const submit= document.getElementById("submit");
const password= document.getElementById("password");

submit.addEventListener("click", ()=>{
    let initailPassword= empty;
    (upperCase.checked) ? initailPassword += uCase : "";
    (lowerCase.checked) ? initailPassword += lCase : "";
    (pNumber.checked) ? initailPassword += number : "";
    (pSymbol.checked) ? initailPassword += symbol : "";

    password.value = generatePassword(pLength.value,
    initailPassword)
});

function generatePassword(l, initailPassword){
    let pass="";
    for(let i = 0; i < l; i++){
        pass += initailPassword.charAt(Math.floor(Math.
        random()* initailPassword.length))
    }
    return pass;
}

//copy

const copy = document.getElementById("copy");

copy.addEventListener("click",() =>{
    if(password.value == ""){
        alert("please generate a password")
    }else{
        password.select();
        document.execCommand("copy");
        alert("copied");
    }
});


