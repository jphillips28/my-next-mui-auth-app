.PHONY: dev-build
dev-build: ## Build the development docker image.
	docker compose -f docker/docker-compose.dev.yml build

.PHONY: dev-start
dev-start: ## Start the development docker container.
	docker compose -f docker/docker-compose.dev.yml up -d

.PHONY: dev-stop
dev-stop: ## Stop the development docker container.
	docker compose -f docker/docker-compose.dev.yml down

.PHONY: prod-build
prod-build: ## Build the production docker image.
	docker compose -f docker/docker-compose.prod.yml build

.PHONY: prod-start
prod-start: ## Start the production docker container.
	docker compose -f docker/docker-compose.prod.yml up -d

.PHONY: prod-stop
prod-stop: ## Stop the production docker container.
	docker compose -f docker/docker-compose.prod.yml down
