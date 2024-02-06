const name = document.getElementById("name")
const gender = document.getElementById("gender")
const dobAge = document.getElementById("dob")
const email = document.getElementById("email")
const loc = document.getElementById("loc")
const nationality = document.getElementById("nat")
const contact = document.getElementById("contact")
const img = document.querySelector("img")
const username = document.getElementById("username")
const pass = document.getElementById("pass")
const regdate = document.getElementById("regdate")

const xmlReq = new XMLHttpRequest()
const api = "https://randomuser.me/api/" 
xmlReq.open('GET',api) 
/* xmlReq.open('GET',api) 
-> tracks for only once 

Failed to execute 'send' on 
'XMLHttpRequest': The object's state must 
be OPENED. This error is received if the 
XMLHttpRequest is not opened using open 
function
*/
xmlReq.onreadystatechange = function() { // tracks everytime the state changes
    console.log()
    console.log(xmlReq.readyState)
    if(xmlReq.readyState === 4)  {
        const data = JSON.parse(this.responseText) // this refers to current context/object in use
        console.log(typeof data)
        console.log(data)
        console.log(`Data: ${data}`)
        console.log(`Results[0].email: ${data.results[0].email}`)
        console.log(`Info.seed: ${data.info.seed}`)

        const resultsCheckPoint = data.results[0]

        name.innerHTML = `Name: ${resultsCheckPoint.name.title} ${resultsCheckPoint.name.first} ${resultsCheckPoint.name.last}`
        gender.innerHTML = `Gender: ${resultsCheckPoint.gender}`
        
        let date = new Date(resultsCheckPoint.dob.date.toString())
        console.log(date)
        dobAge.innerHTML = `DOB: ${date.toLocaleString()} <br><br> <span>Age: ${resultsCheckPoint.dob.age}</span>`
        
        email.innerHTML = `Email: ${resultsCheckPoint.email}`
        
        loc.innerHTML = `
        Location: ${resultsCheckPoint.location.street.number},
        ${resultsCheckPoint.location.street.name},
        ${resultsCheckPoint.location.city},
        ${resultsCheckPoint.location.state},
        ${resultsCheckPoint.location.country},
        ${resultsCheckPoint.location.postcode}
        `
        nationality.innerHTML = `Nationality: ${resultsCheckPoint.nat}`
        
        contact.innerHTML = `Phone: ${resultsCheckPoint.phone} <br> 
        Cell: ${resultsCheckPoint.cell}`

        img.setAttribute("src",`${resultsCheckPoint.picture.large}`)

        username.innerHTML = `UserName: ${resultsCheckPoint.login.username}`
        pass.innerHTML = `Password: ${resultsCheckPoint.login.password}`
        
        let registrationdt = new Date(resultsCheckPoint.registered.date)
        regdate.innerHTML = `Registration Date: ${registrationdt.toLocaleString()} 
        <br> Age: ${resultsCheckPoint.registered.age}`

    }
} 
xmlReq.send();