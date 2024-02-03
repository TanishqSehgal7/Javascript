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
    if(xmlReq.readyState === 4 )  {
        const data = JSON.parse(this.responseText) // this refers to current context/object in use
        console.log(typeof data)
        console.log(data)
        console.log(`Data: ${data}`)
        console.log(`Results[0].email: ${data.results[0].email}`)
        console.log(`Info.seed: ${data.info.seed}`)
    }
} 
xmlReq.send()