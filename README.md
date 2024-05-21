# ORKG Ask PocketBase

Pocketbase is used as lightweight backend service for ORKG Ask, mainly responsible for user management, LLM caching and bibliography management.

# Running locally

Clone this repo, and go to the directory. Then run:

```bash:
docker compose -f ./docker-compose.dev.yml up -d
```

# Project structure

`./pb_hooks` - Contains custom to automatically run code on specific events
`./pb_migrations` - Contains database migrations, always contains the latest database structure that is currently running in production
