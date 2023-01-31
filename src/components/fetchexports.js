import {API_KEY} from './shared/API_KEY'

const API_BASE = 'https://api.themoviedb.org/3'

export const fetchFilmes = (page, genero) => {

    return fetch(`${API_BASE}/discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&page=${page}&with_genres=${genero}&with_watch_monetization_types=flatrate`)
                .then(response => response.json())


}

export const fetchSeries = (page, genero) => {

    return fetch(`${API_BASE}/discover/tv?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc&page=${page}&with_genres=${genero}&with_watch_monetization_types=flatrate`)
                .then(response => response.json())


}

export const fetchBuscarFilme = (busca, page) => {

    return fetch(`${API_BASE}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${busca}&page=${page}&include_adult=false`)
                .then(response => response.json())

}

export const fetchBuscarSerie = (busca, page) => {

    return fetch(`${API_BASE}/search/tv?api_key=${API_KEY}&language=pt-BR&query=${busca}&page=${page}&include_adult=false`)
                .then(response => response.json())

}

export const fetchFilme = (movieId) => {

    return fetch(`${API_BASE}/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`)
                .then(response => response.json())

}

export const fetchSerie = (serieId) => {
    return fetch(`${API_BASE}/tv/${serieId}?api_key=${API_KEY}&language=pt-BR`)
                .then(response => response.json())
}

export const fetchTendencia = (page) => {
    return fetch(`${API_BASE}/trending/all/week?language=pt-BR&api_key=${API_KEY}&page=${page}`)
                .then(response => response.json())
}

export const fetchTopFilme = (page) => {
    return fetch(`${API_BASE}/movie/top_rated?language=pt-BR&api_key=${API_KEY}&page=${page}`)
                .then(response => response.json())
}

export const fetchTopSerie = (page) => {
    return fetch(`${API_BASE}/tv/top_rated?language=pt-BR&api_key=${API_KEY}&page=${page}`)
                .then(response => response.json())
}

