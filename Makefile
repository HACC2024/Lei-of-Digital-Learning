.PHONY: run dev build

init:
	npm install

run dev:
	docker compose up

run dev build:
	docker compose up --build