import axios from 'axios';
import MD5 from 'crypto-js/md5';

axios.defaults.baseURL = 'https://gateway.marvel.com';

const PUBLIC_API_KEY = 'bb59b27f1efca5bf3b3c536649aa56a1';
const PRIVATE_API_KEY = '6807fcecafaf9ad7d96911be2c5dcacb9d630a11';
const TS = Date.now();
const HASH = MD5(TS + PRIVATE_API_KEY + PUBLIC_API_KEY).toString();

export async function getLastComics() {
  const { data } = await axios.get(
    `/v1/public/comics?ts=${TS}&apikey=${PUBLIC_API_KEY}&hash=${HASH}&dateDescriptor=lastWeek`
  );

  return data;
}
