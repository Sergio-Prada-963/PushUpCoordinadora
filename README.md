# Repaso

* Iniciar el trabajo de node:
```
npm init -y
```

.gitignore:
(node_modules , coverage)

* Descargar las dependencias:
```
npm i express
npm i nodemon -D
npm i mysql2
npm i dotenv
```

* Modificamos package.json:
```
{
  "name": "practica-backend-final",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "dev": "nodemon src/index.js",
    "start": "node src/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2",
    "mysql2": "^3.6.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}

```

* Manejar una estructura de carpetas y de archivos:

<div id ="header" align="center">
<img src="https://github.com/sbstzuluaga1111/repaso/assets/133683120/917d13df-3aae-47c3-9543-fae6d5c4ed95">
</div>

* Iniciamos server en index.js:
```
import express from "express";
const app =express()
app.use(express.json());
app.listen(3000)
console.log("Server encendido :D")
```

* Rutas:
Creamos la ruta.routes.js en routes pero antes importamos Router de express.
```
import { Router } from "express";
const router = Router();
```
```
//Rutas y controllers
import { getEmployees } from "../controllers/get.controller.js";

router.get('/', getEmployees); //getEmployees se trae de los controllers
```

* Controlador:
Creamos su respectivo controlador y lo exportamos para usarlo en las rutas.
```
export const getEmployees =  (req, res) => {
    res.send('mostrando')
}
```

* Conectamos la DB:
En el archivo db.js.

```
import {createPool} from 'mysql2/promise'

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'contraseña',
    port: 3306,
    database: 'ejemplo',
})
```
lo exportamos para usarlo junto al controlador se requiera.

```
import {pool} from "../db.js";

export const db = async (req, res) => {
    // uso de pool de la db
        const [id,name,salary] = await pool.query('DESCRIBE employee')
        res.json (id,name,salary)
        }
```
* ejemplo de POST:
```
import { pool } from "../db.js";

export const postEmployees = async (req, res) => {
const {name, salary} = req.body;
const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)',[name, salary])
console.log(req.body);
res.send({rows});
};
```

* ejemplo de GET ALL:
```
import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
const [rows] = await pool.query('SELECT * FROM employee')
console.log(req.body);
res.send({rows});
}
```

* ejemplo de GET:ID :
```
import { pool } from "../db.js";

export const getEmployeesID = async (req, res) => {
const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
res.send({rows});
}
```


* ejemplo de DELETE:ID :

```
import { pool } from "../db.js";

export const deleteEmployees = async (req, res) => {
const resultado = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])
console.log(resultado)
res.send('Eliminado')
}
```
* ejemplo de UPDATE:ID :

```
import { pool } from "../db.js";

export const putEmployees = async (req, res) => {
const {id} = req.params
const {name, salary} = req.body

const [resultado] = await pool.query('UPDATE employee SET name = ?, salary = ? WHERE id = ?',[name,salary,id]);

console.log(resultado);
res.json('Resibido');
}
```
* Variables de entorno:

.env
```
{
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=contraseña
DB_DATABASE=ejemplo
}
```

Importacion:

config.js:
```
import {config} from 'dotenv';

config()

export const PORT = process.env.PORT || 3000
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'contraseña'
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_DATABASE= process.env.DB_DATABASE || 'ejemplo'
export const DB_PORT = process.env.DB_PORT || 3306
```

index.js:
```
//Server
import express from "express";
import {PORT} from '.config.js';
const app =express()

app.use(express.json());

app.listen(PORT);
console.log("Server encendido :D", PORT)
```


db.js:
```
//base de datos
import {createPool} from 'mysql2/promise'
import {
    DB_DATABASE,
    DB_HOST,
    DB_PASSWORD,
    DB_PORT,
    DB_USER
} from '.config.js';

export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE,
})

```