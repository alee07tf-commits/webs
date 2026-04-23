# Fase 3 — Matriz de oportunidades y priorización

**Fecha:** 2026-04-22

## Modelo de scoring

Puntuación por keyword (0-100):
```
Score = (VOL_norm × 30%) + (INV_KD × 30%) + (CPC_norm × 15%) + (FIT_servicio × 15%) + (QUICK_WIN × 10%)

Donde:
- VOL_norm = min(vol/5, 100)            [0-100, caps en 500 vol]
- INV_KD   = max(0, 100 - KD × 1.5)     [recompensa baja dificultad]
- CPC_norm = min(CPC × 20, 100)         [caps en 5€]
- FIT_servicio = 100 si core, 50 si adyacente, 0 si tangente
- QUICK_WIN = 100 si KD<20 y vol>50, si no 0
```

## Matriz maestra (top 40 keywords priorizadas)

### Clasificación por OLAS de ataque

---

### 🌊 OLA 1 — PRIMEROS 90 DÍAS (Quick wins + BOFU core)

Meta: 3-5 rankings top 10 para generar primeros 2-4 leads/mes desde SEO.

| # | Keyword | Vol | KD | CPC | Intent | Score | Página destino |
|---|---|---|---|---|---|---|---|
| 1 | chatbots para empresas | 210 | 17 | 5.66€ | C | 94 | /servicios/chatbots-empresas/ |
| 2 | chatbot para empresas | 140 | 27 | 4.30€ | C | 84 | /servicios/chatbots-empresas/ (misma) |
| 3 | agentes ia para empresas | 90 | 14 | 3.16€ | I | 89 | /servicios/agentes-ia-empresas/ |
| 4 | automatizaciones con ia | 210 | 23 | 1.94€ | I | 82 | /servicios/automatizaciones-ia/ |
| 5 | automatizaciones ia | 260 | 20 | 2.11€ | I | 88 | /servicios/automatizaciones-ia/ (misma) |
| 6 | automatización con ia | 140 | 23 | 2.29€ | I | 79 | /servicios/automatizaciones-ia/ (misma) |
| 7 | automatización de procesos con ia | 110 | 19 | 2.46€ | I | 81 | /servicios/automatizaciones-ia/procesos/ |
| 8 | ia conversacional para empresas | 50 | 7 | — | I C | 87 | /servicios/chatbots-empresas/ia-conversacional/ |
| 9 | consultora ia | 110 | 20 | 1.87€ | C | 80 | /consultoria-ia/ |
| 10 | implementación de chatbots para empresas | 40 | 8 | — | I | 78 | /servicios/chatbots-empresas/implementacion/ |

**Total vol OLA 1:** 1.360 búsquedas/mes · **Potencial tráfico top 10 (CTR 25-35%):** 340-475 visitas/mes

---

### 🌊 OLA 2 — MESES 4-8 (Volumen medio + consolidación)

Meta: 10-15 rankings top 10, 5-7 leads SEO/mes.

| # | Keyword | Vol | KD | CPC | Intent | Score | Página destino |
|---|---|---|---|---|---|---|---|
| 11 | ia para empresas | 390 | 50 | 3.84€ | I | 73 | / (home hub) |
| 12 | agencia ia | 390 | 51 | 1.60€ | I | 67 | / (home) |
| 13 | agencia de ia | 320 | 48 | 1.61€ | I | 68 | / (home) |
| 14 | empresas de inteligencia artificial | 390 | 48 | 1.54€ | I | 68 | / (home) |
| 15 | agencia de automatización de ia | 110 | 35 | 3.27€ | C | 72 | /servicios/automatizaciones-ia/ (misma) |
| 16 | consultor ia | 480 | 45 | 1.34€ | I | 73 | /consultoria-ia/ (hub) |
| 17 | consultor de ia | 140 | 40 | 1.72€ | I | 66 | /consultoria-ia/ (misma) |
| 18 | automatizar procesos con ia | 110 | 28 | 2.41€ | I | 72 | /blog/automatizar-procesos-ia/ |
| 19 | formacion ia para empresas | 70 | 21 | 3.90€ | C | 78 | /formacion-ia-empresas/ |
| 20 | crear agente ia | 110 | 28 | 1.01€ | I | 68 | /blog/como-crear-agente-ia/ |
| 21 | empresa de desarrollo de chatbots | 40 | 6 | — | I C | 80 | /servicios/chatbots-empresas/ (misma) |
| 22 | soluciones ia para empresas | 50 | 26 | 2.57€ | I | 69 | /servicios/ (hub) |
| 23 | servicios de ia para empresas | 50 | 25 | 3.00€ | I | 71 | /servicios/ (hub) |
| 24 | consultoría ia para pequeñas empresas | 90 | — | — | I? | 65 | /consultoria-ia/pymes/ |
| 25 | consultoría ia kit consulting | 40 | 6 | — | I | 85 | /consultoria-ia/kit-consulting/ ⭐ |

**Total vol OLA 2:** 2.880 búsquedas/mes

---

### 🌊 OLA 3 — MESES 9-12 (Autoridad + contenido informacional)

Meta: 30-50 rankings top 10, 8-12 leads/mes.

| # | Keyword | Vol | KD | CPC | Intent | Score | Página destino |
|---|---|---|---|---|---|---|---|
| 26 | agentes ia | 1000 | 65 | 1.68€ | I | 63 | /agentes-ia/ (guía pilar) |
| 27 | agente ia | 880 | 65 | 1.68€ | I | 60 | /agentes-ia/ (misma) |
| 28 | que es un agente de ia | 210 | 59 | 0.13€ | I | 57 | /blog/que-es-agente-ia/ |
| 29 | ia agéntica | 170 | 23 | 1.27€ | I | 76 | /blog/ia-agentica-guia/ |
| 30 | n8n que es | 1300 | 24 | 0.47€ | I | 82 | /blog/que-es-n8n/ |
| 31 | chatbot ia | 390 | 70 | 0.97€ | I | 48 | /blog/chatbot-ia/ |
| 32 | chatbots ia | 260 | 58 | 0.98€ | I | 55 | /blog/chatbot-ia/ (misma) |
| 33 | consultoría ia | 140 | 48 | 1.87€ | C | 62 | /consultoria-ia/ (misma) |
| 34 | curso inteligencia artificial aplicada a la empresa | 110 | 27 | 2.64€ | I | 74 | /formacion-ia-empresas/curso/ |
| 35 | soluciones de inteligencia artificial para empresas | 110 | 41 | 3.46€ | I | 69 | /servicios/ (hub, misma) |
| 36 | inteligencia artificial aplicada a la empresa | 210 | 50 | 2.19€ | I | 61 | /blog/ia-aplicada-empresa-casos/ |
| 37 | inteligencia artificial en empresas ejemplos | 50 | 33 | 2.28€ | I | 64 | /casos-de-exito/ |
| 38 | chatbots personalizados para empresas | 50 | 5 | — | C | 86 | /servicios/chatbots-empresas/personalizados/ |
| 39 | automatización impulsada por ia | 50 | 28 | — | I | 64 | /servicios/automatizaciones-ia/ (misma) |
| 40 | agentes de ia para empresas | 70 | 24 | 3.15€ | I | 75 | /servicios/agentes-ia-empresas/ (misma) |

**Total vol OLA 3:** 5.600 búsquedas/mes

---

## Arquitectura implícita (confirmada por datos)

El dataset pide esta estructura:

```
/ (home - posicionando "agencia IA")
├── /servicios/
│   ├── /chatbots-empresas/ [HUB cluster]
│   │   ├── /ia-conversacional/
│   │   ├── /implementacion/
│   │   ├── /personalizados/
│   │   └── [landings verticales: clinicas, ecommerce, logistica...]
│   ├── /agentes-ia-empresas/ [HUB cluster]
│   │   └── /ventas/ /atencion-cliente/ /operaciones/
│   └── /automatizaciones-ia/ [HUB cluster]
│       └── /procesos/ /whatsapp/ /crm/
├── /consultoria-ia/ [HUB cluster]
│   ├── /pymes/
│   ├── /kit-consulting/ ⭐ DIFERENCIAL
│   └── /auditoria-ia/
├── /formacion-ia-empresas/
│   └── /curso/
├── /casos-de-exito/
├── /blog/ [SILO informacional]
│   ├── /agentes-ia/ (guía pilar)
│   ├── /ia-agentica-guia/
│   ├── /que-es-n8n/
│   ├── /que-es-agente-ia/
│   ├── /automatizar-procesos-ia/
│   ├── /ia-aplicada-empresa-casos/
│   └── /chatbot-ia/
└── /nosotros/ + /contacto/ + /precios/
```

## Priorización por ROI + quick wins

| Página | Prioridad | Razón |
|---|---|---|
| /servicios/chatbots-empresas/ | P0 semana 1 | 3 KW top-10 con KD<27 + CPC 4-5€ |
| /servicios/agentes-ia-empresas/ | P0 semana 1 | KD 14, categoría 2026 |
| /servicios/automatizaciones-ia/ | P0 semana 2 | 5 KW con KD 19-28 en cluster |
| /consultoria-ia/kit-consulting/ | P1 semana 2 | Palanca pública única |
| / (home) | P1 semana 3 | Foundation de marca |
| /consultoria-ia/ (hub) | P1 semana 3 | Consultor IA 480 vol |
| /blog/ia-agentica-guia/ | P2 mes 2 | Trend emergente, KD 23 |
| /blog/que-es-n8n/ | P2 mes 2 | 1300 vol, KD 24 |
| Resto artículos blog | P3 meses 3-9 | Cluster de autoridad |

## Proyección de resultados realista

Si se ejecuta este plan con continuidad:

- **Mes 3:** Top 10 en 5-8 KW OLA 1 → 100-200 visitas/mes → 1-2 leads SEO
- **Mes 6:** Top 10 en 15-20 KW → 400-600 visitas/mes → 3-5 leads SEO
- **Mes 9:** Top 10 en 25-35 KW → 700-900 visitas/mes → 6-8 leads SEO
- **Mes 12:** Top 10 en 40-50 KW → 1.200-1.500 visitas/mes → **10+ leads SEO**

Con ticket medio 4.500€ y conversión 30% lead→cliente: **13.500€ MRR incremental** solo por SEO orgánico al mes 12.
