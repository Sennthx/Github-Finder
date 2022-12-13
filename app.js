// Init
const github = new Github;

// userInput
const userInput = document.querySelector("#user-input");

// userInput event listener
userInput.addEventListener("keyup", (e) => {
    // Get inpu text
    const userText = e.target.value;

    if(userText !== "") {
        // Make http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === "Not Found") {
                // Show alert
                
            } else {
                // Show profile
            }
        })
    } else {
        // Clear the profile
    }
})