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

export const getEmpleados = async (req,res)=> {
    try {
        conection_result(res,["SELECT * FROM empleados"])
    } catch (error) {
        errores(res,error)
    }
}

export const postEmpleados = async (req,res)=>{
    try {
        const {nombre, edad, direccion, yearsWork, IdCargofk, contrasena} = req.body
        const salt = bcryptjs.genSaltSync();
        req.body.contrasena = bcryptjs.hashSync(contrasena,salt);
        conection_result(res,["INSERT INTO empleados (nombre, edad, contrasena, direccion, yearsWork, IdCargofk) VALUES(?,?,?,?,?,?)",
        [nombre, edad, req.body.contrasena, direccion, yearsWork, IdCargofk]])
    } catch (error) {
        errores(res,error)
    }
}

export const updateEmpleados = async (req,res) => {
    try {
        const {nombre, edad, direccion, yearsWork, IdCargofk} = req.body
        conection_result(res,["UPDATE empleados SET nombre = ?, edad = ?, direccion = ?, yearsWork = ?, IdCargofk = ? WHERE Id = ?",
        [nombre, edad, direccion, yearsWork, IdCargofk, req.params.id]])
    } catch (error) {
        errores(res,error)
    }
}

export const deleteEmpleados = async (req,res)=>{
    try {
        conection_result(res,["DELETE FROM empleados WHERE Id = ?",
        [req.params.id]]);
    } catch (error) {
        errores(res,error)
    }
}