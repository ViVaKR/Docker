#!/bin/bash

mkdir -p /webdata
while true
do
    /usr/bin/rig | /usr/bin/boxes -d boy > /webdata/index.html
    sleep 5
done
