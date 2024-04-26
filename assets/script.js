document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector(".input");
    input.addEventListener("keydown", handleInput);

    function handleInput(e) {
        if (e.key !== 'Enter') return;
        const query = formatSearch(input.value);
        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(query);
    }

    const modal = document.getElementById("bookmarkModal");
    const btn = document.getElementById("openBookmarkModal");
    const span = document.getElementsByClassName("close")[0];
    const bookmarkForm = document.getElementById('bookmarkForm');

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    bookmarkForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('bookmarkName').value;
        const link = document.getElementById('bookmarkLink').value;

        let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        bookmarks.push({name: name, link: link});
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

        modal.style.display = "none";
        displayBookmarks();
    });

    document.getElementById('temp').addEventListener('click', function() {
        const currentUrl = window.location.href;
        const blankWindow = window.open('about:blank');
        blankWindow.location.href = currentUrl;
    });

    displayBookmarks();
});

function displayBookmarks() {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const bookmarkList = document.getElementById('bookmarkList');
    bookmarkList.innerHTML = '';
    bookmarks.forEach(function(bookmark, index) {
        const listItem = document.createElement('li');
        const bookmarkButton = document.createElement('button');
        bookmarkButton.textContent = bookmark.name;
        bookmarkButton.className = "bookmark-button";
        bookmarkButton.addEventListener('click', function() {
            const encodedUrl = __uv$config.prefix + __uv$config.encodeUrl(bookmark.link);
            window.location.href = encodedUrl;
        });
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = "delete-button";
        deleteButton.addEventListener('click', function() {
            deleteBookmark(index);
        });
        listItem.appendChild(bookmarkButton);
        listItem.appendChild(deleteButton);
        bookmarkList.appendChild(listItem);
    });
}

function deleteBookmark(index) {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    bookmarks.splice(index, 1);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    displayBookmarks();
}

function formatSearch(query) {
    try {
        return new URL(query).toString();
    } catch (e) { }

    try {
        const url = new URL(`http://${query}`);
        if (url.hostname.includes('.')) return url.toString();
    } catch (e) { }

    return new URL(`https://google.com/search?q=${query}`).toString();
}

function create(url) {
    var win = window.open();
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    var iframe = win.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
    iframe.src = url;
    win.document.body.appendChild(iframe);
}

function create_blnkr() {
    let x = prompt("put in the link at the top of the page.")
    create(x)
}
