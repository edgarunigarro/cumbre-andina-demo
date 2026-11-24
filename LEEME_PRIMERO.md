# Café Cumbre Andina — Sitio web y simulador de costos

**Versión:** 1.0 · **Naturaleza:** prototipo educativo, empresa y datos completamente ficticios.

## Cómo abrir la web (sin instalar nada)

1. Descomprime **toda** la carpeta del ZIP sin cambiar su estructura.
2. Abre `index.html` con Chrome, Edge, Firefox o Safari.
3. En la barra superior, selecciona **Simulador** para abrir `simulador.html`.
4. Utiliza **ES / EN** para cambiar el idioma; la elección se conserva localmente cuando el navegador lo permite.
5. Vuelve a Inicio usando la navegación de la web.

Los archivos funcionan en local, sin servicios externos, dependencias, CDN ni conexión a Internet. Para un servidor web opcional, desde esta carpeta ejecuta:

```bash
python -m http.server 8000
```

Abre `http://localhost:8000` en el navegador. Para publicar el proyecto en un hosting estático, sube **todo** el contenido, conservando los nombres y las rutas.

## ¿Qué incluye?

```text
Cumbre_Andina_Web_Responsive_V1/
├── index.html                    # Landing bilingüe / catálogo conceptual
├── simulador.html                # Aplicación de costos con datos ficticios
├── assets/
│   ├── css/styles.css            # Diseño adaptable a móvil, tableta, PC
│   ├── js/common.js              # ES/EN, navegación, modales, íconos
│   ├── js/calculos.js             # Fórmulas independientes y verificables
│   ├── js/simulador.js            # Cálculos, proveedores, CSV, guardados
│   ├── images/                   # Todos los gráficos y fotografías locales
│   └── data/escenario-maestro.json  # Fuente de referencia del caso
└── docs/
    ├── DATOS_Y_LIMITACIONES.md
    └── ESTRUCTURA_Y_PERSONALIZACION.md
```

## Funcionalidades

**Landing:** portada hero, historia de origen, tres líneas de producto con su estado real de desarrollo, datos del lote piloto, cadena de valor, dudas frecuentes, contacto de demostración no operativo, menú responsive y selector de idioma.

**Simulador:** 10 variables editables (cantidad, precio hipotético, merma, costos y existencias), cálculo de verde requerido, costos parciales por concepto, contribución preliminar, porcentaje de contribución, gráfico de distribución, verificación de inventario y comparación de ofertas de tostión/empaque según cantidades mínimas. Permite descargar CSV, copiar el resumen, guardar escenarios **solo en este navegador** y recuperarlos.

## Verificación del escenario inicial

- 1.000 bolsas × 250 g = **250 kg netos tostados**.
- Merma simulada 18% → `ceil(250/0.82) = 305 kg` café verde.
- Inventario de café verde: 390 kg → saldo teórico 85 kg.
- Costos parciales: **COP 13.290.000**, es decir **COP 13.290/bolsa**.
- Precio hipotético: COP 24.900/bolsa → ingresos hipotéticos **COP 24.900.000**.
- Contribución preliminar: **COP 11.610.000** (aprox. 46,6%). **No es utilidad neta**.

## Condiciones de uso

- Café Cumbre Andina es una **marca ficticia** y no recibe pedidos.
- Cumbre Origen es **un lote piloto propuesto**, aún no fabricado ni comercializado. Cumbre Reserva y Experiencia Andina son **conceptos futuros**.
- No hay exportaciones, premios ni certificaciones verificados.
- Los precios, costos, proveedores, inventarios y capacidades son datos de simulación.
- Las fotografías son recursos visuales de simulación educativa; no corresponden a instalaciones o personas reales de una empresa del mismo nombre.
- El ejemplo de formulario de contacto se sustituye por un panel informativo sin envío de datos.
- La comparación de proveedores por mínimos de pedido no constituye selección de contratistas ni evaluación de condiciones definitivas.

## Privacidad

No hay backend, analítica, formularios activos ni servicios externos. Las simulaciones guardadas se almacenan mediante `localStorage` en el navegador (solo dispositivo local; su disponibilidad depende de ajustes del navegador). El botón **Borrar guardadas** elimina esos registros locales.

## Alcance del sitio

Se diseñó a partir de los mockups aprobados de la landing y el simulador y de los elementos visuales de Café Cumbre Andina. Reproduce su lenguaje gráfico y añade funciones reales, pero **no es una copia pixel a pixel de las pantallas ilustrativas**. Los dos archivos HTML son los entregables ejecutables.
