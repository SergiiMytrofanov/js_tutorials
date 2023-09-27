const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const ImageList = document.querySelector('.gallery');
ImageList.classList.add('gallery-container');

const galleryItems = images
  .map((image) => `<li class="gallery-item"><img class="gallery-image" src="${image.url}" alt="${image.alt}" ></li>`
  ).join('');

ImageList.insertAdjacentHTML('afterbegin', galleryItems);
// console.dir(galleryItems);
const styles = `
  .gallery-container {
    display: flex;
    gap: 30px;
    list-style: none;
    
    }

    .gallery-image{
    width: 100%;
    height: 100%;
    object-fit: cover;
  
  }`;

const styleElement = document.createElement('style');
styleElement.textContent = styles;

document.head.append(styleElement);