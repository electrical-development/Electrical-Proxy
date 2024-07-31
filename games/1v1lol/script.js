document.addEventListener('DOMContentLoaded', () => {
  const searchBar = document.querySelector(".searchBar");
  const ses = document.querySelector("#ses");

  if (!searchBar || !ses) {
      console.error("Search bar or search engine select element not found.");
      return;
  }

  searchBar.addEventListener("keydown", handleInput);

  function handleInput(e) {
      if (e.key !== 'Enter') return;

      const query = formatSearch(searchBar.value);
      const selectedEngine = ses.value;

      localStorage.setItem('savedSearchEngine', selectedEngine);

      let searchURL = `${selectedEngine}/search?q=${encodeURIComponent(query)}`;
      switch(selectedEngine) {
          case 'google':
              searchURL = `https://www.google.com/search?q=${query}`;
              break;
          case 'bing':
              searchURL = `https://www.bing.com/search?q=${query}`;
              break;
          case 'brave':
              searchURL = `https://search.brave.com/search?q=${query}`;
              break;
          case 'duckduckgo':
              searchURL = `https://duckduckgo.com/?q=${query}`;
              break;
          default:
              searchURL = `https://www.google.com/search?q=${query}`;
      }
      window.location.href = __uv$config.prefix + __uv$config.encodeUrl(searchURL);
  }
});

function formatSearch(query) {
  try {
      return new URL(query).toString();
  } catch (e) { }

  try {
      const url = new URL(`http://${query}`);
      if (url.hostname.includes('.')) return url.toString();
  } catch (e) { }

  return new URL(`${query}`).toString();
}