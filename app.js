const express = require('express');
const app = express();
const port = 3000;

// Ruta simple
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// El servidor escucha en el puerto 3000
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});