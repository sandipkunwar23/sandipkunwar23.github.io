// search.js

document.addEventListener("DOMContentLoaded", function() {
  const searchIcon = document.getElementById("search-icon");
  const searchInput = document.getElementById("search-input");

  // Toggle input field visibility
  if (searchIcon && searchInput) {
    searchIcon.addEventListener("click", () => {
      searchInput.classList.toggle("active");
      searchInput.focus();
    });

    // Search logic
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const query = searchInput.value.toLowerCase();
        const sections = document.querySelectorAll("[data-keywords]");
        let found = false;
        sections.forEach(sec => {
          const kws = sec.dataset.keywords.toLowerCase().split(" ");
          if (kws.some(k => query.includes(k))) {
            sec.scrollIntoView({ behavior: "smooth" });
            found = true;
          }
        });
        if (!found) alert("No results found on this page");
      }
    });
  }
});
