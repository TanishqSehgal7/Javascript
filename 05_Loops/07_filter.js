const library = [
    {
        bookName: "Book1", genre: "Fiction", publishingYear: 1981,
        edition: 2004
    },
    {
        bookName: "Book2", genre: "Thriller", publishingYear: 1985,
        edition: 2007
    },
    {
        bookName: "Book3", genre: "Horror", publishingYear: 1992,
        edition: 2008
    },
    {
        bookName: "Book4", genre: "Non-Fiction", publishingYear: 2009,
        edition: 2009
    },
    {
        bookName: "Book5", genre: "Science", publishingYear: 1987,
        edition: 2003
    },
    {
        bookName: "Book6", genre: "History", publishingYear: 2011,
        edition: 2005
    },
    {
        bookName: "Book7", genre: "Fiction", publishingYear: 1982,
        edition: 2005
    },
    {
        bookName: "Book8", genre: "Thriller", publishingYear: 1985,
        edition: 2007
    },
    {
        bookName: "Book9", genre: "Horror", publishingYear: 2003,
        edition: 2021
    },
    {
        bookName: "Book10", genre: "Non-Fiction", publishingYear: 2007,
        edition: 2007
    },
    {
        bookName: "Book11", genre: "Science", publishingYear: 2003,
        edition: 2016
    },
    {
        bookName: "Book12", genre: "History", publishingYear: 2013,
        edition: 2013
    }
]


const historyBooks = library.filter((book) => book.genre === "History")
console.log("--------------- History Books --------------------")
console.log(historyBooks)

const latestBooks = library.filter((book) => book.publishingYear >= 2010)
console.log("--------------- Latest Books --------------------")
console.log(latestBooks)

console.log("--------------- History Books after 1995 --------------------")
const historyAfter1995 = library.filter((book) => {
    return (book.genre === "History" && book.publishingYear >= 1995)
})
console.log(historyAfter1995)
