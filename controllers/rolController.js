import { response } from "express";
import RolService from "../database/RolService.js";

const controlador = {
  rolesGet :  (req, res = response) => {
        const conx = new RolService();

        conx.getRoles()    
            .then( msg => {
                console.log('🔵 Listado correcto!');
                res.status(200).json(msg);
            })
            .catch( err => {
                console.error('‼️ No hay registros');
                res.status(203).json({'msg':'No se han encontrado registros'});
            });
    },
};

export default controlador;
