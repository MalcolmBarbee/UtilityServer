const GETRequest = (url, cb) => {
    const req = new XMLHttpRequest()
    console.log(req)
    req.open('GET', url)
    req.addEventListener('load', res => {
        const data = JSON.parse(res.currentTarget.response);
        cb(data)
    })
    req.send();
}

function getGif() {

const search = ''

const baseURL = `http://api.giphy.com/v1/gifs/search?${search}&api_key=vEY7zpgFBfflHQTnrZaGIALieqEtAu0u`

    const url = baseURL + search;

    GETRequest(url, data => {
        console.log(data);
        });
    };



function dataFetch(data) {

    console.log(url)
    console.log(data)

}

module.exports = {
    GETRequest,
    getGif,
    dataFetch
}