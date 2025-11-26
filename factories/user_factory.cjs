const bcrypt = require('bcrypt');
const { faker, fakerES } = require('@faker-js/faker');

const  generarDNI = () => {
  const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  const numero = Math.floor(Math.random() * 100000000);
  const letra = letras[numero % 23];
  return numero.toString().padStart(4, '0') + letra;
}

const generarTelefono = () => {
  // Móvil español entre 600000000 y 799999999
  const num = faker.number.int({ min: 600000000, max: 799999999 });
  const numStr = num.toString();
  // Formato 999 999 999
  return `${numStr.slice(0,3)} ${numStr.slice(3,6)} ${numStr.slice(6,9)}`;
};

const genUsers = async (ctos = 1) => {

    let usersGen = []
    for(let i = 1; i <= ctos; i++) {
        //const password = await bcrypt.hash('1234', 10);
        const password = '1234';
        let u = 
            {
            // dni: fakerES.string.uuid(),
            dni: generarDNI(),
            tfno: generarTelefono(),
            nombre: fakerES.person.fullName(),
            clave: password,
            edad: faker.number.int({ min: 18, max: 80 }),
            // createdAt: new Date(),
            // updatedAt: new Date()
            }
            usersGen.push(u)
    }
    return Promise.all(usersGen);
}

module.exports = {
    genUsers
}

