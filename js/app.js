const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");
const bioContainer = document.querySelector(".main__profile-bio");

const client_id = "Iv1.f6caebe217ab3b44";
const client_secret = "1a259f9cb1dba567baa6aba560d101ce8783d585";


// For fetching the information of user using github API.
// Async await call.
const fetchUsers = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);


    const data = await api_call.json();
    return { data }; // same as { data : data } written is ES6 feature.
};



const showData = () => {
    fetchUsers(inputValue.value).then((res) => {
        console.log(res);

        // All the properties that can be applied for any github user.
        nameContainer.innerHTML = `Name: <span class="main__profile-value"> ${res.data.name} </span>`;
        unContainer.innerHTML = `Username: <span class="main__profile-value"> ${res.data.login} </span>`;
        reposContainer.innerHTML = `Repositories: <span class="main__profile-value"> ${res.data.public_repos} </span>`;
        urlContainer.innerHTML = `URL: <span class="main__profile-value"> ${res.data.html_url} </span>`;
        bioContainer.innerHTML = `BIO: <span class="main__profile-bio"> ${res.data.bio} </span>`;
    })
};


searchButton.addEventListener("click", () => {
    showData();
})