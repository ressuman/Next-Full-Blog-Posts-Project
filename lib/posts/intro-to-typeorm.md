---
title: "Introduction to TypeORM"
date: "2024-09-15"
author: "Catherine Woods"
image: typeorm.avif
excerpt: "A beginner’s guide to using TypeORM with Node.js and TypeScript for database management."
isFeatured: true
---

TypeORM is a **popular ORM (Object-Relational Mapper)** for **Node.js** written in **TypeScript**. It provides an abstraction layer that allows developers to work with databases using a more object-oriented approach, making it easier to manage database entities, relationships, and queries.

## What is TypeORM?

TypeORM is a full-featured ORM built to work with **TypeScript** and **JavaScript** (ES5, ES6, ES7, ES8) and can be used with different types of databases like **MySQL**, **PostgreSQL**, **SQLite**, **Microsoft SQL Server**, **MongoDB**, and more. It follows the **Data Mapper** and **Active Record** patterns, offering flexibility for different use cases.

### Key Features of TypeORM

- **Database Abstraction**: Work with databases using object-oriented programming principles, allowing you to define models (entities) in your code that represent database tables.
- **Supports Multiple Databases**: TypeORM supports various databases, making it a versatile tool for different projects.
- **TypeScript Support**: Built with TypeScript in mind, providing type safety and autocompletion, which improves developer experience.
- **Migrations**: TypeORM provides a robust migration system that allows you to version your database schema changes over time.
- **Query Builder**: A powerful and flexible query builder that allows you to build SQL queries programmatically.
- **Eager & Lazy Loading**: TypeORM supports both eager and lazy loading for related entities.

In this guide, we will cover:

- Setting Up TypeORM in a Node.js Project
- Defining Entities
- Working with Repositories
- Managing Migrations
- Running Queries with the Query Builder

## Setting Up TypeORM in a Node.js Project

To get started with TypeORM, you’ll first need to create a Node.js project and install the required dependencies. Here’s how to set it up:

1. Initialize a new Node.js project and install TypeORM, TypeScript, and a database driver (for this example, we’ll use PostgreSQL):

```bash
npm init -y
npm install typeorm reflect-metadata pg
npm install typescript ts-node @types/node --save-dev
```

2. Create a `tsconfig.json` file to configure TypeScript:

```json
{
  "compilerOptions": {
    "lib": ["es5", "es6"],
    "module": "commonjs",
    "target": "es6",
    "outDir": "./dist",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true
  }
}
```

3. Set up a **TypeORM configuration file** (`ormconfig.json`) that includes database connection details:

```json
{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "your-username",
  "password": "your-password",
  "database": "your-database",
  "entities": ["src/entity/*.ts"],
  "migrations": ["src/migration/*.ts"],
  "cli": {
    "entitiesDir": "src/entity",
    "migrationsDir": "src/migration"
  }
}
```

## Defining Entities

In TypeORM, an **entity** represents a database table. You define entities as classes and use decorators to map them to the corresponding database tables and columns.

Here’s an example of an entity definition for a `User` table:

```ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}
```

- The `@Entity()` decorator defines a class as an entity.
- `@PrimaryGeneratedColumn()` is used for the primary key.
- `@Column()` defines a table column.

Now, you can create a **repository** for this entity to interact with the database.

## Working with Repositories

TypeORM provides a **repository** pattern to manage entities. A repository is responsible for handling database operations such as inserting, updating, deleting, and querying data.

Here’s how you can use the `User` entity in a repository:

```ts
import { getRepository } from "typeorm";
import { User } from "./entity/User";

async function createUser() {
  const userRepository = getRepository(User);

  const newUser = userRepository.create({
    firstName: "John",
    lastName: "Doe",
    age: 30,
  });

  await userRepository.save(newUser);
  console.log("User created:", newUser);
}

createUser();
```

In this example:

- `getRepository()` gets the repository for the `User` entity.
- `create()` creates a new user entity.
- `save()` inserts the new user into the database.

## Managing Migrations

TypeORM includes a built-in **migration** system that helps you keep track of database schema changes over time. This is particularly useful when your project grows, and you need to maintain different versions of the database schema.

To create a new migration, run the following command:

```bash
npx typeorm migration:generate -n MigrationName
```

This will create a new migration file inside the `src/migration` directory. You can then run migrations using:

```bash
npx typeorm migration:run
```

Migrations allow you to **version** your database schema changes and ensure consistency across environments (development, staging, production).

## Running Queries with the Query Builder

TypeORM’s **Query Builder** provides a flexible way to build and execute SQL queries programmatically. You can use it to perform complex database operations, such as joining tables or applying multiple filters.

Here’s an example of a query to find all users older than 25:

```ts
import { getRepository } from "typeorm";
import { User } from "./entity/User";

async function findUsers() {
  const userRepository = getRepository(User);

  const users = await userRepository
    .createQueryBuilder("user")
    .where("user.age > :age", { age: 25 })
    .getMany();

  console.log("Users found:", users);
}

findUsers();
```

In this example:

- `createQueryBuilder()` is used to start building a query.
- `.where()` adds conditions to the query.
- `.getMany()` executes the query and returns an array of results.

## Conclusion

TypeORM is a powerful ORM that makes it easier to interact with databases in Node.js applications. By using TypeScript, it provides type safety and autocompletion, improving the developer experience.

Whether you're working with relational databases like **PostgreSQL**, **MySQL**, or even **NoSQL databases** like **MongoDB**, TypeORM offers the tools and flexibility to build scalable, maintainable applications.

![TypeORM Logo](/images/posts/intro-to-typeorm/typeorm1.avif)

TypeORM’s **entity-based modeling**, support for **migrations**, and flexible **query builder** make it a great choice for modern web applications, allowing developers to focus more on application logic rather than database management.

---

This extended version introduces TypeORM's core features, provides setup instructions, and covers key concepts like entities, repositories, migrations, and queries, giving a complete overview for beginners.
