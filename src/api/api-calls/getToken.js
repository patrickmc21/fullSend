const getToken = async (temporaryToken) => {
    const history = window.location.href;
    const token = history.substr(history.length - 40);
    const url = 'http://localhost:3100/tokenexchange';
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify({
            token: token
        })
    }

    const response = await fetch(url, options)
    const data = await response.json();
    return data;
}

export default getToken