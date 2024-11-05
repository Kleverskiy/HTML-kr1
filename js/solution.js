function verify() {
    console.log("a")
    let a = parseInt(elementA.innerText);
    console.log(a)


    if (a > 100) {
        x = 0
    } else if ( a < 61){
        x = a
    } else {
        x = a**4
    }
        result = x
        document.getElementById("result").innerText =  result;
    
}

const elementA = document.getElementById("a");


const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);
