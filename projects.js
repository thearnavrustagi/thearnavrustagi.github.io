const PROJECTS = 'projects.json'

main = () => {
    initialize_project_urls(PROJECTS)
}

initialize_project_urls = projects => {
    var project_urls
    fetch (projects).
    then  (resp => resp.json()).
    then  (object => project_urls=object.src).
    then  ( _ => load_projects(project_urls))
}

load_projects = project_urls => {
    for (urlno in project_urls) {
        console.log('sending request' +project_urls[urlno])
        fetch (project_urls[urlno]).
        then  (resp => resp.text()).
        then  (innerhtml => {
            console.log('adding'+innerhtml)
            document.getElementById('holder').innerHTML += `
                ${innerhtml}
            `
        })
    }
}

main ()