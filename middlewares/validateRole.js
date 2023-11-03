import Rol from "../Models/roles.js";

        
const isAdminRole = async ( req, res, next ) => {
    if ( !req.usuario ) {
       return res.status(500).json({
           msg: 'No se detecto un logueo...'
       });
   } 
   const { rol, nombre } = req.usuario;
   const role = await Rol.findById(rol)
   if ( role.nombre !== 'Administrador' ) {
       return res.status(401).json({
           msg: `${ nombre } no es administrador - No puede hacer esto`
       });
   }
   next();
}
export default isAdminRole;