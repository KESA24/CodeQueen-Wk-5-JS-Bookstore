// Import books' information from existing file(books.js)

const lib = require ('./books');
 
let arrBooks = lib.length;
//Display all books and their authors.
    for (let book=0; book<arrBooks; book++){
        console.log (`Book: ${lib[book].title}\nAuthor: ${lib[book].author}\n` );
    }
//Display all the books (show only book titles) published by `O'Reilly Media`.
console.log ("-Books published by O'Reilly Media");
    for (let book = 0; book< arrBooks; book++) {
        if (lib[book].publisher === "O'Reilly Media")
            console.log(lib[book].title);
        }
//Display all the books (show only book titles) which have more than 350 pages
console.log("-Books with more than 350 pages")
for (let book = 0; book< arrBooks; book++) {
     if (lib[book].pages>350)
        console.log(lib[book].title);
}