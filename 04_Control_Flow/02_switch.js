/* switch case syntax in js

    switch(key) {
        case value:
            break;
        case value2:
            break;
        .
        .
        .
        default:
            break;
    }
 */


    const month = 3

    switch(month) {
        case 1: // press shift alt down arrow to copy
            console.log("January")
            break;
        case 2:
            console.log("Feburary")
            break;
        case 3:
            console.log("March")
            break;
        case 4:
            console.log("April")
            break;
        case 5:
            console.log("May")
            break;
        case 6:
            console.log("June")
            break;
        case 7:
            console.log("July")
            break;
        case 8:
            console.log("August")
            break;
        case 9:
            console.log("September")
            break;
        case 10:
            console.log("October")
            break;
        case 11:
            console.log("November")
            break;
        case 12:
            console.log("December")
            break;
        default:
            console.log("Invalid value of month")
            break;
    }

    /* if break statement is not applied in case, all the code in 
    further cases gets executed except the default case */
