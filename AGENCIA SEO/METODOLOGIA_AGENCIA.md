# METODOLOGÍA DE LA AGENCIA SEO — Master BigSEO

**Versión:** 4.0 — 31 Marzo 2026
**Regla fundamental:** El Master BigSEO es la BIBLIA. Se sigue SIN EXCEPCIONES. El conocimiento de expertos complementa pero NUNCA contradice al Master.

---

## 1. EL EQUIPO — 11 Especialistas

Cada agente es un EXPERTO PROFUNDO en su área. No generaliza. No improvisa. Tiene TODO el conocimiento del Master para sus módulos embebido en sus instrucciones. Si necesita algo que no tiene, lo PIDE explícitamente.

| # | Agente | Módulos Master | Especialización única |
|---|--------|----------------|----------------------|
| 00 | **Director** | Todos (supervisión) | Orquesta el equipo, crea el Plan Maestro, supervisa entregables |
| 01 | **Auditor SEO** | 4.1, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 35-36 | Diagnóstico completo: crawl, indexación, on-page, off-page, canibalizaciones, CWV |
| 02 | **SEO Técnico** | 4.1, 6, 12, 13, 14, 15, 17, 18, 53, 70 | Implementación: robots, sitemap, Schema, indexación, WPO, migraciones, hreflang |
| 03 | **Estratega SEO** | 28, 29, 30, 33, 39, 48, 50, 52, 77, 78, 80 | Estrategia: SEO Funnel, SEO Local, SaaS, penalizaciones, ROI, presupuestos |
| 04 | **Analytics** | 30, 31, 33, 63-67, 73, 74, 79 | Datos: GSC, GA4, Semrush, Looker Studio, informes mensuales |
| 05 | **Contenidos** | 4.2, 5, 6, 7, 8, 9, 10, 11, 19, 26, 27, 57 | On-page: KW Research, metadatos, headings, contenido, imágenes, blog |
| 06 | **Copywriter** | 57 | Textos de venta: copy persuasivo, beneficios/dolores, tono de marca |
| 07 | **Off-Page** | 20, 21, 22, 23, 24, 25 | Link building: perfil de enlaces, adquisición, linkbaiting, señales |
| 08 | **Interlinking** | 10 (completo) | Enlazado interno: Link Sculpting, First Link Theory, retroactive linking |
| 09 | **CRO / UX** | 55, 56 | Conversión: Clarity, mapas de calor, modelo PIE, SXO, A/B tests |
| 10 | **Diseñador** | — | HTML/CSS production-ready: aplica el estilo de la referencia + copy |
| 11 | **Desarrollador Minitools** | — | Lógica JS de calculadoras, conversores, simuladores. Vanilla JS, reutilizable, mobile-first |

**Principio:** Es mejor tener 11 expertos profundos que 5 generalistas. Cada agente se especializa ÚNICAMENTE en su área y tiene el conocimiento completo del Master para esos módulos.

---

## 2. INPUTS OBLIGATORIOS — Antes de empezar CUALQUIER proyecto

El cliente entrega SIEMPRE antes de que el equipo toque nada:

### 2.1 Keyword Research REAL (obligatorio)

Hecho con Google Keyword Planner + Semrush/Ahrefs. Proceso de 6 pasos del Master (Módulo 4.2):

```
Paso 1: CONCATENACIÓN
   → Combinar todas las variaciones: servicio + ciudad, servicio + precio,
     servicio + tipo, problema + solución, con/sin tildes, sinónimos,
     incluso errores de escritura comunes
   → Herramienta: found.co.uk/ppc-keyword-tool

Paso 2: EXPANSIÓN EN PLANNER
   → Meter las combinaciones en Google Keyword Planner
   → Obtener: volumen mensual, estacionalidad, tendencia, CPC

Paso 3: EXPANSIÓN CON HERRAMIENTAS
   → Semrush/Ahrefs: keywords de competidores
   → Answer The Public / AlsoAsked: preguntas informacionales
   → Google Suggest: autocompletados
   → "People Also Ask" de Google

Paso 4: CLASIFICACIÓN
   → Tipo: Marca / Transaccional / Informacional / Mixta
   → Intención de búsqueda (verificar en SERPs cuando haya duda)
   → Customer Journey: Unaware → Problem Aware → Solution Aware → Product Aware → Most Aware

Paso 5: AGRUPACIÓN EN CLUSTERS
   → Keywords con misma intención = misma página
   → Agrupar por tema semántico

Paso 6: PRIORIZACIÓN
   → TOFU (awareness) / MOFU (consideration) / BOFU (decision)
   → Una keyword de 100 búsquedas de alta awareness vale MÁS que 10.000 de baja awareness
```

**Entregable:** Excel con columnas: keyword, volumen, KD, tipo, intención, cluster, URL asignada, nivel funnel, estacionalidad, tendencia.

### 2.2 Arquitectura SEO (obligatorio)

Basada 100% en el KW Research (NUNCA al revés):

```
→ Organigrama visual del sitio (silos)
→ Para cada página: URL + keyword objetivo + volumen + nivel TOFU/MOFU/BOFU
→ URLs planas (/keyword-directa, NO /categoria/keyword)
→ Profundidad máxima: 3 niveles
→ Cada keyword del research tiene su página asignada
→ Si falta una keyword = oportunidad perdida
→ Si hay una página sin keyword con volumen = desperdicio
```

### 2.3 Contexto del negocio

```
→ Tipo: SaaS / Local / eCommerce / Lead Gen
→ URL actual (si existe)
→ Competidores directos (3-5 URLs)
→ Buyer persona
→ Ticket medio
→ Objetivo: más leads / más ventas / más reservas
```

### 2.4 Web de referencia (si es rediseño)

```
→ URL de la web cuyo estilo visual se quiere replicar
```

**SIN LOS PUNTOS 2.1 Y 2.2, EL EQUIPO NO ARRANCA.**

---

## 3. FASES DEL PROYECTO — Orden estricto del Master

```
FASE 0 ─── INPUTS DEL CLIENTE
│           KW Research + Arquitectura + Contexto
│           Sin esto, nadie trabaja.
│
FASE 1 ─── AUDITORÍA Y DIAGNÓSTICO (si hay web existente)
│           Agentes: 01_Auditor + 02_Técnico
│           Entrega:
│           · Informe de auditoría completo (puntuación /10)
│           · Medición formal de Core Web Vitals (PageSpeed Insights)
│           · Detección de canibalizaciones (4 tipos del Master)
│           · Validación mobile (Mobile-Friendly Test)
│           · Verificación noindex + canonical (NUNCA combinados)
│           · Análisis de Crawl Budget
│
FASE 2 ─── PLANIFICACIÓN ESTRATÉGICA
│           Agentes: 00_Director + 03_Estratega + 08_Interlinking
│           Entrega:
│           · Plan Maestro del proyecto
│           · SEO Funnel Map (TOFU/MOFU/BOFU)
│           · Link Sculpting Map (distribución de autoridad)
│           · Briefings individuales para cada agente
│           · Estimación de ROI a 12 meses
│
FASE 3 ─── IMPLEMENTACIÓN (orden estricto)
│           3.1 → 02_Técnico: fixes críticos
│                 robots.txt, noindex, canonical, Schema, CWV, compresión
│           3.2 → 06_Copywriter: textos de cada página
│                 con keywords del KW Research, H1≠Title, keyword en primeras 100 palabras
│           3.3 → 10_Diseñador: HTML/código con el copy
│                 estilo de la referencia, responsive, Schema integrado
│           3.4 → 08_Interlinking: enlaces internos
│                 según Link Sculpting Map, anchor text keyword, retroactive linking
│           3.5 → 02_Técnico: validación final
│                 Schema (Rich Results Test), CWV, mobile, noindex/canonical
│
FASE 4 ─── CRO Y OPTIMIZACIÓN
│           Agente: 09_CRO_UX
│           Entrega:
│           · Microsoft Clarity instalado
│           · Hipótesis con modelo PIE
│           · SXO checklist por página
│           · Primeros tests o cambios directos
│
FASE 5 ─── CONTENIDO CONTINUO
│           Agentes: 05_Contenidos + 06_Copywriter
│           Entrega:
│           · Blog posts según plan editorial
│           · Retroactive linking en CADA publicación nueva
│           · Fecha visible (publicación + actualización + autor)
│
FASE 6 ─── OFF-PAGE
│           Agente: 07_OffPage
│           Entrega:
│           · Plan de linkbuilding mensual
│           · Alta en directorios del sector
│           · Google Business Profile (si local)
│           · Protocolo de reseñas
│
FASE 7 ─── MONITORIZACIÓN
            Agente: 04_Analytics
            Entrega:
            · Dashboard GSC + rankings + CWV + conversiones
            · Informe mensual para el cliente
            · Detección de caídas algorítmicas
            · Seguimiento de KPIs del Plan Maestro
```

---

## 4. DOS FASES DE TRABAJO POR AGENTE

Todos los agentes trabajan en DOS FASES:

### Fase 1 — Análisis (solo necesita la URL)
Analiza, diagnostica, propone. No modifica nada. Entrega informes y planes.

### Fase 2 — Implementación (necesita acceso al código/CMS)
Ejecuta cambios. Solo cuando el cliente aprueba y da acceso a los archivos.

**Regla:** Los agentes piden TODO lo que necesitan en un único bloque. Nunca pregunta a pregunta. Si necesitan una herramienta (PageSpeed, Screaming Frog, Semrush), la PIDEN explícitamente.

---

## 5. CÓMO INVOCAR AGENTES

### Proyecto completo (flujo estándar):
Activa al Director (00) con los 4 inputs. Él coordina todo.

### Agentes individuales (tarea específica):

| Necesito... | Agente |
|---|---|
| Diagnóstico completo de una web | 01_Auditor |
| Arreglar problemas técnicos | 02_Técnico |
| Estrategia SEO / funnel / local / SaaS | 03_Estratega |
| Informe mensual / dashboard | 04_Analytics |
| Optimizar contenido / plan editorial | 05_Contenidos |
| Textos de venta para una página | 06_Copywriter |
| Plan de linkbuilding | 07_OffPage |
| Mapa de enlazado interno | 08_Interlinking |
| Mejorar conversión / instalar Clarity | 09_CRO_UX |
| Crear HTML de una página | 10_Diseñador |

---

## 6. REGLAS INQUEBRANTABLES

Estas reglas vienen del Master + errores propios documentados. Se aplican en TODOS los proyectos sin excepción.

### 6.1 Arquitectura y URLs (Módulos 4.1, 6)
- [ ] URLs planas: `/keyword-directa`, NUNCA `/categoria/keyword`
- [ ] Silos se construyen con interlinking, NO con URL paths
- [ ] Profundidad máxima: 3 clicks desde home
- [ ] Cada página tiene keyword objetivo + volumen verificado
- [ ] Verificar SERPs cuando haya duda de intención de búsqueda

### 6.2 Metadata (Módulos 7, 9A, 9B, 9C)
- [ ] Title: 50-70 chars (Master recomienda 50-70; para máxima seguridad contra truncamiento, preferir ≤60), keyword AL INICIO, marca al final
- [ ] Title HOME: `[Marca] | [Propuesta de valor]` — marca PRIMERO (excepción del Master)
- [ ] Description: 130-155 chars (mínimo 130), keyword + CTA
- [ ] H1 ≠ Title — SIEMPRE diferentes
- [ ] H1: único, con keyword, NO termina en punto, NO contiene links, tamaño visual mayor
- [ ] Jerarquía H1→H2→H3 sin saltar niveles
- [ ] NUNCA combinar noindex + canonical en la misma página
- [ ] UTF-8 directo en meta tags, NUNCA entidades HTML (&ntilde; &euro;)
- [ ] Canonical vs 301: usar la tabla de decisiones del Técnico

### 6.3 Contenido (Módulo 8)
- [ ] Keyword principal en las primeras 100 palabras
- [ ] Longitud: analizar top 10 de la SERP (promedio Master: 1.447 palabras)
- [ ] FAQs desplegadas por defecto (`<details open>`), NO en acordeón cerrado
- [ ] Fecha visible en cada artículo: publicación + actualización + autor
- [ ] Contenido nuevo recibe enlaces desde 2-3 páginas existentes INMEDIATAMENTE
- [ ] Contenido por tipo: Home, Categoría, Producto, Landing, Blog — cada uno tiene su estructura
- [ ] Algoritmos a respetar: Panda (calidad), Hummingbird (semántica), RankBrain (relevancia)

### 6.4 Enlazado Interno (Módulo 10)
- [ ] Anchor text = exact match o partial match de la keyword destino
- [ ] NUNCA "click aquí", "ver más", "más info" como anchor
- [ ] First Link Theory: Google solo considera el PRIMER enlace A→B
- [ ] NO target="_blank" en enlaces internos
- [ ] NO nofollow en enlaces internos (consume juice sin transferir)
- [ ] NO repetir el mismo enlace varias veces en la misma página
- [ ] Link Sculpting formal antes de publicar
- [ ] External links: nofollow a complementarios, anchor irrelevante para nuestras keywords

### 6.5 Imágenes (Módulo 11)
- [ ] Mínimo 1 imagen real por página de servicio y por blog post
- [ ] Alt text descriptivo con keyword
- [ ] Nombre de archivo descriptivo (no IMG_001.jpg)
- [ ] Formato WebP/AVIF, <100KB, fallback con `<picture>` si necesario
- [ ] Preload de imagen LCP (`<link rel="preload" as="image">`)
- [ ] Dimensiones fijas (width + height) para evitar CLS
- [ ] Lazy loading SOLO below-the-fold (NO en imagen hero/LCP)
- [ ] Image sitemap (incluir imágenes en sitemap o crear uno dedicado)
- [ ] Verificar indexación en Google Images (`site:dominio.com` en Google Images)

### 6.6 Schema (Módulo 14)
- [ ] Organization/LocalBusiness: global (todas las páginas)
- [ ] BreadcrumbList: global (breadcrumbs de jerarquía, no de historial)
- [ ] Product/SoftwareApp/Offers: SOLO donde los precios son visibles
- [ ] FAQPage: SOLO en páginas con FAQ visible
- [ ] AggregateRating: SOLO con reviews reales verificables
- [ ] SearchAction: SOLO si existe buscador funcional real
- [ ] sameAs: SOLO URLs de perfiles que EXISTAN y tengan contenido
- [ ] Validar SIEMPRE con Rich Results Test después de implementar
- [ ] NUNCA schema que no refleje contenido visible de la página

### 6.7 Sitemap (Módulo 13)
- [ ] Solo URLs con status 200, canonical self-referencing, indexables
- [ ] NUNCA incluir páginas noindex
- [ ] lastmod actualizado cuando cambia el contenido
- [ ] Declarado en robots.txt
- [ ] Verificar manualmente (incluso Yoast puede crear sitemaps incorrectos)
- [ ] Image sitemap si el sitio tiene imágenes significativas

### 6.8 Robots.txt (Módulo 12)
- [ ] Controla RASTREO, no indexación
- [ ] Declarar sitemap
- [ ] NO bloquear CSS/JS
- [ ] Bloquear: admin, login, búsqueda interna, parámetros sin valor
- [ ] Wildcards: * (cualquier secuencia), $ (fin de URL)
- [ ] Regla de prioridad: más específico gana; conflicto = menos restrictivo

### 6.9 Crawl Budget (Módulo 15)
- [ ] Evitar enlaces internos a URLs 4xx/5xx
- [ ] Evitar cadenas de redirects (A→B→C)
- [ ] Enlaces internos apuntan a URLs finales 200, no a redirects
- [ ] Evitar rastreo de contenido no relevante (parámetros, filtros)
- [ ] Evitar contenido duplicado sin canonicalizar
- [ ] Medir en GSC → Configuración → Estadísticas de rastreo

### 6.10 E-E-A-T
- [ ] Foto real del equipo/fundador en /sobre-nosotros
- [ ] Testimonios SOLO de clientes reales verificables
- [ ] Claims numéricos SOLO si se pueden verificar
- [ ] Autor experto identificable en artículos (Person Schema con alumniOf real)
- [ ] NUNCA AggregateRating sin reviews reales

### 6.11 CWV — Core Web Vitals (Módulo 18)
- [ ] LCP < 2.5s (medir con PageSpeed Insights mobile + desktop)
- [ ] INP < 200ms
- [ ] CLS < 0.1
- [ ] Google Fonts via next/font (Next.js) o preconnect, NUNCA `<link>` en body
- [ ] CSS compilado, NUNCA Tailwind CDN en producción
- [ ] Scripts con defer o async
- [ ] Medir en CADA auditoría y CADA validación final

### 6.12 Navegación
- [ ] Nav global con dropdowns en TODAS las páginas del sitio
- [ ] Enlazar directamente a subpáginas desde el menú (no a hubs thin)
- [ ] CTA principal visible en el nav
- [ ] Menú hamburguesa en móvil

### 6.13 Páginas que NO se indexan
- [ ] Legales: `noindex, follow` — SIN canonical — FUERA del sitemap
- [ ] Hub pages sin contenido propio (>500 palabras): `noindex, follow` o eliminar
- [ ] Admin, login, formularios internos: `noindex` + Disallow en robots.txt
- [ ] REGLA: noindex = SIN canonical + FUERA del sitemap

### 6.14 Migraciones SEO (Módulo 53)
- [ ] Pre-migración: crawl backup completo + exportar rankings + documentar TODAS las URLs
- [ ] Mapa de redirects 1:1 en Excel (URL vieja → URL nueva)
- [ ] Post-migración: monitorizar 3 meses (GSC indexación + rankings diarios)
- [ ] Si el proyecto tiene web existente: evaluar si es migración antes de empezar

---

## 7. KNOWLEDGE BASE

Los archivos de conocimiento del Master están en:

```
AGENCIA SEO/knowledge_base/
├── MASTER_SEO_MODULES_4-13_COMPLETE_KNOWLEDGE_BASE.txt  ← Módulos core (completo)
├── modulos_14_25_temp.txt                                ← Módulos 14-25 (formato raw)
└── modulos_48_91_copy.txt                                ← Módulos 48-91 (formato raw)
```

El conocimiento del Master está **embebido directamente** en cada agente. Los archivos de knowledge base son referencia para actualizaciones futuras.

**Brecha conocida:** Los módulos 14-25 y 48-91 están en formato raw de diapositivas. El contenido crítico ya fue sintetizado e integrado en los agentes, pero para actualizaciones futuras se debe procesar el raw completo.

---

## 8. UBICACIÓN DE ARCHIVOS

```
PROYECTOS SEO/
├── Proyectos SEO de Agencia/
│   ├── AGENCIA SEO/                    ← TODO lo de la agencia aquí
│   │   ├── METODOLOGIA_AGENCIA.md      ← Este documento
│   │   ├── agentes/                    ← Los 11 agentes
│   │   │   ├── 00_director.md
│   │   │   ├── 01_auditor.md
│   │   │   ├── 02_tecnico.md
│   │   │   ├── 03_estratega.md
│   │   │   ├── 04_analytics.md
│   │   │   ├── 05_contenidos.md
│   │   │   ├── 06_copywriter.md
│   │   │   ├── 07_offpage.md
│   │   │   ├── 08_interlinking.md
│   │   │   ├── 09_cro_ux.md
│   │   │   └── 10_diseñador.md
│   │   └── knowledge_base/             ← Módulos del Master
│   │
│   ├── landforge/                      ← Proyecto individual
│   └── zappyapps/                      ← Proyecto individual
│
├── clinica capilar 1/                  ← Proyecto individual
│   ├── contexto/
│   ├── referencia/
│   └── output/
```

Los proyectos individuales NO contienen copias de los agentes. Referencian la carpeta AGENCIA SEO central.

---

## 9. CHANGELOG

**Versión 4.0 (31 Marzo 2026):**
- Fusión de Manual v2.0 + Metodología v3.0 en documento único
- 11 agentes (añadidos: 08_Interlinking, 09_CRO_UX)
- Input obligatorio: KW Research real + Arquitectura SEO del cliente
- Proceso de 6 pasos del Master para KW Research documentado
- 14 secciones de reglas inquebrantables (vs 11 anteriores)
- Añadido: Crawl Budget, Migraciones SEO, Canonical vs 301, robots.txt avanzado
- Añadido: Customer Journey/awareness, Google Images como canal
- Corrección: Tailwind CDN solo prototipos, nunca producción
- Agentes actualizados con gaps del Master: canibalizaciones formales, CWV medición, First Link Theory, nofollow mecánica, tipos de sitemaps, hreflang
- Knowledge base organizada en carpeta centralizada

**Versión 3.0 (31 Marzo 2026):**
- Primera versión de la metodología formal
- 7 fases del proyecto
- Reglas inquebrantables

**Versión 2.0 (Marzo 2025):**
- Metodología del Master embebida en agentes
- Checklists del Master integrados

**Versión 1.0:**
- Agentes con referencias a módulos externos
