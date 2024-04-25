document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector(".input");
    input.addEventListener("keydown", handleInput);

    function handleInput(e) {
        if (e.key !== 'Enter') return;
        const query = formatSearch(input.value);
        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(query);
    }

    // Bookmark functionality
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
        displayBookmarks(); // Call the function to display bookmarks
    });
    
    // Corrected the ID to match the button's ID in the HTML
    document.getElementById('temp').addEventListener('click', function() {
        const currentUrl = window.location.href;
        const blankWindow = window.open('about:blank');
        blankWindow.location.href = currentUrl;
    });
});

// Updated Function to display bookmarks
function displayBookmarks() {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const bookmarkList = document.getElementById('bookmarkList');
    bookmarkList.innerHTML = ''; // Clear the list before adding new items
    bookmarks.forEach(function(bookmark, index) {
        // Create a new list item for each bookmark
        const listItem = document.createElement('li');
        
        // Create a new button for the bookmark
        const bookmarkButton = document.createElement('button');
        bookmarkButton.textContent = bookmark.name; // Set the button text to the bookmark name
        bookmarkButton.className = "bookmark-button"; // Add a class for styling
        bookmarkButton.addEventListener('click', function() {
            // Redirect to the bookmark's URL in the specified format when the button is clicked
            const encodedUrl = __uv$config.prefix + __uv$config.encodeUrl(bookmark.link);
            window.location.href = encodedUrl;
        });
        
        // Create a delete button for the bookmark
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = "delete-button"; // Add a class for styling
        deleteButton.addEventListener('click', function() {
            deleteBookmark(index); // Call the delete function with the bookmark index
        });
        
        // Append the buttons to the list item
        listItem.appendChild(bookmarkButton);
        listItem.appendChild(deleteButton);
        
        // Append the list item to the bookmark list
        bookmarkList.appendChild(listItem);
    });
}

function deleteBookmark(index) {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    bookmarks.splice(index, 1); // Remove the bookmark at the specified index
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks)); // Update the local storage
    window.location.reload();
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
  
  let x = prompt("What site would you like to open? Note that some sites will not work with this, and https:// is required. you might need to wait if you want to use the proxy")
  create(x)
}
