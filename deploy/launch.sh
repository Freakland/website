#!/usr/bin/env bash

NAME=freeky

WWW_DIR=/var/www
NGINX_CONFIG_DIR=/etc/nginx/conf.d
INIT_DIR=/etc/init.d

# Symlink nginx and init scripts
ln -s $WWW_DIR/$NAME/deploy/$NAME.conf $NGINX_CONFIG_DIR/$NAME.conf
ln -s $WWW_DIR/$NAME/deploy/$NAME $INIT_DIR/$NAME

# Make dir for logs and pids
mkdir $WWW_DIR/$NAME/log
mkdir $WWW_DIR/$NAME/run
