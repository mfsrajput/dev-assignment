const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLElement;
const profileImageInput = document.getElementById('profileImage') as HTMLInputElement;

const experienceSection = document.getElementById('experience-section') as HTMLDivElement;
const educationSection = document.getElementById('education-section') as HTMLDivElement;

const addExperienceBtn = document.getElementById('addExperienceBtn') as HTMLButtonElement;
const addEducationBtn = document.getElementById('addEducationBtn') as HTMLButtonElement;

let profileImageUrl: string | ArrayBuffer | null = null;

// Event listener for image upload
profileImageInput.addEventListener('change', function(event: Event) {
    const input = event.target as HTMLInputElement;

    // Check if the input and its files property exist and have at least one file
    if (input && input.files && input.files.length > 0) {
        const file = input.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
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
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    generateResume();
});

function generateResume() {
    const fullName = (document.getElementById('fullName') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const dob = (document.getElementById('dob') as HTMLInputElement).value;
    const religion = (document.getElementById('religion') as HTMLInputElement).value;
    const phone = (document.getElementById('cell') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;

    const experiences = Array.from(document.querySelectorAll('.experience')).map(exp => {
        const jobTitle = (exp.querySelector('.jobTitle') as HTMLInputElement).value;
        const company = (exp.querySelector('.company') as HTMLInputElement).value;
        const jobDescription = (exp.querySelector('.jobDescription') as HTMLTextAreaElement).value;
        return { jobTitle, company, jobDescription };
    });

    const education = Array.from(document.querySelectorAll('.education')).map(edu => {
        const degree = (edu.querySelector('.degree') as HTMLInputElement).value;
        const institute = (edu.querySelector('.institute') as HTMLInputElement).value;
        const location = (edu.querySelector('.location') as HTMLInputElement).value;
        return { degree, institute, location };
    });

    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim());
    const certifications = (document.getElementById('certifications') as HTMLInputElement).value.split(',').map(cert => cert.trim());

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
