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

export const getBodegas = async (req,res)=> {
    try {
        conection_result(res,["SELECT * FROM bodegas"])
    } catch (error) {
        errores(res,error)
    }
}

export const postBodegas = async (req,res)=>{
    try {
        const {ubicacion, capacidad, estado, IdInventarioFk, IdcargoFk} = req.body
        conection_result(res,["INSERT INTO bodegas (ubicacion, capacidad, estado, IdInventarioFk, IdcargoFk) VALUES(?,?,?,?,?)",
        [ubicacion, capacidad, estado, IdInventarioFk, IdcargoFk]])
    } catch (error) {
        errores(res,error)
    }
}

export const updateBodegas = async (req,res) => {
    try {
        const {ubicacion, capacidad, estado, IdInventarioFk, IdcargoFk} = req.body
        conection_result(res,["UPDATE bodegas SET ubicacion = ?, capacidad = ?, estado = ?, IdInventarioFk = ?, IdcargoFk = ? WHERE Id = ?",
        [ubicacion, capacidad, estado, IdInventarioFk, IdcargoFk, req.params.id]])
    } catch (error) {
        errores(res,error)
    }
}

export const deleteBodegas = async (req,res)=>{
    try {
        conection_result(res,["DELETE FROM bodegas WHERE Id = ?",
        [req.params.id]]);
    } catch (error) {
        errores(res,error)
    }
}