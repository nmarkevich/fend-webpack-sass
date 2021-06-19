let n=0;

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })

    fetch('https://cat-fact.herokuapp.com/facts')
    .then(res => res.json())
    .then(function(res) {
        const catFact = document.createElement('p')
        document.getElementById('results').appendChild(catFact)
        catFact.innerHTML=res[n].text
        n++
    })
}

export { handleSubmit }
