### Setup

Install `yarn`, [`buf`](https://docs.buf.build/installation)

### Development

`yarn`

`yarn buf`

`yarn dev`

### Production

`yarn`

`yarn buf`

`yarn build`

`yarn start`

### Docker setup

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
