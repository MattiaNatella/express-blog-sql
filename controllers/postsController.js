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

    //preparo la query
    const sql = 'SELECT * FROM posts WHERE id = ?'

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Query al database fallita' })
        res.json(results[0])
    })

}

//store

//update

//modify

//destroy

const destroy = (req, res) => {
    const id = req.params.id

    //preparo la query
    const sql = 'DELETE FROM posts WHERE id = ? '

    //eseguo la query
    connection.query(sql, [id], (err) => {
        if (err) return res.status(500).json({ error: 'Query al database fallita' })
        res.sendStatus(204)
    })
}

export default { index, show, destroy }