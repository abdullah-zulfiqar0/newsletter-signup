

let input  =  document.querySelector(".email");
const  emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let button  = document.querySelector(".btn ");
let main =  document.querySelector(".main");
let MainSecond=  document.querySelector(".main-second");
let invalid =  document.querySelector(".invalid");
let  span =  document.getElementById("span");
const dismiss = document.querySelector(".main-second .btn");



       
  button.addEventListener("click",()=>{
   


  if ( !emailPattern.test(input.value)){

  
   invalid.textContent="Valid email required";
 invalid.style.color="red";


    input.classList.add("error");
    return ;

  }
input.classList.remove("error");
invalid.textContent = "";

  main.style.display="none";
  MainSecond.style.display="flex";
  span.textContent= input.value;

  


  });

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") button.click();            
});




dismiss.addEventListener("click", () => {
  MainSecond.style.display = "none"; 
  main.style.display = "flex";       
  input.value = "";                    
});



  




