const API_KEY = '3fdfb43d043847bfc809d04d451e19f8';
const API_BASE = 'https://api.themoviedb.org/3'
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json()

    return json
}

export default {
    trending: async () => {
        return [
            {
                slug: 'originals',
                title: 'Em lançamento',
                items: await basicFetch(`/movie/popular?language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    },
    upComing: async () => {
        return [
                {
                slug: 'upComing',
                title: 'UpComing',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            }
        ]
        
    },
    Categories: async () => {
        return [
            {
                slug: 'Categories',
                title: 'Categorias',
                items: await basicFetch(`/genre/movie/list?language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    },
    MoviesList: async (genres: string) => {
        return [
            {
                slug: 'Categories',
                title: 'Categorias',
                items: await basicFetch(`/discover/movie?with_genres=${genres}&language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    },
    getMovieId: async(movie) => {
        return [
            {
                info: await basicFetch(`/search/movie?query=${movie}&language=pt-BR&api_key=${API_KEY}`),

            }
        ]
         
    },
    getMovie: async(movieid) => {
        return [
            {
                info: await basicFetch(`/movie/${movieid}?language=pt-BR&api_key=${API_KEY}`),

            }
        ]
         
    },
    getCast: async(movieid) => {
        return [
            {
                info: await basicFetch(`/movie/${movieid}/credits?language=pt-BR&api_key=${API_KEY}`),
 
            }
        ]
         
    }
}
