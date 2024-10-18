.PHONY: init run dev test

init:
	python3 -m venv .venv \
	&& source .venv/bin/activate \
	&& pip install -r requirements.txt

run dev:
	if [ "${VIRTUAL_ENV}" != "" ]; then \
		fastapi dev camdn/main.py; \
	else \
		. .venv/bin/activate && fastapi dev camdn/main.py && deactivate; \
	fi

test:
	py.test tests