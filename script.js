import { fetchGitHubRepos, fetchRepoSummary, fetchRepoThumb } from './projects.js';


// Skills data
 const programmingSkills = [
    { name: 'Python',  color: '#3776AB' },
    { name: 'C++',  color: '#00599C' },
    { name: 'C#',  color: '#2D572C' },
];

const webSkills = [
    { name: 'HTML5', color: '#E34F26' },
    { name: 'CSS3', color: '#1572B6' },
    { name: 'JavaScript', color: '#F7DF1E' },
];

const toolsSkills = [
    { name: 'Git', color: '#F05032' },
    { name: 'VS Code', color: '#007ACC' },
    { name: 'Android studio', color: '#007ACC' },
    { name: 'Unity', color: '#282828' },
    { name: 'Unreal Engine 5', color: '#412227' },
    { name: 'SQL server management studio', color: '#CAC4B0' },
    { name: 'Fusion 360', color: '#9DA1AA' },
    { name: 'Onshape', color: '#61a5c2' }
];

const otherSkills = [
    { name: 'Problem Solving', color: '#FF5722' },
    { name: 'Communication', color: '#9E9764' },
    { name: 'Database Design', color: '#4CAF50' },
    { name: '3D Modeling/Design', color: '#4CAF50' },
    { name: 'UI/UX Design', color: '#979dac' }
];

// Education data
const education = [
    {
        school: 'Unity Christian High School',
        degree: 'High School Diploma',
        field: 'general education',
        startDate: '2021',
        endDate: '2025',
        description: 'enrolled and attended various computer science classes including HMTL, and React Native. Also attended the Careerline Tech Center Junior/Senior Year for sofware and game development. Maintained a 3.6 GPA or above throughout the 4 years.',
        achievements: [
            '8x Honor Roll',
            '3x Robotics Team Captian',
            'Earned 7 college credits via Direct Credit',
            // 'Exellence in Achivement award at Tech Center',
        ],
        image: './images/Unity-Silver-UC-Logo.png'
    },
    {
        school: 'Western Michigan University',
        degree: 'Bachelor of Science Engineering',
        field: 'Computer Engineering',
        startDate: '2025',
        endDate: 'Expected 2029',
        description: 'Accepted with scholarship to pursue a degree in Computer Engineering.',
        achievements: [],
        image: './images/WMU.png'
    }
];

// Job data
const jobs = [
    {
        title: "Student Custodian",
        description: "Student custodian at Hudsonville Christian Elementary school. Worked with a team of other students to maintain the school.",
        responsiblities: [
            'Daily cleaning afterschool everyday',
            'Setup and cleanup for school events',
            'Deep clean and resurface classrooms and hard floors of the whole school over summer break',
        ],
        startDate: "Oct 2022",
        endDate: "August 2023",
        icon: "fa-campground",
        image: './images/HCS.png'
    },
]
// Extracurricular Data
const extracurriculars = [
    {
        title: "Scouts BSA",
        description: "Active Life Scout with leadership experience, both locally and regionally. Also an elected and active Brotherhood member of the Order of the Arrow (National Honor Society for Scouting).",
        achievements: [
            'Attained Life Scout rank (Eagle Scout rank anticipated on March 26, 2025)',
            'Completed National Youth Leadership Training (NYLT)',
            '300+ hours of service project work',
            '4 years of senior troop leadership (planning and running weekly meetings)',
            '4x Mackinac Island Honor Guard participant (1 year as senior leadership)'
        ],
        startDate: "2018",
        endDate: "Present",
        icon: "fa-campground",
        image: './images/BSA.png'
    },
    {
        title: "VEX Robotics",
        description: "Competitive robotics team member. Participated as a team captain, CAD designer, programmer, and notebooker. Received various awards for performance as well as design and notebook skills.",
        achievements: [
            '12x award winner',
            '7x state qualified',
            'Worked together with a team to make a effective robot',
            '30+ hours as a volunteer at regional robotics events'
        ],
        startDate: "2019",
        endDate: "Present",
        icon: "fa-robot",
        image: './images/Vex.png'
    },
    {
        title: "REC Aerial Drone competition",
        description: "Competitive Drone team member. Built and programmed a custom drone to comptete with. Also notebooked the design process",
        achievements: [
            '3x award winner, 1x Midwest regional award',
            'only team to make a custom, carbon fiber drone chassis',
            'Learned about aviation and drone related careers',
        ],
        startDate: "2023",
        endDate: "2024",
        icon: "fa-robot",
        image: './images/Drones.png'
    }
];

// Certifications data
const certifications = [
    {
        title: 'IT Specialist: HTML & CSS',
        issuer: 'Certiport',
        date: 'September, 2023',
        description: 'Certification that covers and proves knowledge of web development with HTML and CSS',
        image: './images/HTML & CSS.png'
    },
    {
        title: 'IC3: Digital Literacy',
        issuer: 'Certiport',
        date: 'October 2023',
        description: 'Certification that consists of 3 seperate exams, showing understanding of the Microsoft application suite, proper and safe navigation of the internet, and the basics of hardware computing',
        image: './images/IC3.png'
    },
    {
        title: 'ETA: Customer Service Specialist',
        issuer: 'Certiport',
        date: 'October 2023',
        description: 'Displays understanding of how to properly answer and help customers as a IT technician.',
        image: './images/ETA badge.jpg'
    },
    {
        title: 'CompTIA: ITF+',
        issuer: 'CompTIA',
        date: 'January 2024',
        description: 'Proves understanding of IT skills of database fundementals, key applications, security, and software development',
        image: './images/ITF.png'
    },
    {
        title: 'Unity Certified User: Programming',
        issuer: 'Certiport',
        date: 'March 2024',
        description: 'Proves knowledge of how to program game systems in C# within the Unity game engine.',
        image: './images/Unity.png'
    }
];

// Dynamically add skills
function renderSkills() {
    const programmingContainer = document.getElementById('programming-skills');
    const webContainer = document.getElementById('web-skills');
    const toolsContainer = document.getElementById('tools-skills');
    const otherContainer = document.getElementById('other-skills');
    
   
    
    addSkills(programmingSkills, programmingContainer);
    addSkills(webSkills, webContainer);
    addSkills(toolsSkills, toolsContainer);
    addSkills(otherSkills, otherContainer);
}

// Dynamically add education
function renderEducation() {
    const container = document.getElementById('education-container');
    
    education.forEach(edu => {
        const col = document.createElement('div');
        col.className = 'col-lg-6 mb-4';
        
        let achievementsList = '';
        if (edu.achievements.length > 0) {
            achievementsList = `
                <h5 class="mt-3">Achievements:</h5>
                <ul>
                    ${edu.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
            `;
        }
        
        col.innerHTML = `
            <div class="activity-card card">
                <div class="row align-items-center h-100 g-0">
                    <div class="col-md-4 justify-content-center ">
                    <img src="${edu.image}" class="img-fluid rounded-start " alt="${edu.school}" style="object-fit: cover;">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h4 class="card-title">${edu.school}</h4>
                            <h5 class="text-primary">${edu.degree} in ${edu.field}</h5>
                            <p class="card-text text-muted">${edu.startDate} - ${edu.endDate}</p>
                            <p class="card-text">${edu.description}</p>
                            ${achievementsList}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        container.appendChild(col);
    });
}

//Dynamically add Extracurriculars
function renderExtracurriculars () {
    const extracurricularsContainer = document.getElementById("extracurriculars-container");

    extracurriculars.forEach(extra => {
        const col = document.createElement('div');
        col.className = 'col-lg-6 mb-4';
        
        let achievementsList = '';
        if (extra.achievements.length > 0) {
            achievementsList = `
                <h5 class="mt-3">Achievements:</h5>
                <ul>
                    ${extra.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
            `;
        }
        
        col.innerHTML = `
            <div class="activity-card card">
                <div class="row align-items-center h-100 g-0">
                    <div class="col-md-4 justify-content-center">
                        <img src="${extra.image}" class="img-fluid rounded-start" alt="${extra.title}" style="object-fit: cover;">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h4 class="card-title">${extra.title}</h4>
                            <p class="card-text text-muted">${extra.startDate} - ${extra.endDate}</p>
                            <p class="card-text">${extra.description}</p>
                            ${achievementsList}
                        </div>
                    </div>
                </div>
            </div>
        `;
        

        extracurricularsContainer.appendChild(col);
    });
}

//Dynamically add Jobs
function renderJobs () {
    const jobContainer = document.getElementById("jobs-container");

    jobs.forEach(job => {
        const col = document.createElement('div');
        col.className = 'col-lg-6 mb-4';
        
        let responsiblitiesList = '';
        if (job.responsiblities.length > 0) {
            responsiblitiesList = `
                <h5 class="mt-3">Responsiblities:</h5>
                <ul>
                    ${job.responsiblities.map(responsiblities => `<li>${responsiblities}</li>`).join('')}
                </ul>
            `;
        }
        
        col.innerHTML = `
            <div class="activity-card card">
                <div class="row align-items-center h-100 g-0">
                    <div class="col-md-4 justify-content-center">
                        <img src="${job.image}" class="img-fluid rounded-start" alt="${job.title}" style="object-fit: cover;">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h4 class="card-title">${job.title}</h4>
                            <p class="card-text text-muted">${job.startDate} - ${job.endDate}</p>
                            <p class="card-text">${job.description}</p>
                            ${responsiblitiesList}
                        </div>
                    </div>
                </div>
            </div>
        `;
        

        jobContainer.appendChild(col);
    });
}

// Dynamically add certifications
function renderCertifications() {
    const container = document.getElementById('certifications-container');
    
    certifications.forEach(cert => {
        const col = document.createElement('div');
        col.className = 'col-lg-4 col-md-6 mb-4';
        
        col.innerHTML = `
            <div class="cert-card card">
                <img src="${cert.image}" class="card-img-top" style="max-height: 100%" alt="${cert.title}">
                <div class="card-body">
                    <h4 class="card-title">${cert.title}</h4>
                    <p class="card-text text-muted">Issued by ${cert.issuer} • ${cert.date}</p>
                    <p class="card-text">${cert.description}</p>
                </div>
            </div>
        `;
        
        container.appendChild(col);
    });
}

// Dynamically add projects
async function renderProjects() {
    const container = document.getElementById('projects-container');
    const repos = await fetchGitHubRepos("Atack-45");

    for (const repo of repos) {
        const summary = await fetchRepoSummary(repo,"Atack-45");
        const thumb = await fetchRepoThumb(repo);
        const col = document.createElement('div');
        let status;
        col.className = 'col-lg-6 mb-4';
        
        switch (repo.status){
            case ("In Development"):
                status = "status-development"
                break
            case ("Active"):
                status = "status-active"
                break
            case ("Archive"):
                status = "status-archive"
                break
            
        }
        col.innerHTML = `
            <div class="project-card card">
                 <img src="${thumb}" class="card-img-top project-image" alt="${repo.name}">
                <div class="card-body">
                    <h4 class="card-title">${repo.name}</h4>
                    <span class="status-circle ${status}">${repo.status}</span>
                    <p class="card-text">${summary}</p>
                    <a href="${repo.url}" class="btn btn-primary">View Project</a>
                </div>
            </div>
        `;
        
        container.appendChild(col);
    }
}

// Initialize all renderers
document.addEventListener('DOMContentLoaded', async () => {
    renderSkills();
    renderEducation();
    renderCertifications();
    renderProjects();
    renderExtracurriculars();
    renderJobs();
});



// not used


function addSkills(skills, container) {
    skills.forEach(skill => {
        const badge = document.createElement('div');
        badge.className = 'skill-badge';
        badge.style.backgroundColor = skill.color;
        badge.style.color = '#ffffff';
        badge.textContent = skill.name;
        container.appendChild(badge);
    });
}
// Add new education entry function
function addEducation(school, degree, field, startDate, endDate, description, achievements, image) {
    education.push({school, degree, field, startDate, endDate, description, achievements, image});
    document.getElementById('education-container').innerHTML = '';
    renderEducation();
}

// Add new Extracurricular entry function
function addExtracurricula(school, degree, field, startDate, endDate, description, achievements, image) {
    education.push({school, degree, field, startDate, endDate, description, achievements, image});
    document.getElementById('extracurriculars-container').innerHTML = '';
    renderExtracurriculars();
}

// Add new certification function
function addCertification(title, issuer, date, description, image) {
    certifications.push({title, issuer, date, description, image});
    document.getElementById('certifications-container').innerHTML = '';
    renderCertifications();
}

// Add new project function
function addProject(title, description, tech, image, link) {
    projects.push({title, description, tech, image, link});
    document.getElementById('projects-container').innerHTML = '';
    renderProjects();
}
