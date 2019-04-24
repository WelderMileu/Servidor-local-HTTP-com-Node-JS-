const http = require('http')

const operation = http.createServer((req, res)=>{
	res.end("<h1>Sevidor rodando</h1>");
})

operation.listen(3000,(error)=>{
	const open = error?"Erro ao iniciar o servidor":
	"Servidor rodando\nhttp://localhost:3000";

	console.log(open)
})
