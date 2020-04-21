const jsonServer = require('json-server');
const auth = require('json-server-auth');

const server = jsonServer.create();
const router = jsonServer.router('db.json');

const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 3000;

const rules = auth.rewriter({
	// Permission rules
	// posts: 600,
	// comments: 600,
	// albums: 600,
	// photos: 600,
	// users: 600,
	// todos: 640
	secureMessages: 600
})

server.use(middlewares);
server.use(rules);
server.use(auth);
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on ${ PORT }`);
});
