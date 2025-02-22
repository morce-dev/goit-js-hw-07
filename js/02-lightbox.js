import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const galleryList = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`
  )
  .join("");

galleryContainer.insertAdjacentHTML("beforeend", galleryList);

const galleryHandler = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

galleryHandler.on("show.simplelightbox");
