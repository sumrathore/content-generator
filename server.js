const express = require("express");

const app = express();

const PORT = process.env.PORT || 8090;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});