docker run -d -p 5000:5000 --name registry registry:2.6.2
docker pull busybox:latest
docker tag busybox localhost:5000/acme/busybox:0.1
docker tag busybox localhost:5000/acme/busybox:0.2
docker tag busybox localhost:5000/initech/busybox:1.0
docker push localhost:5000/acme/busybox
docker push localhost:5000/initech/busybox