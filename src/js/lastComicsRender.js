import { getLastComics } from './apiServices.js';
import { refs } from './refs.js';

export async function lastComicsRender() {
  const {
    data: { results },
  } = await getLastComics();

  const markup = results
    .map(({ id, title, thumbnail, creators }) => {
      const writers = creators.items
        .filter(({ role }) => {
          return role === 'writer';
        })
        .map(({ name }) => {
          return name;
        })
        .join(', ');
      return `<li class="last-comics-item" id=${id}>
        <img
          class="last-comics-item-photo"
          src=${thumbnail.path}.${thumbnail.extension}
          alt=${title}
        />
        <h3 class="last-comics-item-title">${title}</h3>
        <p class="last-comics-item-author">${writers}</p>
      </li>`;
    })
    .join('');

  refs.lastComicsList.insertAdjacentHTML('beforeend', markup);
}

lastComicsRender();
