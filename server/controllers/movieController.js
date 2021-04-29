let movies = [
    {
        id: 0,
        title: 'Star Wars',
        director: 'George Lucas',
        image: 'https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_.jpg'
    }
]
let id = 1

module.exports = {
    getMovies: (req, res) => {
        res.status(200).send(movies)
    },
    addMovie: (req, res) => {
        const { title, director, image } = req.body
        const movie = {
            id,
            title,
            director,
            image
        }
        id++
        movies = [...movies, movie]
        res.status(200).send(movies)
    },
    deleteMovie: (req, res) => {
        const { id } = req.params
        const index = movies.findIndex((e) => e.id === +id)
        movies.splice(index, 1)
        res.status(200).send(movies)
    },
    editMovie: (req, res) => {
        const { id } = req.params
        const { title, director, image } = req.body
        const index = movies.findIndex(e => e.id === +id)
        movies[index] = {
            ...movies[index],
            title
        }
        res.status(200).send(movies)
    }
}

