#!/bin/bash

# Create the rocket image
sudo rkt run  --uuid-file-save=$PWD/uuid --insecure-options=image --interactive docker://node:slim --name nodeslim -- -v &&
sudo rkt export --app=nodeslim `cat uuid` nodeslim.aci &&
echo "./nodeslim.aci image created"
echo "Cleaning"
sudo rkt rm `cat uuid` &&
sudo rm uuid

# install the node dependencies of the konnector
cd konnector/ && npm install

echo "Done"
