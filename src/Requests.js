const key = '0df3772e005f1f93dda3fbb5f52771e1'

const requests = {
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`, // worked
    // requestPopular:`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
    // requestPopular:`https://api.themoviedb.org/3/person/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`, // worked
    requestTrending:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`, // worked
    requestHorror:`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1`, // worked
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`, // worked
}

export default requests