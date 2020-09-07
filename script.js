
const searchUrl = 'https://api.github.com/users/USERNAME/repos'

function getUrl() {
    const apiUrl = searchUrl.replace("USERNAME", $("#js-username").val());
    console.log(apiUrl);

    fetch(apiUrl)
    .then(response => response.json())
    .then(responseJson => displayUserRepos(responseJson)); 
}

function displayUserRepos(responseJson) {
    console.log(responseJson);
    $('#results-list').empty();
    for (let i = 0; i < responseJson.length; i++) {
        $('#results-list').append(
            `<li>
                <h3><a href="${responseJson[i].html_url}">${responseJson[i].name}</a></h3>
                <p>
            </li>`
        )
    };
}

function clickFind() {
    $('form').submit(event => {
        event.preventDefault(); 
        getUrl();
    });
}

$(clickFind);