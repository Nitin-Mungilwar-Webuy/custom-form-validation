export default class Validator{
    constructor(form){
        this.form=form;
        this.inputs=Array.from(form.elements).filter((el)=>el.tagName==="input")
        this.errors={}
        this.rules = [];
    }

    addRules(field,rules){
       
      this.rules.push({
        field:field,
        rules:rules,
      })  
    }
    validate() {
        this.errors = {};
        let isValid = true;
        this.inputs.forEach((input) => {
          const name = input.getAttribute("name");
          const method = `validate${name.charAt(0).toUpperCase()}${name.slice(1)}`;
          const error = this[method](input);
          if (error !== true) {
            isValid = false;
            this.errors[name] = error;
          }
        });
        return isValid;
      }
      

    // method for validating username
    validateUsername(input) {
        const value = input.value.trim();
        if (value === "") {
          return "Username is required";
        }else if (value.length < 3) {
          return "Username must be at least 3 characters long";
        } else {
          return true;
        }
      }
// method for validating email
      validateEmail(input) {
        const value = input.value.trim();
        const regexPatternEmail = /^[a-zA-Z0-9._%+-]{1,30}@[a-zA-Z0-9.-]{1,255}\.[a-zA-Z]{2,}$/;
        if (value === "") {
          return "Email is required";
        } else if (!regexPatternEmail.test(value)) {
          return "Email is invalid";
        } else {
          return true;
        }
      }
      //method for validating required
      validateRequired(input){
        const value=input.value.trim();
        if(value===""){
            return "this field is required";
        }else{
            return true;
        }
      }

      // method for min length
      validateMinlength(input){
        const value=input.value.trim();
        const minlength=input.getAttribute("minlength");
        if(value.length<minlength){
            return `this field must be at least ${minlength} char`
        }else{
            return true;
        }
      }

}