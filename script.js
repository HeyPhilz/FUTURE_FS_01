// ============================================
// PROJECT DATA - STORED LOCALLY IN JAVASCRIPT
// ============================================

const projectsData = [
    {
        id: 4,
        title: "MeetMe",
        description: "A stunning portfolio website showcasing projects, skills, and work experience with smooth animations.",
        image: "<img src='image.png' alt='Image' style='max-width: 100%; height: auto;'>",
        technologies: ["HTML", "CSS", "JavaScript", "Animations", "Github"],
        details: "Designed and developed a creative portfolio website with smooth scrolling, lightweight animated sections, and responsive layout. The site includes project showcase with the status of said projects, skills section, and contact.",
        link: "https://heyphilz.github.io/FUTURE_FS_01/",
        status: "Completed"
    },
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "Yet to be added.",
        image: "?",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
        details: "Yet to be added.",
        link: "https://github.com/HeyPhilz/FUTURE_FS_02",
        status: "In Drafts"
    },
    {
        id: 2,
        title: "LeadFlow CRM",
        description: "A secure web app, designed to aid track Leads on customers",
        image: "💼",
        technologies: ["HTML", "CSS", "JavaScript", "React", "Krita", "Nodejs", "Mongodb", "Github"],
        details: "A CRM (Customer Relationship Management) offering centralized platform that helps businesses manage interactions with current and potential customers, store contact information, and automate sales and marketing tasks through a web browser",
        link: "https://heyphilz.github.io/FUTURE_FS_02/",
        status: "Completed"
    },
    {
        id: 3,
        title: "FocusFlow",
        description: "FocusFlow allows you to log in your daily taks and be productive in a gamefied way.",
        image: "<img src='Logo.svg' alt='FocusFlow' style='max-width: 100%; height: auto;'>",
        technologies: ["React","HTML", "Node.js", "MongoDB", "JavaScript", "Github", "TailWind CSS"],
        details: "Developed a Time-blocking, task management app with drag-and-drop functionality, and MongoDB data storage for data persistence. Includes task filtering",
        link: "https://github.com/sxhilow/FocusFlow",
        status: "Completed"
    },
    {
        id: 5,
        title: "SPCL-hub",
        description: "Yet to be added, View Details",
        image: "?",
        technologies: ["Android Studio", "Java", "XML", "Ibis Paint X", "GitHub", "Krita","Capcut"],
        details: "It's Mobile app for SPCL Squadmates to connect, share and review eachother's gameplay videos, discuss strategies, and plan gaming sessions together.",
        link: "https://github.com/HeyPhilz/SPCLDreamTeam",
        status: "In Drafts"
    }
];

// ============================================
// CERTIFICATIONS DATA - STORED LOCALLY IN JAVASCRIPT
// ============================================

const certificationsData = [
    {
        id: 1,
        title: "Artificial Intelligence Fundamentals",
        issuer: "IBM",
        date: "29 March 2025",
        icon: "<img src='ibm.png' alt='IBM' style='max-width: 100%; height: auto;'>",
        description: "Comprehensive introduction to AI concepts, machine learning algorithms"
    },
    {
        id: 2,
        title: "Artificial Intelligence Fundamentals with Capstone Project",
        issuer: "IBM",
        date: "29 March 2025",
        icon: "<img src='ibm.png' alt='IBM' style='max-width: 100%; height: auto;'>",
        description: "Comprehensive introduction to AI concepts, machine learning algorithms, and practical capstone project implementation."
    }
];

// ============================================
// FUNCTION TO LOAD PROJECTS
// ============================================

function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';

    projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        const statusClass = project.status === 'Completed' ? 'status-completed' : 'status-in-progress';
        projectCard.innerHTML = `
            <div class="project-image">${project.image}</div>
            <div class="project-content">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                    <h3 class="project-title">${project.title}</h3>
                    <span class="project-status ${statusClass}">${project.status}</span>
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <button class="project-button" onclick="openModal(${project.id})">View Details</button>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// ============================================
// MODAL FUNCTIONS
// ============================================

function openModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (project) {
        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `
            <h2 style="margin-bottom: 1rem; color: #333;">${project.title}</h2>
            <div style="font-size: 4rem; margin-bottom: 1rem; text-align: center;">${project.image}</div>
            <p style="color: #555; line-height: 1.8; margin-bottom: 1.5rem;">${project.details}</p>
            <div style="margin-bottom: 1.5rem;">
                <h4 style="margin-bottom: 0.8rem; color: #333;">Technologies Used:</h4>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
            <a href="${project.link}" class="project-button" style="display: inline-block; text-decoration: none;">Visit Project</a>
        `;
        document.getElementById('projectModal').style.display = 'block';
    }
}

function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// ============================================
// CERTIFICATIONS SPINNER VARIABLES
// ============================================

let currentCertificationIndex = 0;

// ============================================
// FUNCTION TO LOAD CERTIFICATIONS SPINNER
// ============================================

function loadCertificationsSpinner() {
    displayCertification(currentCertificationIndex);
    createDots();
}

function displayCertification(index) {
    const spinnerDisplay = document.getElementById('spinnerDisplay');
    const cert = certificationsData[index];
    
    spinnerDisplay.innerHTML = `
        <div class="certification-icon">${cert.icon}</div>
        <h3 class="certification-title">${cert.title}</h3>
        <p class="certification-issuer">${cert.issuer}</p>
        <p class="certification-date">${cert.date}</p>
        <p class="certification-description">${cert.description}</p>
    `;
    
    updateDots();
}

function nextCertification() {
    currentCertificationIndex = (currentCertificationIndex + 1) % certificationsData.length;
    displayCertification(currentCertificationIndex);
}

function prevCertification() {
    currentCertificationIndex = (currentCertificationIndex - 1 + certificationsData.length) % certificationsData.length;
    displayCertification(currentCertificationIndex);
}

function createDots() {
    const spinnerDots = document.getElementById('spinnerDots');
    spinnerDots.innerHTML = '';
    
    certificationsData.forEach((cert, index) => {
        const dot = document.createElement('div');
        dot.className = 'spinner-dot';
        if (index === currentCertificationIndex) {
            dot.classList.add('active');
        }
        dot.onclick = () => {
            currentCertificationIndex = index;
            displayCertification(currentCertificationIndex);
        };
        spinnerDots.appendChild(dot);
    });
}

function updateDots() {
    const dots = document.querySelectorAll('.spinner-dot');
    dots.forEach((dot, index) => {
        if (index === currentCertificationIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// ============================================
// FUNCTION TO GET PROJECTS FROM LOCAL STORAGE
// ============================================

function saveProjectsToLocalStorage() {
    localStorage.setItem('meetMeProjects', JSON.stringify(projectsData));
}

function getProjectsFromLocalStorage() {
    const stored = localStorage.getItem('meetMeProjects');
    if (stored) {
        return JSON.parse(stored);
    }
    return projectsData;
}

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Save projects to local storage
    saveProjectsToLocalStorage();
    
    // Load and display projects
    loadProjects();
    
    // Load and display certifications spinner
    loadCertificationsSpinner();
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    console.log('MeetMe Portfolio loaded successfully!');
    console.log('Stored projects:', getProjectsFromLocalStorage());
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Function to add new projects to local storage
function addProjectToLocalStorage(newProject) {
    const projects = getProjectsFromLocalStorage();
    const maxId = Math.max(...projects.map(p => p.id), 0);
    newProject.id = maxId + 1;
    projects.push(newProject);
    localStorage.setItem('meetMeProjects', JSON.stringify(projects));
    return newProject;
}

// Function to update a project in local storage
function updateProjectInLocalStorage(projectId, updatedProject) {
    const projects = getProjectsFromLocalStorage();
    const index = projects.findIndex(p => p.id === projectId);
    if (index !== -1) {
        projects[index] = { ...projects[index], ...updatedProject };
        localStorage.setItem('meetMeProjects', JSON.stringify(projects));
        return projects[index];
    }
    return null;
}

// Function to delete a project from local storage
function deleteProjectFromLocalStorage(projectId) {
    const projects = getProjectsFromLocalStorage();
    const filtered = projects.filter(p => p.id !== projectId);
    localStorage.setItem('meetMeProjects', JSON.stringify(filtered));
    return true;
}
deleteProjectFromLocalStorage(1);

// Example: How to use the functions
/*
// Add a new project
const newProject = {
    title: "New Project",
    description: "Project description",
    image: "🎨",
    technologies: ["HTML", "CSS"],
    details: "Detailed description of the project",
    link: "#"
};
addProjectToLocalStorage(newProject);

// Update a project
updateProjectInLocalStorage(1, { title: "Updated Title" });

// Delete a project
deleteProjectFromLocalStorage(1);

// Get all projects
console.log(getProjectsFromLocalStorage());
*/
