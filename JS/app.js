
'use strict';
MathMLElement;
let randomnumber = 0;
let randomId = 0;
let allEmployee = [];
let existing = [];
let form = document.getElementById('add-person');
form.addEventListener('submit', addNewEmployee);
function Employee(fullName, dep, level, imgUrl) {
    this.fullName = fullName;
    this.dep = dep;
    this.level = level;
    this.imgUrl = `./pics/${this.fullName}.jpg`;
   // this.salary = 0;
    //this.id = 0;
    allEmployee.push(this);
}




Employee.prototype.id = function () {


    for (let i = 0; i <= existing.length; i++) {
        randomId = (Math.floor(Math.random() * (9999 - 0 + 1)) + 0);
        if (randomId === existing[i]) {


        } else {


            console.log(randomId);
            existing.push(randomId);
            return (this.id = randomId);

        }
    }
}
Employee.prototype.salary = function () {
    if (`${this.level}` == "Senior") {

        randomnumber = (Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500) - ((Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500) * 0.075);
    }
    else if (`${this.level}` == "Mid-Senior") {
        randomnumber = (Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000) - ((Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000) * 0.075);
    }
    else if (`${this.level}` == 'Junior') {
        randomnumber = (Math.floor((Math.random() * (1000 - 500 + 1)) + 500) - ((Math.floor(Math.random() * (1000 - 500 + 1)) + 500) * 0.075));

    }
    return (this.salary = Math.floor(randomnumber));

}

function render() {
    const container = document.getElementById('container')  // Parent
    getEmployee()

    // Step5:
    if (allEmployee == null) {
        allEmployee = [];
    }

    for (let i = 0; i < allEmployee.length; i++) {
        const divEl = document.createElement('div');
        container.appendChild(divEl);

        const imgEl = document.createElement('img');
        divEl.appendChild(imgEl);
        imgEl.src = `${allEmployee[i].imgUrl}`;
        imgEl.alt = "pic";
        const h3El1 = document.createElement('h3');
        divEl.appendChild(h3El1);
        h3El1.textContent = `The id is ${allEmployee[i].id}`;
        const h1El1 = document.createElement('h1');
        h1El1.textContent = `The  name is: ${allEmployee[i].fullName}`;
        divEl.appendChild(h1El1);

        const h1El2 = document.createElement('h1');
        h1El2.textContent = `Department: ${allEmployee[i].dep}`;
        divEl.appendChild(h1El2);

        const h1El3 = document.createElement('h1');
        h1El3.textContent = `level: ${allEmployee[i].level}`;
        divEl.appendChild(h1El3);



        const h3El = document.createElement('h3');
        divEl.appendChild(h3El);
        h3El.textContent = `The salary is ${allEmployee[i].salary}`;




    }

}
function addNewEmployee(event) {
    // event.preventDefault();

    
    let fullname = event.target.fullname.value;
    let dep = event.target.dep.value;
    let level = event.target.level.value;
    let imgUrl = event.target.imgUrl.value;

    let newEmployee = new Employee(fullname, dep, level, imgUrl);
    newEmployee.salary()
    newEmployee.id()
    let jsonArr = JSON.stringify(allEmployee);
    localStorage.setItem('allEmployee', jsonArr)
   




}
function getEmployee() {
    let jsonArr = localStorage.getItem('allEmployee');
    let dataFromStorage = JSON.parse(jsonArr);
    console.log(dataFromStorage)
    allEmployee = dataFromStorage;

}
getEmployee()
render()