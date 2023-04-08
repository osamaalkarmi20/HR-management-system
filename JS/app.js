
'use strict';
MathMLElement;
let randomnumber= 0;
function Employee(id,fullName,dep,level){
 
    this.id = id;
    this.fullName = fullName;
    this.dep = dep;
    this.level = level;
    allEmployee.push(this);
   /* this.image = URL(`${this.firstName}.png`);
   */
    }

let allEmployee =[];
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
         return    randomnumber;
         
    }
 
    
let Ghazi = new Employee(1000,'Ghazi Samer',	'Administration',	'Senior'
    );
let Lana = new Employee(1001,'Lana Ali',	'Finance'	,	'Senior'
    );
let Tamara = new Employee(1002,'Tamara Ayoub',	'Marketing'	,	'Senior'
    );
let Safi = new Employee(1003,'Safi Walid',	'Administration',	'Mid-Senior'
    );
let Omar = new Employee(1004,'Omar Zaid ',	'Development',	'Senior'
    );
let Rana = new Employee(1005,'Rana Saleh',	'Development',	'Junior'
    );
let Hadi = new Employee(1006,'Hadi Ahmad',	'Finance'	,	'Mid-Senior'
    );

 /*   <table>
    
    <th class="this"> ${this.id} </th>
    <th class="this"> ${this.fullName} </th>
    <th class="this"> ${this.dep}</th>
    <th class="this"> ${this.level} </th>
    <th class="this"> ${randomnumber} </th>
 </table>*/


Employee.prototype.render= function (){
    document.write(`
   
<section class="a">
    <section class="b"> ${this.id} </section>
    <section class="b" > ${this.fullName} </section>
    <section class="b" > ${this.dep} </section>
    <section class="b" > ${this.level} </section>
    <section  class="b"> ${randomnumber} </section>

</section>
   
    `)}
    Ghazi.salary();
    Ghazi.render();
 Lana.salary();   
Lana.render();
Tamara.salary();
Tamara.render();
Safi.salary();
Safi.render();
Omar.salary();
Omar.render();
Rana.salary();
Rana.render();
Hadi.salary();
Hadi.render();
