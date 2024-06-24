const images = [
    { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05', caption: 'Lush green forest' },
    { src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b', caption: 'Misty mountain lake' },
    { src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff', caption: 'Serene mountain river' },
    { src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e', caption: 'Autumn forest path' },
    { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e', caption: 'Majestic mountain range' },
    { src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d', caption: 'Tranquil forest lake' },
    { src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716', caption: 'Waterfall in the forest' },
    { src: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07', caption: 'Golden sunset over mountains' },
];

let currentIndex = 0;

const mainImage = document.getElementById('mainImage');
const imageCaption = document.getElementById('imageCaption');
const thumbnailsContainer = document.getElementById('thumbnails');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function loadImage(index) {
    mainImage.src = images[index].src;
    imageCaption.textContent = images[index].caption;
    mainImage.classList.add('fade-in');
    setTimeout(() => mainImage.classList.remove('fade-in'), 500);
    updateThumbnails();
}

function updateThumbnails() {
    thumbnailsContainer.innerHTML = '';
    images.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail';
        if (index === currentIndex) {
            thumbnail.style.border = '2px solid #fff';
        }
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.caption;
        thumbnail.appendChild(img);
        thumbnail.addEventListener('click', () => {
            currentIndex = index;
            loadImage(currentIndex);
        });
        thumbnailsContainer.appendChild(thumbnail);
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    loadImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    loadImage(currentIndex);
}

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
});
loadImage(currentIndex);