// Require Express
const express = require('express')


// Create app instance
const app = express();
const PORT = 3077;

// Import Controllers
const movieCtrl = require('./controllers/movieController')


// Top level middleware
app.use(express.json()) // translate any jsx into js


// Endpoints
app.get('/api/movies', movieCtrl.getMovies)
app.post('/api/movies', movieCtrl.addMovie)
app.delete('/api/movies/:id', movieCtrl.deleteMovie)
// app.delete('/api/movies/:id/:name', movieCtrl.deleteMovie)
app.put('/api/movies/:id', movieCtrl.editMovie)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))


// "proxy": "http://localhost:3077", is what allows us to have our react app use the server