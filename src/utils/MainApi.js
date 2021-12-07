const BASE_URL = 'https://movies.stanislav.nomoredomains.xyz/api'
// const BASE_URL = 'http://localhost:3000/api'

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "name": name,
      "email": email,
      "password": password
    })
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else 
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }
    )
}

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "password": password,
      "email": email
    })
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }
    )
}

export const logout = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }
    )
}

export const getUserData = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else 
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }
    )
}

export const updateUserData = (name, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "name": name,
      "email": email
    })
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else 
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }
    )
}

export const addMovie = (data) => {
  return fetch(`${BASE_URL}/movies/`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "country": data.country,
      "director": data.director,
      "duration": data.duration,
      "year": data.year,
      "description": data.description,
      "image": `https://api.nomoreparties.co${data.image.url}`,
      "trailer": data.trailerLink,
      "nameRU": data.nameRU,
      "nameEN": data.nameEN,
      "thumbnail": `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
      "movieId": data.id,
    })
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else 
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }
    )
}

export const getMovies = () => {
  return fetch(`${BASE_URL}/movies/`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else 
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }
    )
}

export const deleteMovie = (movieId) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else 
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }
    )
}