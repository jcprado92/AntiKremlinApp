const key = process.env.REACT_APP_API_KEY;

fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${key}`)
    .then(response => response.json())
    .then(data => console.log(data))
    