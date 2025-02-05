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
    const sql = `SELECT *, T.*
FROM posts P
JOIN post_tag PT ON P.id = PT.post_id
JOIN tags T ON pt.tag_id = T.id
WHERE P.id = ?;`

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Query al database fallita' })

        //creo un oggetto che mi servirà ad eliminare le ridondanze nella response
        const postObj = {
            id: results[0].id,
            title: results[0].title,
            content: results[0].content,
            image: results[0].image,
            tags: []
        }

        results.forEach(item => {
            postObj.tags.push({
                id: item.id,
                tag: item.label
            })
        })


        res.json(postObj)
    })

}

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