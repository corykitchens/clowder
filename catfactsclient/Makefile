build:
	docker image build -t catfactsclient:latest .

run:
	docker container run \
	--name catfactsclient \
	-p 3000:3000 \
	-d catfactsclient:latest 

clean: stop rm

publish: tag push

rm:
	docker container rm catfactsclient

stop:
	docker container stop catfactsclient

tag:
	docker tag catfactsclient:latest corykitchens/catfactsclient:latest

push:
	docker push corykitchens/catfactsclient:latest
