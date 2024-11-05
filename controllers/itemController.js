
const itens = [
    { id: 1, nome: 'Item 1' },
    { id: 2, nome: 'Item 2' },
    { id: 3, nome: 'Item 3' },
];


function listarItens(req, res) {
    res.json(itens);
}

module.exports = {
    listarItens
};