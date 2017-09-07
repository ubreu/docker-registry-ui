NAME=docker-ui-dev-registry
VERSION=2.6.2
TEST_IMAGE=busybox

matchingStarted=$(docker ps --filter="name=$name" -q | xargs)
[[ -n $matchingStarted ]] && docker stop $matchingStarted

matching=$(docker ps -a --filter="name=$name" -q | xargs)
[[ -n $matching ]] && docker rm $matching

echo "starting registry..."
docker run -d -p 5000:5000 --name $NAME registry:$VERSION

WORK_DIR=`mktemp -d`
echo "building test images in $WORK_DIR..."

cat <<EOF > $WORK_DIR/Dockerfile
FROM $TEST_IMAGE:latest
LABEL vendor="Acme Corp" \
  maintainer="John Doe <john.doe@hotmail.com>" \
  base_image="$TEST_IMAGE"
EOF

IMAGE_ID=$(docker build -q $WORK_DIR)
echo "tagging images using id $IMAGE_ID...\n"
for repo in "acme/$TEST_IMAGE" "initech/$TEST_IMAGE"; do
  for i in {01..100}; do
   docker tag $IMAGE_ID localhost:5000/$repo:$(printf "%02d" $i)
  done;
  docker push localhost:5000/$repo
done;

function cleanup {
  rm -rf "$WORK_DIR"
}

trap cleanup EXIT
