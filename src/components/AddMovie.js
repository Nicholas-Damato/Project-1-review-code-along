import React, { Component } from 'react'

class AddMovie extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            director: '',
            image: ''
        }
    }

    handleTitle = (value) => {
        this.setState({ title: value })
    }

    handleDirector = (value) => {
        this.setState({ director: value })
    }

    handleImage = (value) => {
        this.setState({ image: value })
    }

    render() {
        return (
            <div>
                <h2> Add Movie Form </h2>
                <input value={this.state.title} onChange={(e) => this.handleTitle(e.target.value)} placeholder="Title" />
                <input value={this.state.director} onChange={(e) => this.handleDirector(e.target.value)} placeholder="Director" />
                <input value={this.state.image} onChange={(e) => this.handleImage(e.target.value)} placeholder="Image URL" />
                <button onClick={() => { this.props.addMovie(this.state.title, this.state.director, this.state.image) }}> Add Movie </button>
            </div>
        )
    }
}

export default AddMovie