document.getElementById('add-book').addEventListener('click', function() {
    let bookName = prompt('Введіть назву книги:');
    if (bookName) {
        let li = document.createElement('li');
        li.textContent = bookName;
        document.getElementById('book-list').appendChild(li);
    }
});
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        event.target.parentElement.remove();
    }
});
function saveBooksToStorage() {
    let books = [];
    document.querySelectorAll("#book-list li").forEach(li => {
        books.push(li.textContent.replace("Видалити", "").trim());
    });
    localStorage.setItem("books", JSON.stringify(books));
}
function loadBooksFromStorage() {
    let books = JSON.parse(localStorage.getItem("books")) || [];
    books.forEach(book => {
        let li = document.createElement("li");
        li.textContent = book;
        document.getElementById("book-list").appendChild(li);
    });
}
window.onload = loadBooksFromStorage;
document.getElementById("add-book").addEventListener("click", function() {
    let bookName = prompt("Введіть назву книги:");
    if (bookName) {
        let li = document.createElement("li");
        li.textContent = bookName;
        document.getElementById("book-list").appendChild(li);
        saveBooksToStorage();
    }
});
