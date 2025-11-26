import Roles from "../models/Roles.js";

class RolService {
   async getRoles() {
    return await Roles.findAll();
  }
}

export default RolService;