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

export const getPedidos = async (req,res)=> {
    try {
        conection_result(res,["SELECT * FROM pedidos"])
    } catch (error) {
        errores(res,error)
    }
}

export const postPedidos = async (req,res)=>{
    try {
        const {fechaPedido, IdClienteFk, fechaEntrega, direccionEntrega, costoProducto, CostoEnvio, IdPaqueteFk, observacioneDetalles} = req.body
        conection_result(res,["INSERT INTO pedidos (fechaPedido, IdClienteFk, fechaEntrega, direccionEntrega, costoProducto, CostoEnvio, IdPaqueteFk, observacioneDetalles) VALUES(?,?,?,?,?,?,?,?)",
        [fechaPedido, IdClienteFk, fechaEntrega, direccionEntrega, costoProducto, CostoEnvio, IdPaqueteFk, observacioneDetalles]])
    } catch (error) {
        errores(res,error)
    }
}

export const updatePedido = async (req,res) => {
    try {
        const {fechaPedido, IdClienteFk, fechaEntrega, direccionEntrega, costoProducto, CostoEnvio, IdPaqueteFk, observacioneDetalles} = req.body
        conection_result(res,["UPDATE pedidos SET fechaPedido = ?, IdClienteFk = ?, fechaEntrega = ?, direccionEntrega = ?, costoProducto = ?, CostoEnvio = ?, IdPaqueteFk = ?, observacioneDetalles = ? WHERE Id = ?",
        [fechaPedido, IdClienteFk, fechaEntrega, direccionEntrega, costoProducto, CostoEnvio, IdPaqueteFk, observacioneDetalles, req.params.id]])
    } catch (error) {
        errores(res,error)
    }
}

export const deletePedidos = async (req,res)=>{
    try {
        conection_result(res,["DELETE FROM peoidos WHERE Id = ?",
        [req.params.id]]);
    } catch (error) {
        errores(res,error)
    }
}