
// CARD NAME
const card_name = document.getElementById('card_name')
  , card_holder = document.getElementById('card_holder')

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
  expiry_month.setAttribute('data-text', expiry_monthInput.value)

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
  if (i >= 10) {
    document.getElementById('expiry_monthInput').innerHTML += "<option value = " + i + ">" + i + "</option>"
  } else {
    document.getElementById('expiry_monthInput').innerHTML += "<option value = " + i + ">" + "0" + i + "</option>"
  }


}

for (var i = 2022; i <= 2050; i++) {
  // document.getElementById('month-select'). value = i;
  document.getElementById('expiry_yearInput').innerHTML += "<option value = " + i + ">" + i + "</option>"
}

// Form Validation

function validateName() {
  const card_nameError = document.getElementById('card_nameError')
  var regName =/^[a-zA-Z-]+ [a-zA-Z-]+ [a-zA-Z-]+$/;
  
  var name = document.getElementById('card_holder').value;
  if (!regName.test(name)) {
    card_nameError.style.display = "block";
    card_nameError.textContent = "Error in Card Name, Please Check";
    document.getElementById('card_holder').focus();
    return false;
  }
  else {
    card_nameError.style.display = "none";
    return true;
    var valid1 = 1;
  }
}
function validateCardNumber(){
  const card_num = document.getElementById('card_numberInput').value
  const card_numberError = document.getElementById('card_numberError')
  if ((card_num).length < 19) {
    card_numberError.style.display = "block";
    card_numberError.textContent = "Incorrect Card Number, Check and Try Again";
    return false;
  }
  else{
    card_numberError.style.display = "none";
    return true;
    var valid2 = 1;
  }
}
function validateCVV(){
  const cvvInput = document.getElementById('cvvInput').value
  const cvvError = document.getElementById('cvvError')
  if ((cvvInput).length < 3) {
    cvvError.style.display = "block";
    cvvError.textContent = "Incorrect CVV";
    return false;
  }
  else{
    cvvError.style.display ="none";
    return true;
    var valid3 = 1;
  }
}

function validateForm() {
  const expiry_mon = document.getElementById('expiry_monthInput')
  const expiryYear = document.getElementById('expiry_yearInput')
  
  const exp_dateError = document.getElementById('exp_dateError')

 var selectedMonth = expiry_mon.options[expiry_mon.selectedIndex].value;
 var selectedYear = expiryYear.options[expiryYear.selectedIndex].value;
     if (selectedMonth == "" || selectedYear == "")
   {
    exp_dateError.style.display = "block";
    exp_dateError.textContent = "Please Select Expiry Month or Year";
    return false;
   }
   else {
    alert("Your Card Details has been Successfully Received. Check Back Later")
    exp_dateError.style.display = "none";
    return true;
  }
  if ((card_nameError.style.display = "block") || (card_numberError.style.display = "block") || (cvvError.style.display = "block")){
     alert("Please Correct All Errors before submitting");
   }
  

}





