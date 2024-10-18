.PHONY: init run dev build test

init:
	python3 -m venv .venv \
	&& source .venv/bin/activate \
	&& pip install -r requirements.txt

run dev:
	docker compose up

run dev build:
	docker compose up --build

test:
	py.test tests