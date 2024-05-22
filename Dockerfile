FROM alpine:latest

ARG PB_VERSION=0.20.1

RUN apk add --no-cache \
    unzip \
    ca-certificates

# Set ulimit during the image build
RUN ulimit -n 4096

# download and unzip PocketBase
ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/

# Copy the migration script for the database
COPY ./pb_migrations /pb/pb_migrations

# Copy any hooks to the pb_hooks dir
COPY ./pb_hooks /pb/pb_hooks

EXPOSE 8080

# start PocketBase
ENTRYPOINT ["/pb/pocketbase", "serve", "--http=0.0.0.0:8080"]
