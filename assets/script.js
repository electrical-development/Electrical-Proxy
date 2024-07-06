document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector(".input")
  input.addEventListener("keydown", handleInput)

  function handleInput(e) {
    // We only want the function to run if the key pressed is the Enter key
    if (e.key !== 'Enter') return;

    // Run the formatSearch function on the current value of the input
    const query = formatSearch(input.value)

    // Redirect to         [   uv prefix    ] + [   encoded search query   ]
    window.location.href = __uv$config.prefix + __uv$config.encodeUrl(query)
  }
})

function formatSearch(query) {
  // This function turns the inputted value into a Google search if it's not a normal URL
  try {
    return new URL(query).toString()
  } catch (e) { }

  try {
    const url = new URL(`http://${query}`)
    if (url.hostname.includes('.')) return url.toString()
  } catch (e) { }

  return new URL(`https://google.com/search?q=${query}`).toString()
}

function Redir(url) {
  window.location.href = url
}

// Search history spammer
//REMOVED

// Added BLNKR functionality
function create(url) {
  url_enc = Ultraviolet.codec.xor.encode(url)
  url_enc_prefix = __uv$config.prefix + url_enc
  var win = window.open();
  win.document.body.style.margin = '0';
  win.document.body.style.height = '100vh';
  var iframe = win.document.createElement('iframe');
  iframe.style.border = 'none';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.margin = '0';
  iframe.src = url_enc_prefix;
  win.document.body.appendChild(iframe);
}

function create_blnkr() {
  let x = prompt("Where would you like to go? \n At the moment google searches are not supported.")
  create(x)
}
// Panic key
let csite = localStorage.getItem('cloaksite');
if (csite == null) {
  csite = 'https://classroom.google.com'
}
document.addEventListener('keydown', function(event) {
  if (event.key === '=') {
        window.parent.location.href = csite;
    }
});