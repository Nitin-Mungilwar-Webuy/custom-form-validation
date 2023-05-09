import Validator from './validator.js';

const form=document.getElementById('form');
const validator=new Validator(form);
validator.addRules("username", ["validateRequired", "validateMinlength:3"]);
validator.addRules("email", ["validateRequired", "validateEmail"]);
validator.addRules("password", ["validateRequired", "validateMinlength:6"]);
validator.addRules("mobile", ["validateRequired"]);

const btn = document.getElementById("btn");
btn.addEventListener("click", function (event) {
  event.preventDefault();
  if (validator.validate()) {
    alert("Form submitted successfull");
  }
});