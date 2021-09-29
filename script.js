let grayBookmark = document.getElementById('gray-bookmark');
let greenBookmark = document.getElementById('green-bookmark');
let bookmarkColor = document.getElementById('bookmark-color');
var bookmarked = document.createTextNode("ed");
function bookMark() {
    if (greenBookmark.classList.contains('d-none')) {
        grayBookmark.classList.add('d-none');
        greenBookmark.classList.remove('d-none');
        bookmarkColor.classList.add('text-darkCyan');
        bookmarkColor.appendChild(bookmarked);
    } else {
        grayBookmark.classList.remove('d-none');
        greenBookmark.classList.add('d-none');
        bookmarkColor.classList.remove('text-darkCyan');
        bookmarkColor.removeChild(bookmarked);
    }
}