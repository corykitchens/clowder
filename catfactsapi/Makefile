build:
	docker image build -t catfactsapi:latest .

run:
	docker container run \
	--name catfactsapi \
	-p 5000:5000 \
	-d catfactsapi:latest 

clean: stop rm

publish: tag push

rm:
	docker container rm catfactsapi

stop:
	docker container stop catfactsapi

tag:
	docker tag catfactsapi:latest corykitchens/catfactsapi:latest

push:
	docker push corykitchens/catfactsapi:latest
