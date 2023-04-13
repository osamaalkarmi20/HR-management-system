
'use strict';
MathMLElement;
let allEmployee = [];
let employeeNumber = 0;
let totalSalary = 0;
let avgSalary = 0;

let employeeNumber1 = 0;
let totalSalary1 = 0;
let avgSalary1 = 0;

let employeeNumber2 = 0;
let totalSalary2 = 0;
let avgSalary2 = 0;

let employeeNumber3 = 0;
let totalSalary3 = 0;
let avgSalary3 = 0;

let employeeNumber4 = 0;
let totalSalary4 = 0;
let avgSalary4 = 0;

function getEmployee() {
    let jsonArr = localStorage.getItem('allEmployee');
    let dataFromStorage = JSON.parse(jsonArr);


    allEmployee = dataFromStorage;

}
getEmployee()
console.log(allEmployee)
function render() {
    getEmployee()
    if (allEmployee == null) {
        allEmployee = [];
    }



    let thEl = document.createElement('tr');
    container.appendChild(thEl);
    thEl.id = "headoftables";

    let thEl1 = document.createElement('th');
    thEl1.textContent = "dep Name";
    thEl.appendChild(thEl1);

    let thEl2 = document.createElement('th');
    thEl2.textContent = "# of employees";
    thEl.appendChild(thEl2);

    let thEl3 = document.createElement('th');
    thEl3.textContent = "avg.salary";
    thEl.appendChild(thEl3);

    let thEl4 = document.createElement('th');
    thEl4.textContent = "total salary";
    thEl.appendChild(thEl4);

    //administration

    for (let i = 0; i < allEmployee.length; i++) {


        if (allEmployee[i].dep == 'Administration') {

            ++employeeNumber1;

            totalSalary1 += allEmployee[i].salary;
        }

    }

    if (employeeNumber1 !== 0) {

        avgSalary1 = Math.floor(totalSalary1 / employeeNumber1);
    }
    let trEl1 = document.createElement('tr');
    container.appendChild(trEl1);
    trEl1.id = "headoftable";
    let tdEl1 = document.createElement('td');
    trEl1.appendChild(tdEl1);
    tdEl1.textContent = 'Administration';
    let tdEl2 = document.createElement('td');
    trEl1.appendChild(tdEl2);
    tdEl2.textContent = employeeNumber1;
    let tdEl3 = document.createElement('td');
    trEl1.appendChild(tdEl3);
    tdEl3.textContent = avgSalary1;
    let tdEl4 = document.createElement('td');
    trEl1.appendChild(tdEl4);
    tdEl4.textContent = totalSalary1;




    //Marketing

    for (let i = 0; i < allEmployee.length; i++) {


        if (allEmployee[i].dep == 'Marketing') {

            ++employeeNumber2;

            totalSalary2 += allEmployee[i].salary;
        }

    }

    if (employeeNumber2 !== 0) {

        avgSalary2 = Math.floor(totalSalary2 / employeeNumber2);
    }
    let trEl12 = document.createElement('tr');
    container.appendChild(trEl12);
    trEl12.id = "headoftable";
    let tdEl12 = document.createElement('td');
    trEl12.appendChild(tdEl12);
    tdEl12.textContent = 'Marketing';
    let tdEl22 = document.createElement('td');
    trEl12.appendChild(tdEl22);
    tdEl22.textContent = employeeNumber2;
    let tdEl32 = document.createElement('td');
    trEl12.appendChild(tdEl32);
    tdEl32.textContent = avgSalary2;
    let tdEl42 = document.createElement('td');
    trEl12.appendChild(tdEl42);
    tdEl42.textContent = totalSalary2;


    //Development

    for (let i = 0; i < allEmployee.length; i++) {


        if (allEmployee[i].dep == 'Development') {

            ++employeeNumber3;

            totalSalary3 += allEmployee[i].salary;
        }

    }

    if (employeeNumber3 !== 0) {

        avgSalary3 = Math.floor(totalSalary3 / employeeNumber3);
    }
    let trEl13 = document.createElement('tr');
    container.appendChild(trEl13);
    trEl13.id = "headoftable";
    let tdEl13 = document.createElement('td');
    trEl13.appendChild(tdEl13);
    tdEl13.textContent = 'Development';
    let tdEl23 = document.createElement('td');
    trEl13.appendChild(tdEl23);
    tdEl23.textContent = employeeNumber3;
    let tdEl33 = document.createElement('td');
    trEl13.appendChild(tdEl33);
    tdEl33.textContent = avgSalary3;
    let tdEl43 = document.createElement('td');
    trEl13.appendChild(tdEl43);
    tdEl43.textContent = totalSalary3;

   // Finance

    for (let i = 0; i < allEmployee.length; i++) {


        if (allEmployee[i].dep == 'Finance') {

            ++employeeNumber4;

            totalSalary4 += allEmployee[i].salary;
        }

    }
    if (employeeNumber4 !== 0) {

        avgSalary4 = Math.floor(totalSalary4 / employeeNumber4);
    }
    let trEl14 = document.createElement('tr');
    container.appendChild(trEl14);
    trEl14.id = "headoftable";
    let tdEl14 = document.createElement('td');
    trEl14.appendChild(tdEl14);
    tdEl14.textContent = 'Finance';
    let tdEl24 = document.createElement('td');
    trEl14.appendChild(tdEl24);
    tdEl24.textContent = employeeNumber4;
    let tdEl34 = document.createElement('td');
    trEl14.appendChild(tdEl34);
    tdEl34.textContent = avgSalary4;
    let tdEl44 = document.createElement('td');
    trEl14.appendChild(tdEl44);
    tdEl44.textContent = totalSalary4;




    employeeNumber = employeeNumber1 + employeeNumber2 + employeeNumber3 + employeeNumber4;

    totalSalary = totalSalary1 + totalSalary2 + totalSalary3 + totalSalary4;

    avgSalary = avgSalary1 + avgSalary2 + avgSalary3 + avgSalary4;
    let trEl15 = document.createElement('tr');
    container.appendChild(trEl15);
    trEl15.id = "endoftable";
    let tdEl25 = document.createElement('th');
    trEl15.appendChild(tdEl25);
    tdEl25.textContent = 'total # of all employees ' + employeeNumber;


    let tdEl35 = document.createElement('th');
    trEl15.appendChild(tdEl35);
    tdEl35.textContent = 'total avg. salary of all employees ' + avgSalary;


    let tdEl45 = document.createElement('th');
    trEl15.appendChild(tdEl45);
    tdEl45.textContent = 'total salary of all employees ' + totalSalary;





}
render()

