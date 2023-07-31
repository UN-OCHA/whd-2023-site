# Normal usage

### *See the [setup-notes](https://github.com/UN-OCHA/local-reverse-proxy/blob/main/setup-notes.md) for first-time set-up.*

## To start
`docker compose -f local/docker-compose.yml up -d`
## To enter the container
`docker exec -it whd-local-site sh`
## To stop
`docker compose -f local/docker-compose.yml down`

## Notes
Composer should be run from inside the container.

When working in the mysql container, use the command `rehash` to enable
autocompletion of database, table and column names. Reference: https://dev.mysql.com/doc/refman/8.0/en/mysql-command-options.html#option_mysql_auto-rehash

For autocompletion of the docker compose file location, try `docker completion bash --help` (or, if not using bash, `docker completion --help` to see which other shells are supported. Reference: https://github.com/docker/compose/issues/10420
