# Plan Maestro SEO -- ZappyApps.tech

## Version 2.0 -- Basado en Auditoria, Keyword Research y Arquitectura SEO

**Cliente:** ZappyApps -- Agencia de Diseno Web Estrategico + Automatizacion IA para PYMEs
**Dominio:** https://zappyapps.tech/
**Mercado:** Espana (castellano)
**Fundador:** Alejandro Bethencourt
**Fecha:** 28 de marzo de 2026
**Elaborado por:** Equipo SEO -- Agencia SEO IA
**Clasificacion:** Documento operativo de ejecucion

---

## 1. Resumen Ejecutivo

### 1.1 Estado actual del proyecto

ZappyApps.tech ha completado la Fase 1 de su estrategia SEO con resultados solidos:

- **25 paginas indexables** activas (homepage, 8 servicios, 6 sectores, 6 blog posts, hubs, sobre-nosotros)
- **Base tecnica puntuada en 7.5/10** segun la auditoria del 28 de marzo de 2026
- **Schemas implementados:** ProfessionalService, FAQPage, Person, Organization, BreadcrumbList
- **0 enlaces internos rotos**, meta tags completos, H1s unicos, sitemap correcto
- **10 issues pendientes** de la auditoria: 2 criticos, 2 altos, 3 medios, 3 bajos
- **Deploy:** Vercel con cleanUrls: true (URLs limpias sin .html)

### 1.2 Issues criticos pendientes (de la auditoria)

| Severidad | Cantidad | Descripcion |
|-----------|----------|-------------|
| CRITICO | 2 | Archivo basura de 28MB (`Ofertas-de-100_-_1_.html`) + archivo con dominio .com antiguo (`notebooklm_context.txt`) |
| ALTO | 2 | OG images referenciados no existen + emails inconsistentes (hola@ vs info@) |
| MEDIO | 3 | Canonicals con .html en 14 archivos + OG image falta en 20+ paginas + canonical falta en cookies.html |
| BAJO | 3 | Archivos .txt inutiles + Article vs BlogPosting + email en privacidad |

### 1.3 Objetivos medibles

| Plazo | Objetivo | KPI |
|-------|----------|-----|
| **3 meses** | Resolver el 100% de issues tecnicos, alcanzar 55 paginas indexables, posicionar 25-40 keywords en top 20 | Paginas indexadas, keywords top 20, impresiones GSC |
| **6 meses** | Alcanzar 85+ paginas, 60-80 keywords top 10, generar 15-25 leads organicos/mes | Trafico organico +300%, leads mensuales, DA 15-25 |
| **12 meses** | Consolidar autoridad tematica, 300+ keywords top 100, 40+ leads organicos/mes | CTR medio 5-7%, tasa conversion organico 3-5%, DA 25-35 |

### 1.4 KPIs principales de seguimiento

| KPI | Baseline actual | Mes 3 | Mes 6 | Mes 12 |
|-----|----------------|-------|-------|--------|
| Paginas indexadas | 25 | 55 | 85+ | 100+ |
| Trafico organico mensual | Baseline | +150% | +400% | +800% |
| Keywords top 10 | 2-5 | 25-40 | 60-80 | 100+ |
| Keywords top 100 | 20-40 | 150-200 | 300+ | 500+ |
| Impresiones GSC/mes | Baseline | +300% | +800% | +1500% |
| CTR medio GSC | 2-3% | 4-5% | 5-7% | 6-8% |
| Backlinks totales | 5-10 | 30-50 | 80+ | 150+ |
| Dominios referentes | 3-5 | 20-30 | 40+ | 70+ |
| Leads organicos/mes | 0-2 | 15-25 | 40+ | 80+ |
| DA/DR estimado | 5-10 | 15-25 | 25-35 | 35-45 |

---

## 2. Correcciones Tecnicas Inmediatas (Sprint 0 -- Semana 1)

**Responsable principal:** SEO Tecnico
**Duracion:** 5 dias habiles
**Esfuerzo estimado:** 6-8 horas
**Entregable:** Todos los issues de la auditoria resueltos y verificados

### 2.1 Tareas criticas (Dia 1)

| # | Tarea | Archivo/Recurso | Accion exacta | Tiempo est. |
|---|-------|-----------------|---------------|-------------|
| 1 | Eliminar archivo basura de 28MB | `/Ofertas-de-100_-_1_.html` | Eliminar del repositorio y verificar que no este en produccion | 5 min |
| 2 | Eliminar archivo con dominio .com | `/notebooklm_context.txt` (328 KB) | Eliminar del repositorio | 2 min |
| 3 | Eliminar archivos .txt inutiles | `domains.txt`, `domain_project.txt`, `project_name.txt`, `projects.txt`, `inspect.txt`, `vercel_output.txt` | Eliminar todos, anadir a `.gitignore` | 5 min |

**Verificacion:** Tras el deploy, comprobar con `curl` que las URLs devuelven 404.

### 2.2 Tareas altas (Dia 1-2)

| # | Tarea | Archivos afectados | Accion exacta | Tiempo est. |
|---|-------|-------------------|---------------|-------------|
| 4 | Crear OG images | `/og-image.jpg`, `/twitter-image.jpg` | Crear imagenes de 1200x630px con branding ZappyApps. Usar Canva o Figma con el logotipo, claim "Diseno web estrategico con IA para PYMEs" y URL. Subir a raiz del dominio. | 30 min |
| 5 | Unificar email de contacto | `index.html`, `sobre-nosotros.html`, `terminos.html`, `privacidad.html` + todos los archivos con `info@zappyapps.tech` | Reemplazar todas las ocurrencias de `info@zappyapps.tech` por `hola@zappyapps.tech`. Actualizar tambien el Schema Organization en homepage. | 15 min |

### 2.3 Tareas medias (Dia 2-3)

| # | Tarea | Archivos afectados | Accion exacta | Tiempo est. |
|---|-------|-------------------|---------------|-------------|
| 6 | Corregir canonicals con .html | 14+ archivos: 8 servicios + 6 sectores + sobre-nosotros | En cada archivo, eliminar `.html` de `<link rel="canonical">`, `og:url` y cualquier URL de Schema. Ejemplo: `href="/servicios/chatbot-ia.html"` -> `href="/servicios/chatbot-ia"` | 45 min |
| 7 | Anadir OG image a todas las paginas internas | 24 paginas que no tienen og:image | Anadir `<meta property="og:image" content="https://zappyapps.tech/og-image.jpg">` a todas las paginas internas. Si es posible, crear imagenes especificas por seccion (servicios, sectores, blog). | 45 min |
| 8 | Anadir canonical a cookies.html | `/cookies.html` | Anadir `<link rel="canonical" href="https://zappyapps.tech/cookies">` (sin .html, coherente con cleanUrls) | 2 min |

### 2.4 Tareas bajas (Dia 3-4)

| # | Tarea | Archivos afectados | Accion exacta | Tiempo est. |
|---|-------|-------------------|---------------|-------------|
| 9 | Cambiar Article a BlogPosting | 6 blog posts | En el Schema JSON-LD de cada blog post, cambiar `"@type": "Article"` por `"@type": "BlogPosting"`. BlogPosting es subtipo de Article y mas semantico para contenido de blog. | 15 min |
| 10 | Verificar email en privacidad | `privacidad.html`, `terminos.html` | Confirmar que tras la tarea #5 ambos documentos usan `hola@zappyapps.tech` | 5 min |

### 2.5 Verificacion post-deploy (Dia 4-5)

| # | Verificacion | Herramienta | Criterio de exito |
|---|-------------|-------------|-------------------|
| 1 | OG images accesibles | Facebook Sharing Debugger, Twitter Card Validator | Previews correctos en redes sociales |
| 2 | Canonicals sin .html | Screaming Frog o inspeccion manual | Todas las URLs canonicals coinciden con las URLs reales |
| 3 | Archivos eliminados | `curl -I` a cada URL eliminada | Respuesta 404 para todos los archivos basura |
| 4 | Email unificado | Busqueda en todo el HTML del sitio | Solo `hola@zappyapps.tech` aparece |
| 5 | Schemas validos | Google Rich Results Test | 0 errores, 0 warnings nuevos |
| 6 | Sitemap actualizado | Verificar `/sitemap.xml` | No incluye URLs eliminadas, incluye todas las indexables |

**Entregable Sprint 0:** Informe de verificacion con capturas de cada correccion aplicada y validada.

---

## 3. Sprint 1 -- Semana 2: Optimizacion On-Page y Paginas de Empresa

**Responsable principal:** SEO Tecnico + SEO Content
**Duracion:** 5 dias habiles
**Esfuerzo estimado:** 20-25 horas
**Entregable:** Paginas de empresa creadas, on-page optimizado, keywords asignadas a paginas existentes

### 3.1 Optimizacion de paginas existentes (SEO Tecnico -- 8h)

Cada pagina existente debe tener su keyword principal y secundarias correctamente integradas. A continuacion, la asignacion completa basada en el Keyword Research:

**Homepage ( / )**

| Elemento | Valor actual | Valor optimizado |
|----------|-------------|-----------------|
| Title | (revisar) | Diseno Web Estrategico para PYMEs con IA \| ZappyApps |
| Description | (revisar) | Agencia de diseno web y automatizacion con IA para PYMEs. Chatbots, CRM, embudos de venta y captacion de leads. Prototipo gratis. |
| KW principal | diseno web estrategico pymes ia | Sin cambio |
| KW secundarias | agencia diseno web, mejor agencia digital para pymes, agencia digital para pequenas empresas | Integrar en H2s y cuerpo |

**Paginas de servicio -- Asignacion de keywords:**

| Pagina | KW Principal | KW Secundarias | KW Long-tail a integrar |
|--------|-------------|----------------|------------------------|
| `/servicios/diseno-web-estrategico` | diseno web profesional (1.900/mes) | diseno web para empresas (880), diseno web para pymes (320), crear pagina web empresa (880) | diseno web que genere ventas automaticas, pagina web para pyme que venda sola |
| `/servicios/chatbot-ia-empresas` | chatbot para empresas (480/mes) | chatbot con inteligencia artificial (390), chatbot de ventas (260), chatbot atencion al cliente (320) | chatbot de atencion al cliente 24 horas para pymes |
| `/servicios/captacion-leads` | captacion de clientes online (260/mes) | sistema de captacion de leads (110), generar leads online | sistema automatizado de captacion de leads |
| `/servicios/lead-scoring-ia` | lead scoring para empresas (50/mes) | lead scoring inteligencia artificial | mejor herramienta de lead scoring para pymes en espanol |
| `/servicios/funnels-conversion` | embudo de ventas digital (210/mes) | crear embudo de ventas (390), embudo de ventas automatizado (170) | como crear un sistema de ventas automatico online |
| `/servicios/crm-personalizado` | crm para pymes (590/mes) | crm para pequenas empresas (480), crm ventas pymes (140) | crm simple para pequena empresa espanola |
| `/servicios/optimizacion-continua` | optimizacion web para ventas (70/mes) | optimizacion tasa de conversion (170) | -- |
| `/servicios/soporte-web` | mantenimiento web mensual (210/mes) | soporte web profesional (50) | -- |

**Paginas de sector -- Asignacion de keywords:**

| Pagina | KW Principal | KW Secundarias | KW Long-tail a integrar |
|--------|-------------|----------------|------------------------|
| `/para/restaurantes` | diseno web para restaurantes (320/mes) | pagina web restaurante precio (170), chatbot para restaurantes (90) | chatbot de ventas con ia para restaurantes, cuanto cuesta una pagina web para restaurante |
| `/para/clinicas` | diseno web para clinicas (260/mes) | pagina web clinica dental (210), captacion pacientes online (170) | chatbot whatsapp para clinica dental, como captar pacientes por internet |
| `/para/abogados` | diseno web para abogados (320/mes) | pagina web despacho abogados (170), captacion clientes abogados online (90) | diseno web con embudo de ventas para abogados |
| `/para/coaches` | diseno web para coaches (170/mes) | pagina web coach personal (140), embudo de ventas para coaches (70) | pagina web para coach que genere clientes |
| `/para/ecommerce` | diseno tienda online (720/mes) | crear tienda online profesional (590), ecommerce para pymes (210) | diseno web para tienda online con automatizacion |
| `/para/inmobiliarias` | diseno web inmobiliaria (320/mes) | pagina web agencia inmobiliaria (260), captacion leads inmobiliaria (140) | web inmobiliaria con captacion automatica de leads |

**Blog posts existentes -- Asignacion de keywords:**

| Pagina | KW Principal | KW Secundarias |
|--------|-------------|----------------|
| `/blog/por-que-mi-web-no-genera-clientes` | por que mi web no genera clientes (90) | por que mi web no vende (210), mi web no convierte (70), tengo web pero no vendo (70) |
| `/blog/cuanto-cuesta-web-profesional` | cuanto cuesta una pagina web profesional (880) | precio diseno web (720), precio pagina web empresa (590), cuanto cobra una agencia digital (170) |
| `/blog/chatbot-ia-para-pymes` | chatbot ia para pymes guia | que es un chatbot de inteligencia artificial (590), como implementar un chatbot (320) |
| `/blog/diferencia-web-bonita-web-que-vende` | web bonita vs web que vende | que necesita mi web para vender mas (90) |
| `/blog/como-automatizar-captacion-leads` | como automatizar captacion leads | como generar leads (480), sistema automatizado captacion |
| `/blog/que-es-lead-scoring` | que es lead scoring (320) | que es lead scoring y como funciona, lead scoring inteligencia artificial |

**Accion para SEO Tecnico:** Revisar cada pagina y asegurar que:
1. El title incluye la KW principal (max 60 caracteres)
2. La meta description incluye KW principal + CTA (max 155 caracteres)
3. El H1 contiene la KW principal con variacion natural
4. Al menos un H2 incluye una KW secundaria
5. La KW principal aparece en las primeras 100 palabras del cuerpo
6. Alt text de imagenes incluye KW relevante
7. Schema JSON-LD esta correctamente implementado

### 3.2 Creacion de paginas de empresa (SEO Content -- 12h)

Crear las siguientes paginas nuevas segun las plantillas definidas en la Arquitectura:

| # | Pagina | URL | KW Principal | Contenido minimo | Schema |
|---|--------|-----|-------------|-----------------|--------|
| 1 | **Contacto** | `/contacto/` | contactar agencia diseno web | Formulario segmentado (tipo negocio, presupuesto, urgencia), mapa si hay oficina, telefono, email (hola@zappyapps.tech), horario | ContactPage + BreadcrumbList |
| 2 | **FAQ completa** | `/faq/` | preguntas frecuentes diseno web pymes | 20+ preguntas organizadas por categorias: proceso, precios, plazos, tecnologia, IA, soporte. Cada respuesta enlaza a pagina relevante | FAQPage + BreadcrumbList |
| 3 | **Testimonios** | `/testimonios/` | opiniones agencia diseno web | Testimonios con foto, nombre, empresa, sector, cita destacada. Video testimonials si es posible. Estrellas | AggregateRating + Review + BreadcrumbList |
| 4 | **Portfolio hub** | `/portfolio/` | portfolio diseno web agencia | Galeria de proyectos con captura, descripcion, sector, servicios utilizados. Filtros por sector/servicio | Article + BreadcrumbList |
| 5 | **Equipo** | `/equipo/` | equipo zappyapps agencia web | Perfiles: Alejandro Bethencourt (fundador), + miembros. Bio, foto, especializacion, redes sociales | Person (cada miembro) + BreadcrumbList |

**Interlinking de paginas de empresa:**
- Todas se enlazan entre si en sidebar/footer
- `/sobre-nosotros.html` -> `/equipo/` -> `/portfolio/` (flujo narrativo)
- `/testimonios/` recibe enlaces desde paginas de servicio y sector
- `/contacto/` recibe enlaces desde TODAS las paginas (CTA principal)
- `/faq/` recibe enlaces desde blog posts que responden preguntas similares

### 3.3 Actualizacion del sitemap y navegacion (SEO Tecnico -- 2h)

- Anadir las 5 paginas nuevas al `sitemap.xml`
- Actualizar navegacion global: `Inicio | Servicios (dropdown) | Sectores (dropdown) | Blog | Recursos | Contacto`
- Actualizar footer: columnas de Servicios (top 4), Sectores (top 4), Empresa, Legal

**Entregable Sprint 1:** 5 paginas nuevas publicadas, keywords asignadas a todas las paginas existentes, sitemap y navegacion actualizados.

---

## 4. Sprint 2 -- Semanas 3-4: Contenido Fase 2 (Blog Mes 2 + Nuevos Servicios/Sectores)

**Responsable principal:** SEO Content
**Apoyo:** SEO Tecnico (schemas y meta tags)
**Duracion:** 10 dias habiles
**Esfuerzo estimado:** 40-50 horas
**Entregable:** 15 paginas nuevas publicadas (6 blog + 3 servicios/sectores + 6 de empresa/blog de la Fase 2 de arquitectura)

### 4.1 Blog posts Mes 2 -- Cluster MOFU/Decision (SEO Content -- 24h)

Cada articulo debe seguir la plantilla de blog definida en la Arquitectura (1.500-2.500 palabras, H2/H3 jerarquicos, imagenes cada 300-400 palabras, 2-3 enlaces a money pages, 2-3 a otros articulos del cluster).

| # | Titulo | URL | KW Principal (volumen) | Cluster | Brief de contenido (50 palabras) | Internal links |
|---|--------|-----|----------------------|---------|----------------------------------|----------------|
| 1 | Mejores agencias de diseno web en Espana 2026 | `/blog/mejores-agencias-diseno-web-espana` | mejores agencias diseno web espana 2026 (320) | Estrategia digital | Listicle de las mejores agencias de diseno web en Espana. Incluir a ZappyApps con diferencial de IA. Criterios de seleccion, precios orientativos, puntos fuertes de cada agencia. CTA natural a contacto. | -> /sobre-nosotros, -> /servicios/, <- /blog/ hub |
| 2 | Como elegir agencia de diseno web: guia para PYMEs | `/blog/como-elegir-agencia-web` | como elegir agencia diseno web (210) | Estrategia digital | Guia paso a paso para PYMEs. Que preguntar, red flags, como evaluar portfolio, importancia de la estrategia vs solo diseno. Checklist descargable. CTA a contacto. | -> /recursos/checklist-web-pyme, -> /comparar/ hub, <- /blog/ hub |
| 3 | CRM para PYMEs: cual elegir y por que lo necesitas | `/blog/crm-para-pymes-guia` | crm para pymes cual elegir (170) | Estrategia digital | Comparativa de CRM para PYMEs: HubSpot, Zoho, Pipedrive y solucion integrada de ZappyApps. Cuando necesitas un CRM, como elegirlo, costes mensuales, pros y contras. | -> /servicios/crm-personalizado, -> /blog/funnel-ventas, <- /blog/ hub |
| 4 | Funnel de ventas automatizado: guia paso a paso | `/blog/funnel-ventas-automatizado` | funnel ventas automatizado paso a paso (390) | Estrategia digital | Guia completa de funnels automatizados. TOFU-MOFU-BOFU explicado para PYMEs. Herramientas, ejemplos, como configurar email + WhatsApp + remarketing. | -> /servicios/funnels-conversion, -> /servicios/captacion-leads, <- /blog/ hub |
| 5 | Web de conversion vs web corporativa: diferencias clave | `/blog/web-conversion-vs-web-corporativa` | web de conversion vs web corporativa (Variable) | Diseno web | Diferencias entre web corporativa clasica y web orientada a conversion. Metricas, estructura, CTAs, ejemplos visuales. Por que las PYMEs necesitan webs que vendan. | -> /servicios/diseno-web-estrategico, -> /blog/diferencia-web-bonita, <- /blog/ hub |
| 6 | IA aplicada al marketing para PYMEs: guia practica | `/blog/ia-aplicada-marketing-pymes` | inteligencia artificial marketing pymes (210) | IA y automatizacion | Como las PYMEs pueden usar IA en su marketing: chatbots, lead scoring, personalizacion, automatizacion. Casos reales y herramientas accesibles. Posicionamiento ZappyApps como experto. | -> /servicios/chatbot-ia-empresas, -> /servicios/lead-scoring-ia, <- /blog/ hub |

### 4.2 Nuevas paginas de servicio (SEO Content + SEO Tecnico -- 8h)

| # | Pagina | URL | KW Principal (volumen) | Brief | Schema |
|---|--------|-----|----------------------|-------|--------|
| 1 | **Landing pages** | `/servicios/landing-pages` | crear landing page profesional (Variable) | Servicio de creacion de landing pages de alta conversion. Proceso, que incluye, ejemplos, precios orientativos. Diferencia entre landing page y web completa. A/B testing. | Service + BreadcrumbList + FAQPage |

### 4.3 Nuevos sectores (SEO Content + SEO Tecnico -- 8h)

| # | Pagina | URL | KW Principal (volumen) | Brief | Schema |
|---|--------|-----|----------------------|-------|--------|
| 1 | **Gimnasios** | `/para/gimnasios` | diseno web gimnasios (Variable) | Web especializada para gimnasios y centros fitness. Reserva online, integracion con apps fitness, captacion de leads con ofertas, chatbot para horarios y tarifas. | ProfessionalService + BreadcrumbList + FAQPage |
| 2 | **Academias** | `/para/academias` | diseno web academias formacion (Variable) | Web para academias y centros de formacion. Matriculacion online, catalogo de cursos, area de alumnos, captacion con contenido gratuito. Integracion e-learning. | ProfessionalService + BreadcrumbList + FAQPage |
| 3 | **Clinicas dentales** | `/para/clinicas-dentales` | diseno web clinicas dentales (Variable) | Web especializada para clinicas dentales. Reserva online, fichas de tratamientos, doctor profiles, galeria antes/despues, chatbot para citas. SEO local dental. | ProfessionalService + BreadcrumbList + FAQPage |

### 4.4 Interlinking Sprint 2

Para cada nueva pagina de blog:
- 2-3 enlaces a money pages (servicios) con anchor text natural
- 2-3 enlaces a otros articulos del mismo cluster
- 1 enlace a pagina de sector si es relevante
- 1 CTA a `/contacto/` al final

Para cada nuevo sector:
- 3-4 enlaces a servicios relevantes
- 1 enlace a blog post sectorial (cuando exista)
- 1 enlace al hub `/para/`
- Enlaces cruzados con sectores similares (clinicas-dentales <-> clinicas)

Para la nueva pagina de servicio (landing-pages):
- Enlace al hub `/servicios/`
- Enlace a `/servicios/diseno-web-estrategico` (servicio relacionado)
- Enlace a 1-2 sectores relevantes

### 4.5 Actualizacion sitemap y verificacion

- Anadir 10 paginas nuevas al `sitemap.xml`
- Verificar indexacion en GSC (solicitar indexacion manual)
- Validar schemas con Rich Results Test para cada pagina nueva

**Entregable Sprint 2:** 10 paginas nuevas publicadas, total acumulado ~40 paginas indexables.

---

## 5. Sprint 3 -- Semanas 5-6: Blog Mes 2 (Parte 2) + Comparativas

**Responsable principal:** SEO Content
**Apoyo:** SEO Tecnico (estructura, schemas), SEO Estratega (revision de contenido)
**Duracion:** 10 dias habiles
**Esfuerzo estimado:** 45-55 horas
**Entregable:** Silo de comparativas completo (7 paginas) + 4 blog posts TOFU + actualizacion interlinking

### 5.1 Silo de Comparativas completo (SEO Content -- 28h)

Las comparativas son contenido MOFU de alto valor para capturar usuarios en fase de decision. Cada una sigue la plantilla de comparativa de la Arquitectura (tabla resumen rapida, analisis por criterios, veredicto, FAQ).

| # | Pagina | URL | KW Principal (volumen) | Brief |
|---|--------|-----|----------------------|-------|
| 1 | **Hub Comparativas** | `/comparar/` | comparativas diseno web agencias | Pagina indice con todas las comparativas. Tabla resumen rapida con veredictos. CTA a contacto para asesoramiento personalizado. 800-1.000 palabras. |
| 2 | **Agencia vs Freelancer** | `/comparar/agencia-vs-freelancer` | contratar agencia web vs freelancer (210) | Analisis pros/contras de agencia vs freelancer. Tabla comparativa de precios, plazos, soporte, calidad. Cuando elegir cada opcion. 1.500-2.000 palabras. |
| 3 | **Agencia vs DIY** | `/comparar/agencia-vs-hacer-tu-web` | hacer web yo mismo vs contratar agencia (70) | Coste real de hacer tu propia web vs contratarla. Tiempo invertido, coste de oportunidad, resultado final. Herramientas DIY analizadas (Wix, WordPress, Squarespace). 1.500-2.000 palabras. |
| 4 | **WordPress vs Web a medida** | `/comparar/wordpress-vs-web-a-medida` | wordpress vs web a medida (170) | Comparativa tecnica. Rendimiento, seguridad, escalabilidad, coste total de propiedad. Cuando conviene cada opcion segun tipo de negocio. 2.000 palabras. |
| 5 | **ZappyApps vs Agencia tradicional** | `/comparar/zappyapps-vs-agencia-tradicional` | agencia web con ia vs agencia tradicional | Que diferencia a una agencia con IA. Velocidad, personalizacion, coste, resultados medibles. Casos de uso donde la IA marca la diferencia. 1.500 palabras. |
| 6 | **Wix vs Web profesional** | `/comparar/wix-vs-web-profesional` | wix vs web profesional diferencias (90) | Analisis honesto. Limitaciones de Wix en SEO, rendimiento, personalizacion. Cuando Wix es suficiente y cuando necesitas algo mejor. 1.500 palabras. |
| 7 | **Shopify vs Web a medida** | `/comparar/shopify-vs-web-a-medida` | shopify vs tienda online a medida | Para eCommerce: comisiones, personalizacion, SEO, integraciones. Calculadora de coste a 3 anos. 1.500-2.000 palabras. |

**Interlinking del silo comparativas:**
- Hub enlaza a todas las comparativas con tabla resumen
- Cada comparativa enlaza al hub y a 1-2 comparativas relacionadas
- `wordpress-vs-web-a-medida` -> `/servicios/diseno-web-estrategico`
- `agencia-vs-freelancer` -> `/sobre-nosotros.html` (E-E-A-T)
- `wix-vs-web-profesional` -> `/blog/errores-web-pymes` (cuando exista)
- `shopify-vs-web-a-medida` -> `/para/ecommerce`
- Cada comparativa incluye CTA a `/contacto/`

### 5.2 Blog posts TOFU -- Contenido de alto volumen (SEO Content -- 16h)

| # | Titulo | URL | KW Principal (volumen) | Cluster | Brief |
|---|--------|-----|----------------------|---------|-------|
| 1 | Tendencias de diseno web 2026 | `/blog/tendencias-diseno-web-2026` | tendencias diseno web 2026 (880) | Diseno web | Las 10+ tendencias: IA conversacional, personalizacion dinamica, micro-interacciones, dark mode, accesibilidad, rendimiento extremo. 2.000 palabras. |
| 2 | Errores comunes de webs de PYMEs | `/blog/errores-web-pymes` | errores comunes web pymes (210) | Diseno web | Los 15 errores mas frecuentes. Desde no tener HTTPS hasta ignorar el movil. Checklist de autodiagnostico. 1.800 palabras. |
| 3 | Como automatizar WhatsApp Business | `/blog/automatizar-whatsapp-business` | como automatizar whatsapp business (320) | IA y automatizacion | Guia practica de automatizacion de WhatsApp Business. Chatbots, mensajes programados, integracion con CRM, casos por sector. 2.000 palabras. |
| 4 | IA generativa para ventas en PYMEs | `/blog/ia-generativa-ventas-pymes` | ia generativa para ventas pymes | IA y automatizacion | Como usar ChatGPT, Claude y otras IA para mejorar ventas: copywriting, emails, propuestas, atencion al cliente. 1.800 palabras. |

### 5.3 Nuevos sectores adicionales (SEO Content -- 6h)

| # | Pagina | URL | KW Principal | Brief |
|---|--------|-----|-------------|-------|
| 1 | **Consultoras** | `/para/consultoras` | diseno web consultoras | Web para consultoras. Generacion leads B2B, calendario reuniones, caso de estudio, blog autoridad. 1.200 palabras. |
| 2 | **Veterinarios** | `/para/veterinarios` | diseno web clinicas veterinarias | Web para clinicas veterinarias. Citas online, fichas servicios, urgencias, blog salud animal. 1.200 palabras. |
| 3 | **Centros estetica** | `/para/centros-estetica` | diseno web centros estetica | Web para centros estetica. Reserva online, galeria antes/despues, bonos, chatbot. 1.200 palabras. |

### 5.4 Nuevo servicio: SEO local (SEO Content + SEO Tecnico -- 3h)

| Pagina | URL | KW Principal | Brief |
|--------|-----|-------------|-------|
| **SEO local** | `/servicios/seo-local` | seo local para pymes | Servicio de posicionamiento SEO local: Google Business Profile, citaciones NAP, resenas, contenido geo-localizado. Para negocios con establecimiento fisico. 1.500 palabras. Schema: Service + BreadcrumbList + FAQPage. |

**Entregable Sprint 3:** 15 paginas nuevas publicadas, total acumulado ~55 paginas indexables.

---

## 6. Sprint 4 -- Semanas 7-8: Autoridad, Link Building y Local SEO

**Responsable principal:** SEO Off-Page
**Apoyo:** SEO Content (contenido local), SEO Tecnico (Schema LocalBusiness)
**Duracion:** 10 dias habiles
**Esfuerzo estimado:** 30-40 horas
**Entregable:** Perfiles creados en 15+ plataformas, 4 paginas locales, Google Business Profile optimizado

### 6.1 Paginas locales (SEO Content + SEO Tecnico -- 10h)

Crear paginas geolocalizadas con contenido unico (no duplicar entre ellas):

| # | Pagina | URL | KW Principal (volumen) | KW Secundarias | Contenido |
|---|--------|-----|----------------------|----------------|-----------|
| 1 | **Diseno web Tenerife** | `/diseno-web-tenerife` | diseno web tenerife (260) | agencia diseno web tenerife (90), pagina web tenerife (170), diseno web santa cruz de tenerife (90), diseno web la laguna (50) | Servicio de diseno web localizado en Tenerife. Menciones a La Laguna, Santa Cruz, Sur de Tenerife. Casos locales si existen. NAP completo. 1.500 palabras. Schema: LocalBusiness + BreadcrumbList. |
| 2 | **Agencia digital Tenerife** | `/agencia-digital-tenerife` | agencia digital tenerife (170) | agencia marketing digital tenerife (90), mejor agencia digital tenerife (70) | Servicios completos de agencia digital en Tenerife. Automatizacion, chatbots, CRM. Diferencial: IA + cercanía local. 1.500 palabras. Schema: LocalBusiness + BreadcrumbList. |
| 3 | **Diseno web Canarias** | `/diseno-web-canarias` | diseno web canarias (140) | empresa diseno web canarias (50), diseno web las palmas (210), diseno web gran canaria (90) | Servicio para todo el archipielago. Mencion a Las Palmas, Gran Canaria, Lanzarote, Fuerteventura. 1.500 palabras. Schema: LocalBusiness + BreadcrumbList. |
| 4 | **Agencia digital Canarias** | `/agencia-digital-canarias` | agencia digital canarias (110) | marketing digital canarias (90), mejor agencia digital canarias (50), agencia digital las palmas (140) | Servicios de agencia digital para empresas canarias. Cobertura completa del archipielago con servicio remoto. 1.500 palabras. Schema: LocalBusiness + BreadcrumbList. |

**Nota sobre canibalizacion local:** Tenerife y Canarias apuntan a keywords diferentes. Tenerife se centra en la isla; Canarias cubre el archipielago incluyendo Las Palmas/Gran Canaria. Interenlazarlas sin competir.

### 6.2 Google Business Profile (SEO Off-Page -- 4h)

| Tarea | Detalle | Deadline |
|-------|---------|----------|
| Crear/reclamar ficha GBP | Nombre: "ZappyApps - Agencia de Diseno Web e IA", Direccion: La Laguna, Tenerife | Dia 1 |
| Completar informacion | Horario, telefono, email (hola@zappyapps.tech), web, descripcion (750 chars max con keywords locales), categorias: "Agencia de diseno web", "Servicio de marketing por internet" | Dia 1-2 |
| Subir fotos | Logo, portada (1200x675), fotos de equipo/oficina (min 5), capturas de proyectos (min 5) | Dia 2-3 |
| Publicar primer post GBP | Post sobre servicio destacado con CTA | Dia 3 |
| Activar mensajes y reservas | Habilitar chat GBP y enlace a formulario de contacto | Dia 3 |
| Solicitar primeras resenas | Enviar enlace de resena a 5-10 clientes actuales/conocidos | Dia 3-5 |

**Objetivo de resenas:** 5 resenas en primer mes, 20+ en 6 meses.

### 6.3 Directorios y perfiles de agencia (SEO Off-Page -- 12h)

Registrar en las siguientes plataformas con NAP consistente:

**Directorios generales de agencias (P1):**

| # | Plataforma | URL de registro | Tipo | Accion |
|---|-----------|----------------|------|--------|
| 1 | Clutch | https://clutch.co/profile | Directorio agencias | Crear perfil completo, solicitar reviews de clientes |
| 2 | DesignRush | https://www.designrush.com/agency/profile | Directorio agencias | Crear perfil con portfolio |
| 3 | GoodFirms | https://www.goodfirms.co/add-your-company | Directorio agencias | Crear perfil verificado |
| 4 | Sortlist | https://www.sortlist.com/provider/register | Directorio agencias | Perfil con servicios y sectores |
| 5 | G2 (si aplica) | https://www.g2.com/ | Reviews software/servicios | Crear perfil si la plataforma permite agencias |
| 6 | Trustpilot | https://business.trustpilot.com/ | Reviews | Crear perfil empresarial |

**Directorios espanoles (P1):**

| # | Plataforma | URL | Accion |
|---|-----------|-----|--------|
| 7 | Paginas Amarillas | https://www.paginasamarillas.es/ | Alta de empresa con NAP |
| 8 | QDQ | https://www.qdq.com/ | Alta de empresa |
| 9 | Infoisla (Canarias) | https://www.infoisla.com/ | Directorio local canario |
| 10 | Camara de Comercio Tenerife | https://www.camaratenerife.com/ | Registro como empresa asociada |

**Directorios tecnicos/desarrollo (P2):**

| # | Plataforma | URL | Accion |
|---|-----------|-----|--------|
| 11 | ProductHunt | https://www.producthunt.com/ | Publicar ZappyApps como producto |
| 12 | Crunchbase | https://www.crunchbase.com/ | Perfil de empresa |
| 13 | AngelList/Wellfound | https://wellfound.com/ | Perfil de startup |
| 14 | GitHub | https://github.com/zappyapps | Perfil de organizacion con README |
| 15 | LinkedIn Company | https://www.linkedin.com/company/zappyapps | Pagina de empresa optimizada |

**NAP a mantener consistente en TODOS los perfiles:**
- **Nombre:** ZappyApps
- **Direccion:** La Laguna, Tenerife, Espana
- **Telefono:** (el oficial)
- **Web:** https://zappyapps.tech/
- **Email:** hola@zappyapps.tech

### 6.4 Guest post strategy -- Prospecting (SEO Off-Page -- 8h)

**Objetivo:** Identificar 20 oportunidades de guest post y enviar 10 pitches.

**Criterios de seleccion de sitios:**
- DA/DR > 25
- Relevancia tematica (marketing digital, pymes, tecnologia, emprendimiento)
- Mercado espanol o hispanohablante
- Aceptan colaboraciones/guest posts

**Tipos de sitios objetivo:**

| Tipo | Ejemplos de busqueda | Objetivo |
|------|---------------------|----------|
| Blogs de marketing digital ES | "marketing digital" + "escribe para nosotros" | 5 sitios |
| Blogs de emprendimiento | "pymes" + "colaborar" OR "autor invitado" | 5 sitios |
| Medios de tecnologia ES | "tecnologia" + "contribuir" OR "guest post" | 5 sitios |
| Blogs de IA y automatizacion | "inteligencia artificial" + "escribe" | 3 sitios |
| Asociaciones empresariales | Camaras de comercio, asociaciones de PYMEs | 2 sitios |

**Template de pitch para guest posts:**

```
Asunto: Colaboracion de contenido sobre [tema relevante]

Hola [nombre],

Soy Alejandro Bethencourt, fundador de ZappyApps, agencia de diseno web con IA para PYMEs.

He leido [articulo especifico del blog] y me parecio [comentario genuino].

Me gustaria proponer un articulo sobre [tema concreto] que aportaria valor a vuestros lectores.
El enfoque seria [angulo unico basado en experiencia con clientes].

Algunos temas que podria cubrir:
1. Como la IA esta transformando el diseno web para PYMEs
2. [Tema 2 relevante al blog]
3. [Tema 3 relevante al blog]

Mi background: [breve bio 2 lineas]

Quedo a disposicion.
Alejandro
```

### 6.5 Redes sociales para SEO (SEO Off-Page -- 4h)

| Plataforma | Accion | Frecuencia |
|-----------|--------|------------|
| LinkedIn (personal Alejandro) | Publicar 2-3 posts/semana sobre diseno web, IA, PYMEs. Compartir cada nuevo blog post. | Continua |
| LinkedIn (pagina ZappyApps) | Publicar 1-2 posts/semana. Compartir contenido de blog y comparativas. | Continua |
| Twitter/X | Crear perfil si no existe. Compartir contenido tecnico, hilos sobre IA y diseno web. | 3-5 tweets/semana |
| Instagram | Carruseles con tips de diseno web, antes/despues de proyectos, citas de testimonios. | 2-3 posts/semana |

**Entregable Sprint 4:** 4 paginas locales publicadas, GBP creado y optimizado, 15+ perfiles en directorios, 10 pitches de guest post enviados.

---

## 7. Sprint 5 -- Semanas 9-10: Content Gap + Pagina de Precios + Blog TOFU

**Responsable principal:** SEO Content + SEO Off-Page
**Apoyo:** SEO Estratega (priorizacion de gaps)
**Duracion:** 10 dias habiles
**Esfuerzo estimado:** 35-45 horas

### 7.1 Pagina de Precios (SEO Content + SEO Tecnico -- 6h)

| Pagina | URL | KW Principal (volumen) | KW Secundarias |
|--------|-----|----------------------|----------------|
| **Precios** | `/precios` | precio diseno web (720) | precio pagina web empresa (590), pagina web profesional precio (720), precio chatbot ia (170), precio crm para pymes (170), tarifas agencia diseno web (140) |

**Brief de contenido:**
- Tabla de precios clara por servicio (diseno web, chatbot, CRM, embudos, etc.)
- Rangos de precio o paquetes (Basico, Profesional, Premium)
- Que incluye cada paquete
- FAQ de precios (4-6 preguntas)
- CTA a presupuesto personalizado (enlace a `/contacto/`)
- Schema: Service con Offer + BreadcrumbList + FAQPage
- Transparencia de precios genera confianza (referencia competidor NeoAttack)

### 7.2 Blog posts -- Content Gaps prioritarios (SEO Content -- 20h)

Basados en el Content Gap Analysis del Keyword Research (gaps de alta prioridad):

| # | Titulo | URL | KW Principal (volumen) | Gap # | Brief |
|---|--------|-----|----------------------|-------|-------|
| 1 | Kit Digital: que es y como solicitarlo en 2026 | `/blog/kit-digital-guia` | kit digital que es y como solicitarlo (2.400) | #8 | Guia completa del Kit Digital. Requisitos, proceso, cuantia, como ZappyApps puede ser proveedor. Alto trafico, alta captacion. 2.500 palabras. |
| 2 | Subvenciones para digitalizacion de PYMEs 2026 | `/blog/subvenciones-digitalizacion-2026` | subvenciones digitalizacion pymes espana 2026 (590) | #7 | Todas las ayudas disponibles: Kit Digital, CDTI, fondos europeos, ayudas autonomicas Canarias. CTA a consulta gratuita. 2.000 palabras. |
| 3 | Como captar clientes por internet: guia para PYMEs | `/blog/como-captar-clientes-online` | como captar clientes por internet (720) | Del KR | Guia exhaustiva TOFU. SEO, redes, email, publicidad, chatbots, contenido. Cada seccion enlaza a servicio correspondiente. 2.500 palabras. |
| 4 | CRM vs Excel: por que tu PYME necesita un CRM | `/blog/crm-vs-excel` | crm vs excel (320) | Del KR | Comparativa practica. Limitaciones de Excel, ventajas de un CRM, cuando dar el salto, opciones. Enlace a /servicios/crm-personalizado. 1.500 palabras. |
| 5 | Redes sociales vs pagina web: donde invertir | `/blog/redes-sociales-vs-web` | redes sociales vs pagina web (260) | Del KR | Por que no puedes depender solo de redes. Ventajas de web propia, datos, control. 1.500 palabras. |

### 7.3 Seguimiento de link building (SEO Off-Page -- 8h)

| Tarea | Detalle |
|-------|---------|
| Follow-up guest posts | Segundo contacto a pitches sin respuesta (5 dias despues del primero) |
| Responder a aceptaciones | Enviar articulos a sitios que aceptaron |
| Completar perfiles en directorios | Anadir descripciones, fotos, portfolio a perfiles creados en Sprint 4 |
| Solicitar resenas | Segundo envio de solicitud de resenas en GBP y Trustpilot |
| Monitorear backlinks | Revision en Ahrefs/SEMrush de nuevos backlinks adquiridos |

### 7.4 SEO local -- Optimizacion continua (SEO Off-Page -- 4h)

| Tarea | Detalle |
|-------|---------|
| Post semanal en GBP | 1 post/semana con oferta o contenido (minimo 100 palabras + imagen) |
| Responder resenas | Responder a cada resena en GBP (positiva y negativa) en <24h |
| Fotos frescas | Subir 2-3 fotos nuevas al perfil GBP |
| Verificar NAP | Comprobar consistencia de NAP en todos los directorios |
| Citations locales adicionales | Registrar en 3-5 directorios locales adicionales de Canarias |

**Entregable Sprint 5:** Pagina de precios publicada, 5 blog posts de alto impacto, seguimiento activo de link building.

---

## 8. Sprint 6 -- Semanas 11-12: Analisis, Optimizacion y Consolidacion

**Responsable principal:** SEO Analytics + SEO Estratega
**Apoyo:** SEO Tecnico (implementacion de cambios), SEO Content (actualizaciones)
**Duracion:** 10 dias habiles
**Esfuerzo estimado:** 25-35 horas
**Entregable:** Informe completo del trimestre 1, plan de accion para trimestre 2

### 8.1 Auditoria de posiciones y rendimiento (SEO Analytics -- 10h)

| Analisis | Herramienta | Detalle |
|----------|------------|---------|
| Keywords top 10 | GSC + Ahrefs | Listar todas las keywords que posicionan en top 10. Compararcon objetivos del plan. |
| Keywords top 20 | GSC + Ahrefs | Identificar keywords en posiciones 11-20 que pueden subir con optimizacion. |
| Keywords en top 100 | GSC | Mapa completo de visibilidad. |
| CTR por pagina | GSC | Identificar paginas con impresiones altas pero CTR bajo (oportunidad de mejorar title/description). |
| Paginas con mayor trafico | GA4 | Top 10 paginas por sesiones organicas. |
| Paginas con 0 trafico | GA4 + GSC | Paginas publicadas que no reciben visitas (necesitan interlinking o contenido mejorado). |
| Tasa de rebote por pagina | GA4 | Identificar paginas con rebote >70% para optimizar. |
| Conversion por pagina | GA4 | Que paginas generan mas leads/contactos. |

### 8.2 Analisis de CTR en GSC (SEO Analytics + SEO Estratega -- 4h)

Para cada keyword con CTR < 3% y posicion media < 10:

| Accion | Detalle |
|--------|---------|
| Mejorar title | Hacerlo mas atractivo con power words, numeros, ano |
| Mejorar description | Incluir CTA, beneficio claro, diferencial |
| Anadir rich snippets | Verificar que Schema esta generando rich results |
| FAQ para featured snippets | Anadir FAQ en paginas que pueden aparecer en position 0 |

### 8.3 Actualizacion de contenido underperforming (SEO Content -- 6h)

Para paginas con trafico por debajo de las expectativas:

| Accion | Detalle |
|--------|---------|
| Ampliar contenido | Anadir 300-500 palabras con keywords secundarias que no se cubrieron |
| Mejorar interlinking | Anadir 2-3 enlaces internos adicionales desde paginas de alto trafico |
| Actualizar fecha | Cambiar dateModified en Schema |
| Mejorar imagenes | Anadir infografias, capturas, diagramas que mejoren engagement |
| Republish en redes | Compartir el contenido actualizado en LinkedIn y redes |

### 8.4 Analisis de canibalizacion (SEO Estratega -- 3h)

Revisar en GSC las queries que llevan trafico a multiples paginas:

| Escenario | Accion |
|-----------|--------|
| 2 paginas compiten por misma query | Consolidar contenido o diferenciar intenciones claramente |
| Blog rankea por keyword transaccional | Anadir CTA prominente al servicio + reforzar interlink |
| Pagina incorrecta aparece en SERPs | Reforzar interlinking hacia la pagina correcta con anchor text exacto |

### 8.5 Informe trimestral (SEO Analytics + SEO Estratega -- 6h)

**Template de informe:**

```
INFORME SEO TRIMESTRAL -- ZAPPYAPPS.TECH
Periodo: [Fecha inicio] - [Fecha fin]

1. RESUMEN EJECUTIVO
   - Principales logros del trimestre
   - KPIs vs objetivos
   - Problemas encontrados

2. METRICAS DE TRAFICO
   - Sesiones organicas (total, tendencia, por pagina)
   - Usuarios nuevos vs recurrentes
   - Dispositivos (movil vs desktop)

3. VISIBILIDAD EN BUSCADORES
   - Impresiones GSC (total y tendencia)
   - Clicks (total y tendencia)
   - CTR medio
   - Posicion media
   - Top 20 keywords por impresiones
   - Top 20 keywords por clicks
   - Keywords ganadas/perdidas

4. CONTENIDO
   - Paginas publicadas en el periodo
   - Top 10 paginas por trafico organico
   - Paginas con mejor/peor rendimiento
   - Blog posts con mas engagement

5. BACKLINKS
   - Nuevos backlinks adquiridos
   - Dominios referentes (nuevos)
   - DR/DA actual
   - Perfil de anchor text

6. CONVERSIONES
   - Leads generados por organico
   - Tasa de conversion por landing page
   - Paginas con mayor conversion

7. TECNICO
   - Core Web Vitals actuales
   - Errores de rastreo
   - Paginas indexadas vs enviadas
   - Cobertura del sitemap

8. COMPETIDORES
   - Movimientos detectados
   - Keywords donde nos superan
   - Oportunidades identificadas

9. PLAN DE ACCION PARA PROXIMO TRIMESTRE
   - Prioridades basadas en datos
   - Nuevas oportunidades de keywords
   - Contenido planificado
   - Objetivos actualizados
```

**Entregable Sprint 6:** Informe trimestral completo, plan de accion actualizado para el trimestre 2.

---

## 9. Roadmap Trimestral (Meses 4-6)

**Objetivo:** Expandir contenido long-tail, crear recursos interactivos, publicar casos de exito reales.

### 9.1 Mes 4 -- Recursos interactivos y casos de exito

**Responsable:** SEO Content + SEO Tecnico

| Semana | Tarea | Entregable | Responsable |
|--------|-------|-----------|-------------|
| 13 | Crear hub de recursos `/recursos/` | Hub page con 6 recursos planificados | SEO Content |
| 13 | Crear calculadora de presupuesto web | `/recursos/calculadora-presupuesto-web` -- Herramienta interactiva (HTML/JS) que genera presupuesto estimado segun inputs del usuario. KW: "calculadora presupuesto diseno web". Lead magnet con captura de email. | SEO Tecnico + SEO Content |
| 14 | Crear checklist web para PYMEs | `/recursos/checklist-web-pyme` -- Checklist interactiva o PDF descargable. KW: "checklist web profesional pyme". Lead magnet. | SEO Content |
| 14 | Blog: Caso de exito restaurante | `/blog/caso-exito-restaurante-web` -- Caso real o semi-ficcional con metricas antes/despues. KW: "caso exito diseno web restaurante". | SEO Content |
| 15 | Blog: Caso de exito clinica dental | `/blog/caso-exito-clinica-dental` -- Idem con clinica dental. KW: "caso exito web clinica dental". | SEO Content |
| 15 | Blog: Caso de exito ecommerce | `/blog/caso-exito-ecommerce` -- Idem con tienda online. KW: "caso exito tienda online conversion". | SEO Content |
| 16 | Blog: Marketing digital restaurantes | `/blog/marketing-digital-restaurantes` -- Guia sectorial. KW: "marketing digital para restaurantes" (260/mes). | SEO Content |
| 16 | Blog: Marketing digital abogados | `/blog/marketing-digital-abogados` -- Guia sectorial. KW: "marketing digital para abogados" (260/mes). | SEO Content |

### 9.2 Mes 5 -- Contenido long-tail y recursos avanzados

| Semana | Tarea | Entregable | Responsable |
|--------|-------|-----------|-------------|
| 17 | Guia SEO basico para PYMEs | `/recursos/guia-seo-basico-pymes` -- Pillar content de 3.000+ palabras. KW: "guia seo basico para pymes". | SEO Content |
| 17 | Plantilla de brief web | `/recursos/plantilla-brief-web` -- PDF descargable. KW: "plantilla brief diseno web". Lead magnet. | SEO Content |
| 18 | Blog: SEO local guia PYMEs | `/blog/seo-local-guia-pymes` -- KW: "seo local para pymes guia completa". 2.500 palabras. | SEO Content |
| 18 | Blog: Como optimizar Google Business Profile | `/blog/google-business-profile-optimizar` -- KW: "como optimizar google business profile". | SEO Content |
| 19 | Blog: Marketing digital clinicas | `/blog/marketing-digital-clinicas` -- Guia sectorial. KW: "marketing digital para clinicas" (210/mes). | SEO Content |
| 19 | Glosario de marketing digital | `/recursos/glosario-marketing-digital` -- 100+ terminos. KW: "glosario marketing digital terminos". Long-tail SEO masivo. | SEO Content |
| 20 | Test: Necesitas nueva web? | `/recursos/test-necesitas-nueva-web` -- Quiz interactivo con resultados personalizados. KW: "test necesito nueva pagina web". Lead magnet. | SEO Tecnico + SEO Content |
| 20 | Servicio: Automatizacion WhatsApp | `/servicios/automatizacion-whatsapp` -- KW: "automatizacion whatsapp empresas". | SEO Content |

### 9.3 Mes 6 -- Portfolio, link building avanzado y consolidacion

| Semana | Tarea | Entregable | Responsable |
|--------|-------|-----------|-------------|
| 21 | Portfolio: Proyecto restaurante | `/portfolio/proyecto-restaurante-x` -- Caso detallado con capturas y metricas. | SEO Content |
| 21 | Portfolio: Proyecto clinica | `/portfolio/proyecto-clinica-y` -- Idem. | SEO Content |
| 22 | Portfolio: Proyecto ecommerce | `/portfolio/proyecto-ecommerce-z` -- Idem. | SEO Content |
| 22 | Link building: Guest posts Ronda 2 | Enviar 10 nuevos pitches basados en aprendizajes del primer ciclo. | SEO Off-Page |
| 23 | Link building: HARO/Quoted | Registrarse en servicios de menciones de prensa (HARO, Quoted, SourceBottle). Responder a 5+ queries relevantes. | SEO Off-Page |
| 23 | Auditoria tecnica completa | Screaming Frog crawl del sitio completo. Verificar 0 enlaces rotos, canonicals correctos, schemas validos. | SEO Tecnico |
| 24 | Informe semestral | Informe completo de 6 meses con KPIs vs objetivos. Plan actualizado para meses 7-12. | SEO Analytics + SEO Estratega |

**Total paginas al final del mes 6:** ~85-95 paginas indexables.

---

## 10. Roadmap Semestral (Meses 7-12)

### 10.1 Mes 7-8: Scale-up de contenido

| Prioridad | Tarea | Detalle |
|-----------|-------|---------|
| Alta | Blog content cadence: 6-8 posts/mes | Cubrir keywords TOFU restantes del keyword research. Priorizar keywords con volumen medio y competencia baja. |
| Alta | Actualizar contenido existente | Revisar y actualizar los 20 primeros blog posts. Anadir datos de 2026, mejorar interlinking. |
| Media | Nuevos content gaps | Identificar nuevos gaps con datos reales de GSC (queries que impresionan pero no tienen pagina dedicada). |
| Media | Video content strategy | Crear canal de YouTube con videos explicativos de 5-10 min sobre cada servicio. Embeber en paginas de servicio. |
| Baja | Podcast | Considerar un podcast "IA para PYMEs" como fuente de contenido indexable y backlinks. |

### 10.2 Mes 9-10: Link building avanzado

| Prioridad | Tarea | Detalle |
|-----------|-------|---------|
| Alta | Digital PR | Crear estudios propios con datos de clientes (anonimizados). "El estado de la digitalizacion de PYMEs en Canarias 2026". Enviar a medios. |
| Alta | Broken link building | Buscar enlaces rotos en sitios de alta autoridad que apuntan a contenido similar al nuestro. Proponer nuestro contenido como reemplazo. |
| Media | Infografias linkables | Crear 3-5 infografias de alta calidad sobre temas populares (tendencias web, IA para PYMEs). Distribuir con embed code. |
| Media | Asociaciones y partnerships | Alianzas con otras agencias complementarias (SEO, video, branding) para intercambio de enlaces y referencias. |
| Baja | Patrocinios locales | Patrocinar eventos de emprendimiento en Tenerife/Canarias. Backlink + brand awareness. |

### 10.3 Mes 11-12: Nuevos sectores e internacionalizacion

| Prioridad | Tarea | Detalle |
|-----------|-------|---------|
| Alta | Nuevos sectores verticales | Analizar datos de GSC para identificar sectores con demanda no cubierta. Posibles: farmacias, hoteles, aseguradoras, fotografos, psicologos. |
| Media | Evaluacion de internacionalizacion | Analizar si merece la pena crear versiones para Latinoamerica (Mexico, Colombia, Argentina). Volumen de busqueda, competencia, capacidad operativa. |
| Media | Paginas locales peninsulares | Si hay demanda demostrada y capacidad de servicio remoto, crear paginas para Madrid, Barcelona, Valencia con contenido unico. Solo si datos de GSC lo justifican. |
| Baja | Herramientas avanzadas | Crear herramienta gratuita de auditoría web basica (tipo WebFX) que genere backlinks naturales y leads. |

### 10.4 KPIs objetivo al final del ano 1

| KPI | Mes 6 | Mes 12 |
|-----|-------|--------|
| Paginas indexadas | 85+ | 120+ |
| Trafico organico mensual | +400% vs baseline | +1000% vs baseline |
| Keywords top 10 | 60-80 | 120+ |
| Keywords top 100 | 300+ | 600+ |
| Backlinks totales | 80+ | 200+ |
| Dominios referentes | 40+ | 80+ |
| Leads organicos/mes | 40+ | 80+ |
| DA/DR | 25-35 | 35-45 |

---

## 11. Asignacion de Keywords a Paginas (Tabla Maestra Anti-Canibalizacion)

La siguiente tabla es la referencia unica para la asignacion de keywords. Ninguna keyword principal debe aparecer asignada a mas de una pagina.

### 11.1 Paginas transaccionales (BOFU)

| Pagina | KW Principal | KW Secundarias | Cluster |
|--------|-------------|----------------|---------|
| `/` (Homepage) | diseno web estrategico pymes ia | agencia diseno web, mejor agencia digital para pymes, agencia de diseno web profesional, empresa diseno web | Brand + Servicio generico |
| `/servicios/diseno-web-estrategico` | diseno web profesional | diseno web para empresas, diseno web para pymes, crear pagina web empresa, contratar diseno web, diseno web que vende | Diseno web |
| `/servicios/chatbot-ia-empresas` | chatbot para empresas | chatbot con inteligencia artificial, chatbot de ventas, chatbot atencion al cliente, chatbot whatsapp para empresas, chatbot web automatico | Chatbot IA |
| `/servicios/captacion-leads` | captacion de clientes online | sistema de captacion de leads, generar leads online | Captacion leads |
| `/servicios/lead-scoring-ia` | lead scoring para empresas | lead scoring inteligencia artificial | Lead scoring |
| `/servicios/funnels-conversion` | embudo de ventas digital | crear embudo de ventas, embudo de ventas automatizado, funnel de ventas para empresas | Embudos |
| `/servicios/crm-personalizado` | crm para pymes | crm para pequenas empresas, crm ventas pymes, sistema crm espanol, crm con automatizacion | CRM |
| `/servicios/optimizacion-continua` | optimizacion web para ventas | optimizacion tasa de conversion | Optimizacion |
| `/servicios/soporte-web` | mantenimiento web mensual | soporte web profesional | Soporte |
| `/servicios/landing-pages` | crear landing page profesional | -- | Diseno web |
| `/servicios/seo-local` | seo local para pymes | -- | Local |
| `/servicios/automatizacion-whatsapp` | automatizacion whatsapp empresas | -- | Automatizacion |
| `/precios` | precio diseno web | precio pagina web empresa, pagina web profesional precio, precio chatbot ia, tarifas agencia diseno web, presupuesto pagina web | Pricing |

### 11.2 Paginas sectoriales (BOFU vertical)

| Pagina | KW Principal | KW Secundarias | Cluster |
|--------|-------------|----------------|---------|
| `/para/restaurantes` | diseno web para restaurantes | pagina web restaurante precio, chatbot para restaurantes, marketing digital restaurantes | Restaurantes |
| `/para/clinicas` | diseno web para clinicas | pagina web clinica dental, captacion pacientes online, chatbot para clinicas | Clinicas |
| `/para/abogados` | diseno web para abogados | pagina web despacho abogados, captacion clientes abogados online, marketing digital abogados | Abogados |
| `/para/coaches` | diseno web para coaches | pagina web coach personal, embudo de ventas para coaches, web para consultores | Coaches |
| `/para/ecommerce` | diseno tienda online | crear tienda online profesional, ecommerce para pymes, chatbot para tienda online | eCommerce |
| `/para/inmobiliarias` | diseno web inmobiliaria | pagina web agencia inmobiliaria, captacion leads inmobiliaria, chatbot para inmobiliarias | Inmobiliarias |
| `/para/gimnasios` | diseno web gimnasios | -- | Gimnasios |
| `/para/academias` | diseno web academias formacion | -- | Academias |
| `/para/clinicas-dentales` | diseno web clinicas dentales | -- | Clinicas dentales |
| `/para/consultoras` | diseno web consultoras | -- | Consultoras |
| `/para/veterinarios` | diseno web clinicas veterinarias | -- | Veterinarios |
| `/para/centros-estetica` | diseno web centros estetica | -- | Centros estetica |

### 11.3 Paginas locales

| Pagina | KW Principal | KW Secundarias | Cluster |
|--------|-------------|----------------|---------|
| `/diseno-web-tenerife` | diseno web tenerife | agencia diseno web tenerife, pagina web tenerife, diseno web santa cruz de tenerife, diseno web la laguna | Local Tenerife |
| `/agencia-digital-tenerife` | agencia digital tenerife | agencia marketing digital tenerife, mejor agencia digital tenerife | Local Tenerife |
| `/diseno-web-canarias` | diseno web canarias | empresa diseno web canarias, diseno web las palmas, diseno web gran canaria | Local Canarias |
| `/agencia-digital-canarias` | agencia digital canarias | marketing digital canarias, mejor agencia digital canarias, agencia digital las palmas | Local Canarias |

### 11.4 Blog posts (TOFU/MOFU)

| Pagina | KW Principal | KW Secundarias | Cluster |
|--------|-------------|----------------|---------|
| `/blog/por-que-mi-web-no-genera-clientes` | por que mi web no genera clientes | por que mi web no vende, mi web no convierte, tengo web pero no vendo | Diseno web |
| `/blog/cuanto-cuesta-web-profesional` | cuanto cuesta una pagina web profesional | precio diseno web (compartida con /precios), cuanto cobra una agencia digital | Pricing |
| `/blog/chatbot-ia-para-pymes` | chatbot ia para pymes guia | que es un chatbot de inteligencia artificial, como implementar un chatbot | Chatbot IA |
| `/blog/diferencia-web-bonita-web-que-vende` | web bonita vs web que vende | que necesita mi web para vender mas | Diseno web |
| `/blog/como-automatizar-captacion-leads` | como automatizar captacion leads | como generar leads | Captacion leads |
| `/blog/que-es-lead-scoring` | que es lead scoring | que es lead scoring y como funciona | Lead scoring |
| `/blog/mejores-agencias-diseno-web-espana` | mejores agencias diseno web espana 2026 | mejores agencias diseno web | Estrategia digital |
| `/blog/como-elegir-agencia-web` | como elegir agencia diseno web | que preguntar a una agencia web | Estrategia digital |
| `/blog/crm-para-pymes-guia` | crm para pymes cual elegir | mejor crm para pymes espana | Estrategia digital |
| `/blog/funnel-ventas-automatizado` | funnel ventas automatizado paso a paso | como crear un embudo de ventas | Estrategia digital |
| `/blog/web-conversion-vs-web-corporativa` | web de conversion vs web corporativa | -- | Diseno web |
| `/blog/ia-aplicada-marketing-pymes` | inteligencia artificial marketing pymes | como usar ia en mi negocio | IA y automatizacion |
| `/blog/tendencias-diseno-web-2026` | tendencias diseno web 2026 | futuro del diseno web | Diseno web |
| `/blog/errores-web-pymes` | errores comunes web pymes | -- | Diseno web |
| `/blog/automatizar-whatsapp-business` | como automatizar whatsapp business | -- | IA y automatizacion |
| `/blog/ia-generativa-ventas-pymes` | ia generativa para ventas pymes | -- | IA y automatizacion |
| `/blog/kit-digital-guia` | kit digital que es y como solicitarlo | -- | Content gap |
| `/blog/subvenciones-digitalizacion-2026` | subvenciones digitalizacion pymes espana 2026 | -- | Content gap |
| `/blog/como-captar-clientes-online` | como captar clientes por internet | como captar clientes online, como conseguir clientes para mi negocio | Captacion leads |
| `/blog/crm-vs-excel` | crm vs excel | crm vs hoja de calculo | CRM |
| `/blog/redes-sociales-vs-web` | redes sociales vs pagina web | invertir en web o en redes sociales | Comparativas |

### 11.5 Comparativas (MOFU/Decision)

| Pagina | KW Principal | KW Secundarias | Cluster |
|--------|-------------|----------------|---------|
| `/comparar/agencia-vs-freelancer` | contratar agencia web vs freelancer | contratar agencia o freelancer web | Comparativas |
| `/comparar/agencia-vs-hacer-tu-web` | hacer web yo mismo vs contratar agencia | agencia digital vs hacer web yo mismo | Comparativas |
| `/comparar/wordpress-vs-web-a-medida` | wordpress vs web a medida | wordpress vs diseno profesional | Comparativas |
| `/comparar/zappyapps-vs-agencia-tradicional` | agencia web con ia vs agencia tradicional | -- | Comparativas |
| `/comparar/wix-vs-web-profesional` | wix vs web profesional diferencias | wix vs agencia web | Comparativas |
| `/comparar/shopify-vs-web-a-medida` | shopify vs tienda online a medida | -- | Comparativas |

### 11.6 Paginas de empresa (E-E-A-T)

| Pagina | KW Principal | KW Secundarias | Cluster |
|--------|-------------|----------------|---------|
| `/sobre-nosotros.html` | agencia diseno web ia espana | -- | E-E-A-T |
| `/equipo/` | equipo zappyapps | -- | E-E-A-T |
| `/portfolio/` | portfolio diseno web agencia | -- | E-E-A-T |
| `/testimonios/` | opiniones agencia diseno web | -- | E-E-A-T |
| `/contacto/` | contactar agencia diseno web | presupuesto diseno web | E-E-A-T |
| `/faq/` | preguntas frecuentes diseno web pymes | -- | E-E-A-T |

---

## 12. Checklist de Calidad por Pagina

Cada pagina nueva debe cumplir TODOS los puntos antes de publicarse. El SEO Tecnico valida antes de cada deploy.

### 12.1 Meta tags

- [ ] Title unico, max 60 caracteres, incluye KW principal
- [ ] Meta description unica, max 155 caracteres, incluye KW principal + CTA
- [ ] Title NO incluye "| ZappyApps" si el template ya lo anade
- [ ] Tildes correctas en todo el contenido (espanol correcto)

### 12.2 Headings

- [ ] Un solo H1 por pagina, incluye KW principal con variacion natural
- [ ] H1 diferente del title
- [ ] Jerarquia correcta: H1 > H2 > H3 (sin saltos de H2 a H4)
- [ ] Al menos un H2 incluye KW secundaria
- [ ] 4-8 H2s por pagina (segun longitud del contenido)

### 12.3 Contenido

- [ ] KW principal aparece en las primeras 100 palabras
- [ ] Densidad de KW principal: 1-2% (natural, no forzado)
- [ ] KW secundarias integradas de forma natural
- [ ] Longitud minima: 1.200 palabras (servicios/sectores), 1.500 palabras (blog)
- [ ] Imagenes cada 300-400 palabras (blog)
- [ ] Bullet points y/o tablas para escaneabilidad
- [ ] Sin contenido duplicado de otras paginas

### 12.4 Enlaces internos

- [ ] Minimo 3 enlaces internos salientes (excluyendo nav/footer)
- [ ] Al menos 1 enlace a money page (servicio) con anchor descriptivo
- [ ] Al menos 1 enlace a otro articulo del mismo cluster (blog)
- [ ] 1 CTA a `/contacto/` al final
- [ ] Anchor text descriptivo y variado (no repetir el mismo anchor)
- [ ] No enlazar a paginas noindex desde el contenido principal

### 12.5 Imagenes

- [ ] Todas las imagenes tienen alt text descriptivo con KW relevante
- [ ] Formato WebP o AVIF
- [ ] Lazy loading implementado
- [ ] Tamano optimizado (<200KB por imagen)
- [ ] Imagen destacada presente (1200x630 para OG share)

### 12.6 Schema JSON-LD

- [ ] Schema correspondiente al tipo de pagina implementado (ver seccion 8 de Arquitectura)
- [ ] BreadcrumbList presente (excepto homepage)
- [ ] FAQPage solo si hay FAQ visible en la pagina
- [ ] Person (author) en todos los blog posts
- [ ] datePublished y dateModified correctos
- [ ] Validado con Google Rich Results Test: 0 errores
- [ ] Validado con Schema.org Validator: 0 errores

### 12.7 Tecnico

- [ ] Canonical self-referencing presente y correcto (sin .html)
- [ ] OG tags completos: og:title, og:description, og:image, og:url, og:type
- [ ] Twitter card tags: twitter:card, twitter:title, twitter:description, twitter:image
- [ ] URL limpia (sin .html, sin parametros innecesarios)
- [ ] Pagina incluida en sitemap.xml
- [ ] Pagina enlazada desde al menos 2 paginas existentes
- [ ] Tiempo de carga < 3 segundos en movil
- [ ] Mobile-friendly verificado

### 12.8 CTA y conversion

- [ ] Al menos 1 CTA visible above the fold (servicios/sectores)
- [ ] CTA final al cierre de la pagina
- [ ] CTA relevante al contenido (no generico)
- [ ] Enlace a formulario de contacto funcionando

---

## 13. Metricas y Reporting

### 13.1 Metricas semanales (SEO Analytics)

| Metrica | Herramienta | Frecuencia | Accion si anomalia |
|---------|------------|------------|-------------------|
| Errores de rastreo | GSC | Lunes | Corregir inmediatamente |
| Paginas indexadas vs enviadas | GSC | Lunes | Investigar paginas no indexadas |
| Keywords con cambio de posicion | GSC + Ahrefs | Miercoles | Analizar caidas >5 posiciones |
| Nuevos backlinks | Ahrefs | Viernes | Desautorizar si son spam |
| Core Web Vitals | GSC | Viernes | Optimizar si hay degradacion |

### 13.2 Metricas mensuales (SEO Analytics + SEO Estratega)

| Metrica | Herramienta | Que medir |
|---------|------------|-----------|
| Trafico organico total | GA4 | Sesiones, usuarios, tendencia MoM |
| Trafico por pagina | GA4 | Top 20 paginas, paginas con 0 trafico |
| Keywords top 10 / top 20 / top 100 | Ahrefs / GSC | Cantidad, tendencia, ganadas/perdidas |
| Impresiones y clicks | GSC | Total, por query, por pagina |
| CTR medio | GSC | Global y por pagina. Objetivo: > 4% |
| Backlinks y DR | Ahrefs | Nuevos, perdidos, DR actual |
| Leads organicos | GA4 (evento conversion) | Cantidad, tasa conversion, origen |
| Competidores | Ahrefs / Sistrix | Visibilidad relativa, keywords compartidas |

### 13.3 Herramientas necesarias

| Herramienta | Uso | Coste estimado | Prioridad |
|-------------|-----|---------------|-----------|
| Google Search Console | Indexacion, keywords, CTR, errores, Core Web Vitals | Gratis | Obligatorio |
| Google Analytics 4 | Trafico, comportamiento, conversiones | Gratis | Obligatorio |
| Google Business Profile | SEO local, resenas, visibilidad Maps | Gratis | Obligatorio |
| Ahrefs (Lite) | Backlinks, keywords competidores, DR, auditorias | ~89 EUR/mes | Alta |
| Screaming Frog (free/paid) | Auditoria tecnica, crawl, enlaces rotos | Gratis (500 URLs) / 149 GBP/ano | Alta |
| Canva Pro | OG images, infografias, social media | ~11 EUR/mes | Media |
| Schema Markup Validator | Validacion de structured data | Gratis | Obligatorio |
| PageSpeed Insights | Core Web Vitals | Gratis | Obligatorio |
| Google Rich Results Test | Validacion de rich snippets | Gratis | Obligatorio |
| Sistrix | Visibilidad en mercado espanol | ~99 EUR/mes | Media (a partir de mes 3) |

### 13.4 Template de reporte mensual

```
========================================
REPORTE SEO MENSUAL -- ZAPPYAPPS.TECH
Mes: [Mes/Ano]
Elaborado por: [Nombre]
========================================

1. RESUMEN RAPIDO
   - Trafico organico: [X] sesiones (+/- X% vs mes anterior)
   - Keywords top 10: [X] (+/- X vs mes anterior)
   - Leads organicos: [X] (+/- X vs mes anterior)
   - Backlinks nuevos: [X]

2. DETALLE DE TRAFICO
   [Tabla: Pagina | Sesiones | vs mes anterior | Tendencia]

3. KEYWORDS DESTACADAS
   - Top 10 keywords por impresiones
   - Top 10 keywords por clicks
   - Keywords que subieron >5 posiciones
   - Keywords que bajaron >5 posiciones

4. CONTENIDO PUBLICADO
   [Lista de paginas publicadas en el mes con fecha y URL]

5. LINK BUILDING
   - Backlinks nuevos: [lista]
   - Guest posts publicados: [lista]
   - Perfiles de directorio actualizados: [lista]

6. TAREAS COMPLETADAS
   [Checklist de tareas del sprint cumplidas/pendientes]

7. ISSUES DETECTADOS
   [Lista de problemas encontrados y estado de resolucion]

8. PLAN PARA PROXIMO MES
   [Top 5 prioridades]

========================================
```

---

## 14. Presupuesto de Recursos

### 14.1 Horas estimadas por sprint

| Sprint | Periodo | SEO Tecnico | SEO Content | SEO Off-Page | SEO Analytics | SEO Estratega | Total horas |
|--------|---------|------------|------------|-------------|--------------|--------------|-------------|
| Sprint 0 | Semana 1 | 6-8h | 0h | 0h | 0h | 1h (revision) | 7-9h |
| Sprint 1 | Semana 2 | 10h | 12h | 0h | 0h | 2h | 24h |
| Sprint 2 | Semanas 3-4 | 6h | 40h | 0h | 0h | 3h | 49h |
| Sprint 3 | Semanas 5-6 | 5h | 45h | 0h | 0h | 3h | 53h |
| Sprint 4 | Semanas 7-8 | 4h | 10h | 24h | 0h | 2h | 40h |
| Sprint 5 | Semanas 9-10 | 2h | 24h | 12h | 0h | 2h | 40h |
| Sprint 6 | Semanas 11-12 | 4h | 6h | 4h | 14h | 8h | 36h |
| **TOTAL T1** | **12 semanas** | **37-39h** | **137h** | **40h** | **14h** | **21h** | **~249h** |

### 14.2 Horas estimadas Trimestre 2 (Meses 4-6)

| Rol | Horas/mes estimadas | Total T2 |
|-----|--------------------|----------|
| SEO Tecnico | 8-10h | 24-30h |
| SEO Content | 40-50h | 120-150h |
| SEO Off-Page | 12-16h | 36-48h |
| SEO Analytics | 8-10h | 24-30h |
| SEO Estratega | 4-6h | 12-18h |
| **TOTAL** | **72-92h/mes** | **216-276h** |

### 14.3 Prioridades si hay restriccion de tiempo

Si el equipo dispone de tiempo limitado, priorizar en este orden:

**Prioridad 1 -- No negociable (60% del tiempo):**
1. Sprint 0: Correccion de issues criticos y altos de la auditoria
2. Paginas de contacto y FAQ (conversion + E-E-A-T)
3. Blog posts BOFU/MOFU de alta prioridad (Kit Digital, como captar clientes, CRM vs Excel)
4. Paginas locales Tenerife y Canarias
5. Google Business Profile

**Prioridad 2 -- Importante (25% del tiempo):**
6. Silo de comparativas (al menos las 3 principales: agencia vs freelancer, WordPress vs medida, Wix vs profesional)
7. Nuevos sectores (clinicas dentales, gimnasios)
8. Blog posts TOFU de alto volumen (tendencias web 2026, subvenciones digitalizacion)
9. Perfiles en directorios principales (Clutch, DesignRush, Paginas Amarillas)

**Prioridad 3 -- Deseable (15% del tiempo):**
10. Recursos interactivos (calculadora, checklist)
11. Portfolio detallado
12. Guest posts
13. Sectores adicionales (veterinarios, centros estetica, consultoras)
14. Glosario de marketing digital

### 14.4 Herramientas -- Presupuesto mensual

| Herramienta | Coste | Necesaria desde |
|-------------|-------|----------------|
| Ahrefs Lite | 89 EUR/mes | Mes 1 |
| Canva Pro | 11 EUR/mes | Mes 1 |
| Sistrix | 99 EUR/mes | Mes 3 (opcional) |
| Screaming Frog (paid) | 12,5 EUR/mes (149 GBP/ano) | Mes 2 |
| **TOTAL minimo** | **~100 EUR/mes** | |
| **TOTAL con Sistrix** | **~212 EUR/mes** | |

---

## 15. Calendario Editorial -- Primeros 3 Meses

Vista compacta de todo el contenido planificado por semana:

| Semana | Contenido a publicar | Responsable |
|--------|---------------------|-------------|
| **S1** | Correccion de 10 issues de auditoria | SEO Tecnico |
| **S2** | 5 paginas empresa: Contacto, FAQ, Testimonios, Portfolio, Equipo + on-page optimization | SEO Content + SEO Tecnico |
| **S3** | Blog: Mejores agencias ES, Como elegir agencia, CRM para PYMEs guia | SEO Content |
| **S4** | Blog: Funnel ventas, Web conversion vs corporativa, IA marketing PYMEs + Servicio: Landing pages + Sectores: Gimnasios, Academias, Clinicas dentales | SEO Content + SEO Tecnico |
| **S5** | Hub comparativas + Agencia vs Freelancer + Agencia vs DIY + WordPress vs Web a medida | SEO Content |
| **S6** | ZappyApps vs Tradicional + Wix vs Profesional + Shopify vs Medida + Blog: Tendencias 2026, Errores PYMEs + Sectores: Consultoras, Veterinarios, Centros estetica + Servicio: SEO local | SEO Content |
| **S7** | 4 paginas locales (Tenerife x2, Canarias x2) + Blog: WhatsApp Business, IA generativa | SEO Content + SEO Tecnico |
| **S8** | GBP setup + Directorios (15+ perfiles) + Guest post prospecting (10 pitches) | SEO Off-Page |
| **S9** | Pagina de precios + Blog: Kit Digital, Subvenciones digitalizacion | SEO Content |
| **S10** | Blog: Como captar clientes, CRM vs Excel, Redes sociales vs Web + Follow-up link building | SEO Content + SEO Off-Page |
| **S11** | Analisis de posiciones, CTR, canibalizacion + Actualizacion contenido underperforming | SEO Analytics + SEO Estratega |
| **S12** | Informe trimestral + Plan T2 actualizado | SEO Analytics + SEO Estratega |

---

## 16. Glosario de Roles del Equipo

| Rol | Responsabilidades principales |
|-----|------------------------------|
| **SEO Tecnico** | Implementacion de meta tags, schemas, canonicals, OG tags, sitemap, robots.txt, Core Web Vitals, estructura HTML, validacion tecnica pre-deploy |
| **SEO Content** | Redaccion de contenido optimizado, briefs de articulos, creacion de paginas nuevas, actualizacion de contenido, interlinking contextual |
| **SEO Off-Page** | Link building, guest posts, directorios, GBP, redes sociales, digital PR, partnerships, gestion de resenas |
| **SEO Analytics** | Configuracion de GA4/GSC, reporting semanal/mensual, analisis de CTR y posiciones, deteccion de anomalias, dashboards |
| **SEO Estratega** | Supervision global, priorizacion, revision de calidad, prevencion de canibalizacion, definicion de objetivos, coordinacion de sprints |

---

## 17. Riesgos y Mitigacion

| Riesgo | Probabilidad | Impacto | Mitigacion |
|--------|-------------|---------|------------|
| Canibalizacion entre paginas | Media | Alto | Tabla maestra de asignacion de keywords (seccion 11), monitoreo mensual en GSC |
| Contenido thin (paginas con poco valor) | Baja | Medio | Minimo 1.200 palabras por pagina, checklist de calidad obligatoria |
| Penalizacion por link building agresivo | Baja | Alto | Solo enlaces de calidad, evitar PBNs, diversificar anchor text |
| Caida de Core Web Vitals | Media | Medio | Monitoreo tras cada deploy, imagenes optimizadas, lazy loading |
| Competidores copian estrategia | Media | Bajo | Velocidad de ejecucion, diferencial IA, contenido original con datos propios |
| Falta de tiempo/recursos | Alta | Alto | Prioridades claras en seccion 14.3, ejecutar P1 antes de P2/P3 |
| Cambio de algoritmo Google | Media | Medio | E-E-A-T solido, contenido de calidad, no depender de un solo canal |

---

## 18. Criterios de Exito por Sprint

| Sprint | Criterio de exito | Como medirlo |
|--------|-------------------|-------------|
| Sprint 0 | 0 issues criticos/altos pendientes de auditoria | Verificacion manual + Screaming Frog |
| Sprint 1 | 5 paginas de empresa live + keywords asignadas a todas las paginas | Deploy verificado + documento de asignacion |
| Sprint 2 | 10 paginas nuevas publicadas, total ~40 indexables | Sitemap + GSC indexation |
| Sprint 3 | 15 paginas nuevas (comparativas + TOFU), total ~55 indexables | Sitemap + GSC indexation |
| Sprint 4 | GBP live, 15+ perfiles en directorios, 4 paginas locales | Checklist de perfiles + deploy verificado |
| Sprint 5 | Pagina de precios live, 5 blog posts alto impacto | Deploy verificado + GSC |
| Sprint 6 | Informe T1 entregado, plan T2 aprobado | Documento de informe |

---

**FIN DEL PLAN MAESTRO SEO v2.0 -- ZAPPYAPPS.TECH**

*Documento elaborado el 28 de marzo de 2026 por el Equipo SEO de la Agencia SEO IA.*
*Revision programada: Al inicio de cada trimestre.*
*Proximo hito: Completar Sprint 0 (Semana 1) -- Correccion de issues tecnicos de la auditoria.*
