import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryConteiner = document.querySelector('.gallery');
const galleryItemMarkup = creatGalleryItemMarkup(galleryItems);

galleryConteiner.insertAdjacentHTML('beforeend', galleryItemMarkup);

galleryConteiner.addEventListener('click',onGalleryModalClick); 

function creatGalleryItemMarkup(galleryItems) {
return galleryItems.map(({ preview, original, description }) => {
return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image"
         src=${preview}
         data-source=${original}
         alt=${description}/>
        </a>
    </div>`;
    }).join("");

};

function onGalleryModalClick(e) {
    e.preventDefault();
    const isGalleryItem = e.target.classList.contains("gallery__image");
  if (!isGalleryItem) {
    return;
  }
    const sourceImg = e.target.dataset.source;
    
    const instance = basicLightbox.create(`<img src="${sourceImg}">`, {
        onShow: () => {
            document.addEventListener("keydown", onCloseEscape);
        },
        onClose: () => {
            document.addEventListener("keydown", onCloseEscape);
        },
    });

instance.show() 

function onCloseEscape(e) {
    if (e.code !== "Escape") {
        return;
    }
    instance.close();  
}
    } 
console.log(galleryItems);
