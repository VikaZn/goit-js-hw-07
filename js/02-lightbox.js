import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryConteiner = document.querySelector('.gallery');
const galleryItemMarkup = creatGalleryItemMarkup(galleryItems);

galleryConteiner.insertAdjacentHTML('beforeend', galleryItemMarkup);



function creatGalleryItemMarkup(galleryItems) {
return galleryItems.map(({ preview, original, description }) => {
return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image"
         src=${preview}
         alt=${description}/>
        </a>
    </div>`;
    }).join("");

};
const modalLightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});


