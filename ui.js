class UI {
  constructor() {
    this.profile = document.querySelector("#profile-results");
    this.repo = document.querySelector("#profile-repo");
    this.alert = document.querySelector("#alert");
  }

  showProfile(user) {
    this.profile.innerHTML = 
            `<div class="card mx-auto my-5 w-75">
            <div class="card-header">
                <h4 class="mb-0">Search Result</h4>
            </div>
            <div class="card-body">
                <div class="profile-data">
                    <div class="row">
                        <div class="col-4 d-flex flex-column" id="left-col">
                            <div id="image-container"><img src="${user.avatar_url}" alt="" width="100%"></div>
                            <div><a href="${user.html_url}" target="_blank"><button class="btn btn-light mt-3 border border-2 border-primary w-100" type="button">View Profile</button></a></div>
                        </div>
                        <div class="col-8 fs-5" id="right-col">
                            <div class="grid w-100 fs-5">
                                <span class="badge bg-success px-2">Public Repos:
                                <span class="text-light">${user.public_repos}</span>
                                </span>
                                <span class="badge bg-secondary px-2">Public Gists:
                                <span class="text-light">${user.public_gists}</span>
                                </span>
                                <span class="badge bg-info px-2">Followers:
                                <span class="text-light">${user.followers}</span>
                                </span>
                                <span class="badge bg-warning px-2">Following:
                                <span class="text-light">${user.following}</span>
                                </span>
                            </div>
                            <table class="table mt-2 fs-5">
                                <thead><th></th></thead>
                                <tbody>
                                    <tr><td>Company:<span class="text-secondary"> ${user.company}</span></td></tr>
                                    <tr><td>Website/Blog:<span class="text-secondary"> ${user.blog}</span></td></tr>
                                    <tr><td>Location:<span class="text-secondary"> ${user.location}</span></td></tr>
                                    <tr><td>Member since:<span class="text-secondary"> ${user.created_at}</span></td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
        this.alert.innerHTML = "";
  }

  showRepo(repoArr) {
    let repoRows = "";
    for(let i = 0; i < repoArr.length; i++) {
      
      repoRows +=     
         `<div class="row py-3 border border-secondary border-top-1 border-bottom-1">
              <div class="col-5 fw-bold fs-5 ps-3" id="repo-title"><a href="${repoArr[i].html_url}" target="_blank" id="repo-link">${repoArr[i].name}</a></div>
              <div class="col-7">
                  <div class="grid w-100 fs-5">
                      <span class="badge bg-success px-2 bt-5 ">Stars: <span class="text-light">${repoArr[i].stargazers_count}</span></span>
                      <span class="badge bg-secondary px-2 bt-5">Watchers: <span class="text-light">${repoArr[i].watchers}</span></span>
                      <span class="badge bg-info px-2 bt-5">Forks: <span class="text-light">${repoArr[i].forks}</span></span>
                  </div>
              </div>
          </div>`
    }
    this.repo.innerHTML = 
    `<div class="card mx-auto w-75 ">
        <div class="card-header"><h4 class="mb-0">Lates Repos</h4></div>
      <div class="card-body">
          <div class="container w-100">
            ${repoRows}
          </div>
      </div>
      </div>`
      this.alert.innerHTML = "";
  }

  showAlert(message) {
    this.alert.innerHTML = 
    `<div class="card mx-auto mt-4 w-75 alert alert-danger border border-2 border-primary">
        <div class="card-body py-0">
            <div class="row fs-5">
                ${message}
            </div>
        </div>
    </div>`
    this.profile.innerHTML = "";
    this.repo.innerHTML = "";
  }
}