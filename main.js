var _a;
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
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Resume output
        var outputofresume = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> ".concat(name_1, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            \n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n\n            <h2>Skills</h2>\n            <p>").concat(skills, "</p>\n        ");
        var outputofresumeElement = document.getElementById('outputofresume');
        if (outputofresumeElement) {
            outputofresumeElement.innerHTML = outputofresume;
        }
        else {
            console.error("The resume output element is missing");
        }
    }
    else {
        console.error('One or more input elements are missing');
    }
});
