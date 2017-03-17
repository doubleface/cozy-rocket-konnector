#!/bin/bash

sudo rkt run --net=host --uuid-file-save=$PWD/uuid --volume data,kind=host,source=$PWD/konnector --insecure-options=image nodeslim.aci --name rktnode --mount volume=data,target=/usr/src/app --exec node -- /usr/src/app/index.js $1 $2 &&
sudo rkt rm `cat uuid` &&
sudo rm uuid

