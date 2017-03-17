#!/bin/bash

sudo rkt run  --uuid-file-save=$PWD/uuid --insecure-options=image --interactive docker://node:slim --name nodeslim -- -v &&
sudo rkt export --app=nodeslim `cat uuid` nodeslim.aci &&
echo "./nodeslim.aci image created"
echo "Cleaning"
sudo rkt rm `cat uuid` &&
sudo rm uuid
echo "Done"


