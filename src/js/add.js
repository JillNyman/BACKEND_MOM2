"use strict";

//Formulärfält
const inputCompanyname = document.getElementById("companyname");
const inputJobtitle = document.getElementById("jobtitle");
const inputLocation = document.getElementById("location");
const inputStartdate = document.getElementById("startdate");
const inputEnddate = document.getElementById("enddate");
const inputDescription = document.getElementById("description");
const addBtn = document.getElementById("addBtn");
const formEl = document.getElementById("course-form");

//Knapp: lägg till nytt arbete
addBtn.addEventListener("click", addJob, false);

//Lägg till arbete, posta till databas
async function addJob(e){
   
        e.preventDefault();

       let job = {    
        companyname: inputCompanyname.value,
        jobtitle: inputJobtitle.value,
        location:  inputLocation.value,
        startdate: inputStartdate.value,
        enddate: inputEnddate.value,
        description: inputDescription.value
    };

    
    const response = await fetch('http://127.0.0.1:2788/cv', {
        method: "POST",
        
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(job)
    });

    let data = await response.json();    
    return data;
  
}
    