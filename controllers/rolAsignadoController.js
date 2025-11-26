import { response } from "express";
import RolAsignadoService from "../database/RolAsignadoService.js";

const controlador = {

    rolesAsignadosGet :  (req, res = response) => {
        const conx = new RolAsignadoService();

        conx.getRolesAsignados()    
            .then( msg => {
                console.log('🔵 Listado correcto!');
                res.status(200).json(msg);
            })
            .catch( err => {
                console.error('‼️ No hay registros');
                res.status(203).json({'msg':'No se han encontrado registros'});
            });
    },

    rolesAsignadosDNIGet:  (req, res = response) => {
        const conx = new RolAsignadoService();

        conx.getRolesAsignadosDNI(req.params.dni)    
            .then( msg => {
                console.log('🔵 Listado correcto!');
                res.status(200).json(msg);
            })
            .catch( err => {
                console.error('‼️ No hay registros');
                res.status(203).json({'msg':'No se han encontrado registros'});
            });
    },

    

    rolesAsignadosDNIGetAll :  (req, res = response) => {
        const conx = new RolAsignadoService();

        conx.getRolesAsignadosDNITodos()    
            .then( msg => {
                console.log('🔵 Listado correcto!');
                res.status(200).json(msg);
            })
            .catch( err => {
                console.error('‼️ No hay registros');
                res.status(203).json({'msg':'No se han encontrado registros'});
            });
    }
};

export default controlador;
