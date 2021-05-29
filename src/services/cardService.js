const API_URL = "https://api.pokemontcg.io/v2";

class CardService {
    async getAllCards() {
        const url = `${API_URL}/cards`;
        return fetch(url)
            .then(response => response.json())
    }
}

export default CardService;