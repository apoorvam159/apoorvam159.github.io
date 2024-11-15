const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const imageFilenames = ['puppy.jpg', 'laughing.jpg', 'sitting.jpg', 'Mimage3.jpeg', 'Mimage6.jpg'];

const altTexts = {
    'puppy.jpg': 'woman holding a puppy',
    'laughing.jpg': 'girl sitting at table laughing',
    'sitting.jpg': 'puppy sitting down',
    'Mimage3.jpeg': 'sign board in kerala, india',
    'Mimage6.jpg': 'old coin with malayalam language'
};

imageFilenames.forEach(filename => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `/js/${filename}`);
    newImage.setAttribute('alt', altTexts[filename]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', newImage.getAttribute('src'));
        displayedImage.setAttribute('alt', newImage.getAttribute('alt'));
    });
});

btn.addEventListener('click', () => {
    if (btn.getAttribute('class') === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});