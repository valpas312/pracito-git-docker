# Gemini AI - Backend con Node.js y Express

Este es un backend de API REST simple construido con **Node.js** y el framework **Express** que utiliza la librería de **Google GenAI** (`@google/genai`) para generar respuestas a peticiones POST. El proyecto está configurado para ser desplegado fácilmente utilizando **Docker**.

---

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

---

## Configuración del Entorno

Este proyecto requiere una clave de API de Gemini para funcionar.

1.  **Obtén tu clave de API** de Google AI Studio.
2.  Crea un archivo llamado **`.env`** en la raíz del proyecto.
3.  Añade tu clave en el formato `API_KEY=tu_clave_secreta`.

**Contenido de `.env` (Ejemplo)**

---

## Rutas y Uso de la API

El servidor Express expone dos rutas principales en el **puerto 3001**:

### 1. Ruta GET: `/`

* **Método:** `GET`
* **Descripción:** Ruta de prueba simple para verificar que el servidor está funcionando.
* **Respuesta:** `{"response": "Hello, World!"}`

### 2. Ruta POST: `/generate`

* **Método:** `POST`
* **Descripción:** Genera contenido utilizando el modelo `gemini-2.5-flash` basado en el `prompt` proporcionado.
* **Cuerpo de la Petición (JSON):**
    ```json
    {
      "prompt": "¿Cuál es la capital de Francia?"
    }
    ```
* **Respuesta Exitosa (JSON):**
    ```json
    {
      "response": "La capital de Francia es París."
    }
    ```

---

## Proceso de Dockerización y Despliegue

Sigue estos pasos para construir, subir y ejecutar tu aplicación como un contenedor de Docker.

### Paso 1: Configurar Dockerfile y .dockerignore

Asegúrate de tener los siguientes archivos en la raíz del proyecto:

#### 1.1. `Dockerfile`
```dockerfile
# Usa una imagen base de Node.js (preferiblemente Alpine para un tamaño reducido)
FROM node:20-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de definición de dependencias
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código de la aplicación (index.js, ai.js, etc.)
COPY . .

# Expone el puerto que usa tu aplicación Express (Aunque en Docker para hacer consultas el 80)
EXPOSE 3001

# Comando para ejecutar la aplicación
CMD ["npm", "start"]

# Comandos para el despliegue en Docker Hub
docker build -t valpas312/practico-git-docker:v1.0 .

docker push valpas312/practico-git-docker:v1.0