docker run -p 80:8080 -e SWAGGER_JSON="/tmp/swagger.yaml" -v "$(pwd)/swagger":"/tmp" swaggerapi/swagger-ui
