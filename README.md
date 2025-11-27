# Migrations y seeders en Sequelize

## 1️⃣ INSTALACIÓN Y CONFIGURACIÓN

### Instala dependencias

```bash
npm install sequelize mysql2 dotenv
npm install --save-dev sequelize-cli
```

- `sequelize` → ORM principal
- `mysql2` → driver de MySQL (cambia según tu BD: `pg` para PostgreSQL, `sqlite3` para SQLite)
- `sequelize-cli` → CLI para crear migraciones y seeders
- `dotenv` → para manejar variables de entorno

### Como estamos trabajando en ESM, las migraciones, factories y seeders deben tener la extensión ‘cjs’ para que se ejecuten en CJS.

---

## 2️⃣ CONFIGURACIÓN DE LA BD

Crea archivo `config/config.js`:

```jsx
import dotenv from 'dotenv';

dotenv.config();

export default {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DEV,
    host: process.env.HOST,
    dialect: process.env.DB_DIALECT,
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_TEST,
    host: process.env.HOST,
    dialect: process.env.DB_DIALECT,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_PROD,
    host: process.env.HOST,
    dialect: process.env.DB_DIALECT,
  },
};
```

Y `.env`:

```jsx
PORT="9090"

DB_USER="fernando"
DB_PASSWORD="Chubaca2024"
DB_URL="localhost"
DB_PORT=3306

DB_DEV="Sequelize_dev"
DB_PROD="Sequelize_prod"
DB_TEST="Sequelize_test"

DB_DIALECT="mysql"
DB_HOST="localhost"
DB_PORT=3306
DB_MAXCONNECTIONS=5

# NODE_ENV=production
# NODE_ENV=test
NODE_ENV=development
```

---

## 3️⃣ CREAR MIGRACIONES

### Crear migración

```jsx
npx sequelize-cli migration:generate --name create-personas
```

Esto crea un archivo en `migrations/` con plantilla `up` y `down`. Después podemos editarlo, quedando como sigue.

### Ejemplo migración tabla `personas`

```jsx
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('personas', {
      dni: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      nombre: Sequelize.STRING,
      clave: Sequelize.STRING,
      edad: Sequelize.INTEGER
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('personas');
  }
};
```

Roles:

```jsx
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descripcion: {
        type: Sequelize.STRING
      },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('roles');
  }
};
```

Roles aasignados:

```jsx
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rolesasignados', {
      idra: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dni_persona: {
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: 'personas'
          },
          key: 'dni'
        },
        allowNull: false,
        // onUpdate: 'CASCADE', // Opcional: Define qué sucede al actualizar/eliminar
        // onDelete: 'CASCADE'
      },
      id_rol: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'roles'
          },
          key: 'id'
        },
        allowNull: false
      },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('roles');
  }
};
```

**Ejecutar migraciones:**

```jsx
npx sequelize-cli db:migrate
```

## 4️⃣ CREAR SEEDERS

### Crear seeder

```jsx
npx sequelize-cli seed:generate --name demo-personas
```

Esto crea un archivo en `seeders/`.

### Ejemplo seeder con generación de datos

```jsx
'use strict';
const {genUsers} = require('../factories/user_factory.cjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('personas', [{
      dni: "100A",
      nombre: "Another persona",
      clave: "999",
      tfno: "99999",
      edad: 45
     }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('personas', null, {});
  }
};
```

- `bulkInsert` → inserta muchos registros a la vez
- `bulkDelete` → elimina registros (para revertir el seeder)

---

## 5️⃣ FACTORY PARA GENERAR DATOS (opcional)

`factories/personasFactory.js`:

```jsx
const { fakerES } = require('@faker-js/faker');

const genUsers = (ctos = 1) => {
  let usersGen = [];
  for (let i = 0; i < ctos; i++) {
    usersGen.push({
      dni: fakerES.person.identifier(),
      nombre: fakerES.person.fullName(),
      clave: '1234',
      edad: Math.floor(Math.random() * 100) + 1
    });
  }
  return usersGen;
};

module.exports = { genUsers };
```

Quedando el seeder:

```jsx
'use strict';
const { genUsers } = require('../factories/personasFactory');

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = await genUsers(10); // genera 10 personas
    await queryInterface.bulkInsert('personas', users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('personas', null, {});
  }
};
```

## 6️⃣ COMANDOS ÚTILES

| Comando | Descripción |
| --- | --- |
| `npx sequelize-cli db:migrate` | Ejecuta todas las migraciones pendientes |
| `npx sequelize-cli db:migrate:undo` | Deshace la última migración |
| `npx sequelize-cli db:migrate:undo:all` | Deshace todas las migraciones |
| `npx sequelize-cli db:seed:all` | Ejecuta todos los seeders |
| `npx sequelize-cli db:seed:undo:all` | Revertir todos los seeders |
| `npx sequelize-cli model:generate --name User --attributes nombre:string,email:string` | Genera modelo + migración |
| `npx sequelize-cli db:seed --seed ./seeders/20251126113401-roles_asignados__seeder.cjs` | Lanza un seeder específico |