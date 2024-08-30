// @ts-nocheck
let string = "";      // to store the input in input 
let buttons = document.querySelectorAll('.button');   // to select all buttons using query selector using class name button
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string; // 
    }
    else if(e.target.innerHTML == 'DE'){
      string = ""
      document.querySelector('input').value = string; 
    }
    else { 
    // console.log(e.target)
    string = string + e.target.innerHTML; // it will add value in input whatever u r selecting
    document.querySelector('input').value = string; // it will show in input 
      }
      
  })
})

// create a Array from buttons and attach a foreach & foreach is a callback funtion give a parameter name like i used a button