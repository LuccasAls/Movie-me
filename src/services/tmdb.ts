const API_KEY = '3fdfb43d043847bfc809d04d451e19f8';
const API_BASE = 'https://api.themoviedb.org/3'


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
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
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
    getMovieInfo: async(movieId, type) => {
        let info = {};

        if(movieId){
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
            }
        }

        return info
    }
}
