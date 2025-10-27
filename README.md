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
````

---

### Funcionamiento de la app

* Iniciamos la aplicacion con el script npm start
<img width="1920" height="1032" alt="Captura de pantalla 2025-10-27 132117" src="https://github.com/user-attachments/assets/e5b5e209-9906-4a03-a2ec-16a43a7d664b" />

* Ya tenemos el servidor corriendo
<img width="1920" height="1032" alt="Captura de pantalla 2025-10-27 132152" src="https://github.com/user-attachments/assets/43e44b63-5bde-4eae-8639-0aaa96834313" />

* Abrimos postman y en la direccion 
```json
    http://localhost:3001/generate
```
* hacemos una consulta post con un JSON con el dato prompt
<img width="1920" height="1032" alt="Captura de pantalla 2025-10-27 132317" src="https://github.com/user-attachments/assets/a403ebb9-63a1-427b-b995-98e109a3893d" />

* Hacemos la peticion y deberiamor ver el cuerpo de la respuesta un JSON con el dato response seguido de la respuesta generada por la AI 
<img width="1920" height="1032" alt="Captura de pantalla 2025-10-27 132404" src="https://github.com/user-attachments/assets/1aad99ea-b109-4b49-a035-84982905e69f" />

