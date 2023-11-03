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

export const getDetalles = async (req,res)=> {
    try {
        conection_result(res,["SELECT * FROM detalles"])
    } catch (error) {
        errores(res,error)
    }
}

export const postDetalles = async (req,res)=>{
    try {
        const {IdPaqueteFk, tamano, peso, volumen, estado, IdrutaFk, IdEnvioFk} = req.body
        conection_result(res,["INSERT INTO detalles (IdPaqueteFk, tamano, peso, volumen, estado, IdrutaFk, IdEnvioFk) VALUES(?,?,?,?,?,?,?)",
        [IdPaqueteFk, tamano, peso, volumen, estado, IdrutaFk, IdEnvioFk]])
    } catch (error) {
        errores(res,error)
    }
}

export const updateDetalles = async (req,res) => {
    try {
        const {IdPaqueteFk, tamano, peso, volumen, estado, IdrutaFk, IdEnvioFk} = req.body
        conection_result(res,["UPDATE detalles SET IdPaqueteFk = ?, tamano = ?, peso = ?, volumen = ?, estado = ?, IdrutaFk = ?, IdEnvioFk = ? WHERE Id = ?",
        [IdPaqueteFk, tamano, peso, volumen, estado, IdrutaFk, IdEnvioFk, req.params.id]])
    } catch (error) {
        errores(res,error)
    }
}

export const deleteDetalles = async (req,res)=>{
    try {
        conection_result(res,["DELETE FROM detalles WHERE Id = ?",
        [req.params.id]]);
    } catch (error) {
        errores(res,error)
    }
}