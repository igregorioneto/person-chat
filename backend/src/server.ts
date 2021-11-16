import { server } from './http';
const port = process.env.PORT || 3333;
server.listen(port, () => console.log("Server is runnig on", port));
