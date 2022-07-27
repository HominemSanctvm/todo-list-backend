const express = require("express");
const cors = require("cors");
const todosRoutes = require("./todos.routes");
const app = express();

app.use(express.json());
app.use(todosRoutes)
app.use(cors())

app.get("/health", (req, res) => {
	return res.json("up");
});

app.listen(3333, () => console.log("Server is up in 3333"));
