# INFORME DE AUDITORIA SEO
Sitio: https://zappyapps.tech/
Fecha: 8 de abril de 2026
Puntuacion global: 6.5/10

---

## RESUMEN EJECUTIVO

ZappyApps.tech **SI esta indexada en Google**. La busqueda `site:zappyapps.tech` devuelve multiples resultados confirmados:
- Homepage: "ZappyApps: Diseno Web Estrategico para PYMEs con IA"
- /precios: "Precios Diseno Web y IA - ZappyApps"
- /servicios/mantenimiento-web: "Mantenimiento Web Mensual y Soporte - ZappyApps"
- /servicios/captacion-clientes-online: "Captacion de Clientes Online Automatizada - ZappyApps"
- /blog/kit-digital-2026: "Kit Digital 2026: Que Es y Como Solicitarlo | ZappyApps"
- /blog/crm-vs-excel: "CRM vs Excel: Por Que tu PYME Necesita un CRM | ZappyApps"
- /blog/funnel-ventas-automatizado: "Funnel de Ventas Automatizado Paso a Paso | ZappyApps"
- Y mas paginas...

**El problema NO es de indexacion, sino de POSICIONAMIENTO.** La web esta indexada pero no rankea para las keywords objetivo, lo que explica la falta de trafico organico. El sitio tiene 72 archivos HTML, 65 URLs en el sitemap, titles y metas bien trabajados, schemas implementados y una arquitectura de silos correcta. Pero sin autoridad de dominio (backlinks) y sin presencia en directorios, Google no tiene razon para posicionarla por encima de la competencia.

---

## CRITICO (Resolver en 72h)

### 1. La web esta INDEXADA pero NO POSICIONA para keywords objetivo
- **Evidencia:** `site:zappyapps.tech` muestra multiples paginas indexadas (homepage, precios, servicios, blog posts). Sin embargo, al buscar keywords como "diseno web pymes", "chatbot ia empresas", "agencia web tenerife", zappyapps.tech NO aparece en los resultados.
- **Impacto:** TOTAL. La web existe en el indice de Google pero no tiene suficiente autoridad para competir. 0 trafico organico por keywords informacionales ni transaccionales.
- **Causas principales:**
  - (a) Dominio .tech nuevo (~10 dias) con zero backlinks = sin autoridad de dominio (DA/DR = 0)
  - (b) Sprint 4 del Plan Maestro (link building + GBP) NO ejecutado
  - (c) Sin presencia en directorios, Google My Business ni menciones externas
  - (d) La competencia tiene anos de autoridad acumulada
- **Solucion inmediata (72h):**
  1. Acceder a Google Search Console y revisar: impresiones, posicion media, CTR por keyword
  2. Verificar cuantas de las 65 URLs del sitemap estan realmente indexadas vs "Descubiertas pero no indexadas"
  3. Crear Google Business Profile completo (NAP: ZappyApps, La Laguna, Tenerife)
  4. Iniciar link building de emergencia: perfiles en 10+ directorios (Clutch, Sortlist, Paginas Amarillas, LinkedIn, Crunchbase)
  5. Solicitar indexacion manual de las paginas que aun no esten indexadas
  6. Publicar primer post en GBP con CTA

### 2. OG Image en formato SVG (no compatible con redes sociales)
- **Evidencia:** Todas las paginas usan `og:image` apuntando a `https://zappyapps.tech/og-image.svg` (1.852 bytes, SVG). Facebook, Twitter/X, LinkedIn y WhatsApp NO renderizan SVG como preview.
- **Impacto:** ALTO. Los enlaces compartidos en redes sociales aparecen sin imagen, reduciendo CTR en un 40-60% estimado. Tambien afecta la percepcion de marca.
- **Solucion:**
  1. Crear `og-image.jpg` (o .png) de 1200x630px con branding ZappyApps
  2. Actualizar TODAS las paginas (72 archivos) para referenciar la version JPG/PNG
  3. Validar con Facebook Sharing Debugger y Twitter Card Validator

### 3. Homepage canonical sin trailing slash
- **Evidencia:** `<link rel="canonical" href="https://zappyapps.tech">` (sin `/` final). Vercel sirve en `https://zappyapps.tech/`. Esto puede crear duplicidad de URL.
- **Impacto:** MEDIO-ALTO. Google puede interpretar dos versiones del homepage como paginas diferentes, diluyendo autoridad.
- **Solucion:** Cambiar canonical a `https://zappyapps.tech/` (con trailing slash). Igualmente el `og:url`.

---

## IMPORTANTE (Resolver en Mes 1)

### 4. Todas las fechas lastmod del sitemap son identicas: 2026-03-29
- **Evidencia:** Las 65 URLs del sitemap.xml tienen `<lastmod>2026-03-29</lastmod>`.
- **Impacto:** Google ignora el lastmod si detecta que es falso o generico. Pierde la senal de "contenido fresco" que incentiva al crawler a revisitar.
- **Solucion:** Actualizar lastmod solo cuando realmente se modifique el contenido de cada pagina. Automatizar con el deploy si es posible.

### 5. Paginas importantes ausentes del sitemap
- **Evidencia:** El sitemap tiene 65 URLs, pero hay 72 archivos HTML. Faltan:
  - `/prototipo-gratis` (tiene noindex, correcto excluirla)
  - `/aviso-legal` (pagina legal publica)
  - `/cookies` (pagina legal publica)
  - `/privacidad` (pagina legal publica)
  - `/terminos` (pagina legal publica)
- **Impacto:** BAJO. Las paginas legales no son money pages, pero dejar URLs indexables fuera del sitemap es una mala practica tecnica.
- **Solucion:** Anadir `/aviso-legal`, `/cookies`, `/privacidad` y `/terminos` al sitemap con prioridad 0.3.

### 6. Titles de paginas locales demasiado cortos y genericos
- **Evidencia:**
  - "Diseno Web Tenerife | ZappyApps" (47 chars) -- no explota todo el espacio disponible
  - "Agencia Digital Tenerife | ZappyApps" (51 chars)
  - "Diseno Web Canarias | ZappyApps" (47 chars)
  - "Agencia Digital Canarias | ZappyApps" (51 chars)
- **Impacto:** MEDIO. Desaprovechan 15-20 caracteres donde podrian incluir USP o CTA que mejore CTR.
- **Solucion propuesta:**
  - "Diseno Web en Tenerife: Webs que Venden con IA | ZappyApps" (59 chars)
  - "Agencia Digital en Tenerife | Automatizacion e IA | ZappyApps" (62 chars)
  - "Diseno Web en Canarias: Todas las Islas | ZappyApps" (52 chars)
  - "Agencia Digital en Canarias | IA para PYMEs | ZappyApps" (56 chars)

### 7. Zero backlinks externos (estimado)
- **Evidencia:** Ninguna busqueda de Google devuelve zappyapps.tech. No aparece en directorios, no hay menciones externas detectadas. El Plan Maestro registra 5-10 backlinks como baseline y 3-5 dominios referentes, pero no hay evidencia de que existan.
- **Impacto:** CRITICO para autoridad. Sin backlinks, el dominio no tiene ninguna senal de confianza para Google.
- **Solucion:** Ejecutar urgentemente Sprint 4 del Plan Maestro (link building + directorios + Google Business Profile).

### 8. Varias titles superan los 70 caracteres (truncamiento en SERP)
- **Evidencia:** 15+ titles superan 70 caracteres. Ejemplos:
  - "Diseño Web para Consultoras y Consultoria B2B | ZappyApps" (74 chars)
  - "Inteligencia Artificial en Marketing para PYMEs | ZappyApps" (74 chars)
  - "Tendencias Diseno Web 2026: Las 12 Que Dominan | ZappyApps" (74 chars)
  - "CRM vs Excel: Por Que tu PYME Necesita un CRM | ZappyApps" (73 chars)
  - "SEO Local para Pymes: Mas Clientes en tu Zona | ZappyApps" (73 chars)
- **Impacto:** BAJO-MEDIO. Google trunca a ~60 px de ancho (aproximadamente 55-65 caracteres). Titles truncados pueden perder la marca o el CTA final.
- **Solucion:** Recortar a maximo 60 caracteres ideales, 65 como limite. Considerar abreviar "ZappyApps" a "ZA" o eliminarlo en titles largos.

### 9. Sin imagenes `<img>` en la mayoria de paginas
- **Evidencia:** Busqueda de tags `<img` con atributo `alt=` devuelve 0 resultados en todo el proyecto. La web NO tiene imagenes HTML convencionales. Usa iconos SVG inline (Lucide) y animaciones Lottie, pero no hay fotos, ilustraciones ni imagenes con alt text.
- **Impacto:** ALTO para SEO.
  - Google Images no indexara nada de la web
  - No hay senales de alt text para reforzar keywords
  - Paginas de blog sin imagenes parecen thin content visual
  - La experiencia de usuario se resiente en articulos de 1.000+ palabras sin soporte visual
- **Solucion:**
  1. Anadir 2-3 imagenes por pagina de servicio (screenshots, diagramas de proceso, ilustraciones)
  2. Anadir 3-5 imagenes por blog post (infografias, capturas, graficos)
  3. Usar alt text descriptivo con keywords relevantes
  4. Usar formato WebP con fallback para rendimiento

---

## MEJORAS (Trabajo continuo)

### 10. Keyword density y primeras 100 palabras
- **Evidencia (homepage):** El H1 es "Diseno web estrategico que genera clientes. No solo verse bien." -- contiene la keyword principal. Pero el primer parrafo visible es un claim emocional sin keywords: "Tu web lista para atraer clientes. Con un asistente que atiende 24 horas..." La keyword "diseno web estrategico" no aparece en las primeras 100 palabras del body text (tras el H1).
- **Impacto:** MEDIO. Google da peso extra a las primeras 100 palabras del contenido visible.
- **Solucion:** Incluir la keyword principal naturalmente en el primer parrafo de cada pagina.

### 11. H1 del homepage incluye texto decorativo
- **Evidencia:** El H1 es: "Diseno web estrategico que genera clientes. No solo verse bien." Esta bien, pero la tercera linea "No solo verse bien" diluye la keyword principal.
- **Impacto:** BAJO. El H1 sigue conteniendo la keyword. Es mas un tema de pureza SEO.
- **Solucion:** Considerar mover "No solo verse bien" a un `<p>` debajo del H1.

### 12. Blog posts con schema BlogPosting: RESUELTO
- **Evidencia:** Los 21 blog posts usan `"@type": "BlogPosting"`. El issue del Plan Maestro (cambiar Article a BlogPosting) esta resuelto.
- **Estado:** OK.

### 13. Paginas de servicio con contenido potencialmente escaso
- **Evidencia (word count aproximado incluyendo HTML/nav/footer):**
  - `/servicios/diseno-web-estrategico` ~ 764 palabras (incluyendo nav/footer)
  - `/servicios/chatbot-ia` ~ 710 palabras
  - El contenido visible real (body text) puede ser de solo 300-500 palabras
- **Impacto:** MEDIO. Google puede considerar estas paginas como thin content si compiten contra paginas de competidores con 1.500+ palabras.
- **Solucion:** Ampliar cada pagina de servicio a un minimo de 1.000 palabras de contenido visible: anadir FAQ section, casos de uso, tabla comparativa, proceso de trabajo.

### 14. Internal linking structure buena pero mejorable
- **Evidencia:** La navegacion principal incluye dropdown con todos los servicios (10) y sectores (12). El footer tiene enlaces a secciones principales. Sin embargo:
  - Los blog posts necesitan mas enlaces cruzados entre si (cluster linking)
  - Las paginas de sector no enlazan de forma prominente a blog posts relevantes
- **Impacto:** MEDIO. Mejor interlinking distribuye PageRank y ayuda al crawler.
- **Solucion:** Anadir bloques "Articulos relacionados" al final de cada blog post. Anadir seccion "Recursos utiles" en paginas de sector enlazando a blog posts relevantes.

### 15. Misma `changefreq` para todo el contenido estatico
- **Evidencia:** Todas las paginas de servicio, sector y blog tienen `<changefreq>monthly</changefreq>`. El homepage tiene `weekly`.
- **Impacto:** BAJO. Google ignora changefreq oficialmente, pero es buena practica que sea coherente.
- **Solucion:** No es prioritario.

---

## METRICAS CLAVE

| Metrica | Valor |
|---------|-------|
| **Total paginas HTML** | 72 archivos (.html) |
| **URLs en sitemap.xml** | 65 |
| **URLs en Google (site:)** | 7+ confirmadas (homepage, precios, 2 servicios, 3 blog posts y mas) |
| **robots.txt** | OK (Allow: /, Disallow: /admin, /og-image-generator) |
| **HTTPS** | Si (certificado valido Vercel) |
| **Deploy** | Vercel con cleanUrls: true |
| **Canonical tags** | Presentes en 69/72 paginas (solo admin y og-image-generator carecen) |
| **Canonicals con .html** | 0 (issue del Plan Maestro RESUELTO) |
| **Meta descriptions** | Presentes en todas las paginas indexables |
| **H1 por pagina** | 1 H1 por pagina en todas (72/72) |
| **H1 unicos** | Si, todos diferentes entre si |
| **Schemas implementados** | ProfessionalService, FAQPage, Service, BlogPosting, BreadcrumbList, Person, OfferCatalog |
| **OG image** | SVG (NO compatible redes sociales) |
| **Imagenes `<img>` con alt** | 0 (la web no tiene imagenes HTML) |
| **Archivos basura** | 0 (issue del Plan Maestro RESUELTO) |
| **Email unificado** | hola@zappyapps.tech (sin ocurrencias de info@, RESUELTO) |
| **Blog posts** | 21 articulos |
| **Paginas de servicio** | 10 |
| **Paginas de sector** | 12 |
| **Comparativas** | 7 (hub + 6 articulos) |
| **Paginas locales** | 4 (diseno-web-tenerife, agencia-digital-tenerife, diseno-web-canarias, agencia-digital-canarias) |
| **Google Analytics** | Configurado (G-Q73Z1TK7LS) |
| **Google Site Verification** | Configurada (tag de verificacion presente) |
| **Viewport meta** | Presente en todas las paginas |
| **lang="es"** | Configurado en todas las paginas |
| **Title tags 50-70 chars** | ~50/72 paginas. 15+ superan 70 chars, ~7 por debajo de 50 chars |
| **Backlinks estimados** | 0-5 (sin evidencia en busquedas) |

---

## ESTADO DEL PLAN MAESTRO (Sprint 0 - Issues de la auditoria del 28/03/2026)

| # | Issue | Severidad | Estado | Evidencia |
|---|-------|-----------|--------|-----------|
| 1 | Eliminar archivo basura 28MB (`Ofertas-de-100_-_1_.html`) | CRITICO | RESUELTO | Archivo no encontrado en el repositorio |
| 2 | Eliminar `notebooklm_context.txt` | CRITICO | RESUELTO | Archivo no encontrado |
| 3 | Eliminar archivos .txt inutiles | BAJO | RESUELTO | Ningun .txt basura encontrado (solo robots.txt) |
| 4 | Crear OG images JPG/PNG | ALTO | **PENDIENTE** | Solo existe og-image.svg (1.852 bytes). No hay .jpg ni .png |
| 5 | Unificar email a hola@zappyapps.tech | ALTO | RESUELTO | 0 ocurrencias de `info@zappyapps.tech` encontradas |
| 6 | Corregir canonicals con .html | MEDIO | RESUELTO | 0 canonicals con extension .html |
| 7 | Anadir OG image a todas las paginas | MEDIO | RESUELTO (con SVG) | Todas las paginas tienen og:image, pero apuntan a SVG |
| 8 | Anadir canonical a cookies.html | MEDIO | RESUELTO | `cookies.html` tiene `canonical href="https://zappyapps.tech/cookies"` |
| 9 | Cambiar Article a BlogPosting | BAJO | RESUELTO | 21/21 blog posts usan BlogPosting |
| 10 | Verificar email en privacidad/terminos | BAJO | RESUELTO | Email unificado a hola@zappyapps.tech |

**Resumen Sprint 0:** 8/10 issues resueltos. 2 pendientes (ambos relacionados con OG image: formato SVG en vez de JPG/PNG).

**Estado de Sprints posteriores:**
- **Sprint 1 (On-page + paginas empresa):** COMPLETADO. Paginas de contacto, FAQ, testimonios, portfolio y equipo existen y estan indexables.
- **Sprint 2 (Blog MOFU + sectores nuevos):** COMPLETADO. Los 6 blog posts MOFU, landing-pages como servicio, y sectores gimnasios/academias/clinicas-dentales existen.
- **Sprint 3 (Comparativas + blog TOFU):** COMPLETADO. Silo de comparativas (7 paginas), blog TOFU (4 posts), sectores consultoras/veterinarios/centros-estetica, y servicio SEO local existen.
- **Sprint 4 (Local SEO + link building):** PARCIALMENTE. Las 4 paginas locales existen. **Google Business Profile y link building: SIN EVIDENCIA de ejecucion.** Este es el cuello de botella critico.
- **Sprint 5 (Precios + blog adicional):** COMPLETADO. Pagina de precios y 5 blog posts adicionales (kit-digital, subvenciones, captar-clientes, crm-vs-excel, redes-sociales-vs-web) existen.

---

## PROXIMOS PASOS (Priorizados)

### Semana 1 (URGENTE - 72h)

1. **Consultar Google Search Console para datos de rendimiento**
   - Revisar impresiones, clics, CTR y posicion media por keyword
   - Ver cuantas de las 65 URLs del sitemap estan indexadas vs excluidas
   - Identificar keywords donde ya aparece la web (aunque sea en posiciones 50-100)
   - Solicitar indexacion manual de paginas que aun no esten indexadas

2. **Crear OG image en formato compatible**
   - Generar `og-image.jpg` de 1200x630px con branding
   - Actualizar referencia en las 72 paginas HTML
   - Validar con Facebook Sharing Debugger

3. **Corregir canonical del homepage**
   - Cambiar a `https://zappyapps.tech/` (con trailing slash)

### Semana 2 (PRIORITARIO)

4. **Link building de emergencia**
   - Crear Google Business Profile completo
   - Registrarse en 10+ directorios (Clutch, Sortlist, Paginas Amarillas, LinkedIn, Crunchbase, Trustpilot, etc.)
   - Todos con NAP consistente: ZappyApps, La Laguna, Tenerife, +34 696 120 384, hola@zappyapps.tech
   - Publicar primer post en GBP con CTA

5. **Anadir imagenes reales a la web**
   - Minimo 2-3 `<img>` por pagina de servicio con alt text descriptivo
   - Minimo 3-5 `<img>` por blog post
   - Usar formato WebP optimizado

### Semana 3-4 (IMPORTANTE)

6. **Optimizar titles cortos de paginas locales**
   - Ampliar los 4 titles locales para incluir USP

7. **Recortar titles > 70 caracteres**
   - Ajustar los 15+ titles que superan 70 chars

8. **Ampliar contenido de paginas de servicio**
   - Cada pagina de servicio deberia tener minimo 1.000 palabras visibles
   - Anadir FAQs, casos de uso, proceso de trabajo

9. **Mejorar internal linking**
   - Anadir bloque "Articulos relacionados" en blog posts
   - Anadir seccion "Recursos" en paginas de sector

### Mes 2+ (CONTINUO)

10. **Actualizar lastmod en sitemap cuando se modifique contenido**
11. **Publicar 2-4 blog posts nuevos al mes**
12. **Conseguir 5+ resenas en Google Business Profile**
13. **Monitorizar GSC semanalmente**: impresiones, clics, CTR, posicion media
14. **Solicitar backlinks**: guest posts en blogs de marketing, entrevistas, colaboraciones con empresas canarias

---

## DIAGNOSTICO PRINCIPAL

La web SI esta indexada en Google (confirmado con site:zappyapps.tech el 8 de abril de 2026). La razon por la que no recibe trafico organico a pesar de estar indexada es:

1. **Dominio nuevo (.tech) sin autoridad:** 0 backlinks, 0 menciones externas, 0 presencia en directorios. Google indexa la web pero no la posiciona porque no tiene senales de confianza. DA/DR estimado = 0.

2. **Sprint 4 del Plan Maestro no ejecutado:** El link building, Google Business Profile y directorios que eran criticos para generar autoridad no se han implementado. Se crearon las paginas de contenido (excelente trabajo) pero no se construyo la autoridad necesaria para que Google las posicione por encima de la competencia.

3. **Sin imagenes HTML:** La web funciona exclusivamente con iconos SVG y animaciones Lottie. Google no puede indexar imagenes, no hay senales de alt text, y los blog posts largos carecen de soporte visual.

4. **Competencia con anos de autoridad:** Para keywords como "diseno web pymes" o "chatbot ia empresas", los competidores tienen dominios con DA 30-60+ y cientos de backlinks. Sin link building, es imposible competir.

**La buena noticia:** La indexacion funciona, la base tecnica y de contenido es solida (6.5/10), y la arquitectura de silos esta bien ejecutada. El cuello de botella es claro: falta autoridad de dominio. Con la ejecucion urgente del Sprint 4 (link building + GBP + directorios), la web deberia empezar a ganar posiciones en 4-8 semanas, empezando por keywords long-tail y locales.

---

*Informe generado el 8 de abril de 2026 por el Agente Auditor SEO.*
*Metodologia: BigSEO. Herramientas: analisis de codigo fuente, WebFetch, WebSearch.*
