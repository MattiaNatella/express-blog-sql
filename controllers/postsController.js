//importo il modulo di connessione al database blog
import connection from "../data/data.js"
//index
const index = (req, res) => {

    //preparo la query
    const sql = 'SELECT * FROM posts'

    //eseguiamo la query
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Query al database fallita' })
        res.json(results)
    })
}

//show

const show = (req, res) => {
    const id = req.params.id
    res.send(`sono la rotta Show e ti mostro l'id che hai inserito: ${id}`)
}

//store

//update

//modify

//destroy

export default { index, show }