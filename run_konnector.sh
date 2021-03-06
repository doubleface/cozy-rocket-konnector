#!/bin/bash

sudo rkt run --net=host --hosts-entry=host --uuid-file-save=$PWD/uuid --volume data,kind=host,source=$PWD/$1 --insecure-options=image nodeslim.aci --cpu=100m --memory=128M --name rktnode --mount volume=data,target=/usr/src/app --set-env="COZY_CREDENTIALS=$(<konnector/token.json)" --set-env=COZY_URL="http://cozy.local:8080" --exec node -- /usr/src/app/index.js $2 $3 $4 &
sleep 30 &&
sudo rkt stop --force --uuid-file=uuid &&
sudo rkt rm --uuid-file=uuid &&
sudo rm uuid

