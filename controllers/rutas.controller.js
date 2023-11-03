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

export const getRutas = async (req,res)=> {
    try {
        conection_result(res,["SELECT * FROM rutas"])
    } catch (error) {
        errores(res,error)
    }
}

export const postRutas = async (req,res)=>{
    try {
        const {descripcion, nombre_ruta, rutaGPS, ruta} = req.body
        conection_result(res,["INSERT INTO rutas (descripcion, nombre_ruta, rutaGPS, ruta) VALUES(?,?,?,?)",
        [descripcion, nombre_ruta, rutaGPS, ruta]])
    } catch (error) {
        errores(res,error)
    }
}

export const updateRutas = async (req,res) => {
    try {
        const {descripcion, nombre_ruta, rutaGPS, ruta} = req.body
        conection_result(res,["UPDATE rutas SET descripcion = ?, nombre_ruta = ?, rutaGPS = ?, ruta = ? WHERE Id = ?",
        [descripcion, nombre_ruta, rutaGPS, ruta, req.params.id]])
    } catch (error) {
        errores(res,error)
    }
}

export const deleteRutas = async (req,res)=>{
    try {
        conection_result(res,["DELETE FROM rutas WHERE Id = ?",
        [req.params.id]]);
    } catch (error) {
        errores(res,error)
    }
}