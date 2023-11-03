import express from 'express';

import routerClientes from './routes/clientes.routes.js';
import routerPedidos from './routes/pedidos.routes.js';
import routerPaquetes from './routes/paquetes.routes.js';
import routerDetalles from './routes/detalles.routes.js';
import routerRutas from './routes/rutas.routes.js';
import routerEnvios from './routes/envios.routes.js';
import routerBodegas from './routes/bodegas.routes.js';
import routerInventarios from './routes/inventarios.routes.js';
import routerPauqteInv from './routes/paquete_inventario.routes.js';
import routerCargos from './routes/cargos.routes.js';
import routerEmpleados from './routes/empleados.routes.js';

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PUERTO
        this.path = {
            clientes: "/api/v1/clientes",
            pedidos: "/api/v1/pedidos",
            paquetes: "/api/v1/paquetes",
            detalles: "/api/v1/detalles",
            rutas: "/api/v1/rutas",
            envios: "/api/v1/envios",
            bodegas: "/api/v1/bodegas",
            inventarios: "/api/v1/inventarios",
            paqueteInv: "/api/v1/invenPaquete",
            cargos: "/api/v1/cargos",
            empleados: "/api/v1/empleados"
        }
        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.app.use(express.json())
    }
    routes(){
        this.app.use(this.path.clientes, routerClientes);
        this.app.use(this.path.pedidos, routerPedidos);
        this.app.use(this.path.paquetes, routerPaquetes);
        this.app.use(this.path.detalles, routerDetalles);
        this.app.use(this.path.rutas, routerRutas);
        this.app.use(this.path.envios, routerEnvios);
        this.app.use(this.path.bodegas, routerBodegas);
        this.app.use(this.path.inventarios, routerInventarios);
        this.app.use(this.path.paqueteInv, routerPauqteInv);
        this.app.use(this.path.cargos, routerCargos);
        this.app.use(this.path.empleados, routerEmpleados);
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`en vivo desde ${this.port}`);
        })
    }
}

export default Server;