
async function fetchRandomComic() {
    
    const randomComicNum = Math.floor(Math.random() * 3000) + 1;

    
    const apiUrl = `https://corsproxy.io/?https://xkcd.com/${randomComicNum}/info.0.json`;

    try {
        
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Failed to fetch comic");
        const comicData = await response.json();

        
        document.getElementById('comicTitle').innerText = comicData.title;
        document.getElementById('comicImage').src = comicData.img;
        document.getElementById('comicImage').alt = comicData.alt;
        document.getElementById('comicAlt').innerText = comicData.alt;
        document.getElementById('comicDate').innerText = `Published on: ${comicData.month}/${comicData.day}/${comicData.year}`;
    } catch (error) {
        console.error("Error fetching comic:", error);
        document.getElementById('comicTitle').innerText = "Error fetching comic.";
    }
}


document.getElementById('fetchComic').addEventListener('click', fetchRandomComic);
