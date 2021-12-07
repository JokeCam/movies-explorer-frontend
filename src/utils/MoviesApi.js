const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies'

export const fetchAllMovies = () => {
  return fetch(`${BASE_URL}`, {
    method: 'GET',
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else 
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }
    )
}