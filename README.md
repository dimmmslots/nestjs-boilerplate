<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
  <a href="https://zod.dev/" target="blank"><img src="https://zod.dev/logo.svg" width="200" alt="Zod Logo"></a>
  <a href="https://prisma.io/" target="blank"><img src="https://i.pinimg.com/originals/39/b2/e4/39b2e4ad77c23a2c11e5950a7dfa2aec.png" width="140" alt="Zod Logo"></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<h1 align="center">NestJS Boilerplate</h1>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository + Additional tooling based on my preference, namely:

- PrismaORM 
- Zod
- Husky Hooks (lint-staged, commitlint)


## Installation
1. First, install all the dependencies :
```bash
$ npm install
```
<br>

2. Dont forget to initalize prisma by running :
```bash
$ npx prisma init
```

<br>

3. Set environment variables needed in env.example (**dont forget to rename it to ".env"**)
```env
# env.example (rename the file to ".env")

DATABASE_URL="postgresql://user:password@host:port/dbname?schema=public"
PORT="3000"
```

<br>

4. Run the migration
```bash
$ npx prisma migrate dev --name init
```

<br>

5. Generate Prisma Client
```bash
$ npx prisma generate
```

<br>

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Commit Message Linting
Since this project uses commitlint, you need to follow the commit message format. The format is as follows:
```bash
<type>(<scope>): <subject>
```

example:
```bash
feat: add new feature
```

The `scope` is optional. The `type` is mandatory and it must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)

- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)

- **docs**: Documentation only changes

- **feat**: A new feature
  
- **fix**: A bug fix

- **chores**: Changes to the build process or auxiliary tools and libraries such as documentation generation

- **perf**: A code change that improves performance

- **refactor**: A code change that neither fixes a bug nor adds a feature

- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)

- **test**: Adding missing tests or correcting existing tests


## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
