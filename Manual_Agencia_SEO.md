# 🏢 Manual de Uso: Tu Agencia SEO Profesional con Inteligencia Artificial

Este manual te explica cómo sacarle el máximo partido a tu nuevo equipo de **7 agentes SEO especializados**. Estos agentes han sido programados siguiendo estrictamente la metodología del **Máster BigSEO**, y están conectados a tu carpeta local de `master seo` para repasar los contenidos antes de ejecutar acciones en tus proyectos.

---

## 1. El Equipo: ¿Quién es quién?

El equipo funciona mediante "Slash Commands" que puedes invocar en el chat de Antigravity en cualquier momento:

### El Jefe del Equipo
- **`/seo_agency` (Orquestador):** Úsalo cuando tengas un proyecto **nuevo desde cero**. Este agente no hace el trabajo por sí mismo, sino que te pedirá los datos base (URLs, competidores) y luego irá invocando y coordinando al resto del equipo en el orden correcto. Al final, te entregará un *Plan Maestro SEO*.

### Los Especialistas (Puedes llamarlos de forma individual)
- **`/seo_audit` (Auditor):** Úsalo para hacer una radiografía técnica y on-page rápida. Diagnostica problemas de rastreo e indexación.
- **`/seo_technical` (Técnico):** Llámarlo cuando haya problemas de velocidad (Core Web Vitals), errores 404, bloqueos en robots.txt o necesidad de estructura silo y Schema.org.
- **`/seo_content` (On-Page):** Tu redactor y analista de keywords. Úsalo para pedir un *Keyword Research*, un plan de contenidos mensual o la estructura H1-H2-H3 de una landing page.
- **`/seo_offpage` (Linkbuilding):** Invócalo para diseñar campañas de relaciones públicas digitales, detectar enlaces tóxicos o buscar oportunidades de enlaces en competidores.
- **`/seo_analytics` (Analista):** Pídele ayuda para configurar Google Analytics 4, interpretar datos de Search Console o montar un dashboard en Looker Studio.
- **`/seo_strategist` (Estratega):** El experto en negocio. Úsalo para mejorar la conversión de una landing page (CRO), diseñar un SEO Funnel, o estrategias específicas para SaaS o negocios locales.

---

## 2. ¿Cómo funciona la base de conocimiento integrada?

Tu equipo tiene una memoria a largo plazo conectada a la carpeta de tu ordenador:
`C:/Users/Alejandro/OneDrive/Escritorio/master seo/`

**El "Paso 0" Obligatorio:**
Cada vez que llamas a uno de estos agentes, lo primero que hace (por programación interna) es ir silenciosamente a esa carpeta, revisar los archivos, mirar los vídeos de los módulos correspondientes a su especialidad, y "refrescar" el marco de trabajo del Máster BigSEO antes de actuar sobre tu código. 

*Esto garantiza que nunca inventen estrategias aleatorias: siempre aplican la metodología que has estudiado.*

---

## 3. Flujo de Trabajo Ideal para un Nuevo Proyecto

Si mañana empiezas a trabajar el SEO de un cliente nuevo (ej: `binhex.cloud`), este es el flujo que debes seguir:

1. **Invocación inicial:** Escribe en el chat `/seo_agency https://www.binhex.cloud/`
2. **Entrega de Briefing:** El Orquestador te hará una lista de preguntas agrupadas (para no molestarte 10 veces). Respóndelas en un solo mensaje.
3. **Trabajo en la sombra:** El orquestador avisará al Auditor, que revisará la web. Luego llamará al Técnico, Content, etc.
4. **Entrega del Plan Maestro:** Recibirás un documento unificado con las tareas priorizadas por impacto.
5. **Aprobación y Ejecución:** Si estás de acuerdo con el plan técnico, puedes decirle al Técnico: *"Técnico, ejecuta el punto 2 del plan (optimizar Core Web Vitals)"* y el agente entrará a modificar tu código directamente.

---

## 4. Cómo Exportar la Agencia a Otros Proyectos

Estos agentes viven actualmente en la carpeta oculta `.agents/workflows/` de este proyecto específico.

Si en el futuro abres otra carpeta de trabajo en tu código y quieres tener a este equipo disponible, solo tienes que hacer lo siguiente:

1. Ve a esta carpeta: `C:\Users\Alejandro\.gemini\antigravity\scratch\dental-funnel\nueva web zappyapps\.agents\workflows\`
2. Cópiala entera.
3. Pégala exactamente con el mismo nombre y estructura en la nueva carpeta de tu proyecto.
4. Abre Antigravity en tu nuevo proyecto y verás que los *slash commands* vuelven a funcionar al instante.

---

## 5. Mejores Prácticas Acumulativas

Si en el futuro decides descargar más cursos o PDFs avanzados, puedes simplemente guardarlos en la carpeta raíz del `master seo` correspondiente a su temática. Al estar programados para hacer un `list_dir` (escaneo de carpeta) antes de cada ejecución, los agentes asimilarán tus nuevos PDFs y vídeos automáticamente sin que tengas que reprogramarlos.
