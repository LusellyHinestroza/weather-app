# Weather App

Aplicación del clima creada con HTML, CSS y JavaScript.

## Funciones

- Buscar ciudades
- Mostrar temperatura actual
- Mostrar velocidad del viento
- Mostrar estado del clima

## Tecnologías

- HTML
- CSS
- JavaScript
- Open-Meteo API

## Cómo ejecutar

1. Abrir el proyecto en VS Code
2. Ejecutar index.html
3. O usar Live Server


# 🌤️ Weather App

Aplicación web del clima desarrollada con HTML, CSS y JavaScript que permite consultar información meteorológica en tiempo real utilizando la API de Open-Meteo.

La aplicación implementa una arquitectura modular, manejo de errores, diseño responsive y separación de responsabilidades para mantener un código limpio, escalable y fácil de mantener.

---

# 📌 Tabla de Contenido

1. Descripción General
2. Objetivos del Proyecto
3. Tecnologías Utilizadas
4. Arquitectura de la Aplicación
5. Estructura del Proyecto
6. Instalación
7. Ejecución del Proyecto
8. Funcionamiento General
9. Flujo Completo de la Aplicación
10. Explicación de Cada Archivo
11. Funcionalidades Principales
12. Manejo de Errores
13. Casos de Prueba
14. Casos Límite
15. Diseño Visual
16. Integración con APIs
17. Ejemplos de Uso
18. Fragmentos Importantes del Código
19. Mejoras Futuras
20. Autor
21. Licencia

---

# 📖 Descripción General

Weather App es una aplicación que permite a los usuarios buscar ciudades y visualizar información meteorológica actualizada.

La aplicación utiliza dos servicios principales de Open-Meteo:

1. Geocoding API
2. Weather Forecast API

Primero se obtiene la latitud y longitud de la ciudad ingresada por el usuario y luego se realiza una segunda solicitud para obtener el clima actual.

La aplicación muestra:

- 🌡️ Temperatura actual
- 💨 Velocidad del viento
- 💧 Humedad
- ☁️ Estado del clima
- ❌ Mensajes de error personalizados

---

# 🎯 Objetivos del Proyecto

Este proyecto fue desarrollado con los siguientes objetivos:

- Practicar consumo de APIs REST
- Aprender Fetch API
- Implementar async/await
- Manejar errores con try/catch
- Organizar código usando módulos
- Crear interfaces responsive
- Aplicar buenas prácticas en JavaScript
- Implementar validaciones de usuario
- Aprender integración de APIs externas

---

# 🚀 Tecnologías Utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura de la aplicación |
| CSS3 | Diseño y estilos |
| JavaScript ES6 | Lógica de la aplicación |
| Fetch API | Solicitudes HTTP |
| Async/Await | Manejo asíncrono |
| Open-Meteo API | Datos meteorológicos |
| Live Server | Ejecución local |
| Visual Studio Code | Desarrollo |

---

# 🧱 Arquitectura de la Aplicación

La aplicación utiliza una arquitectura modular basada en separación de responsabilidades.

Cada archivo tiene una función específica:

- `app.js` → Controlador principal
- `api.js` → Comunicación con APIs
- `ui.js` → Manipulación del DOM
- `utils.js` → Funciones auxiliares
- `constants.js` → Configuración global

Esta arquitectura permite:

✅ Código más limpio  
✅ Fácil mantenimiento  
✅ Escalabilidad  
✅ Reutilización de funciones  
✅ Mejor organización  

---

# 📂 Estructura del Proyecto

```plaintext
weather-app/
│
├── index.html
├── README.md
├── package.json
│
├── css/
│   └── styles.css
│
├── js/
│   ├── app.js
│   ├── api.js
│   ├── ui.js
│   └── utils.js
│
├── assets/
│   ├── icons/
│   │   ├── sun.svg
│   │   ├── rain.svg
│   │   ├── snow.svg
│   │   ├── cloud.svg
│   │   ├── storm.svg
│   │   └── fog.svg
│   │
│   └── images/
│       ├── fondo.jpg
│       └── clouds.png
│
└── config/
    └── constants.js
```

---

# ⚙️ Instalación

## 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/weather-app.git
```

---

## 2️⃣ Abrir el proyecto

Abrir la carpeta en:

```plaintext
Visual Studio Code
```

---

## 3️⃣ Instalar Live Server

Abrir:

```plaintext
Extensions
```

Buscar:

```plaintext
Live Server
```

Instalar la extensión.

---

# ▶️ Ejecución del Proyecto

1. Abrir:

```plaintext
index.html
```

2. Click derecho

3. Seleccionar:

```plaintext
Open with Live Server
```

El proyecto se abrirá automáticamente en el navegador.

---

# ⚡ Funcionamiento General

La aplicación sigue estos pasos:

1. El usuario escribe una ciudad
2. Se valida el input
3. Se consulta Geocoding API
4. Se obtienen coordenadas
5. Se consulta Weather Forecast API
6. Se procesan los datos
7. Se muestran resultados en pantalla

---

# 🔄 Flujo Completo de la Aplicación

```plaintext
Usuario escribe ciudad
        ↓
Input capturado en app.js
        ↓
Validación del input
        ↓
Llamada a api.js
        ↓
Solicitud a Geocoding API
        ↓
Obtención de latitud y longitud
        ↓
Solicitud a Forecast API
        ↓
Obtención de datos meteorológicos
        ↓
Procesamiento de respuesta
        ↓
ui.js renderiza resultados
        ↓
Usuario visualiza el clima
```

---

# 📄 Explicación de los Archivos

## 📄 index.html

Contiene la estructura principal:

- input
- botón
- contenedor del clima

---

## 📄 styles.css

Incluye:

- diseño responsive
- glassmorphism
- gradientes
- animaciones
- estilos generales

---

## 📄 app.js

Archivo principal de la aplicación.

Responsabilidades:

- escuchar eventos
- capturar input
- ejecutar búsquedas
- coordinar módulos

Ejemplo:

```javascript
button.addEventListener(
  "click",
  searchWeather
);
```

---

## 📄 api.js

Maneja las solicitudes HTTP.

Funciones principales:

- obtener coordenadas
- obtener clima
- validar respuestas
- manejar errores

Ejemplo:

```javascript
const weatherResponse =
  await fetch(weatherUrl);
```

---

## 📄 ui.js

Maneja la interfaz visual.

Responsabilidades:

- mostrar clima
- renderizar errores
- actualizar DOM

---

## 📄 utils.js

Funciones auxiliares reutilizables:

- descripciones climáticas
- utilidades generales
- formateos

---

## 📄 constants.js

Contiene:

- URLs base
- configuraciones globales
- constantes reutilizables

---

# ✅ Funcionalidades Principales

## 🌡️ Consulta de temperatura

Obtiene la temperatura actual en grados Celsius.

---

## 💨 Velocidad del viento

Muestra velocidad actual del viento.

---

## 💧 Humedad

Visualiza humedad relativa.

---

## ☁️ Descripción del clima

Muestra estados como:

- despejado
- lluvia
- nieve
- tormenta
- niebla

---

## 🎨 Interfaz moderna

Incluye:

- glassmorphism
- botones animados
- diseño responsive
- degradados

---

## ⌨️ Soporte para Enter

Permite buscar usando teclado.

---

## 🛡️ Validación de entradas

Evita:

- inputs vacíos
- espacios en blanco
- ciudades inválidas

---

## ❌ Manejo de errores

Captura:

- errores HTTP
- problemas de red
- respuestas inválidas

---

# 🛡️ Manejo de Errores

La aplicación utiliza:

```javascript
try/catch
```

para manejar errores de forma segura.

---

## Ejemplo

```javascript
if (!geoData.results) {
  throw new Error(
    "Ciudad no encontrada"
  );
}
```

---

## Errores controlados

| Error | Solución |
|---|---|
| Ciudad inválida | Mensaje personalizado |
| Sin internet | Error de conexión |
| API caída | Manejo HTTP |
| Input vacío | Validación previa |
| Datos faltantes | Control de respuesta |

---

# 🧪 Casos de Prueba

## ✅ Casos normales

- ciudad válida
- múltiples búsquedas
- Enter funciona
- resultados correctos

---

## ⚠️ Casos límite

- input vacío
- espacios en blanco
- caracteres especiales
- ciudad inexistente
- API lenta
- API caída
- múltiples requests
- conexión perdida

---

# 🎨 Diseño Visual

La interfaz utiliza:

## Glassmorphism

```css
backdrop-filter: blur(10px);
```

---

## Fondo degradado

```css
background: linear-gradient(
  135deg,
  #4facfe,
  #00f2fe
);
```

---

## Responsive Design

Compatible con:

- desktop
- tablets
- móviles

---

# 🌐 Integración con APIs

## 📍 Geocoding API

Convierte ciudades en coordenadas.

Ejemplo:

```plaintext
Bogotá
↓
latitude: 4.6097
longitude: -74.0817
```

---

## 🌦️ Forecast API

Obtiene:

- temperatura
- viento
- humedad
- clima actual

---

# 📌 Ejemplos de Uso

## Entrada

```plaintext
Tokyo
```

---

## Resultado

```plaintext
Tokyo, Japan

🌡️ Temperatura: 21°C
💨 Viento: 8 km/h
💧 Humedad: 65%
☁️ Parcialmente nublado
```

---

# 💻 Fragmentos Importantes del Código

## Fetch API

```javascript
const response =
  await fetch(url);
```

---

## Async/Await

```javascript
async function fetchWeather(city)
```

---

## Manejo de errores

```javascript
try {

} catch (error) {

}
```

---

# 🔮 Mejoras Futuras

## Funcionalidades futuras

- pronóstico semanal
- geolocalización automática
- favoritos
- historial
- dark mode
- múltiples idiomas
- mapas interactivos
- notificaciones climáticas
- búsqueda por voz
- cache local

---

# 📈 Posibles Mejoras Técnicas

- usar TypeScript
- agregar testing
- implementar PWA
- optimización de rendimiento
- deploy en la nube
- usar framework frontend

---

# 👩‍💻 Autor

Proyecto desarrollado por:

```plaintext
Lucelly Valencia
```

---

# 📄 Licencia

Proyecto desarrollado con fines educativos y de práctica.

Puedes modificarlo y expandirlo libremente.













