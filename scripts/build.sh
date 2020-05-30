set -ex
# SET THE FOLLOWING VARIABLES
# docker hub username
USERNAME=skribblemusic
# image name
IMAGE=boone-example-2
docker build -t $USERNAME/$IMAGE:latest .