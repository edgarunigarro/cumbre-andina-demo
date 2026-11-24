# Control de calidad · Sitio Cumbre Andina v1.0

Verificación realizada con HTML/CSS/JS locales y el navegador Chromium en tamaños de **1440×900**, **768×1024** y **390×844**, mediante un entorno de comprobación que incorpora los recursos localmente.

## Comprobaciones completadas

- Landing y simulador renderizan sin errores JavaScript.
- No se observaron imágenes rotas ni desplazamientos horizontales en las tres resoluciones.
- Menú móvil abre/cierra; fichas informativas de productos funcionan.
- Selector ES/EN actualiza títulos y rótulos, y el documento adopta `lang=en`.
- El simulador reproduce el escenario financiero de referencia: **13.290.000 COP** de costo parcial, **11.610.000 COP** de contribución preliminar y **305 kg** de café verde requerido.
- Con 2.500 bolsas, el inventario ficticio de 390 kg deja de ser suficiente y se satisfacen los mínimos de TOST-B y PACK-B.
- Guardar una simulación se verifica en la interfaz; si el navegador no autoriza almacenamiento local, se activa un modo temporal que se pierde al cerrar la página.
- El núcleo de fórmulas pasó las pruebas automatizadas incluidas en `tests/validacion_calculos.js`.
- Se contrastaron rutas de recursos y se verificó que no dependen de enlaces externos.

## Alcance de las pruebas

Las vistas de referencia son capturas del sitio construido, no imágenes generadas para sustituir las pantallas. El navegador de validación restringe la navegación web normal; por ello, se renderizó el contenido con recursos incorporados, manteniendo el mismo HTML/CSS/JS. Las imágenes y scripts funcionan mediante rutas relativas al descomprimir el ZIP y abrir los archivos directamente.

Se recomienda una comprobación final en el equipo del conferencista, utilizando Chrome o Edge, antes de proyectar en el evento.

## Límite financiero

Los valores reflejan el escenario pedagógico master CA-MASTER-V1. No equivalen a utilidad neta, cotización ni proyección comercial validada.
