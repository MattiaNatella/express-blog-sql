
//index
const index = (req, res) => {
    res.send('Rotta index: stampo tutti i post')
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