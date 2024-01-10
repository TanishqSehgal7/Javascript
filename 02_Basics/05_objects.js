// De-structuring of objects

const course = {
    courseName: "Javascript",
    price: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor} = course

console.log(courseInstructor)

// giving own names to de-structured object keys
const {courseInstructor: instructor} = course
console.log(instructor)

// Another way of de-structuring usually used in react
// const navbar = ({company}) => {

// }

// navbar(company = "xyz pvtltd")

