class Github {
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Basic ' + btoa('7aa5a917d0f12a7811d3:8f2525724dddfcd5538f203ffaaa648d068da57d')
        }});

        const profileData = await profileResponse.json();

        return {
            profile: profileData
        }
    }
}