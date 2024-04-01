const API_KEY = import.meta.env.VITE_MARVEL_API_KEY;
const BASE_URL = import.meta.env.VITE_MARVEL_BASE_URL;

export default class MarvelService {
	getResource = async (url) => {
		try {
			const response = await fetch(url);
			return await response.json().then((res) => res.data.results);
		} catch (error) {
			throw new Error(`Не удалось выполнить запрос. Ошибка ${error}}`);
		}
	};

	getAllCharacters = async () => {
		return await this.getResource(
			`${BASE_URL}characters?limit=9&offset=222&apikey=${API_KEY}`,
		);
	};

	getCharacter = async (id) => {
		return await this.getResource(
			`${BASE_URL}characters/${id}?apikey=${API_KEY}`,
		);
	};
}
