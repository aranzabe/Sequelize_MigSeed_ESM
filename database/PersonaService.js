import Persona from "../models/Persona.js";


class PersonaService {

  async getListado() {
    return await Persona.findAll();
  }

  async getUsuario(dni) {
    const usuario = await Persona.findByPk(dni);
    if (!usuario) throw new Error("Usuario no encontrado");
    return usuario;
  }

  async registrarUsuario(body) {
      return await Persona.create(body);
  }

  async modificarUsuario(dni, body) {
    const usuario = await this.getUsuario(dni);
    return await usuario.update(body);
  }

  async borrarUsuario(dni) {
    const usuario = await this.getUsuario(dni);
    await usuario.destroy();
    return usuario;
  }
}

export default PersonaService;
