import bodyParser from "body-parser";
import cors from "cors";

import Server from './classes/server';
import router from "./routes/router";

const server = Server.instance;

// Body Parser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json({}));

// Enable CORS
server.app.use(cors());

// My Routes
server.app.use("/", router);

server.start(() => {
  console.log(`Server running on port ${server.port}`);
});
