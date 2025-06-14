# Usamos una imagen oficial de Java con Maven para compilar
FROM maven:3.9.3-eclipse-temurin-17 AS build

WORKDIR /app

# Copiar pom.xml y descargar dependencias
COPY pom.xml .
RUN mvn dependency:go-offline

# Copiar el resto del código fuente
COPY src ./src

# Compilar el proyecto y generar el .jar
RUN mvn clean package -DskipTests

# Imagen final
FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

# Copiar el .jar desde el build
COPY --from=build /app/target/*.jar app.jar

# Exponer el puerto (ajústalo si cambiaste el puerto en application.properties)
EXPOSE 8080

# Comando para ejecutar el jar
ENTRYPOINT ["java", "-jar", "app.jar"]
