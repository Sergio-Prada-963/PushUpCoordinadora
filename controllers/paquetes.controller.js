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

export const getPaquetes = async (req,res)=> {
    try {
        conection_result(res,["SELECT * FROM paquetes"])
    } catch (error) {
        errores(res,error)
    }
}

export const postPaquetes = async (req,res)=>{
    try {
        const {nombre, marca, Nacional_interNac, costoProducto, costoEnvio, IdDetallesFk, tipo_paquete} = req.body
        conection_result(res,["INSERT INTO paquetes (nombre, marca, Nacional_interNac, costoProducto, costoEnvio, IdDetallesFk, tipo_paquete) VALUES(?,?,?,?,?,?,?)",
        [nombre, marca, Nacional_interNac, costoProducto, costoEnvio, IdDetallesFk, tipo_paquete]])
    } catch (error) {
        errores(res,error)
    }
}

export const updatePaquete = async (req,res) => {
    try {
        const {nombre, marca, Nacional_interNac, costoProducto, costoEnvio, IdDetallesFk, tipo_paquete} = req.body
        conection_result(res,["UPDATE paquetes SET nombre = ?, marca = ?, Nacional_interNac = ?, costoProducto = ?, costoEnvio = ?, IdDetallesFk = ?, tipo_paquete = ? WHERE Id = ?",
        [nombre, marca, Nacional_interNac, costoProducto, costoEnvio, IdDetallesFk, tipo_paquete, req.params.id]])
    } catch (error) {
        errores(res,error)
    }
}

export const deletePaquetes = async (req,res)=>{
    try {
        conection_result(res,["DELETE FROM paqutes WHERE Id = ?",
        [req.params.id]]);
    } catch (error) {
        errores(res,error)
    }
}