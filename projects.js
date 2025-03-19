// Fetch all GitHub repositories of a user
export async function fetchGitHubRepos(username) {
    return [
        {
            name: "Geo-Game",
            url: "https://github.com/ATack-45/Geo-Game",
            endpoint: "/Geo-Game"
        },
        {
            name: "Pico-Probe",
            url: "https://github.com/ATack-45/Pico-Probe",
            endpoint: "/Pico-Probe"
        },
        {
            name: "ATack-45.github.io",
            url: "https://github.com/ATack-45/ATack-45.github.io",
            endpoint: "/ATack-45.github.io"
        },
        {
            name: "Team-Map",
            url: "https://github.com/ATack-45/Team-Map",
            endpoint: "/Team-Map"
        },
        {
            name: "PROS-2025",
            url: "https://github.com/ATack-45/PROS-2025",
            endpoint: "/PROS-2025"
        },
        {
            name: "PROS-Project-23-24",
            url: "https://github.com/ATack-45/PROS-Project-23-24",
            endpoint: "/PROS-Project-23-24"
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

    return "Github_Logo.png"; 
}

