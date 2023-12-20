#!/bin/bash
mkdir -p /webdata
while true
do
    df -h / > /webdata/df.html
    sleep 10
done
