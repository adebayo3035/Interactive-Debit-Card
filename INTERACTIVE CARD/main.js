
// CARD NAME
const card_name = document.getElementById('card_name')
  , card_holder = document.getElementById('card_holder')
  card_holder.style.textTransform = "uppercase"

if ((card_holder.value).length === 0) {
  card_name.innerHTML = 'JANET JACKSON'
}
card_holder.addEventListener('input', () => {
  card_name.setAttribute('data-text', card_holder.value)

  card_name.innerHTML = card_name.getAttribute('data-text').toUpperCase()
  // split text into 4's

  if ((card_holder.value).length === 0) {
    card_name.innerHTML = 'JANET JACKSON'
  }
})

//CARD number
document.getElementById('card_numberInput').addEventListener('input', function (e) {
  var target = e.target, position = target.selectionEnd, length = target.value.length;
  // split text into 4's
  target.value = target.value.replace(/[^\d0-1]/g, '').replace(/(.{4})/g, '$1 ').trim();
  target.selectionEnd = position += ((target.value.charAt(position - 1) === ' ' && target.value.charAt(length - 1) === ' ' && length !== target.value.length) ? 1 : 0);
});

const card_number = document.getElementById('card_number')
  , card_numberInput = document.getElementById('card_numberInput')

if ((card_numberInput.value).length === 0) {
  card_number.innerHTML = '0000 0000 0000 0000'
}
card_numberInput.addEventListener('input', () => {
  card_number.setAttribute('data-text', card_numberInput.value)

  card_number.innerHTML = card_number.getAttribute('data-text')
  var count = 0

  if ((card_numberInput.value).length === 0) {
    card_number.innerHTML = '0000 0000 0000 0000'
  }
})

// EXPIRY MONTH
const expiry_month = document.getElementById('expiry_month')
  , expiry_monthInput = document.getElementById('expiry_monthInput')

if ((expiry_monthInput.value).length === 0) {
  expiry_month.innerHTML = '00'
}
expiry_monthInput.addEventListener('input', () => {
  // Add 0 to expiry Month on card when the selected Month is less than 10
  if(expiry_monthInput. value < 10){
    expiry_month.setAttribute('data-text', `0${expiry_monthInput.value}`)
  }
  else{
    expiry_month.setAttribute('data-text', `${expiry_monthInput.value}`)
  }

  expiry_month.innerHTML = expiry_month.getAttribute('data-text')


  if ((expiry_monthInput.value).length === 0) {
    expiry_month.innerHTML = '00'
  }
})

// EXPIRY YEAR
const expiry_year = document.getElementById('expiry_year')
  , expiry_yearInput = document.getElementById('expiry_yearInput')

if ((expiry_yearInput.value).length === 0) {
  expiry_year.innerHTML = '00'
}
expiry_yearInput.addEventListener('input', () => {
  expiry_year.setAttribute('data-text', expiry_yearInput.value)

  expiry_year.innerHTML = expiry_year.getAttribute('data-text')


  if ((expiry_yearInput.value).length === 0) {
    expiry_year.innerHTML = '00'
  }
})

// CVV
const cvv = document.getElementById('cvv')
  , cvvInput = document.getElementById('cvvInput')

if ((cvvInput.value).length === 0) {
  cvv.innerHTML = '000'
}
cvvInput.addEventListener('input', () => {
  cvv.setAttribute('data-text', cvvInput.value)

  cvv.innerHTML = cvv.getAttribute('data-text')


  if ((cvvInput.value).length === 0) {
    cvv.innerHTML = '000'
  }
})

// Get Current screen size 
window.onresize = screen;
window.onload = screen;
function screen() {
  myWidth = window.innerWidth;
  document.getElementById('screen-size').innerHTML = "Width is: " + myWidth;
}

// Duplicate month and Year select option
for (var i = 1; i <= 12; i++) {
  // document.getElementById('month-select'). value = i;
  document.getElementById('expiry_monthInput').innerHTML += "<option value = " + i + ">" + i + "</option>"
  // if (i >= 10) {
  //   document.getElementById('expiry_monthInput').innerHTML += "<option value = " + i + ">" + i + "</option>"
  // } else {
  //   document.getElementById('expiry_monthInput').innerHTML += "<option value = " + i + ">" + "0" + i + "</option>"
  // }


}
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
for (var i = currentYear; i <= (currentYear + 5); i++) {
  // document.getElementById('month-select'). value = i;
  document.getElementById('expiry_yearInput').innerHTML += "<option value = " + i + ">" + i + "</option>"
}


// Declaring Error Messages as Global Variables
const card_nameError = document.getElementById('card_nameError')
const card_numberError = document.getElementById('card_numberError')
const cvvError = document.getElementById('cvvError')
const exp_dateError = document.getElementById('exp_dateError')
const errorMessage = document.querySelectorAll('.errorMessage')


// End of Error Messages

//functions to validate the 4 inputs
function validateName() {
  const name = document.getElementById('card_holder');
  card_nameError.style.display = "block";
  var regName =/^[a-zA-Z-]+ [a-zA-Z-]+ [a-zA-Z-]+$/;
  if (!regName.test(name.value)) {
    card_nameError.textContent = "Error in Card Name, Please Check";
    name.focus();
    return false;
  }
  else if((name.value).length == 0){
    card_nameError.innerHTML = "Please Enter Your Full Name";
    return false;
    name.focus()
  }
  else{
    card_nameError.innerHTML ='<i class="fa fa-check-square-o" aria-hidden="true"></i>';
    card_nameError.style.color = "green";
    return true;
  }
  
  
}

// Validate Card Number
function validateCardNumber(){
  const card_num = document.getElementById('card_numberInput')
  card_numberError.style.display = "block";
  if (((card_num.value).length) != 19) {
    card_numberError.textContent = "Incorrect Card Number, Check and Try Again";
    card_num.focus()
    countNumberError = 1
    return false
  }
  else if((card_num.value).length == 0){
    card_nameError.innerHTML = "Please Enter Your Card Number";
    return false;
    name.focus()
  }
  else{
    card_numberError.innerHTML ='<i class="fa fa-check-square-o" aria-hidden="true"></i>';
    card_numberError.style.color ="green";
    return true;
  }
  
  
}

function validateCVV(){
  const cvvInput = document.getElementById('cvvInput').value
  cvvError.style.display = "block"
  
  if ((cvvInput).length != 3) {
    cvvError.textContent = "Incorrect CVV";
    return false;
    cvvInput.focus();
  }
  else{
    cvvError.innerHTML = '<i class="fa fa-check-square-o" aria-hidden="true"></i>';
    cvvError.style.color ="green"
    return true;
  }
  
}

function validateDate(){
  const expiry_mon = document.getElementById('expiry_monthInput')
  const expiryYear = document.getElementById('expiry_yearInput')
  exp_dateError.style.display ="block";

 var selectedMonth = expiry_mon.options[expiry_mon.selectedIndex].value;
 var selectedYear = expiryYear.options[expiryYear.selectedIndex].value;
     if ((selectedMonth == "") || (selectedYear == ""))
    {
      exp_dateError.textContent = "Please Select Expiry Month or Year";
      return false;
    }
    else{
      exp_dateError.innerHTML = '<i class="fa fa-check-square-o" aria-hidden="true"></i>';
      exp_dateError.style.color = "green";
      return true;
    }
    
}

function submitCard(){
  formError.style.display = "block";
  const checkbox = document.getElementById('attest');
  if((!validateName() || !validateCardNumber() || !validateCVV() || !validateDate())){
      formError.textContent ="Please fix all Errors before Submitting";
      setTimeout(function(){formError.style.display = "none"}, 1000);
      return false
  }
  if(checkbox.checked == false){
      formError.textContent ="Please Click the Checkbox Above";
      setTimeout(function(){formError.style.display = "none"}, 1000);
      return false
  }
 alert("Form Data was Successfully Submitted");
 formError.style.display = "none"
  return true;

}

function disableButton(){
  const checkbox = document.getElementById('attest');
  const btn = document.getElementById('btnSubmit');
  if(checkbox.checked == true){
    btn.disabled = false
    btn.style.backgroundColor = "#2A0861"
    btn.style.color = "#fff"
    btn.style.cursor ="pointer"
  }
  else if(checkbox.checked == false){
    btn.disabled = true;
    btn.style.backgroundColor = "darkgray"
    btn.style.color = "#fff"
    btn.style.cursor ="not-allowed"
  }
 
}

