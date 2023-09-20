# challenge-fe

This project uses Quarkus, the Supersonic Subatomic Java Framework.
## Endpoints

### `/labseq/{value}` Returns labseq(n)

## Instructions to run it with the docker container

### Have docker installed
### cd into the workdir
### Run  `mvn package` or  ` ./mvnw package`
### Run `docker build -f src/main/docker/Dockerfile.jvm -t quarkus/challenge-fe-jvm .`
### Run `docker run -i --rm -p 8080:8080 quarkus/challenge-fe-jvm`

