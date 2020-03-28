#!/bin/bash
export JEKYLL_VERSION=3.5
sudo docker run --name hedykaprijekyll --rm --volume="$PWD:/srv/jekyll" -p 3000:4000 -it jekyll/jekyll:$JEKYLL_VERSION jekyll serve --watch --drafts
