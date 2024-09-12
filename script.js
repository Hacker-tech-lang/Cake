function searchGoogle(event) {
  event.preventDefault(); // Prevent form from submitting

  const query = document.getElementById("searchQuery").value.trim();

  if (query) {
    // Simulate a Google search
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(query)}`,
      "_blank"
    );
  } else {
    alert("Please enter a search query.");
  }
}

function feelingLucky() {
  // Simulate "I'm Feeling Lucky" with a random Wikipedia page
  window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank");
}

function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll(".section").forEach((section) => {
