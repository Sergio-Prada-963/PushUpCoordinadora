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

export const getPaquete_inventario = async (req,res)=> {
    try {
        conection_result(res,["SELECT * FROM Paquete_inventario"])
    } catch (error) {
        errores(res,error)
    }
}

export const postPaquete_inventario = async (req,res)=>{
    try {
        const {IdInventarioFk, IdPaqueteFk} = req.body
        conection_result(res,["INSERT INTO Paquete_inventario (IdInventarioFk, IdPaqueteFk) VALUES(?,?)",
        [IdInventarioFk, IdPaqueteFk]])
    } catch (error) {
        errores(res,error)
    }
}

export const updatePaquete_inventario = async (req,res) => {
    try {
        const {IdInventarioFk, IdPaqueteFk} = req.body
        conection_result(res,["UPDATE Paquete_inventario SET IdInventarioFk = ?, IdPaqueteFk = ? WHERE Id = ?",
        [IdInventarioFk, IdPaqueteFk, req.params.id]])
    } catch (error) {
        errores(res,error)
    }
}

export const deletePaquete_inventario = async (req,res)=>{
    try {
        conection_result(res,["DELETE FROM Paquete_inventario WHERE Id = ?",
        [req.params.id]]);
    } catch (error) {
        errores(res,error)
    }
}