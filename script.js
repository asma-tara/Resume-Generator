let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let textarea = document.querySelectorAll("textarea");
let formContainer = document.querySelector(".form-container");
let main = document.querySelector(".resume-container");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    main.innerHTML = ""; // Clear existing resume content

    // === USER DETAILS ===
    let userDetails = document.createElement("div");
    userDetails.classList.add("user-details");

    let details = document.createElement("div");
    details.classList.add("details");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src", inputs[0].value);

    let name = document.createElement("h3");
    name.textContent = inputs[1].value;

    let contact = document.createElement("h5");
    contact.textContent = inputs[2].value;

    let email = document.createElement("h6");
    email.textContent = inputs[3].value;

    let linkedin = document.createElement("a");
    linkedin.href = inputs[4].value;
    linkedin.textContent = "LinkedIn";
    linkedin.target = "_blank";

    let github = document.createElement("a");
    github.href = inputs[5].value;
    github.textContent = "GitHub";
    github.target = "_blank";

    details.appendChild(name);
    details.appendChild(contact);
    details.appendChild(email);
    details.appendChild(linkedin);
    details.appendChild(github);

    profile.appendChild(img);
    userDetails.appendChild(details);
    userDetails.appendChild(profile);
    main.appendChild(userDetails);

    // === ABOUT ME ===
    let about = document.createElement("section");
    about.classList.add("about");

    let title = document.createElement("h2");
    title.textContent = "About Me";

    let aboutPara = document.createElement("p");
    aboutPara.textContent = textarea[0].value;

    about.appendChild(title);
    about.appendChild(aboutPara);
    main.appendChild(about);

    // === EDUCATION ===
    let education = document.createElement("section");
    education.classList.add("education");

    let eduTitle = document.createElement("h2");
    eduTitle.textContent = "Education";

    let educationDetails = document.createElement("div")
    educationDetails.classList.add("education-details");

    let degree = document.createElement("h6");
    degree.textContent = inputs[8].value;

    let duration = document.createElement("h6");
    duration.textContent = inputs[7].value;

    educationDetails.appendChild(degree);
    educationDetails.appendChild(duration);

    let college = document.createElement("p");
    college.textContent = inputs[6].value;

    let percent = document.createElement("p");
    percent.textContent = "Percentage: " + inputs[9].value + "%";

    education.appendChild(eduTitle);
    education.appendChild(educationDetails);
    education.appendChild(college);
    education.appendChild(percent);

    main.appendChild(education);

    // === SKILLS ===
    let skills = document.createElement("section");
    skills.classList.add("skills");

    let skillTitle = document.createElement("h2");
    skillTitle.textContent = "Skills";

    skills.appendChild(skillTitle);

// Then add skill items below...

    let skillArray = textarea[1].value.split(",");
    skillArray.forEach(function (skill) {
        let skillTag = document.createElement("h6");
        skillTag.textContent = skill.trim();
        skills.appendChild(skillTag);

    });

    main.appendChild(skills);

    // === PROJECTS ===
    let projects = document.createElement("section");
    projects.classList.add("projects");

    let projectTitle = document.createElement("h2");
    projectTitle.textContent = "Projects";

    let projectDetails = document.createElement("div")
    projectDetails.classList.add("project-details");

    let projectName = document.createElement("h6");
    projectName.textContent = inputs[10].value;

    let projectLink = document.createElement("a");
    projectLink.href = inputs[11].value;
    projectLink.textContent = "Project Link";
    projectLink.target = "_blank";

    let projectExplanation = document.createElement("p");
    projectExplanation.textContent = textarea[2].value;

    projectDetails.appendChild(projectName);
    projectDetails.appendChild(projectLink);
    projects.appendChild(projectTitle);
    projects.appendChild(projectDetails);
    projects.appendChild(projectExplanation);

    main.appendChild(projects);

    // Hide form
    formContainer.style.display = "none";
    main.style.display = "block";

    

    // Clear form inputs
    inputs.forEach(function (inp) {
        if (inp.type !== "submit") {
            inp.value = "";
        }
    });

});
