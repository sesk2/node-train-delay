# node-train-delay
Notify for train delaying by LINE Notify

## start container
```
export LINE_TOKEN='{token}'  # set line notify token
docker-compose up -d
docker-compose ps
```

## run train-delay
```
docker exec -it node-train-delay node index.js
```

## login container
```
docker exec -it node-train-delay /bin/sh
```

## stop container
```
docker-compose stop
```

## down(stop & remove) container
```
docker-compose down
```

## check logs
```
docker logs node-train-delay
```
