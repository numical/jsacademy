#!/bin/bash
cd ../bin
unzip -o chromedriver_mac64.zip
ln -f -s ${PWD}/chromedriver /usr/local/bin/chromedriver
cd ${OLDPWD}

