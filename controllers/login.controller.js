import { response } from "express";
import getConnection from "../db/conexionDb.js";
import bcryptjs from 'bcryptjs';
import generateJWT from "../helpers/generateJWT.js";

const login = async (req,res=response)=>{
    const {email, password} = req.body;
    try {
        const usuario = await User.findOne({email});
        if(!usuario)
            return res.status(400).json({message: 'Usuario no es correcto'});
        if(!usuario.estado)
            return res.status(400).json({message: 'Usuario desactivado'});

        const validarPassword = bcryptjs.compareSync(password, usuario.password);
        if(!validarPassword)
            return res.status(400).json({message: 'Contraseña Incorrecta'});
        
            const token = await generateJWT(usuario.id)
            res.cookie("tokenX",token)
            res.json({usuario,token});
    } catch (error) {
        console.log(error);
        return res.json({message:"Auto contactarme (Servicio tecnico)"})
    }
}
export default login