# TEMPLATE - Backend

- Aplicação em NestJS + Prisma

# steps

- yarn
- prisma generate
- sudo docker run --name postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -p 5432:5432 -d postgres
- prisma migrate dev
- yarn start:dev

