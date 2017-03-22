This is an experiment to run an independant konnector in a rocket container

## Rocket Installation

Here we suppose ubuntu but a lot of packages are available here for many distributions: https://github.com/coreos/rkt/releases/

Just download the debian package and install it with dpkg -i and you are done

You can also add your user in the rocket group to be able to list images and pods without sudo

## Nodejs ACI image creation

Just run the init.sh script and now you have a nodeslim.aci file which is your rocket
image to run.

This init script also installs the node dependencies of the konnector. That is why you need to have
nodejs and npm installed on your host at the moment for this to work at the moment.

## Run the experimental trainline konnector

Your are now ready to run the joined trainline konnector.

Just run:

```
run_konnector.sh konnector login password
```

where *login* is your trainline login (your email) and *password* is your trainline password

The script will ask you your password since rocket needs root rights to run the containers.

This modified konnector only fetches data from trainline and put it in a running cozy-stack (the
one from the docker image works with it)

But you will need to get the credentials from the cozy stack before runnning the konnector. Just
run :

```
cd konnector
node gettoken.js
```

And you will be asked to open an url in your browser. When this is done, a new file will appear in
the konnector directory : token.json

This json file will be used by the konnector to get permission to talk to the cozy stack.

Then you can run the konnector with the usual command

## Run the fork bomb test

Just run:

```
run_konnector.sh forkbomb
```

