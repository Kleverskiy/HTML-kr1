function verify() {
    console.log("a")
    let a = parseInt(elementA.value);
    console.log(a)


    if (a > 100) {
        x = 0
        check=true
    } else if ( a < 61){
        x = a
        check=true
    } else {
        x = a**4
        check=true
    }
        result = x
        document.getElementById("result").value =  result;
    
}
function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}
let result;
let check;

const elementA = document.getElementById("a");


const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);
const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send);
