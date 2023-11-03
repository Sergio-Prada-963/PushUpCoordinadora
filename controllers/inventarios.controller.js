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

export const getInventarios = async (req,res)=> {
    try {
        conection_result(res,["SELECT * FROM inventarios"])
    } catch (error) {
        errores(res,error)
    }
}

export const postInventarios = async (req,res)=>{
    try {
        const {IdBodegaFk, IdPaquetes_InventarioFk} = req.body
        conection_result(res,["INSERT INTO inventarios (IdBodegaFk, IdPaquetes_InventarioFk) VALUES(?,?)",
        [IdBodegaFk, IdPaquetes_InventarioFk]])
    } catch (error) {
        errores(res,error)
    }
}

export const updateInventarios = async (req,res) => {
    try {
        const {IdBodegaFk, IdPaquetes_InventarioFk} = req.body
        conection_result(res,["UPDATE inventarios SET IdBodegaFk = ?, IdPaquetes_InventarioFk = ? WHERE Id = ?",
        [IdBodegaFk, IdPaquetes_InventarioFk, req.params.id]])
    } catch (error) {
        errores(res,error)
    }
}

export const deleteInventarios = async (req,res)=>{
    try {
        conection_result(res,["DELETE FROM inventarios WHERE Id = ?",
        [req.params.id]]);
    } catch (error) {
        errores(res,error)
    }
}