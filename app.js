// init github
const github = new Github;
// init UI
const ui = new UI;
const userSearch = document.querySelector("#user-search");

// Adding event listener to user search input
userSearch.addEventListener("keyup", (e) => {
    const userText = e.target.value;
    if (userText !== "") {
        // Make http call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === "Not Found") {
                    // Show allert
                    ui.showAlert("User is not found!")
                }
                else {
                    // Show profile
                    ui.showProfile(data.profile);
                    if(data.profile.public_repos > 0) {
                        ui.showRepo(data.repo.slice(0,5));
                    }
                }
            })
    }
    else {
        document.querySelector("#profile-results").innerHTML = "";
        document.querySelector("#profile-repo").innerHTML = "";
        document.querySelector("#alert").innerHTML = "";
        // Clear profile
    }
});