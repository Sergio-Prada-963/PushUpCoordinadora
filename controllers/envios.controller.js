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

export const getEnvios = async (req,res)=> {
    try {
        conection_result(res,["SELECT * FROM envios"])
    } catch (error) {
        errores(res,error)
    }
}

export const postEnvios = async (req,res)=>{
    try {
        const {tipo, veiculo, IdRutaFk, IdBodegaFk, IdCargoFk} = req.body
        conection_result(res,["INSERT INTO envios (tipo, veiculo, IdRutaFk, IdBodegaFk, IdCargoFk) VALUES(?,?,?,?,?)",
        [tipo, veiculo, IdRutaFk, IdBodegaFk, IdCargoFk]])
    } catch (error) {
        errores(res,error)
    }
}

export const updateEnvios = async (req,res) => {
    try {
        const {tipo, veiculo, IdRutaFk, IdBodegaFk, IdCargoFk} = req.body
        conection_result(res,["UPDATE envios SET tipo = ?, veiculo = ?, IdRutaFk = ?, IdBodegaFk = ?, IdCargoFk = ? WHERE Id = ?",
        [tipo, veiculo, IdRutaFk, IdBodegaFk, IdCargoFk, req.params.id]])
    } catch (error) {
        errores(res,error)
    }
}

export const deleteEnvios = async (req,res)=>{
    try {
        conection_result(res,["DELETE FROM rutas WHERE Id = ?",
        [req.params.id]]);
    } catch (error) {
        errores(res,error)
    }
}