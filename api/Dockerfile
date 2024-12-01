FROM ubuntu AS dev

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install python3.10 python3-venv python3-dev libpq-dev gcc -y


WORKDIR /usr/camdn

COPY requirements.txt .
RUN python3 -m venv /venv
RUN /venv/bin/pip install --upgrade pip
RUN /venv/bin/pip install -r requirements.txt

COPY ./camdn .

EXPOSE 8000

CMD ["/venv/bin/python", "-m", "fastapi", "dev", "main.py", "--host", "0.0.0.0", "--port", "8000"]