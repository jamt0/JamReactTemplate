const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const signInDB = jsonServer.router('signIn.json');
const signUpDB = jsonServer.router('signUp.json');

const PORT = 4000;

server.use(middlewares);

server.post('/api/auth/signIn', (req, res) => {
	const datos = signInDB.db.valueOf();
	res.jsonp(datos.data);
});

server.post('/api/auth/signUp', (req, res) => {
	const datos = signUpDB.db.valueOf();
	res.jsonp(datos.data);
});

server.use(signInDB);
server.use(signUpDB);
server.listen(PORT, () => {
	console.log(`JSON Server is running in http://localhost:${PORT}`);
});
