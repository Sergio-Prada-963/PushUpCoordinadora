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

export const getCargos = async (req,res)=> {
    try {
        conection_result(res,["SELECT * FROM cargos"])
    } catch (error) {
        errores(res,error)
    }
}

export const postCargos = async (req,res)=>{
    try {
        const {descripcion, ocupacion} = req.body
        conection_result(res,["INSERT INTO cargos (descripcion, ocupacion) VALUES(?,?)",
        [descripcion, ocupacion]])
    } catch (error) {
        errores(res,error)
    }
}

export const updateCargos = async (req,res) => {
    try {
        const {descripcion, ocupacion} = req.body
        conection_result(res,["UPDATE cargos SET descripcion = ?, ocupacion = ? WHERE Id = ?",
        [descripcion, ocupacion, req.params.id]])
    } catch (error) {
        errores(res,error)
    }
}

export const deleteCargos = async (req,res)=>{
    try {
        conection_result(res,["DELETE FROM cargos WHERE Id = ?",
        [req.params.id]]);
    } catch (error) {
        errores(res,error)
    }
}