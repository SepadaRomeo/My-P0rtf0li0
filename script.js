document.addEventListener("DOMContentLoaded", function() {
  // Set "CONTACTS" as the default section on page load
  showSection('contacts');

  // Function to show a section
  function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');

    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
  }

  // Event listeners for each button
  const buttons = document.querySelectorAll('.sidebar button');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const sectionId = this.textContent.toLowerCase();
      showSection(sectionId);
    });
  });
});

// Function to highlight the name on hover
function highlightName() {
  document.querySelector('.exclude-text').style.color = '#FF8C00';
}

// Function to reset the name color on mouseout
function resetName() {
  document.querySelector('.exclude-text').style.color = ''; // Reset to the default color
}