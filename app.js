let typedNumber;
let finalOTP;
let intervalId; // Define intervalId outside of the function to make it accessible globally

const otpExpireElement = document.getElementById('otp-expire-id');

function expireOtp() {
    const totalTime = 15000;
    const interval = 1000;
    let slice = totalTime / interval;

    intervalId = setInterval(function () {
        otpExpireElement.innerText = `OTP will Expire in ${slice} seconds`;
        slice = slice - 1;
    }, interval);

    setTimeout(function () {
        otpExpireElement.innerText = "OTP Expired";
        generateOTP();
    }, totalTime);
}



// Example usage of stopExpireOtp when final OTP is correctly typed
if (finalOTP === typedNumber) {
    stopExpireOtp();
}

function tackleBoxes(){
    const boxes = document.getElementById("otp-box-list-id");
    boxes.addEventListener('input', function(maria){
        const target = maria.target;
        const value = target.value;

        if(isNaN(value)){
            target.value = "";
            return;
        }
        const nextElement= target.nextElementSibling;

        if (nextElement){
            nextElement.focus();
        }
        validatedOTP()
    })
}


    tackleBoxes();

    function generateOTP(){
        finalOTP = Math.floor( 1000+ Math.random() * 9000);
        const showOTP = document.getElementById('generated-otp-id');

        showOTP.innerText = `Your OTP: ${finalOTP}`;
        expireOtp();
        otpGenerated = true;

        
    }
    function stopExpireOtp() {
        clearInterval(intervalId);
    }
    setTimeout(generateOTP, 3000);

    function validatedOTP(){
         typedNumber = "";
        const boxListElement = document.getElementById("otp-box-list-id");
        [...boxListElement.children].forEach((element)=> {
            typedNumber = typedNumber + element.value;
        });

        const result = finalOTP=== parseInt(typedNumber, 10)
        const showResult = document.getElementById('result-id');

        if (result){
            showResult.innerText = "OTP has been Validated Successfully"
            showResult.classList.remove('fail');
            showResult.classList.add('success');
        }
        else{
            showResult.innerText = "You Enterd Wrong OTP, Try Again"
            showResult.classList.remove('success');
            showResult.classList.add('fail');
        }
        console.log(typedNumber);
    }
    