Essa API tem como tema o gerenciamento de músicas, possibilitando CRUD de uma lista de músicas
Cada música possui ID, título, Banda, Duração e Álbum

Para rodar o projeto utilize no terminal:
npm i
node server.js

A rota utilizada é http://localhost:3000/api/musicas
Ela pode ser aberta no POSTMAN para testes
Utilize x-www-form-urlencoded

Rotas disponíveis e exemplos:

Criar uma nova música
Método: POST
URL: http://localhost:3000/api/musicas
Exemplo de parâmetros: {
  "titulo": "Hotel California",
  "banda": "Eagles",
  "duracao": "6:30",
  "album": "Hotel California"
}

Listar todas as músicas
Método: GET
URL: http://localhost:3000/api/musicas
Parâmetros não necessários

Listar música específica
Método: GET
URL: http://localhost:3000/api/musicas/1
ID da música especificada na URL como parâmetro

Modificar música
Método: PUT
URL: http://localhost:3000/api/musicas/1
ID da música especificada na URL
Exemplo de parâmetros: {
  "titulo": "We Will Rock You",
  "banda": "Queen",
  "duracao": "2:02",
  "album": "News of the World"
}

Excluir música
Método: DELETE
URL: http://localhost:3000/api/musicas/1
ID da música especificada na URL como parâmetro