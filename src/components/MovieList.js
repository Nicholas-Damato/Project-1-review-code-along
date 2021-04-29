import React, { Component } from 'react'
import axios from 'axios'
import AddMovie from './AddMovie'
import Movie from './Movie'

class MovieList extends Component {
    constructor() {
        super()
        this.state = {
            movieArray: []
        }
    }

    componentDidMount() {
        axios.get('/api/movies')
            .then((res) => this.setState({ movieArray: res.data }))
            // .then((res) => console.log(res)) USE THIS TO SEE THE RESPONSE FOR ANY API
            .catch((err) => { console.log(err) })
    }

    deleteMovie = (id) => {
        axios.delete(`/api/movies/${id}`)
            .then((res) => { this.setState({ movieArray: res.data }) })
            .catch((err) => { console.log(err) })
    }

    addMovie = (title, director, image) => {
        axios.post('/api/movies', { title, director, image })
            .then((res) => { this.setState({ movieArray: res.data }) })
            .catch(err => console.log(err))
    }

    editMovie = (id, title) => {
        axios.put(`/api/movies/${id}`, { title })
            .then((res) => { this.setState({ movieArray: res.data }) })
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.movieArray)
        return (
            <div>
                <AddMovie addMovie={this.addMovie} />
                {this.state.movieArray.map((movie) => {
                    return <Movie movie={movie} deleteMovie={this.deleteMovie} editMovie={this.editMovie} /> //  <div>
                    //     <p>{movie.title}</p>
                    //     <button onClick={() => this.deleteMovie(movie.id)}> Delete Movie </button>
                    // </div>
                })}
            </div >
        )
    }
}

export default MovieList