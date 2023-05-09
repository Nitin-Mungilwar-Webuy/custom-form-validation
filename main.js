import Validator from './validator.js';

const form=document.getElementById('form');
const validator=new Validator(form);
validator.addRules("username", ["required", "min:3"]);
validator.addRules("email", ["required", "email"]);
validator.addRules("password", ["required", "min:6"]);
validator.addRules("mobile", ["required", "numeric"]);

const btn = document.getElementById("btn");
btn.addEventListener("click", function (event) {
  event.preventDefault();
  if (validator.validate()) {
    alert("Form submitted successfully");
  }
});







