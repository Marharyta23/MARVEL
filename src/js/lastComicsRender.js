import { getLastComics } from './lastComicsAPI';
import { refs } from './refs';

const lastComicsList = refs.lastComicsList;

export async function lastComicsRender() {
  const { data } = await getLastComics();
  console.log(data.results);
}

lastComicsRender();
