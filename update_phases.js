const fs = require('fs');

const FILE_PATH = "c:/Users/Alejandro/.gemini/antigravity/scratch/dental-funnel/nueva web zappyapps/index.html";

let html = fs.readFileSync(FILE_PATH, 'utf-8');

const startExisting = html.indexOf('<!-- Pricing Container: Existing Web -->');
const endExisting = html.indexOf('</section>', startExisting);

let existingHtml = html.substring(startExisting, endExisting);

// 1. Update "Tipo de Proyecto" to "Procedimiento a la empresa"
existingHtml = existingHtml.replace('Tipo de Proyecto', 'Procedimiento a la empresa');

// 2. Desktop Table Replacement

const newDesktopF4_F6 = `                    <!-- FASE 4 -->
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
                            <span class="inline-flex items-center gap-1.5 text-sm"><i data-lucide="star" class="w-4 h-4 text-yellow-500 fill-current"></i> <span class="text-white">Ilimitadas</span></span>
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
`;

const desktopF4Start = existingHtml.indexOf('<!-- FASE 4 -->');
const desktopF9Start = existingHtml.indexOf('<!-- FASE 9 -->');

if (desktopF4Start === -1 || desktopF9Start === -1) {
    console.error("Could not find boundaries for desktop table replacement.");
    process.exit(1);
}

let desktopReplaced = existingHtml.substring(0, desktopF4Start) + newDesktopF4_F6 + "\n" + existingHtml.substring(desktopF9Start);

desktopReplaced = desktopReplaced.replace('FASE 9 — Automatización', 'FASE 7 — Automatización');
desktopReplaced = desktopReplaced.replace('FASE 10 — LTV y Retención', 'FASE 8 — LTV y Retención');

const newMobileF4_F6_Card1 = `                            <!-- F4 -->
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
`;

const newMobileF4_F6_Card2 = `                            <!-- F4 -->
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
`;

const newMobileF4_F6_Card3 = `                            <!-- F4 -->
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
                                        data-lucide="star" class="w-3.5 h-3.5 fill-current"></i> Ilimitadas</span>
                            </div>
                            <div class="overflow-hidden transition-all duration-300" style="max-height: 0; opacity: 0;">
                                <div class="py-2 pl-6 text-xs text-secondary">Copywriting · UX/UI · Tracking</div>
                            </div>
`;

function replaceMobileCard(content, cardTitle, replacementF4_F6) {
    const idx = content.indexOf(`<h3 class="text-lg font-bold text-white">${cardTitle}</h3>`);
    if (idx === -1) return content;

    const f4Start = content.indexOf('<!-- F4 -->', idx);
    const f9Start = content.indexOf('<!-- F9 -->', idx);
    if (f4Start === -1 || f9Start === -1) return content;

    return content.substring(0, f4Start) + replacementF4_F6 + "\\n" + content.substring(f9Start);
}

desktopReplaced = replaceMobileCard(desktopReplaced, 'Fundación Estratégica', newMobileF4_F6_Card1);
desktopReplaced = replaceMobileCard(desktopReplaced, 'Motor de Visibilidad', newMobileF4_F6_Card2);
desktopReplaced = replaceMobileCard(desktopReplaced, 'Ecosistema a Medida', newMobileF4_F6_Card3);

desktopReplaced = desktopReplaced.replace(/F9: Automatización/g, 'F7: Automatización');
desktopReplaced = desktopReplaced.replace(/<!-- F9 -->/g, '<!-- F7 -->');
desktopReplaced = desktopReplaced.replace(/F10: LTV/g, 'F8: LTV');
desktopReplaced = desktopReplaced.replace(/<!-- F10 -->/g, '<!-- F8 -->');

const finalHtml = html.substring(0, startExisting) + desktopReplaced + html.substring(endExisting);

fs.writeFileSync(FILE_PATH, finalHtml, 'utf-8');

console.log("Updated index.html successfully via Node.js.");
