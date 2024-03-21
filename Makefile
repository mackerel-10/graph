# ALIAS
DC = docker-compose
DEV = docker-compose.dev.yaml

# COMMAND
all: build up

build: $(DC) -f $(DEV) build

up:
	$(DC) -f $(DEV) up

down:
	$(DC) -f $(DEV) down --rmi all