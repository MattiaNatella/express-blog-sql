import express from 'express'
const app = express()
const port = 3000;


//rendo accessibile all'esterno la cartella public
app.use(express.static('public'))

//Middleware per il parsing del corpo della req
app.use(express.json())

//inserisco una prima rotta di test
app.get('/', (req, res) => {
    console.log('Server dei post'),
        res.send('Hello world!')
})

//metto il server in ascolto di eventuali chiamate
app.listen(port, () => {
    console.log('sono in ascolto alla porta', port)
})