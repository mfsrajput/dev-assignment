// Select the toggle buttons and sections
const experienceToggle = document.getElementById('experience-toggle');
const academicsToggle = document.getElementById('academics-toggle');
const skillsToggle = document.getElementById('skills-toggle');

const experienceSection = document.getElementById('experience-section');
const academicsSection = document.getElementById('academics-section');
const skillsSection = document.getElementById('skills-section');

// Function to toggle visibility
const toggleVisibility = (section: HTMLElement | null) => {
    if (section) {
        if (section.style.display === "none") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    }
};

// Add event listeners for toggle buttons
experienceToggle?.addEventListener('click', () => {
    toggleVisibility(experienceSection);
});

academicsToggle?.addEventListener('click', () => {
    toggleVisibility(academicsSection);
});

skillsToggle?.addEventListener('click', () => {
    toggleVisibility(skillsSection);
});
