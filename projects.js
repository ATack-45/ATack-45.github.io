// Fetch all GitHub repositories of a user
export async function fetchGitHubRepos(username) {
    return [
        {
            name: "Clever App",
            url: "https://github.com/ATack-45/Clever-App",
            endpoint: "/Clever-App",
            status: "Active"
        },
        {
            name: "Geo-Game",
            url: "https://github.com/ATack-45/Geo-Game",
            endpoint: "/Geo-Game",
            status: "Active"
        },
        {
            name: "Pico-Probe",
            url: "https://github.com/ATack-45/Pico-Probe",
            endpoint: "/Pico-Probe",
            status: "In Development"
        },
        {
            name: "ATack-45.github.io",
            url: "https://github.com/ATack-45/ATack-45.github.io",
            endpoint: "/ATack-45.github.io",
            status: "Active"
        },
        {
            name: "Team-Map",
            url: "https://github.com/ATack-45/Team-Map",
            endpoint: "/Team-Map",
            status: "In Development"
        },
        {
            name: "PROS-2025",
            url: "https://github.com/ATack-45/PROS-2025",
            endpoint: "/PROS-2025",
            status: "Archive"
        },
        {
            name: "PROS-Project-23-24",
            url: "https://github.com/ATack-45/PROS-Project-23-24",
            endpoint: "/PROS-Project-23-24",
            status: "Archive"
        },
        {
            name: "Functions Practice",
            url: "https://github.com/ATack-45/Functions-Practice",
            endpoint: "/Functions-Practice",
            status: "Archive"
        },
        {
            name: "Simple Game Programming Warm Up",
            url: "https://github.com/ATack-45/simple-game-programming-warm-up",
            endpoint: "/simple-game-programming-warm-up",
            status: "Archive"
        },
        {
            name: "Reinventing the Wheel",
            url: "https://github.com/ATack-45/reinventing-the-wheel",
            endpoint: "/reinventing-the-wheel",
            status: "Archive"
        },
        {
            name: "Alchemy Lab Game",
            url: "https://github.com/ATack-45/Alchemy-lab-build",
            endpoint: "/Alchemy-lab-build",
            status: "Archive"
        },
        {
            name: "Alchemy Lab Game",
            url: "https://github.com/ATack-45/Alchemy-lab-build",
            endpoint: "/Alchemy-lab-build",
            status: "Archive"
        },
        {
            name: "Tower Defence",
            url: "https://github.com/ATack-45/Tower-Defence",
            endpoint: "/Tower-Defence",
            status: "Archive"
        },
        {
            name: "Tower Defence",
            url: "https://github.com/ATack-45/Tower-Defence",
            endpoint: "/Tower-Defence",
            status: "Archive"
        },
        {
            name: "Final Project",
            url: "https://github.com/ATack-45/Final-Project-Web-Build",
            endpoint: "/Final-Project-Web-Build",
            status: "Archive"
        }
    ];
    
    
}

// Fetch the summary file (summary.md or fallback to README.md)
export async function fetchRepoSummary(repo) {
    const summaryFiles = [
        `https://raw.githubusercontent.com/ATack-45/${repo.endpoint}/main/summary.md`,
        
    ];

    for (const file of summaryFiles) {
        try {
            const response = await fetch(file);
            if (response.ok) {
                return await response.text();
            }
        } catch (error) {
            console.log(`Could not fetch ${file}`);
        }
    }

    return "No summary available.";
}

export async function fetchRepoThumb(repo) {
    const thumbUrl = `https://raw.githubusercontent.com/ATack-45/${repo.endpoint}/main/thumb.png`;

    try {
        const response = await fetch(thumbUrl);
        if (response.ok) {
            return thumbUrl; 
        }
    } catch (error) {
        console.log(`Could not fetch ${thumbUrl}`);
    }

    return "GitHub_Logo.png"; 
}

