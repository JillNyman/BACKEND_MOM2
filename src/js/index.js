"use strict";
//Lista på arbeten
const episodes = document.getElementById("episode-list");

getData();

//Hämta list med arbeten från databas
async function getData() {
    const response = await fetch('http://127.0.0.1:2788/cv', { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },       

    });

    let data = await response.json();
    console.table(data); 

    makeList(data);
    
    
};

//Skriv ut listan
function makeList(data){
    let datatwo = data;
        datatwo.forEach(dat => {
         let newEl = document.createElement("tbody");
         
         newEl.innerHTML =`
         <tr rowspan="2">
             <td> ${dat.companyname} </td>
             <td>${dat.jobtitle} </td>
             <td>${dat.location} </td>
             <td>${dat.startdate} </td>
        </tr>
        <tr>
            <td></td>
             <td> ${dat.description}</td>
             <td></td>
             <td>${dat.enddate}  </td>
             `;

             let deleteBtn = document.createElement('button');
             deleteBtn.textContent = "Radera";
             deleteBtn.id = dat.id;
             deleteBtn.className = "deleteBtn";
             deleteBtn.addEventListener('click', () => deletePost(dat.id));
             newEl.appendChild(deleteBtn);
             episodes.appendChild(newEl);

        });
};

//Ta bort post i listan
async function deletePost(id){
    const response = await fetch(`http://127.0.0.1:2788/cv/${id}`, { 
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },       

    });

    let data = await response.json();
    console.log(data); 

    makeList(data);
}




