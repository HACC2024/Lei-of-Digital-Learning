FROM ubuntu:22.04 as dev

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install python3.10 python3-pip python3-dev libpq-dev gcc -y

WORKDIR /usr/camdn

COPY requirements.txt .
RUN python3 -m pip install -r requirements.txt

EXPOSE 8000

COPY ./camdn .

CMD ["fastapi", "dev", "main.py", "--host", "0.0.0.0", "--port", "8000"]