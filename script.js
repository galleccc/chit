const requestURL = 'https://jsonplaceholder.typicode.com/photos'

function sendRequest(method, url) {
    const headers = {
    'Content-Type': 'application/json'
    }

    return fetch(url, {
    method: method,
   // body: JSON.stringify(body), // for POST method only, for Get it should be removed
    headers: headers
    }).then(response => {
    if (response.ok) {
    return response.json()
    }

    return response.json().then(error => {
    const e = new Error('Щось пішло не так')
    e.data = error
    throw e
    })
})
}

sendRequest('GET', requestURL)
.then(
    (data) => {
        console.log(data);
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            console.log(element.name);
            let par = document.createElement("img");
            par.src = element.url;
            document.querySelector(".data").appendChild(par);           
        }

    }
)
.catch(err => console.log(err))

const body = {
name: 'Svjat',
age: 39
}

sendRequest('POST', requestURL, body)
.then(data => console.log(data))
.catch(err => console.log(err))