const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

//rutas
app.get('/',(req, res) => {
    return res.sendFile(path.join(__dirname, 'views','index.html'))
})



app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`)
})