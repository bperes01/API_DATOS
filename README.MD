# API Datos

Este proyecto es una API RESTful para gestionar sensores y lecturas de datos. Está construido con Node.js, Express y MongoDB.

## Características

- **Gestión de Sensores**: Permite crear, leer, actualizar y eliminar sensores.
- **Gestión de Lecturas**: Permite crear, leer y eliminar lecturas de sensores.
- **Rango de Fechas**: Permite obtener lecturas de sensores en un rango de fechas específico.
- **Importación y Exportación de Datos**: Scripts para importar y exportar datos de sensores y lecturas desde/hacia archivos JSON.

## Estructura del Proyecto


## Instalación

1. Clona el repositorio:
    ```sh
    git clone <URL_DEL_REPOSITORIO>
    ```
2. Instala las dependencias:
    ```sh
    npm install
    ```
3. Configura la base de datos en `config/db.js`.

## Uso

1. Inicia el servidor:
    ```sh
    npm start
    ```
2. La API estará disponible en `http://localhost:3000`.

## Endpoints

### Sensores

- `GET /sensors`: Obtiene todos los sensores.
- `POST /sensors`: Crea un nuevo sensor.
- `GET /sensors/:id`: Obtiene un sensor por ID.
- `PUT /sensors/:id`: Actualiza un sensor por ID.
- `DELETE /sensors/:id`: Elimina un sensor por ID.

### Lecturas

- `GET /readings/:sensorId`: Obtiene todas las lecturas de un sensor.
- `POST /readings`: Crea una nueva lectura.
- `DELETE /readings/:sensorId`: Elimina todas las lecturas de un sensor.
- `GET /readings/time/:sensorId`: Obtiene lecturas de un sensor en un rango de fechas.

## Importación y Exportación de Datos

- `resources/import_data.sh`: Script para importar datos de sensores y lecturas desde archivos JSON.
- `resources/export_data.sh`: Script para exportar datos de sensores y lecturas a archivos JSON.

## Colección de Postman

En `resources/API Datos.postman_collection.json` se encuentra una colección de Postman para probar los endpoints de la API.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.