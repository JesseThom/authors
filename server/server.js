const express = require("express");
const cors = require("cors")
const port = 8000;

const app = express();
app.use(express.json(), express.urlencoded({ extended: true })); // facilitate post request
app.use(cors())

require("./server/config/mongoose.config");
require("./server/routes/brain.routes")(app);

// must be at the bottom
app.listen(port, () => console.log(`Listening on port: ${port}`))