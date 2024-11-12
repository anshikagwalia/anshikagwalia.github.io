
const filenames = ['Github\img\mountains.jpg', 'Github\img\tiger.jpg', 'Github\img\panda.jpg', 'Github\img\parrot.jpg', 'Github\img\deer.jpg', ];


const altTexts = {
  'Github\img\mountains.jpg': 'Pretty mountains',
  'Github\img\tiger.jpg': 'A tiger',
  'Github\img\panda.jpg': 'A red panda',
  'Github\img\parrot.jpg': 'A parrot',
  'Github\img\deer.jpg': 'A deer'
};


const thumbBar = document.querySelector('.thumb-bar');
const displayedImg = document.querySelector('.displayed-img');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


for (const filename of filenames) {
  
  const newImage = document.createElement('img');
  
  
  newImage.setAttribute('src', filename);
  newImage.setAttribute('alt', altTexts[filename]);

  
  thumbBar.appendChild(newImage);

  
  newImage.addEventListener('click', () => {
    
    displayedImg.setAttribute('src', filename);
    displayedImg.setAttribute('alt', altTexts[filename]);
  });
}


btn.addEventListener('click', () => {
  const isDark = btn.getAttribute('class') === 'dark';

  
  btn.setAttribute('class', isDark ? 'light' : 'dark');
  btn.textContent = isDark ? 'Lighten' : 'Darken';

  
  overlay.style.backgroundColor = isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)';
});