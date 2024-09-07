// Select the toggle buttons and sections
var experienceToggle = document.getElementById('experience-toggle');
var academicsToggle = document.getElementById('academics-toggle');
var skillsToggle = document.getElementById('skills-toggle');
var experienceSection = document.getElementById('experience-section');
var academicsSection = document.getElementById('academics-section');
var skillsSection = document.getElementById('skills-section');
// Function to toggle visibility
var toggleVisibility = function (section) {
    if (section) {
        if (section.style.display === "none") {
            section.style.display = "block";
        }
        else {
            section.style.display = "none";
        }
    }
};
// Add event listeners for toggle buttons
experienceToggle === null || experienceToggle === void 0 ? void 0 : experienceToggle.addEventListener('click', function () {
    toggleVisibility(experienceSection);
});
academicsToggle === null || academicsToggle === void 0 ? void 0 : academicsToggle.addEventListener('click', function () {
    toggleVisibility(academicsSection);
});
skillsToggle === null || skillsToggle === void 0 ? void 0 : skillsToggle.addEventListener('click', function () {
    toggleVisibility(skillsSection);
});
