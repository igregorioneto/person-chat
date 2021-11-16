import { server } from './http';
import './services/websocket';
const port = process.env.PORT || 3333;
server.listen(port, () => console.log("Server is runnig on", port));
