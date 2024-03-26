# ALIAS
DC = docker-compose
DEV = docker-compose.dev.yaml

# COMMAND

# Docker Compose
all: build up

build:
	$(DC) -f $(DEV) build

up:
	$(DC) -f $(DEV) up

down:
	$(DC) -f $(DEV) down --rmi all

# Src
dev:
	npm run dev
clean:
	rm -rf dist/