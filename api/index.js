const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT ?? 3001;

server.use(middlewares);
// Add this before server.use(router)

server.use(jsonServer.rewriter({
  '/api/*': '/$1',
  '/products/:resource/:id/show': '/:resousrce/:id'
}))

server.use(router)


server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`)
})

// Export the Server API
module.exports = server