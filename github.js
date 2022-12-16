class Github {
    async getUser(user) {
        // Making first request for user data
        const profileResponse = await fetch(`https://api.github.com/users/${user}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + btoa('7aa5a917d0f12a7811d3:dcc4549d753002011686a889b184c824728b40c3')
            }
        });
        const profileData = await profileResponse.json();
        // Making second request for user repositories
        const profileResponse2 = await fetch(`https://api.github.com/users/${user}/repos`, {
            method: "GET",
            headers: {
                'Authorization': 'Basic ' +btoa('7aa5a917d0f12a7811d3:dcc4549d753002011686a889b184c824728b40c3')
            }
        });
        const profileData2 = await profileResponse2.json();

        return {
            profile: profileData,
            repo: profileData2
        }
    }
}