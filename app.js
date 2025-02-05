import express from 'express'
import postRouter from './routers/posts.js';

const app = express()
const port = 3000;



//rendo accessibile all'esterno la cartella public
app.use(express.static('public'))

//Middleware per il parsing del corpo della req
app.use(express.json())

//Router risorsa posts
app.use('/posts', postRouter)

//metto il server in ascolto di eventuali chiamate
app.listen(port, () => {
    console.log('sono in ascolto alla porta', port)
})