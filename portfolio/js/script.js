// Example project data
const projects = [
    {
        title: "Jupyter Python Project",
        description: "A Python project demonstrating data analysis and visualization using Jupyter Notebook.",
        images: ["portfolio\assets\python1.jpg", "portfolio\assets\python2.jpg", "portfolio\assets\python3.jpg"],
        link: "portfolio\assets\FinalProjectAWalia.html" // Link to the exported HTML file
    },
    {
        title: "Project 2",
        description: "Description for Project 2.",
        images: ["/portfolio/assets/project2-1.jpg", "/portfolio/assets/project2-2.jpg"],
        link: "https://example.com/project2"
    }
];

// Function to generate project cards dynamically
function loadProjects() {
    const container = document.getElementById('project-container');
    projects.forEach((project, index) => {
        const card = `
            <div class="project-card">
                <div class="carousel" id="carousel-${index}">
                    <div class="carousel-images">
                        ${project.images.map(img => `<img src="${img}" alt="Project Image">`).join('')}
                    </div>
                    <button class="prev">&#10094;</button>
                    <button class="next">&#10095;</button>
                </div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">View Project</a>
            </div>
        `;
        container.innerHTML += card;
    });

    // Initialize carousel functionality after loading projects
    initializeCarousels();
}

// Carousel functionality
function initializeCarousels() {
    document.querySelectorAll('.carousel').forEach(carousel => {
        const images = carousel.querySelector('.carousel-images');
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');
        const totalImages = images.children.length;
        let currentIndex = 0;

        function updateCarousel() {
            images.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
            updateCarousel();
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
            updateCarousel();
        });
    });
}

// Initialize the projects and carousel
document.addEventListener('DOMContentLoaded', loadProjects);
