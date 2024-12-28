function showSection(sectionId) {
  const sections = document.querySelectorAll('.tab-content');
  sections.forEach(section => section.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
}