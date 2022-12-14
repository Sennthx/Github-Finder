// init
const github = new Github;

const userSearch = document.querySelector("#user-search");

// Adding event listener to user search input
userSearch.addEventListener("keyup", (e) => {
    const userText = e.target.value;

    if(userText !== "") {
        // Make http call
        github.getUser(userText)
        .then(data => {
        if(data.profile.message === "Not Found") {
        }
        else {
            console.log(data);
        }
        })
    }
    else {

    }
});