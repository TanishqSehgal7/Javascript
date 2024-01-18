const myCoding = [

    {
        languageName: "Javascript",
        languageFileName: "js",
    },
    {
        languageName: "Java",
        languageFileName: "Java",
    },
    {
        languageName: "Python",
        languageFileName: "py",
    },
    {
        languageName: "Kotlin",
        languageFileName: "kt",
    }
]


myCoding.forEach( (item) => {
    // console.log(item) -> prints all items as objects
    console.log(`${item.languageName} has file name ${item.languageFileName}`)
 })