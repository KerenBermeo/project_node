const express = require('express');
const app = express();
const port = 3000;

// Importar conexión a la base de datos
const db = require('./modelos/db'); // Ajusta la ruta según sea necesario

// Probar la conexión a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err.stack);
    process.exit(1); // Detener el servidor si la conexión falla
  } else {
    console.log('Conexión a la base de datos establecida.');
  }
});

// Configurar rutas
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
