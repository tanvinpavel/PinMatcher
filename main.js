  function btnDisabled(){
    validatePin.disabled = true;
    validatePin.style.backgroundColor = "gray";
    validatePin.style.border = 0;
  }

  let validatePin = document.getElementById("validatePin");
  var autoGeneratePin = document.getElementById("pin").value;
  btnDisabled();
  //auto pin generator
  const submitButton = document.getElementById("PG_submit");
  submitButton.addEventListener("click", function () {
    validatePin.disabled = false;
    validatePin.style.backgroundColor = "#28a745";
    validatePin.style.border = "auto";

    var digit = '';
    for(var i=1; i<=4; i++){
      var num = Math.random();
      num = num*9;
      var num = Math.ceil(num);
      digit+=num;
    }
    document.getElementById("pin").value = digit;
  });

  //make the digit button functional
  let digit = document.getElementsByClassName("cus-btn");
  for (let i = 0; i < digit.length; i++) {
    digit[i].addEventListener("click", function () {
      showDigit(digit[i].innerText);
    });
  }

  //show user input number on display
  function showDigit(num) {
    var targeInput = document.getElementById("typeDigit");
    var currentValue = targeInput.value;
    fullNumber = String(num);
    targeInput.value = currentValue + fullNumber;
  }

  // < button function
  var deleteBtn = document.getElementById("delete");
  deleteBtn.addEventListener("click", function () {
    var currentDigit = document.getElementById("typeDigit").value;
    var lastDigitIndex = currentDigit.length - 1;
    var lastDigit = currentDigit[lastDigitIndex];
    var newDigit = currentDigit.replace(lastDigit, "");
    document.getElementById("typeDigit").value = newDigit;
  });

  // c button function
  var resetBtn = document.getElementById("reset");
  resetBtn.addEventListener("click", function () {
    document.getElementById("typeDigit").value = "";
  });

  //comparing pin
  validatePin.addEventListener("click", function () {
    var userDialPin = document.getElementById("typeDigit").value;
    var autoGeneratePin = document.getElementById("pin").value;
    if(userDialPin == ''){
      alert('Give the pin below')
    }else{
      var userDialPin = document.getElementById("typeDigit").value;
      var autoGeneratePin = document.getElementById("pin").value;            
      //how many step left
      var limit = document.getElementById("step").innerText;

      if (limit >= 1) {
        console.log(autoGeneratePin);
        if (autoGeneratePin == userDialPin && autoGeneratePin != '' && userDialPin != '') {
          document.getElementById("failed").style.display = "none";
          document.getElementById("success").style.display = "block";
          setTimeout(function(){
            document.getElementById("success").style.display = "none"
          } ,2000);
        } else if (autoGeneratePin != userDialPin && autoGeneratePin != '' && userDialPin != '') {
          document.getElementById("success").style.display = "none";
          document.getElementById("failed").style.display = "block";
          setTimeout(function(){
            document.getElementById("failed").style.display = "none"
          } ,2000);
        }

        if(limit == 1){
          btnDisabled();
          limitLeft = "Please reload your page"                
        }else{
          limitLeft = limit - 1;
        }
        document.getElementById("step").innerText = limitLeft;
      } else {
        document.getElementById("pin").value = "";
      }
    } 
  });
 
  //close the alert
  var successAlert = document.getElementById("s-btn");
  successAlert.addEventListener("click", function () {
    document.getElementById("success").style.display = "none";
  });

  var dangerAlert = document.getElementById("d-btn");
  dangerAlert.addEventListener("click", function () {
    document.getElementById("failed").style.display = "none";
  });