# VTV Frontend – Servicio Automotor

Frontend en **Angular 17** de un sistema de gestión de turnos para la **VTV (Verificación Técnica Vehicular)**. Permite a los usuarios registrarse, iniciar sesión, editar sus datos personales e inscribir y consultar sus vehículos, consumiendo la API REST del backend desarrollado en Spring Boot:

**Backend:** [JoaquinMayor/SistemaAutomotorSpringBoot](https://github.com/JoaquinMayor/SistemaAutomotorSpringBoot)

> **Estado:** proyecto personal **en desarrollo**. Las pantallas de usuario (registro, login, edición de datos y vehículos) están implementadas; los componentes de turnos y del panel de administración están creados pero todavía no tienen funcionalidad.

## Tecnologías

- **Angular 17** con componentes *standalone* y el nuevo control flow (`@if`, `@for`)
- **TypeScript 5.3**
- **Reactive Forms** (`FormGroup`, `FormControl`, `Validators`)
- **HttpClient** + **RxJS** para consumir la API REST
- **Angular SSR** (`@angular/ssr` + Express) con hidratación del cliente (`provideClientHydration`)
- Karma + Jasmine para pruebas unitarias

## Estructura del proyecto

```
src/app/
├── app.routes.ts            # Definición de rutas
├── app.config.ts            # Providers: router, hidratación y HttpClient
├── first-page/
│   ├── welcome-page/        # Pantalla de bienvenida (ir a login o registro)
│   ├── login/               # Inicio de sesión
│   └── register/            # Registro de usuario
├── user-components/
│   ├── edit-user/           # Edición de datos del usuario logueado
│   ├── add-vehicle/         # Inscripción de un vehículo
│   ├── user-view-vehicle/   # Listado de vehículos del usuario
│   ├── shift-user/          # (pendiente) turnos del usuario
│   └── user-option/         # (pendiente) menú de opciones del usuario
├── admin/                   # (pendiente) panel de administración
│   ├── admin-option/
│   ├── user-options/        # ver / editar / eliminar usuarios, cambiar titular
│   ├── vehicle-options/     # cargar / editar / eliminar vehículos
│   └── shift-options/       # crear / ver / eliminar turnos
├── models/                  # Clases de dominio: User, Vehicle, Shift, Rol
└── services/
    ├── user-register-loguer.service.ts   # UserService: comunicación con la API
    └── user-configuration.service.ts     # (pendiente)
```

### Rutas

| Ruta | Componente | Descripción |
|---|---|---|
| `/` | `WelcomePageComponent` | Bienvenida con accesos a login y registro |
| `/register` | `RegisterComponent` | Alta de usuario |
| `/log` | `LoginComponent` | Inicio de sesión |
| `/edit` | `EditUserComponent` | Edición de datos del usuario |
| `/chargeVehicle` | `AddVehicleComponent` | Inscripción de vehículo |
| `/viewVehicle` | `UserViewVehicleComponent` | Vehículos del usuario |

### Modelos

- `User`: id, nombre, apellido, DNI, edad, email, habilitado, roles y vehículos.
- `Vehicle`: id, tipo, patente, kilómetros, modelo, habilitado y turnos.
- `Shift` (turno): id, sku, monto, fecha, habilitado y patente.
- `Rol`: id y nombre (por ejemplo `ROLE_USER`).

### `UserService`

Centraliza las llamadas al backend (`http://localhost:8080`):

| Método | Endpoint |
|---|---|
| `register` | `POST /api/users` |
| `login` | `POST /login` (devuelve un token JWT) |
| `searchUser` / `saveUser` | `GET /api/users/email/{email}` – carga el usuario logueado con su rol y vehículos |
| `editName`, `editLastname`, `editEmail`, `editAge`, `editPassword` | `GET /api/users/change{Campo}/{dni}/{valor}` |
| `viewUsers` | `GET /api/users` |
| `chargeVehicle` | `PUT /api/users/add/vehicle/{dni}` |

Después del login, el token se guarda con `saveToken` y se envía en el header `Authorization: Bearer <token>` en los endpoints que requieren rol.

## Funcionalidades

- **Registro** de usuarios con validaciones: nombre y apellido (mín. 2 caracteres), DNI numérico (mín. 6 dígitos), edad mínima de 18 años, email válido y contraseña de al menos 7 caracteres. Se asigna el rol `ROLE_USER`.
- **Login** con email y contraseña, guardado del token y carga de los datos del usuario.
- **Edición de perfil**: cambio individual de nombre, apellido, edad, email y contraseña.
- **Listado de usuarios** (botón "Lista" en la pantalla de edición, requiere permisos en el backend).
- **Inscripción de vehículos** (moto, auto, camioneta o camión) validando el formato de patente argentina (`ABC123` o `AB123CD`), kilómetros y modelo.
- **Consulta de vehículos** del usuario logueado.

## Conceptos aplicados

- Componentes standalone y configuración con `ApplicationConfig` (sin `NgModule`).
- Nuevo control flow de Angular 17 (`@if`, `@else if`, `@for` con `track`).
- Formularios reactivos con validadores integrados y expresiones regulares, mostrando mensajes de error según el estado del control (`dirty`, `errors`).
- Servicio singleton (`providedIn: 'root'`) e inyección con `inject()` y por constructor.
- Consumo de API REST con `HttpClient`, `Observable` y `subscribe({ next, error })`.
- Autenticación con token Bearer en `HttpHeaders`.
- Modelos de dominio con encapsulamiento (atributos privados, getters y setters).
- Navegación programática con `Router`.
- Renderizado del lado del servidor (SSR) con Express.

## Cómo ejecutarlo

### Requisitos

- [Node.js](https://nodejs.org/) 18 o superior y npm
- Angular CLI 17: `npm install -g @angular/cli@17`
- El [backend](https://github.com/JoaquinMayor/SistemaAutomotorSpringBoot) corriendo en `http://localhost:8080`

### Pasos

```bash
npm install
ng serve        # o: npm start
```

Abrir `http://localhost:4200/`. La aplicación se recarga automáticamente al modificar los archivos fuente.

### Otros comandos (Angular CLI)

| Comando | Descripción |
|---|---|
| `ng build` | Compila el proyecto en `dist/` |
| `npm run watch` | Compila en modo desarrollo observando cambios |
| `npm run serve:ssr:vtv-frontend` | Sirve la versión SSR compilada (`node dist/vtv-frontend/server/server.mjs`) |
| `ng test` | Ejecuta las pruebas unitarias con Karma |
| `ng generate component nombre` | Genera un nuevo componente (también `directive`, `pipe`, `service`, `guard`, etc.) |

Para más ayuda sobre Angular CLI: `ng help` o la [referencia de Angular CLI](https://angular.io/cli).

---

Proyecto generado con [Angular CLI](https://github.com/angular/angular-cli) versión 17.1.0.
