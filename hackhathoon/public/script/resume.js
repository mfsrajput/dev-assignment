"use strict";
const form = document.getElementById('resumeForm');
const resumeOutput = document.getElementById('resumeOutput');
const profileImageInput = document.getElementById('profileImage');
const experienceSection = document.getElementById('experience-section');
const educationSection = document.getElementById('education-section');
const addExperienceBtn = document.getElementById('addExperienceBtn');
const addEducationBtn = document.getElementById('addEducationBtn');
let profileImageUrl = null;
// Event listener for image upload
profileImageInput.addEventListener('change', function (event) {
    const input = event.target;
    // Check if the input and its files property exist and have at least one file
    if (input && input.files && input.files.length > 0) {
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            // Check if e.target exists and has a result property before using it
            if (e.target && e.target.result) {
                profileImageUrl = e.target.result; // Store the image URL
            }
        };
        reader.readAsDataURL(file);
    }
});
// Function to create dynamic experience input
const createExperienceInputs = () => {
    const expDiv = document.createElement('div');
    expDiv.classList.add('experience');
    expDiv.innerHTML = `
        <div class="form-group">
            <label for="jobTitle">Job Title:</label>
            <input type="text" class="jobTitle form-control" required>
        </div>
        <div class="form-group">
            <label for="company">Company:</label>
            <input type="text" class="company form-control" required>
        </div>
        <div class="form-group">
            <label for="jobDescription">Description:</label>
            <textarea class="jobDescription form-control" required></textarea>
        </div>
        <hr>
    `;
    experienceSection.appendChild(expDiv);
};
// Function to create dynamic education input
const createEducationInputs = () => {
    const eduDiv = document.createElement('div');
    eduDiv.classList.add('education');
    eduDiv.innerHTML = `
        <div class="form-group">
            <label for="degree">Degree:</label>
            <input type="text" class="degree form-control" required>
        </div>
        <div class="form-group">
            <label for="institute">Institute:</label>
            <input type="text" class="institute form-control" required>
        </div>
        <div class="form-group">
            <label for="location">Location:</label>
            <input type="text" class="location form-control" required>
        </div>
        <hr>
    `;
    educationSection.appendChild(eduDiv);
};
// Event listeners to add experience and education inputs
addExperienceBtn.addEventListener('click', createExperienceInputs);
addEducationBtn.addEventListener('click', createEducationInputs);
// Generate resume
form.addEventListener('submit', (event) => {
    event.preventDefault();
    generateResume();
});
function generateResume() {
    const fullName = document.getElementById('fullName').value;
    const address = document.getElementById('address').value;
    const dob = document.getElementById('dob').value;
    const religion = document.getElementById('religion').value;
    const phone = document.getElementById('cell').value;
    const email = document.getElementById('email').value;
    const experiences = Array.from(document.querySelectorAll('.experience')).map(exp => {
        const jobTitle = exp.querySelector('.jobTitle').value;
        const company = exp.querySelector('.company').value;
        const jobDescription = exp.querySelector('.jobDescription').value;
        return { jobTitle, company, jobDescription };
    });
    const education = Array.from(document.querySelectorAll('.education')).map(edu => {
        const degree = edu.querySelector('.degree').value;
        const institute = edu.querySelector('.institute').value;
        const location = edu.querySelector('.location').value;
        return { degree, institute, location };
    });
    const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim());
    const certifications = document.getElementById('certifications').value.split(',').map(cert => cert.trim());
    resumeOutput.innerHTML = `
        <div class="resume">
        <div class="resume-header">
        <div class="profile-img-container">
        ${profileImageUrl ? `<img src="${profileImageUrl}" alt="Profile Image" class="profile-img">` : ''}
        </div>
        <div class="profile-info">

        <h1>${fullName}</h1>
            
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>DOB:</strong> ${dob}</p>
        <p><strong>Religion:</strong> ${religion}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>

        </div>
        </div>
            <h2>Work Experience</h2>
            ${experiences.map(exp => `<p><strong>${exp.jobTitle}</strong> at ${exp.company}: ${exp.jobDescription}</p>`).join('')}

            <h2>Education</h2>
            ${education.map(edu => `<p><strong>${edu.degree}</strong> from ${edu.institute}, ${edu.location}</p>`).join('')}

            <h2>Skills</h2>
            <ul>${skills.map(skill => `<li>${skill}</li>`).join('')}</ul>

            <h2>Certifications</h2>
            <ul>${certifications.map(cert => `<li>${cert}</li>`).join('')}</ul>
        </div>
    `;
}
