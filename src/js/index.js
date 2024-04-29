"use strict";

const episodes = document.getElementById("episode-list");
const inputCompanyname = document.getElementById("companyname");
const inputJobtitle = document.getElementById("jobtitle");
const inputLocation = document.getElementById("location");
const inputStartdate = document.getElementById("startdate");
const inputEnddate = document.getElementById("enddate");
const inputDescription = document.getElementById("description");
const addBtn = document.getElementById("addBtn");
const formEl = document.getElementById("course-form");

addBtn.addEventListener("click", addJob, false);

getData();



async function getData() {
    //Börja med att tömma listan, för att sedan fylla den med senast uppdaterade
    const response = await fetch('http://127.0.0.1:2788/cv', { //Den här URL:en funkar!
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },       

    });

    let data = await response.json();
    console.table(data); //FUNKAR

    makeList(data);
    
    
};

function makeList(data){
    // if(episodes){
    // episodes.innerHTML = "";
    let datatwo = data;
 
        datatwo.forEach(dat => {
         let newEl = document.createElement("tr");
         newEl.innerHTML =`
             <td> ${dat.companyname} </td>
             <td>${dat.jobtitle} </td>
             <td>${dat.location} </td>
             <td>${dat.startdate} </td>
             <td>${dat.enddate} </td>
             <td>${dat.description} </td>`;
             episodes.appendChild(newEl);
        });
};



async function addJob(){
    //inputTitle, inputDate, inputKeywords, inputUrl, inputViews
    //title, release_date, keywords, url, views
    //let episode = {
       let job = {    
        companyname: inputCompanyname.value,
        jobtitle: inputJobtitle.value,
        location:  inputLocation.value,
        startdate: inputStartdate.value,
        enddate: inputEnddate.value,
        description: inputDescription.value
    };

   // console.log("episodes: " + episode);
    //}   
    
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
    
