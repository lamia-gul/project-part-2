// main.ts
// Function to toggle the visibility of all fieldsets
function toggleFieldsetsVisibility() {
    // Select all fieldset elements
    var fieldsets = document.querySelectorAll('fieldset');
    // Iterate over each fieldset and toggle its visibility
    fieldsets.forEach(function (fieldset) {
        if (fieldset.style.display === 'none') {
            fieldset.style.display = 'block';
        }
        else {
            fieldset.style.display = 'none';
        }
    });
}
// Event listener for the toggle button
var toggleButton = document.getElementById('toggleSectionsBtn');
if (toggleButton) {
    toggleButton.addEventListener('click', toggleFieldsetsVisibility);
}








// Listing_Elements
document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Type assertion
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;
    
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Resume output
        const outputofresume = `
            <h2>Resume</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>

            <h3>Education</h3>
            <p>${education}</p>
            
            <h3>Experience</h3>
            <p>${experience}</p>

            <h2>Skills</h2>
            <p>${skills}</p>
        `;

        const outputofresumeElement = document.getElementById('outputofresume');
        if (outputofresumeElement) {
            outputofresumeElement.innerHTML = outputofresume;
        } else {
            console.error("The resume output element is missing");
        }
    } else {
        console.error('One or more input elements are missing');
    }
});

