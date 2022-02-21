PROJECT_DATA=$(shell pwd)

DOCKER_CONTAINER_IMAGE=$(shell basename $(PROJECT_DATA))-node
DOCKER_CONTAINER_IMAGE_SHELL=bash

DOCKER_CONTAINER_NAME=$(shell basename $(PROJECT_DATA))-container

DOCKER_RUN_EXTRA_ARGS=
DOCKER_RUN_EXTRA_ARGS_DEV=-p 3000:3000
DOCKER_RUN_EXTRA_ARGS_BUILD=

define spawn = 
docker run \
	--rm \
	--name $(DOCKER_CONTAINER_NAME) \
	-u node \
	-w /code \
	-v $(PROJECT_DATA):/code \
	$(1) \
	-it $(DOCKER_CONTAINER_IMAGE) \
	$(DOCKER_CONTAINER_IMAGE_SHELL) $(2)
endef

clear:
	rm -rf ./packages/app/dist

docker-prepare:
	docker build -t $(DOCKER_CONTAINER_IMAGE) ./docker

attach:
	docker exec -it $(DOCKER_CONTAINER_NAME) $(DOCKER_CONTAINER_IMAGE_SHELL)

start:
	make docker-prepare
	if [ $(shell docker ps -q --filter "name=$(DOCKER_CONTAINER_NAME)" | wc -l) -gt 0 ] ; then \
		make attach ;\
	else \
		$(call spawn,$(DOCKER_RUN_EXTRA_ARGS_DEV)) ;\
	fi

dev:
	make docker-prepare
	$(call spawn,$(DOCKER_RUN_EXTRA_ARGS_DEV),-c "pnpm install && pnpm run dev")

build:
	make clear
	make docker-prepare
	$(call spawn,$(DOCKER_RUN_EXTRA_ARGS_BUILD),-c "pnpm install && pnpm run build")

stop:
	docker stop $(DOCKER_CONTAINER_NAME)