set -ex
# SET THE FOLLOWING VARIABLES
# docker hub username
USERNAME=skribblemusic
# image name
IMAGE=boone-example-2
# ensure we're up to date
git fetch
git pull origin master
# bump version
docker run --rm -v "$PWD":/app treeder/bump patch
version=`cat VERSION`
echo "version: $version"
# run build
./scripts/build.sh
# tag it
git add -A
git commit -m "version $version"
git tag -a "$version" -m "version $version"
git push origin master
git push --tags
docker tag $USERNAME/$IMAGE:latest $USERNAME/$IMAGE:$version
# push it
docker push $USERNAME/$IMAGE:latest
docker push $USERNAME/$IMAGE:$version