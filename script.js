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
