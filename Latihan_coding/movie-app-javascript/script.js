// IMDB

const API_KEY = 'api_key=ef1a3d183a2957cafcdea58c17f599e4'
const BASE_URL = 'https://api.themoviedb.org/3'
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY
const IMG_URL = 'https://image.tmdb.org/t/p/w500'
const SEARCH_URL = BASE_URL + '/search/movie?' + API_KEY

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// get all movie
function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        // console.log(data.results)

        showMovies(data.results)
    })
}

function showMovies(data) {
    main.innerHTML = ''

    data.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
                <img src=${IMG_URL + poster_path} alt=${title} />
                <div class="movie-info">
                <h1>${title}</h1>
                <span class="${getColor(vote_average)}">${vote_average}</span>
                </div>

                <div class="overview">
                <h1>Overview</h1>
                ${overview}
                </div>
            `

        main.appendChild(movieEl)
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const searchTerm = search.value

    if (searchTerm) {
        getMovies(SEARCH_URL + '&query=' + searchTerm)
    } else {
        getMovies(API_URL)
    }
})

getMovies(API_URL)