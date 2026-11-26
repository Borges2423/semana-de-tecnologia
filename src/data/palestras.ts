import type { Palestra } from './tipos'

const URL_PALESTRAS = 'https://api.mockaroo.com/api/c6c146e0?count=10&key=f0b5fa10'

export function buscarPalestras(): Promise<Palestra[]> {
  return fetch(URL_PALESTRAS).then((resposta) => resposta.json())
}
