build:
	docker image build -t catfactsproxy .

run:
	docker container run \
	-p 8080:80 \
	-d \
	--name catfactsproxy \
	catfactsproxy:latest

clean: stop rm

publish: tag push

stop:
	docker container stop catfactsproxy

rm:
	docker container rm catfactsproxy

bash:
	docker container exec -it catfactsproxy bash

tag:
	docker tag catfactsproxy:latest corykitchens/catfactsproxy:latest

push:
	docker push corykitchens/catfactsproxy:latest