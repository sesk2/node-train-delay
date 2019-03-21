# node-train-delay
notification for train delaying

## start container
```
docker-compose up -d
docker-compose ps
```

## run line notify
```
docker exec -it node8-axios node index.js
```

## login container
```
docker exec -it node8-axios /bin/sh
```

## check logs
```
docker logs node8-axios
```



## update docker image
```
docker login
docker-compose build --no-cache
docker-compose push
```



