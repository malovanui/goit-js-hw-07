import { galleryItems } from './gallery-items.js';
import doGalleryTemplate from './galleryTemplate.js';

// Change code below this line
let instance;

const refs = {
    galleryDiv: document.querySelector('.gallery'),
};

const render = () => {
    const galleryList = galleryItems.map(doGalleryTemplate).join('');

    refs.galleryDiv.insertAdjacentHTML('beforeend', galleryList)
}

render();



const onImageClick = (e) => { 
    if (e.target.nodeName !== 'IMG') {
        return
    } 
    e.preventDefault();

    const currentImg = galleryItems.find(item => e.target.alt === item.description);
    const originalSizeScr = currentImg.original;
    
    instance = basicLightbox.create(`
    <img src="${originalSizeScr}" width="1280">
    `);

    instance.show(); 

};


const onEscPress = (e) => { 
    if (instance.visible()) {
        if (e.code === 'Escape') {
        instance.close();
        console.log('ecs')
    }
   } 
   
};

//--------Event Listeners
refs.galleryDiv.addEventListener('click', onImageClick);
document.addEventListener('keydown', onEscPress);