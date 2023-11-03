import bcryptjs from 'bcryptjs';
import getConnection from "../db/conexionDb.js";

const errores = (res,error)=>{
    res.status(500);
    res.send(error.message);
}

const conection_result = async (res,sqldata)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query(...sqldata);
        res.json(result);
    } catch (error) {
        errores(res,error)
    }
}

export const getClientes = async (req,res)=> {
    try {
        conection_result(res,["SELECT * FROM clientes"])
    } catch (error) {
        errores(res,error)
    }
}

export const postcliente = async (req,res)=>{
    try {
        const {nombre, edad, direccion, IdTipoClienteFk, contrasena} = req.body
        const salt = bcryptjs.genSaltSync();
        req.body.contrasena = bcryptjs.hashSync(contrasena,salt);
        conection_result(res,["INSERT INTO clientes (nombre, edad, direccion, IdTipoClienteFk, contrasena) VALUES(?,?,?,?,?)",
        [nombre, edad, direccion, IdTipoClienteFk, req.body.contrasena]])
    } catch (error) {
        errores(res,error)
    }
}

export const updateCliente = async (req,res) => {
    try {
        const {nombre, edad, direccion, IdTipoClienteFk} = req.body
        conection_result(res,["UPDATE clientes SET nombre = ?, edad = ?, direccion = ?, IdTipoClienteFk = ? WHERE Id = ?",
        [nombre, edad, direccion, IdTipoClienteFk, req.params.id]])
    } catch (error) {
        errores(res,error)
    }
}

export const deleteCliente = async (req,res)=>{
    try {
        conection_result(res,["DELETE FROM clientes WHERE Id = ?",
        [req.params.id]]);
    } catch (error) {
        errores(res,error)
    }
}