const bcrypt = require('bcrypt');
const { faker, fakerES } = require('@faker-js/faker');

const genUsers = async (ctos = 1) => {

    let usersGen = []
    for(let i = 1; i <= ctos; i++) {
        //const password = await bcrypt.hash('1234', 10);
        const password = '1234';
        let u = 
            {
            dni: fakerES.string.uuid(),
            nombre: fakerES.person.fullName(),
            clave: password,
            edad: Math.floor(Math.random() * 100) + 1,
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

