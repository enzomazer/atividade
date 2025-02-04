const musicas = [
    { id: 1, titulo: 'Bohemian Rhapsody', banda: 'Queen', duracao: '5:55', album: 'A Night at the Opera' },
    { id: 2, titulo: 'Stairway to Heaven', banda: 'Led Zeppelin', duracao: '8:02', album: 'Led Zeppelin IV' },
    { id: 3, titulo: 'Smells Like Teen Spirit', banda: 'Nirvana', duracao: '5:01', album: 'Nevermind' },
];

function criarMusica(req, res) {
    const { titulo, banda, duracao, album } = req.body;

    if (!titulo || !banda || !duracao || !album) {
        return res.status(400).json({ erro: 'Todos os campos são obrigatórios (titulo, banda, duração, álbum)' });
    }

    const novaMusica = {
        id: musicas.length + 1,
        titulo,
        banda,
        duracao,
        album
    };

    musicas.push(novaMusica);
    res.status(201).json(novaMusica);
}

function listarMusicas(req, res) {
    res.json(musicas);
}

function buscarMusicaPorId(req, res) {
    const id = parseInt(req.params.id);
    const musica = musicas.find(m => m.id === id);

    if (!musica) {
        return res.status(404).json({ erro: 'Música não encontrada' });
    }

    res.json(musica);
}

function atualizarMusica(req, res) {
    const id = parseInt(req.params.id);
    const { titulo, banda, duracao, album } = req.body;
    const index = musicas.findIndex(m => m.id === id);

    if (index === -1) {
        return res.status(404).json({ erro: 'Música não encontrada' });
    }

    if (!titulo || !banda || !duracao || !album) {
        return res.status(400).json({ erro: 'Todos os campos são obrigatórios (titulo, banda, duracao, album)' });
    }

    musicas[index] = { id, titulo, banda, duracao, album };
    res.json(musicas[index]);
}

function excluirMusica(req, res) {
    const id = parseInt(req.params.id);
    const index = musicas.findIndex(m => m.id === id);

    if (index === -1) {
        return res.status(404).json({ erro: 'Música não encontrada' });
    }

    const musicaRemovida = musicas.splice(index, 1);
    res.json({ mensagem: 'Música removida com sucesso', musica: musicaRemovida[0] });
}

module.exports = {
    criarMusica,
    listarMusicas,
    buscarMusicaPorId,
    atualizarMusica,
    excluirMusica
};