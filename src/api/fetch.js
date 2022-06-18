const key = process.env.REACT_APP_API_KEY;

export function getData(){
    fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${key}&q=kidcudi`)
        .then(response => response.json())
        .then(data => console.log(data))
}

// getData();