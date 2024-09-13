const express = require("express");
const app = express();

var globalCount = 1;
// connection.query(select);
app.use(express.json());
app.get("/", (req, res) => {
    globalCount += 1;
    res.json({
        message: `The connection is established ${globalCount}`
    });
});
app.listen(8000, () => {
    console.log('Server is running at port 8000');
});