# Setup

## Development

Install `yarn`

`yarn`

`yarn buf`

`yarn dev`

### MySQL setup

#### Create the container

```
docker run --name esec-db -e MYSQL_ROOT_PASSWORD=rootpassword -e MYSQL_DATABASE=esec-db -e MYSQL_USER=user -e MYSQL_PASSWORD=password -p 3306:3306 -d mysql/mysql-server:8.0
```

#### Create the admin user

```
docker exec -it esec-db mysql -uroot -prootpassword
```

Once you're inside the mysql container:

```
mysql> use esec-db;
mysql> CREATE USER 'admin'@'%' IDENTIFIED BY 'rootpassword';
mysql> GRANT ALL ON *.* TO 'admin'@'%';
mysql> FLUSH PRIVILEGES;
```

Everything's done ! ✅

### Database setup

```
npx dotenv -e .env.development -- prisma migrate dev
npx dotenv -e .env.development -- prisma db seed
```

## Production

Add `.env`

`yarn`

`yarn buf`

`yarn build`

`yarn start`

https://www.prisma.io/docs/guides/migrate/seed-database

https://www.prisma.io/docs/reference/api-reference/command-reference#prisma-migrate

## Docker build

Before proceeding with the build, make sure the esec-engine backend is up and running. You'll need to pass the URL of the backend as a build argument using Docker.

To build the Docker image:

```
docker build . --build-arg RPC_ADDRESS=host.docker.internal:4000 -t esec
```
