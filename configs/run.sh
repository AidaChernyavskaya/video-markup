#!/bin/sh

htpasswd -c -b /etc/nginx/.htpasswd $BASIC_USERNAME $BASIC_PASSWORD
nginx -g "daemon off;"
