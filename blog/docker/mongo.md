# 从MongoDB中导出导入数据
## Export Docker Mongo Data

::: warning
Important info

You need to stop app before importing MongoDB database with command:

```shell script
docker stop xxx-app
```
:::



1. list docker containers 

```shell script
docker ps
```

2. enter inside docker container

```shell script
docker exec -it container-id bash
```

3. go to `/` directory

```shell script
cd /
```

4. backup the database to `/dump` directory
```shell script
mongodump -o /dump/
```

5. exit docker container
```shell script
exit
```

6. copy the directory from container
```shell script
docker cp container-id:/dump .
```

7. restore the database from backup directory
```shell script
docker cp dump new-container-id:/data/
docker exec -it new-container-id bash
cd /data
mongorestore --drop --db dbname /data/dump/dbname/
exit
```

ps: Backup and restore scripts

- backup script
```shell script
#!/bin/bash
DATE=$(date +%Y-%m-%d-%H-%M)
SCRIPTPATH="$( cd "$(dirname "$0")" ; pwd -P )"
cd $SCRIPTPATH
mkdir -p backups/$DATE
docker ps -a | grep 'app-db' &> /dev/null
if [ $? = 0 ]; then
  docker exec -t app-db bash -c "rm -fr /dump ; mkdir /dump ; mongodump -o /dump/"
  docker cp app-db:/dump $SCRIPTPATH/backups/$DATE
  tar -zc -f backups/$DATE.tgz -C $SCRIPTPATH/backups/$DATE app
  if [ -f backups/$DATE.tgz ]; then
    rm -fr backups/$DATE
    find $SCRIPTPATH/backups/ -name "*.tgz" -mtime +7 -delete
  fi 
else
  echo "app-db container is not running"
  exit 1
fi
```

- restore script
```shell script
#!/bin/bash
if [ $# -eq 0 ]
  then
    echo "Supply a path to a tgz file!"
    exit 1
fi

SCRIPTPATH="$( cd "$(dirname "$0")" ; pwd -P )"
DATE=$(date +%Y-%m-%d-%H-%M)

docker ps -a | grep 'app-db' &> /dev/null
if [ $? = 0 ]; then

  if [ -f $1 ]; then
    mkdir -p $SCRIPTPATH/backups/$DATE-restore
    tar -zx -f $1 -C $SCRIPTPATH/backups/$DATE-restore
    docker exec -t app-db bash -c "rm -fr /restore ; mkdir /restore"
    docker cp $SCRIPTPATH/backups/$DATE-restore/app app-db:/restore
    ## Only if you get errors about existing indexes, use this instead:
    ## docker exec -t app-db bash -c "mongorestore --drop --noIndexRestore --db app /restore/app/"
    docker exec -t app-db bash -c "mongorestore --drop --db app /restore/app/"
  fi
else
  echo "app-db container is not running"
  exit 1
fi
```

