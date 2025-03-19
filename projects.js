// Fetch all GitHub repositories of a user
export async function fetchGitHubRepos(username) {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    return response.json();
}

// Fetch the summary file (summary.md or fallback to README.md)
export async function fetchRepoSummary(repo) {
    const summaryFiles = [
        `https://raw.githubusercontent.com/${repo.owner.login}/${repo.name}/main/summary.md`,
        
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
    const thumbUrl = `https://raw.githubusercontent.com/${repo.owner.login}/${repo.name}/main/thumb.png`;

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

