// módulos
const path = require('path');
const express = require('express');

// puerto del servidor
const PORT = 3000;

// ejecución de Express
const app = express();

// recursos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// rutas
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views','home.html')));

// levantar el servidor
app.listen(PORT, () => console.log('Server running in http://localhost:' + PORT))