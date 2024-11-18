// assignment11.js

// Function to fetch and display a random xkcd comic
async function fetchRandomComic() {
    // Generate a random comic number between 1 and 3000
    const randomComicNum = Math.floor(Math.random() * 3000) + 1;

    // Use the proxy service to access the xkcd API
    const apiUrl = `https://corsproxy.io/?https://xkcd.com/${randomComicNum}/info.0.json`;

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Failed to fetch comic");
        const comicData = await response.json();

        // Update the comic's title, image, alt text, and date
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

// Add event listener to the button
document.getElementById('fetchComic').addEventListener('click', fetchRandomComic);
