const jsonServer = require('json-server');
const auth = require('json-server-auth');

const server = jsonServer.create();
const router = jsonServer.router('db.json');

const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 3000;

const rules = auth.rewriter({
	// Permission rules
	posts: 666,
	comments: 666,
	albums: 666,
	photos: 666,
	users: 666,
	todos: 666,
	secureMessages: 660
})


server.db = router.db;

server.use(middlewares);
server.use(rules);
server.use(auth);
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on ${ PORT }`);
});
