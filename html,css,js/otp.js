const form = document.getElementById("form")
const output = document.getElementById("output")
const otpInput = document.getElementById("otpinput")
const otpbox = document.getElementById("otpBox")
const submit_btn = document.getElementById("sub-btn")
const reload_btn = document.getElementById("reload-btn") 
let otp = null;
function genOtp(){
    otp = Math.floor(Math.random()*1000000)
    console.log(otp)
    otpbox.textContent = `your otp is ${otp}`
    reload_btn.style.display = "none"

}

form.addEventListener("submit", function (event){
    event.preventDefault();
    const inputVlue = otpInput.value;
    if(inputVlue.length != 6 || isNaN(inputVlue)){
        output.textContent = "there should be 6 numbers"
        return;
    }
    reload_btn.style.display = "flex"
    submit_btn.style.display = "none"

    if(inputVlue == otp){
        output.textContent ="otp is correct"
        output.style.color="green"
    }else{
        output.textContent=`invalid otp, you put ${inputVlue} but the otp was ${otp}`
        output.style.color="red"
    }
})


function reloadPage(){
    
}
genOtp()