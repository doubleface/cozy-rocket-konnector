This is an experiment to run an independant konnector in a rocket container

## Rocket Installation

Here we suppose ubuntu but a lot of packages are available here for many distributions: https://github.com/coreos/rkt/releases/

Just download the debian package and install it with dpkg -i and you are done

You can also add your user in the rocket group to be able to list images and pods without sudo

## Nodejs ACI image creation

Just run the image_create.sh script and now you have a nodeslim.aci file which is your rocket
image to run.

## Run the experimental trainline konnector

Your are now ready to run the joined trainline konnector.

Just run:

```
run_konnector.sh login password
```

where login is your trainline login (your email) and password is your trainline password

This modified konnector only fetches data from trainline and display it in the standard output at the
moment



