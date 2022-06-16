const key = process.env.REACT_APP_API_KEY;

const getData = () => {
    fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${key}&q=kidcudi`)
        .then(response => response.json())
        .then(data => console.log(data))
}


getData();
    


// Url2 = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=channel&q=${searchQuery}&safeSearch=none&key=${process.env.REACT_APP_YOUTUBE_API_KEY}

// const keys = { part: snippet,
//                 maxRessults:1,
//                 type: channel,
//                 q: ,
//                 safeSearch:none,
//                 key: actualKey}

