
'use strict';
MathMLElement;
let randomnumber= 0;
let randomId= 0;
let allEmployee= []; 
let existing = [];
let form = document.getElementById('add-person');
form.addEventListener('submit', addNewEmployee);
function Employee(fullName,dep,level,imgUrl){
    this.fullName = fullName;
    this.dep = dep;
    this.level = level;
    this.imgUrl= imgUrl;
   
    allEmployee.push(this);}
  



Employee.prototype.id = function (){
 
    
    for(let i=0;i<=existing.length;i++ ){
        randomId=(Math.floor(Math.random()*(9999 - 0 + 1)) + 0);
        if(randomId === existing[i]){
           
          idCheck();
        }else{
    
    
    console.log(randomId);
           existing.push(randomId);
    return(this.id=randomId);

        }
    }}
Employee.prototype.salary = function (){
    if (`${this.level}`=="Senior"){
      
      randomnumber= (Math.floor(Math.random()*(2000 - 1500 + 1)) + 1500)-((Math.floor(Math.random()*(2000 - 1500 + 1)) + 1500)*0.075);   
  }
    else if(`${this.level}`=="Mid-Senior"){
      randomnumber=  (Math.floor(Math.random()*(1500 - 1000 + 1)) + 1000)-((Math.floor(Math.random()*(1500 - 1000 + 1)) + 1000)*0.075);
  }
       else if(`${this.level}`=='Junior'){
          randomnumber=(Math.floor((Math.random()*(1000 - 500 + 1)) + 500)-((Math.floor(Math.random()*(1000 - 500 + 1)) + 500)*0.075));
     
       }
       return ( this.salary=randomnumber);
       
}

Employee.prototype.render= function (){
    const container = document.getElementById('container')  // Parent

    
    const divEl = document.createElement('div');
    container.appendChild(divEl);

    const imgEl = document.createElement('img');
    divEl.appendChild(imgEl);
    imgEl.src =`./pics/${this.imgUrl}.jpg` ;
    imgEl.alt = "pic";
    const h3El1 = document.createElement('h3');
    divEl.appendChild(h3El1);
    h3El1.textContent = `The id is ${this.id}`;
    const h1El1 = document.createElement('h1');
    h1El1.textContent = `The  name is: ${this.fullName}`;
    divEl.appendChild(h1El1);

    const h1El2 = document.createElement('h1');
    h1El2.textContent = `Department: ${this.dep}`;
    divEl.appendChild(h1El2);

    const h1El3 = document.createElement('h1');
    h1El3.textContent = `level: ${this.level}`;
    divEl.appendChild(h1El3);


   
    const h3El = document.createElement('h3');
    divEl.appendChild(h3El);
    h3El.textContent = `The salary is ${this.salary}`;
   



}


function addNewEmployee(event){
    event.preventDefault();
  
    let fullname = event.target.fullname.value;
    let dep= event.target.dep.value;
    let level= event.target.level.value;
    let imgUrl = event.target.imgUrl.value;  

    let newEmployee = new Employee(fullname,dep,level,imgUrl);
   
    newEmployee.salary()
    newEmployee.id()
    newEmployee.render()
    
   
}