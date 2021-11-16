import app from "./app";
import http from "http";
const port = process.env.PORT || 3333;
const server = http.createServer(app);
app.listen(port, () => console.log("Server is runnig on", port));