import React, { Component } from 'react'

class Movie extends Component {
    constructor() {
        super()
        this.state = {
            editMode: false,
            title: ''
        }
    }

    toggleEdit = () => {
        this.setState({ editMode: !this.state.editMode })
    }

    handleTitle = (value) => {
        this.setState({ title: value })
    }

    handleSave = () => {
        this.props.editMovie(this.props.movie.id, this.state.title)
        this.toggleEdit()
        this.setState({ title: '' })
    }

    render() {
        const { movie } = this.props
        return this.state.editMode ? (
            <div className='movie'>
                <input value={this.state.title} onChange={(e) => this.handleTitle(e.target.value)} />
                <button onClick={() => this.handleSave()}> Save </button>
            </div>
        ) : (
            <div className='movie'>
                <p>Movie Title: {movie.title}</p>
                <img alt={movie.title} src={movie.image} />
                <button onClick={() => this.props.deleteMovie(movie.id)}> Delete Movie </button>
                <button onClick={() => this.toggleEdit()}> Edit </button>
            </div>
        )
    }
}

export default Movie