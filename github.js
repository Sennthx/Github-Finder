class Github {
    async getUser(user) {
        // Making first request for user data
        const profileResponse = await fetch(`https://api.github.com/users/${user}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + btoa('process.env.GITHUB_CLIENT_+_SECRET')
            }
        });
        const profileData = await profileResponse.json();
        // Making second request for user repositories
        const profileResponse2 = await fetch(`https://api.github.com/users/${user}/repos`, {
            method: "GET",
            headers: {
                'Authorization': 'Basic ' +btoa('process.env.GITHUB_CLIENT_+_SECRET')
            }
        });
        const profileData2 = await profileResponse2.json();

        return {
            profile: profileData,
            repo: profileData2
        }
    }
}
