# Contrato de datos del prototipo

Fuente: `assets/data/escenario-maestro.json` (CA-MASTER-V1, simulación educativa).

## Estados de negocio

**A — Actual ficticio:** venta de café verde seleccionado a compradores nacionales. Referencia: 2.400 kg/año, inventario asignable al lote de 390 kg.

**B — Planeación:** lote piloto de 1.000 bolsas *Cumbre Origen*, café tostado en grano de 250 g, con 250 kg tostados y aproximadamente 305 kg verdes (18% merma teórica). No hay producto empacado disponible comercialmente.

**C — Objetivo eventual:** canales nacionales y, más adelante, evaluación de oportunidades internacionales, sin exportación confirmada ni requisitos resueltos.

## Cálculos empleados

```text
kg_tostado = unidades * 0.25
kg_verde_requerido = CEIL(kg_tostado / (1 - merma_pct / 100))
café_verde = kg_verde_requerido * valor_transferencia_kg
servicio_tostión = kg_tostado * tarifa_tostión_por_kg
bolsa = unidades * precio_bolsa
etiquetas = unidades * precio_etiqueta
distribución = unidades * costo_distribución_por_bolsa
costo_parcial = suma de los anteriores + control_calidad_fijo
costo_parcial_unitario = costo_parcial / unidades
ingreso_hipotético = unidades * precio_hipotético_de_venta
contribución_preliminar = ingreso_hipotético - costo_parcial
margen_preliminar = contribución_preliminar / ingreso_hipotético
```

No equivale a utilidad neta. Los costos de comercialización, impuestos, comisiones, costos fijos, devoluciones, exportación, etc., están excluidos. **No tomar decisiones de negocio exclusivamente con estos resultados.**

## Proveedores ficticios

Tostión: TOST-A 6.500 COP/kg (mínimo 100 kg tostados), TOST-B 6.200 (400 kg), TOST-C 7.000 (200 kg).

Empaques: PACK-A 2.100 COP/un (mínimo 1.000), PACK-B 1.850 (2.500), PACK-C 2.450 (500).

La app solo comprueba si **el volumen** satisface el pedido mínimo; no compara tarifas de transporte, calidad, plazos, coberturas ni cotizaciones contractuales.

## Identidad y activos

Colores: verde `#183C35`, marfil `#F3EEE4`, cobre `#C77949`, pizarra `#2E4859`, dorado `#D5B36A`. La web usa una implementación digital levemente ajustada para contraste.

El logo `assets/images/logo-cumbre.svg` es una reproducción vectorial interpretativa del símbolo de montañas y grano de café de la marca ficticia; no implica registro marcario.

Los empaques son imágenes generadas anteriormente para el caso, no fotografías de un producto vendido. Las fotos documentales son recortes del **contact sheet fotográfico** del mismo proyecto; representan personas y lugares ficticios con fines formativos.
