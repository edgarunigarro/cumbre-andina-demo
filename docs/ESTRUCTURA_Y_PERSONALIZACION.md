# Guía técnica breve — personalización

El proyecto utiliza HTML, CSS, SVG, JavaScript ES2019+ y WebP. Sin compiladores.

## Páginas

- `index.html`: landing comercial conceptual, tarjetas de producto, preguntas frecuentes, modales informativos y navegación bilingüe.
- `simulador.html`: simulador financiero interactivo con comparación de mínimos de proveedores, guardado local, descarga CSV y resumen copiable.

## Identidad visual

- Edición de colores: variables `:root` en `assets/css/styles.css`.
- Modificar logotipo: `assets/images/logo-cumbre.svg`. Se mantiene como vector y carga en ambas páginas.
- Reemplazar producto: sobrescribir imágenes en `assets/images/` conservando el nombre o cambiar `src` en los archivos HTML.
- Fotografías de origen y trabajo: `paisaje-narino.webp`, `cosecha-cafe.webp`, `preparacion-muestras.webp`.

## Textos y traducción

- El texto español inicial está dentro de los HTML.
- Traducciones inglesas y textos que contienen marcado: `assets/js/common.js` (`en`, `esHTML`).
- Textos dinámicos del simulador: `assets/js/simulador.js` (`dict.es`, `dict.en`).
- Para editar ambos idiomas, mantén cada clave de `data-i18n` sincronizada.

## Cambios de cifras

- Parámetros del caso en el simulador: `assets/js/calculos.js`, objeto `PRESET`.
- Ofertas ficticias comparativas: `ROASTERS` y `PACKERS` dentro de ese mismo archivo.
- Si cambias los supuestos, sincroniza el JSON maestro en `assets/data` y las etiquetas de la landing.
- `calculate()` devuelve costo total, costo unitario, contribución, inventario y desglose. No modificar fórmulas sin pruebas.

## Responsividad

El diseño tiene breakpoints a 1160, 960, 720 y 420 px. En móviles, el menú se colapsa, los bloques se apilan y las tablas de proveedores permiten desplazamiento horizontal dentro de su contenedor.

## Limitaciones

No hay comercio electrónico, autenticación, correo electrónico, WhatsApp, ni persistencia en nube. Guardar simulaciones utiliza solo almacenamiento local del navegador. Los recursos gráficos y todas las llamadas funcionales son locales.

## Recomendaciones para el escenario SENA–ACOPI

1. Abrir `index.html` y explicar que la web es un prototipo creado a partir de prompts y datos maestros.
2. Mostrar el selector ES/EN y el diseño móvil.
3. Abrir `simulador.html` y cambiar unidades de 1.000 a 2.500; comparar elegibilidad de proveedores.
4. Volver al lote 1.000, aplicar escenario de café verde +15%, y observar contribución.
5. Exportar CSV y explicar los límites de la estimación.

Este ejercicio demuestra la diferencia entre crear una web informativa y construir una herramienta que realiza cálculos y apoya decisiones. **No prueba que un plan pago sea siempre mejor que uno gratuito**: depende de las funciones, límites, revisión y calidad de la implementación.
