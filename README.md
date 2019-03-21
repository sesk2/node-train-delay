# node-train-delay
Notify for train delaying by LINE Notify

## start container
```
export LINE_TOKEN='{token}'  # set line notify token
docker-compose up -d
docker-compose ps
```

## run line notify
```
docker exec -it node-line-notify node index.js
```

## login container
```
docker exec -it node-line-notify /bin/sh
```

## stop container
```
docker exec -it node-line-notify /bin/sh
```

## down(stop & remove) container
```
docker exec -it node-line-notify /bin/sh
```

## check logs
```
docker logs node-line-notify
```



## update docker image
```
docker login
docker-compose build --no-cache
docker-compose push
```



