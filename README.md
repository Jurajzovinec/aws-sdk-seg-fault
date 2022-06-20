# Steps to reproduce:

## Running nest process locally will not throw Segmentation fault

1. `npm ci`
2. `nest start --debug 0.0.0.0:9229 --watch`

## Running the same app on two alpine versions

`docker compose -f "resources/docker-compose.yaml" up -d --build`
