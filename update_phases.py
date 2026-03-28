import re

# We will read index.html, find the exact blocks for F4, F5, F6, F7, F8, F9, F10 in both Desktop and Mobile, and replace them.
# The mobile cards have the phases as well.

FILE_PATH = "c:/Users/Alejandro/.gemini/antigravity/scratch/dental-funnel/nueva web zappyapps/index.html"

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    html = f.read()

# Make sure we only affect the existing web section
# Find the start of the existing web section
start_existing = html.find('<!-- Pricing Container: Existing Web -->')
end_existing = html.find('</section>', start_existing)

existing_html = html[start_existing:end_existing]

# 1. Update "Tipo de Proyecto" to "Procedimiento a la empresa"
existing_html = existing_html.replace('Tipo de Proyecto', 'Procedimiento a la empresa')

# Mobile cards also have text we might want to update, but the user specifically mentioned the table.

# 2. Desktop Table Replacement

new_desktop_f4_f6 = """
                    <!-- FASE 4 -->
                    <tr class="border-b border-white/5 cursor-pointer hover:bg-white/[0.02] transition-colors"
                        onclick="togglePhaseDropdown(this)">
                        <td class="py-4 px-6">
                            <div class="flex items-center gap-3">
                                <i data-lucide="target" class="text-primary w-5 h-5"></i>
                                <div>
                                    <div class="font-bold text-white">FASE 4 — Estrategia de Captación</div>
                                    <div class="text-xs text-secondary mt-1 max-w-[200px] leading-tight">Diseño de sistemas de adquisición.</div>
                                </div>
                                <i data-lucide="chevron-down"
                                    class="text-gray-500 w-4 h-4 ml-auto transition-transform phase-chevron"></i>
                            </div>
                        </td>
                        <td class="py-4 px-4 text-center">
                            <span class="inline-flex items-center gap-1.5 text-sm"><i data-lucide="star" class="w-4 h-4 text-yellow-500 fill-current"></i> <span class="text-white">Consultoría</span></span>
                        </td>
                        <td class="py-4 px-4 text-center bg-primary/[0.06] border-x border-white/5">
                            <span class="inline-flex items-center gap-1.5 text-emerald-400 text-sm"><i
                                    data-lucide="check-circle" class="w-4 h-4"></i> Incluido</span>
                        </td>
                        <td class="py-4 px-4 text-center">
                            <span class="inline-flex items-center gap-1.5 text-emerald-400 text-sm"><i
                                    data-lucide="check-circle" class="w-4 h-4"></i> Avanzado</span>
                        </td>
                    </tr>
                    <tr class="phase-dropdown-content bg-white/[0.02]" style="display: none;">
                        <td colspan="4" class="p-0 border-b border-white/5">
                            <div
                                class="phase-dropdown-inner overflow-hidden transition-all duration-300 max-h-0 opacity-0 px-6">
                                <div class="dropdown-feature-grid">
                                    <div class="dropdown-feature-item">
                                        <div class="feature-icon"><i data-lucide="git-branch"></i></div>
                                        <div>
                                            <div class="feature-title">Funnels</div>
                                            <div class="feature-desc">Mapeo de embudos de conversión.</div>
                                        </div>
                                    </div>
                                    <div class="dropdown-feature-item">
                                        <div class="feature-icon"><i data-lucide="users"></i></div>
                                        <div>
                                            <div class="feature-title">Audiencias</div>
                                            <div class="feature-desc">Segmentación hiper-focalizada.</div>
                                        </div>
                                    </div>
                                    <div class="dropdown-feature-item">
                                        <div class="feature-icon"><i data-lucide="share-2"></i></div>
                                        <div>
                                            <div class="feature-title">Canales</div>
                                            <div class="feature-desc">Selección de medios de tráfico.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <!-- FASE 5 -->
                    <tr class="border-b border-white/5 cursor-pointer hover:bg-white/[0.02] transition-colors"
                        onclick="togglePhaseDropdown(this)">
                        <td class="py-4 px-6">
                            <div class="flex items-center gap-3">
                                <i data-lucide="gift" class="text-primary w-5 h-5"></i>
                                <div>
                                    <div class="font-bold text-white">FASE 5 — Oferta por Producto</div>
                                    <div class="text-xs text-secondary mt-1 max-w-[200px] leading-tight">Creación de ofertas irresistibles de alto valor.</div>
                                </div>
                                <i data-lucide="chevron-down"
                                    class="text-gray-500 w-4 h-4 ml-auto transition-transform phase-chevron"></i>
                            </div>
                        </td>
                        <td class="py-4 px-4 text-center">
                            <span class="inline-flex items-center gap-1.5 text-sm"><i data-lucide="star" class="w-4 h-4 text-yellow-500 fill-current"></i> <span class="text-white">Revisión</span></span>
                        </td>
                        <td class="py-4 px-4 text-center bg-primary/[0.06] border-x border-white/5">
                            <span class="inline-flex items-center gap-1.5 text-emerald-400 text-sm"><i
                                    data-lucide="check-circle" class="w-4 h-4"></i> Incluido</span>
                        </td>
                        <td class="py-4 px-4 text-center">
                            <span class="inline-flex items-center gap-1.5 text-emerald-400 text-sm"><i
                                    data-lucide="check-circle" class="w-4 h-4"></i> Incluido</span>
                        </td>
                    </tr>
                    <tr class="phase-dropdown-content bg-white/[0.02]" style="display: none;">
                        <td colspan="4" class="p-0 border-b border-white/5">
                            <div
                                class="phase-dropdown-inner overflow-hidden transition-all duration-300 max-h-0 opacity-0 px-6">
                                <div class="dropdown-feature-grid">
                                    <div class="dropdown-feature-item">
                                        <div class="feature-icon"><i data-lucide="gem"></i></div>
                                        <div>
                                            <div class="feature-title">Valor</div>
                                            <div class="feature-desc">Estructuración de alto valor.</div>
                                        </div>
                                    </div>
                                    <div class="dropdown-feature-item">
                                        <div class="feature-icon"><i data-lucide="tag"></i></div>
                                        <div>
                                            <div class="feature-title">Pricing</div>
                                            <div class="feature-desc">Estrategia de precios y bonos.</div>
                                        </div>
                                    </div>
                                    <div class="dropdown-feature-item">
                                        <div class="feature-icon"><i data-lucide="flame"></i></div>
                                        <div>
                                            <div class="feature-title">Gatillos</div>
                                            <div class="feature-desc">Urgencia y escasez real.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <!-- FASE 6 -->
                    <tr class="border-b border-white/5 cursor-pointer hover:bg-white/[0.02] transition-colors"
                        onclick="togglePhaseDropdown(this)">
                        <td class="py-4 px-6">
                            <div class="flex items-center gap-3">
                                <i data-lucide="layout-template" class="text-primary w-5 h-5"></i>
                                <div>
                                    <div class="font-bold text-white">FASE 6 — Construcción de Landings</div>
                                    <div class="text-xs text-secondary mt-1 max-w-[200px] leading-tight">Landings por servicio para lanzamientos.</div>
                                </div>
                                <i data-lucide="chevron-down"
                                    class="text-gray-500 w-4 h-4 ml-auto transition-transform phase-chevron"></i>
                            </div>
                        </td>
                        <td class="py-4 px-4 text-center">
                            <span class="text-gray-500 text-sm">-</span>
                        </td>
                        <td class="py-4 px-4 text-center bg-primary/[0.06] border-x border-white/5">
                            <span class="inline-flex items-center gap-1.5 text-sm"><i data-lucide="star" class="w-4 h-4 text-yellow-500 fill-current"></i> <span class="text-white">Landing Principal</span></span>
                        </td>
                        <td class="py-4 px-4 text-center">
                            <span class="inline-flex items-center gap-1.5 text-sm"><i data-lucide="star" class="w-4 h-4 text-yellow-500 fill-current"></i> <span class="text-white">Multi-servicio</span></span>
                        </td>
                    </tr>
                    <tr class="phase-dropdown-content bg-white/[0.02]" style="display: none;">
                        <td colspan="4" class="p-0 border-b border-white/5">
                            <div
                                class="phase-dropdown-inner overflow-hidden transition-all duration-300 max-h-0 opacity-0 px-6">
                                <div class="dropdown-feature-grid">
                                    <div class="dropdown-feature-item">
                                        <div class="feature-icon"><i data-lucide="pen-tool"></i></div>
                                        <div>
                                            <div class="feature-title">Copywriting</div>
                                            <div class="feature-desc">Textos persuasivos orientados a venta.</div>
                                        </div>
                                    </div>
                                    <div class="dropdown-feature-item">
                                        <div class="feature-icon"><i data-lucide="mouse-pointer-click"></i></div>
                                        <div>
                                            <div class="feature-title">UX/UI</div>
                                            <div class="feature-desc">Diseño exclusivo para conversión.</div>
                                        </div>
                                    </div>
                                    <div class="dropdown-feature-item">
                                        <div class="feature-icon"><i data-lucide="activity"></i></div>
                                        <div>
                                            <div class="feature-title">Tracking</div>
                                            <div class="feature-desc">Medición precisa de conversiones.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
"""

desktop_f4_start = existing_html.find('<!-- FASE 4 -->')
desktop_f9_start = existing_html.find('<!-- FASE 9 -->')

if desktop_f4_start == -1 or desktop_f9_start == -1:
    print("Could not find boundaries for desktop table replacement.")
    exit(1)

desktop_replaced = existing_html[:desktop_f4_start] + new_desktop_f4_f6 + existing_html[desktop_f9_start:]

# Now renumber F9 and F10 to F7 and F8 in desktop
# F9 is the first one after the insertion point. But let's just do a string replace on desktop_replaced
# Note that we only want to change "FASE 9" to "FASE 7" and "FASE 10" to "FASE 8" in the desktop part.
# Also F9/F10 logic. Wait, there is only one "FASE 9" and "FASE 10" in the text inside the desktop table.

desktop_replaced = desktop_replaced.replace('FASE 9 — Automatización', 'FASE 7 — Automatización')
desktop_replaced = desktop_replaced.replace('FASE 10 — LTV y Retención', 'FASE 8 — LTV y Retención')

# Mobile cards replacement
# The mobile cards section has identical comments like <!-- F4 -->, <!-- F5 -->, etc.
# We will use regex to replace the blocks from <!-- F4 --> to the line before <!-- F9 --> in EACH card.
# Mobile structure:
# <!-- F4 -->
# ...
# <!-- F9 -->
# We have 3 mobile cards. Let's just create the new mobile string for F4, F5, F6.

new_mobile_f4_f6_card1 = """
                            <!-- F4 -->
                            <div class="flex justify-between items-center py-3 border-b border-white/5 cursor-pointer"
                                onclick="toggleMobilePhaseDropdown(this)">
                                <span class="flex items-center gap-2"><i data-lucide="target"
                                        class="w-4 h-4 text-primary"></i> F4: Estrategia <i data-lucide="chevron-down"
                                        class="w-4 h-4 text-primary transition-transform phase-mobile-chevron"></i></span>
                                <span class="text-yellow-500 flex items-center gap-1 font-medium text-xs"><i
                                        data-lucide="star" class="w-3.5 h-3.5 fill-current"></i> Consultoría</span>
                            </div>
                            <div class="overflow-hidden transition-all duration-300" style="max-height: 0; opacity: 0;">
                                <div class="py-2 pl-6 text-xs text-secondary">Diseño de sistemas de adquisición</div>
                            </div>
                            <!-- F5 -->
                            <div class="flex justify-between items-center py-3 border-b border-white/5 cursor-pointer"
                                onclick="toggleMobilePhaseDropdown(this)">
                                <span class="flex items-center gap-2"><i data-lucide="gift"
                                        class="w-4 h-4 text-primary"></i> F5: Oferta <i data-lucide="chevron-down"
                                        class="w-4 h-4 text-primary transition-transform phase-mobile-chevron"></i></span>
                                <span class="text-yellow-500 flex items-center gap-1 font-medium text-xs"><i
                                        data-lucide="star" class="w-3.5 h-3.5 fill-current"></i> Revisión</span>
                            </div>
                            <div class="overflow-hidden transition-all duration-300" style="max-height: 0; opacity: 0;">
                                <div class="py-2 pl-6 text-xs text-secondary">Estructuración de alto valor</div>
                            </div>
"""

new_mobile_f4_f6_card2 = """
                            <!-- F4 -->
                            <div class="flex justify-between items-center py-3 border-b border-white/5 cursor-pointer"
                                onclick="toggleMobilePhaseDropdown(this)">
                                <span class="flex items-center gap-2"><i data-lucide="target"
                                        class="w-4 h-4 text-primary"></i> F4: Estrategia <i data-lucide="chevron-down"
                                        class="w-4 h-4 text-primary transition-transform phase-mobile-chevron"></i></span>
                                <span class="text-emerald-400 flex items-center gap-1 font-medium text-xs"><i
                                        data-lucide="check-circle" class="w-3.5 h-3.5"></i> Incluido</span>
                            </div>
                            <div class="overflow-hidden transition-all duration-300" style="max-height: 0; opacity: 0;">
                                <div class="py-2 pl-6 text-xs text-secondary">Diseño de sistemas de adquisición</div>
                            </div>
                            <!-- F5 -->
                            <div class="flex justify-between items-center py-3 border-b border-white/5 cursor-pointer"
                                onclick="toggleMobilePhaseDropdown(this)">
                                <span class="flex items-center gap-2"><i data-lucide="gift"
                                        class="w-4 h-4 text-primary"></i>
                                    F5: Oferta <i data-lucide="chevron-down"
                                        class="w-4 h-4 text-primary transition-transform phase-mobile-chevron"></i></span>
                                <span class="text-emerald-400 flex items-center gap-1 font-medium text-xs"><i
                                        data-lucide="check-circle" class="w-3.5 h-3.5"></i> Incluido</span>
                            </div>
                            <div class="overflow-hidden transition-all duration-300" style="max-height: 0; opacity: 0;">
                                <div class="py-2 pl-6 text-xs text-secondary">Estructuración de alto valor</div>
                            </div>
                            <!-- F6 -->
                            <div class="flex justify-between items-center py-3 border-b border-white/5 cursor-pointer"
                                onclick="toggleMobilePhaseDropdown(this)">
                                <span class="flex items-center gap-2"><i data-lucide="layout-template"
                                        class="w-4 h-4 text-primary"></i> F6:
                                    Landings <i data-lucide="chevron-down"
                                        class="w-4 h-4 text-primary transition-transform phase-mobile-chevron"></i></span>
                                <span class="text-yellow-500 flex items-center gap-1 font-medium text-xs"><i
                                        data-lucide="star" class="w-3.5 h-3.5 fill-current"></i> 1 Landing</span>
                            </div>
                            <div class="overflow-hidden transition-all duration-300" style="max-height: 0; opacity: 0;">
                                <div class="py-2 pl-6 text-xs text-secondary">Copywriting · UX/UI · Tracking</div>
                            </div>
"""

new_mobile_f4_f6_card3 = """
                            <!-- F4 -->
                            <div class="flex justify-between items-center py-3 border-b border-white/5 cursor-pointer"
                                onclick="toggleMobilePhaseDropdown(this)">
                                <span class="flex items-center gap-2"><i data-lucide="target"
                                        class="w-4 h-4 text-primary"></i> F4: Estrategia <i data-lucide="chevron-down"
                                        class="w-4 h-4 text-primary transition-transform phase-mobile-chevron"></i></span>
                                <span class="text-emerald-400 flex items-center gap-1 font-medium text-xs"><i
                                        data-lucide="check-circle" class="w-3.5 h-3.5"></i> Avanzado</span>
                            </div>
                            <div class="overflow-hidden transition-all duration-300" style="max-height: 0; opacity: 0;">
                                <div class="py-2 pl-6 text-xs text-secondary">Diseño de sistemas de adquisición</div>
                            </div>
                            <!-- F5 -->
                            <div class="flex justify-between items-center py-3 border-b border-white/5 cursor-pointer"
                                onclick="toggleMobilePhaseDropdown(this)">
                                <span class="flex items-center gap-2"><i data-lucide="gift"
                                        class="w-4 h-4 text-primary"></i>
                                    F5: Oferta <i data-lucide="chevron-down"
                                        class="w-4 h-4 text-primary transition-transform phase-mobile-chevron"></i></span>
                                <span class="text-emerald-400 flex items-center gap-1 font-medium text-xs"><i
                                        data-lucide="check-circle" class="w-3.5 h-3.5"></i> Incluido</span>
                            </div>
                            <div class="overflow-hidden transition-all duration-300" style="max-height: 0; opacity: 0;">
                                <div class="py-2 pl-6 text-xs text-secondary">Estructuración de alto valor</div>
                            </div>
                            <!-- F6 -->
                            <div class="flex justify-between items-center py-3 border-b border-white/5 cursor-pointer"
                                onclick="toggleMobilePhaseDropdown(this)">
                                <span class="flex items-center gap-2"><i data-lucide="layout-template"
                                        class="w-4 h-4 text-primary"></i> F6:
                                    Landings <i data-lucide="chevron-down"
                                        class="w-4 h-4 text-primary transition-transform phase-mobile-chevron"></i></span>
                                <span class="text-yellow-500 flex items-center gap-1 font-medium text-xs"><i
                                        data-lucide="star" class="w-3.5 h-3.5 fill-current"></i> Multi-servicio</span>
                            </div>
                            <div class="overflow-hidden transition-all duration-300" style="max-height: 0; opacity: 0;">
                                <div class="py-2 pl-6 text-xs text-secondary">Copywriting · UX/UI · Tracking</div>
                            </div>
"""

def replace_mobile_card(content, card_title, replacement_f4_f6):
    # Find the start of the card by title
    idx = content.find(f'<h3 class="text-lg font-bold text-white">{card_title}</h3>')
    if idx == -1: return content
    
    f4_start = content.find('<!-- F4 -->', idx)
    f9_start = content.find('<!-- F9 -->', idx)
    if f4_start == -1 or f9_start == -1: return content
    
    return content[:f4_start] + replacement_f4_f6 + content[f9_start:]

desktop_replaced = replace_mobile_card(desktop_replaced, 'Fundación Estratégica', new_mobile_f4_f6_card1)
desktop_replaced = replace_mobile_card(desktop_replaced, 'Motor de Visibilidad', new_mobile_f4_f6_card2)
desktop_replaced = replace_mobile_card(desktop_replaced, 'Ecosistema a Medida', new_mobile_f4_f6_card3)

# Renumber F9 and F10 to F7 and F8 in mobile cards
# Since we replaced the old ones globally, F9 text inside mobile cards might be changed easily by doing global replacements:
desktop_replaced = desktop_replaced.replace('F9: Automatización', 'F7: Automatización')
desktop_replaced = desktop_replaced.replace('<!-- F9 -->', '<!-- F7 -->')
desktop_replaced = desktop_replaced.replace('F10: LTV', 'F8: LTV')
desktop_replaced = desktop_replaced.replace('<!-- F10 -->', '<!-- F8 -->')

final_html = html[:start_existing] + desktop_replaced + html[end_existing:]

with open(FILE_PATH, 'w', encoding='utf-8') as f:
    f.write(final_html)

print("Updated index.html successfully.")
