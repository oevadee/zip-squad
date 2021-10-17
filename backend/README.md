# ZIP Squad app

## Backend

### DB

Install [PostgreSQL](https://www.postgresql.org/download/)

Install [PrismaStudio](https://www.prisma.io/studio)

Setup env vars: check **.env.example**

Map data model to your DB:
`npx prisma migrate dev --name init`

### General info

Preferred package manager: **yarn**

Install deps and run app:
`yarn && yarn start:dev`

**Remember about repo convention!** Check root [README](https://github.com/oevadee/zip-squad#zip-squad-app)
