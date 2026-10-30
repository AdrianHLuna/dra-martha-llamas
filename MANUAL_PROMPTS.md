# Manual de Prompts de Imágenes e Ilustraciones Médicas (AISO v3.1)
## Dra. Martha Hayde Llamas Rangel — Gineco-obstetricia
**Ciudad:** Tuxtla Gutiérrez, Chiapas
**Especialidad:** Ginecóloga y Obstetra

**Nota de discreción clínica:** este catálogo incluye temas de alta sensibilidad visual (anatomía ginecológica, cervicovaginitis, ITS/ETS, VPH, labioplastia, legrado, DIU, embarazo). Todos los prompts están redactados para verse **clínicos y editoriales, nunca gráficos ni explícitos**: diagramas anatómicos esquemáticos de corte/sección, fotografía clínica discreta de exploración con guantes, o escenas cotidianas de paciente — nunca desnudez, genitales explícitos, sangre abundante ni contenido gráfico.

Cada prompt indica entre paréntesis la ruta de archivo a la que corresponde en el sitio (`public/...jpg`).

---

## 🤖 PROMPT INICIAL DE CONTEXTO MASTER PARA GEMINI / CHATGPT / MIDJOURNEY

```text
Rol: Experto en generación de imágenes e ilustraciones médicas fotorrealistas de nivel premium para marketing de salud y sitios web de Gineco-obstetricia de alta gama.
Tono: Cálido, cercano y de autoridad clínica femenina — editorial y elegante, nunca frío ni explícito.
Estilo: Renders 3D anatómicos (aparato reproductor femenino, útero, ovarios, mamas) para enfermedades y procedimientos; fotografía clínica discreta de alta gama para exploraciones y consultas; fotografía de escenas cotidianas de paciente/embarazo, con iluminación cálida y elegante, para síntomas.
Identidad visual OBLIGATORIA (paleta real de marca de la doctora): magenta profundo (#880361) y ciruela (#59214c) como acentos principales, rosa suave (#E8ABC1) y malva (#C582AE) como acentos secundarios, durazno cálido (#F9D0A4) y dorado (#EFCA81) como detalles cálidos, blanco cálido (#FFF8F3) como fondo dominante — ambientes luminosos, suaves y femeninos, nunca oscuros ni clínico-fríos.
Restricciones: Cero desnudez, cero exposición explícita de genitales/mamas, cero sangre abundante ni contenido gráfico — usar diagramas anatómicos esquemáticos, bata/guantes de exploración o encuadres discretos en su lugar. Prohibidos hologramas, neones, HUDs interactivos o elementos de ciencia ficción. Cero palabras, texto, marcas de agua, firmas o números.
Formato: JPG horizontal de aspecto 16:9 (--ar 16:9 --v 6.0).

Instrucciones generales de color y estilo:
- Lighting: Soft warm editorial lighting, gentle natural light or elegant studio light, never dark/moody or cold-clinical.
- Color Palette: Deep Magenta (#880361), Plum (#59214c), Soft Pink (#E8ABC1), Mauve (#C582AE), Warm Peach (#F9D0A4), Gold (#EFCA81), Warm White (#FFF8F3), natural skin tones.
- Composition: Centered, calm, editorial framing with generous negative space — warm and reassuring, never clinical-cold or cluttered.
- Suffixes: realistic medical CGI or high-fidelity clinical photography, 8k, photorealistic textures, soft editorial grade --ar 16:9 --v 6.0
- Negative Prompt: hologram, sci-fi, futuristic, neon, glowing digital UI, hud, blueprints, user interface, text, words, letters, watermark, signature, nudity, explicit genitalia, excessive blood, gore, dark/cold background.

Estas son instrucciones, no hagas imágenes todavía.
```

---

## 🩺 SECCIÓN 1: PROMPTS PARA ENFERMEDADES

### 1. Mastitis (`public/enfermedades/mastitis.jpg`)
```text
3D anatomical cross-section illustration of breast tissue showing an inflamed, reddened milk duct area, clean educational style conveying inflammation without graphic detail.
Lighting: Soft warm studio lighting. Color Palette: Soft Pink (#E8ABC1) tissue tones, Magenta (#880361) inflammation highlight, Warm White (#FFF8F3) background. Composition: Centered macro cross-section, generous negative space. Suffixes: realistic medical CGI, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: nudity, explicit, gore, text, watermark.
```

### 2. Infecciones de Transmisión Sexual (`public/enfermedades/its-ets.jpg`)
```text
Clean editorial illustration of a gynecology consultation room with a discreet lab sample tray and microscope, symbolizing STI screening, warm and reassuring tone, no patient shown explicitly.
Lighting: Warm editorial light. Color Palette: Magenta (#880361), Mauve (#C582AE), Warm White (#FFF8F3). Composition: Centered, calm clinical setting. Suffixes: high-fidelity clinical photography, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: nudity, explicit, text, watermark.
```

### 3. Cervicovaginitis (`public/enfermedades/cervicovaginitis.jpg`)
```text
3D anatomical schematic illustration of the uterine cervix and vaginal canal cross-section with subtle inflammation highlighted, clean educational textbook style.
Lighting: Soft studio lighting. Color Palette: Soft Pink (#E8ABC1), Plum (#59214c) outline, Warm White (#FFF8F3) background. Composition: Centered macro cross-section. Suffixes: realistic medical CGI, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: nudity, explicit, gore, text.
```

### 4. Virus del Papiloma Humano (`public/enfermedades/vph.jpg`)
```text
3D microscopic-style illustration of a stylized virus particle rendered abstractly over a soft anatomical cervix diagram, clean editorial medical infographic tone.
Lighting: Soft warm light. Color Palette: Magenta (#880361), Gold (#EFCA81) virus accent, Warm White (#FFF8F3). Composition: Centered, balanced negative space. Suffixes: realistic medical CGI, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: nudity, explicit, text, watermark.
```

### 5. Menopausia (`public/enfermedades/menopausia.jpg`)
```text
Warm editorial lifestyle photo of a confident woman in her late 40s-50s in soft natural light, calm and radiant expression, symbolizing a new life stage, no clinical setting.
Lighting: Warm golden-hour natural light. Color Palette: Warm Peach (#F9D0A4), Gold (#EFCA81), soft skin tones. Composition: Centered portrait, soft background blur. Suffixes: high-fidelity lifestyle photography, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: text, watermark, logo.
```

### 6. Premenopausia (`public/enfermedades/premenopausia.jpg`)
```text
Warm editorial lifestyle photo of a woman in her 40s journaling or relaxing at home, calm introspective mood, symbolizing a transitional life stage.
Lighting: Soft natural window light. Color Palette: Mauve (#C582AE), Warm Peach (#F9D0A4), soft skin tones. Composition: Centered, cozy home setting. Suffixes: high-fidelity lifestyle photography, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: text, watermark.
```

### 7. Síndrome de Ovario Poliquístico (`public/enfermedades/sop.jpg`)
```text
3D anatomical illustration of an ovary cross-section showing several small follicles arranged along the outer rim, clean educational medical textbook style.
Lighting: Soft studio lighting. Color Palette: Soft Pink (#E8ABC1), Magenta (#880361) outline, Warm White (#FFF8F3). Composition: Centered macro cross-section. Suffixes: realistic medical CGI, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: nudity, explicit, text.
```

### 8. Cistitis (`public/enfermedades/cistitis.jpg`)
```text
3D anatomical schematic illustration of the female bladder and urinary tract, clean cross-section with subtle inflammation highlight, educational textbook style.
Lighting: Soft studio lighting. Color Palette: Warm Peach (#F9D0A4), Plum (#59214c) outline, Warm White (#FFF8F3). Composition: Centered macro cross-section. Suffixes: realistic medical CGI, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: nudity, gore, text.
```

### 9. Infertilidad de Baja Complejidad (`public/enfermedades/infertilidad.jpg`)
```text
Warm editorial lifestyle photo of a couple holding hands, hopeful and calm expression, soft natural light, symbolizing the journey toward parenthood, no clinical setting.
Lighting: Warm golden-hour light. Color Palette: Magenta (#880361), Warm Peach (#F9D0A4), soft skin tones. Composition: Centered, intimate framing. Suffixes: high-fidelity lifestyle photography, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: text, watermark.
```

### 10. Quistes Ováricos (`public/enfermedades/quistes-ovaricos.jpg`)
```text
3D anatomical illustration of an ovary cross-section showing a single smooth fluid-filled cyst, clean educational medical textbook style, calm non-threatening tone.
Lighting: Soft studio lighting. Color Palette: Mauve (#C582AE), Warm White (#FFF8F3) background, Gold (#EFCA81) highlight. Composition: Centered macro cross-section. Suffixes: realistic medical CGI, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: nudity, gore, text.
```

---

## 💉 SECCIÓN 2: PROMPTS PARA SERVICIOS

### 1. Revisión Vaginal (`public/servicios/revision-vaginal.jpg`)
```text
Discreet clinical photo of a gynecology exam room with a clean exam table and soft warm lighting, no patient shown, calm and professional tone.
Lighting: Warm clinical light. Color Palette: Soft Pink (#E8ABC1), Warm White (#FFF8F3). Composition: Centered room shot. Suffixes: high-fidelity clinical photography, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: nudity, text, watermark.
```

### 2. Revisión Ginecológica Anual (`public/servicios/revision-anual.jpg`)
```text
Warm editorial photo of a female doctor's hands reviewing a clipboard chart with a calendar icon, symbolizing annual checkup scheduling, calm professional tone.
Lighting: Soft studio light. Color Palette: Magenta (#880361), Gold (#EFCA81), Warm White (#FFF8F3). Composition: Centered close-up on hands and chart. Suffixes: high-fidelity clinical photography, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: text, watermark.
```

### 3. Histerectomía (`public/servicios/histerectomia.jpg`)
```text
3D anatomical illustration of the female reproductive system highlighting the uterus in soft focus, clean educational surgical-planning style, non-graphic.
Lighting: Soft studio lighting. Color Palette: Soft Pink (#E8ABC1), Plum (#59214c) outline, Warm White (#FFF8F3). Composition: Centered anatomical diagram. Suffixes: realistic medical CGI, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: gore, nudity, text.
```

### 4. Cesárea (`public/servicios/cesarea.jpg`)
```text
Warm editorial photo of a hospital bassinet with soft blankets in a bright maternity room, symbolizing birth and newborn care, no graphic surgical content.
Lighting: Warm natural light. Color Palette: Warm Peach (#F9D0A4), Gold (#EFCA81), Warm White (#FFF8F3). Composition: Centered, cozy maternity room. Suffixes: high-fidelity lifestyle photography, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: blood, gore, text.
```

### 5. Atención de Parto (`public/servicios/parto.jpg`)
```text
Warm editorial photo of a mother's hand gently holding a newborn's hand, soft natural light, tender and calm tone, symbolizing childbirth.
Lighting: Warm golden-hour light. Color Palette: Magenta (#880361), Warm Peach (#F9D0A4), soft skin tones. Composition: Centered close-up on hands. Suffixes: high-fidelity lifestyle photography, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: blood, gore, text.
```

### 6. Labioplastia (`public/servicios/labioplastia.jpg`)
```text
Abstract soft editorial illustration of gentle flowing fabric curves in pink and mauve tones, symbolizing feminine aesthetic refinement without any anatomical depiction.
Lighting: Soft diffused studio light. Color Palette: Soft Pink (#E8ABC1), Mauve (#C582AE), Warm White (#FFF8F3). Composition: Centered abstract composition. Suffixes: high-fidelity editorial photography, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: nudity, explicit, text.
```

### 7. Revisión de Mamas (`public/servicios/revision-mamas.jpg`)
```text
Clean 3D icon-style illustration of a breast self-exam ribbon/awareness symbol with a soft gentle hand icon, flat editorial medical infographic tone, no anatomical depiction.
Lighting: Soft studio light. Color Palette: Magenta (#880361), Soft Pink (#E8ABC1), Warm White (#FFF8F3). Composition: Centered icon composition. Suffixes: clean flat illustration, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: nudity, explicit, text.
```

### 8. Electrocirugía Ginecológica (`public/servicios/electrocirugia.jpg`)
```text
3D anatomical schematic illustration of the cervix cross-section with a precise instrument tip near a small lesion area, clean clinical-educational style, non-graphic.
Lighting: Soft studio lighting. Color Palette: Mauve (#C582AE), Gold (#EFCA81) instrument accent, Warm White (#FFF8F3). Composition: Centered macro cross-section. Suffixes: realistic medical CGI, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: gore, nudity, text.
```

### 9. Conización Cervical (Cono) (`public/servicios/cono.jpg`)
```text
3D anatomical schematic illustration of the cervix showing a cone-shaped tissue section outlined for removal, clean educational surgical-planning diagram style.
Lighting: Soft studio lighting. Color Palette: Plum (#59214c), Soft Pink (#E8ABC1), Warm White (#FFF8F3). Composition: Centered diagram. Suffixes: realistic medical CGI, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: gore, nudity, text.
```

### 10. Legrado por Aspiración (`public/servicios/legrado.jpg`)
```text
Discreet clinical photo of a calm, softly lit minor-procedure room with clean equipment tray, no patient shown, reassuring professional tone.
Lighting: Warm clinical light. Color Palette: Soft Pink (#E8ABC1), Warm White (#FFF8F3). Composition: Centered room shot. Suffixes: high-fidelity clinical photography, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: blood, gore, text.
```

### 11. DIU de Cobre (`public/servicios/diu-cobre.jpg`)
```text
Clean 3D product-style illustration of a T-shaped copper IUD device on a soft neutral surface, medical infographic tone.
Lighting: Soft studio light. Color Palette: Gold (#EFCA81) copper tone, Warm White (#FFF8F3) background. Composition: Centered product shot, generous negative space. Suffixes: realistic medical CGI, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: text, watermark.
```

### 12. DIU de Plata (`public/servicios/diu-plata.jpg`)
```text
Clean 3D product-style illustration of a T-shaped IUD device with a silver-toned core on a soft neutral surface, medical infographic tone.
Lighting: Soft studio light. Color Palette: Soft Pink (#E8ABC1), silver-grey accent, Warm White (#FFF8F3). Composition: Centered product shot. Suffixes: realistic medical CGI, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: text, watermark.
```

### 13. DIU Medicado (Hormonal) (`public/servicios/diu-medicado.jpg`)
```text
Clean 3D product-style illustration of a T-shaped hormonal IUD device on a soft neutral surface, medical infographic tone.
Lighting: Soft studio light. Color Palette: Magenta (#880361) accent, Warm White (#FFF8F3) background. Composition: Centered product shot. Suffixes: realistic medical CGI, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: text, watermark.
```

### 14. Implante Subdérmico (`public/servicios/implante-subdermico.jpg`)
```text
Clean 3D product-style illustration of a small contraceptive implant rod beside a stylized forearm outline, medical infographic tone, non-graphic.
Lighting: Soft studio light. Color Palette: Mauve (#C582AE), Warm White (#FFF8F3) background. Composition: Centered product shot. Suffixes: realistic medical CGI, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: text, watermark, blood.
```

### 15. Vacuna contra el VPH (`public/servicios/vacuna-vph.jpg`)
```text
Clean editorial photo of a syringe and vaccine vial resting on a soft fabric surface with warm lighting, symbolizing HPV vaccination, calm reassuring tone.
Lighting: Soft warm studio light. Color Palette: Magenta (#880361), Gold (#EFCA81), Warm White (#FFF8F3). Composition: Centered product shot. Suffixes: high-fidelity clinical photography, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: text, watermark.
```

### 16. Paquete Check Up Ginecológico (`public/servicios/checkup.jpg`)
```text
Warm editorial photo of a clipboard checklist with a soft stethoscope resting beside it on a warm neutral surface, symbolizing a comprehensive checkup package.
Lighting: Soft warm studio light. Color Palette: Magenta (#880361), Warm Peach (#F9D0A4), Warm White (#FFF8F3). Composition: Centered flat-lay. Suffixes: high-fidelity editorial photography, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: text, watermark.
```

### 17. Control Prenatal (`public/servicios/control-prenatal.jpg`)
```text
Warm editorial photo of a pregnant woman's hands gently resting on her belly, soft natural light, calm and tender tone, no clinical setting.
Lighting: Warm golden-hour natural light. Color Palette: Warm Peach (#F9D0A4), Gold (#EFCA81), soft skin tones. Composition: Centered close-up on hands and belly. Suffixes: high-fidelity lifestyle photography, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: nudity, text, watermark.
```

---

## ⚠️ SECCIÓN 3: PROMPTS PARA SÍNTOMAS

### 1. Sangrado Intermenstrual (`public/sintomas/sangrado-intermenstrual.jpg`)
```text
Warm editorial lifestyle photo of a woman checking a calendar with a thoughtful expression, soft natural light, symbolizing menstrual cycle tracking, no graphic content.
Lighting: Soft natural window light. Color Palette: Soft Pink (#E8ABC1), Warm White (#FFF8F3). Composition: Centered, calm home setting. Suffixes: high-fidelity lifestyle photography, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: blood, text, watermark.
```

### 2. Dolor Mamario (`public/sintomas/dolor-mamario.jpg`)
```text
Warm editorial lifestyle photo of a woman gently placing a hand over her chest with a calm, mindful expression, soft natural light, no explicit content.
Lighting: Soft natural light. Color Palette: Soft Pink (#E8ABC1), Warm White (#FFF8F3). Composition: Centered upper-body portrait, discreet framing. Suffixes: high-fidelity lifestyle photography, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: nudity, explicit, text.
```

### 3. Picor Vaginal (`public/sintomas/picor-vaginal.jpg`)
```text
Warm editorial lifestyle photo of a woman sitting calmly in soft natural light, hands gently clasped, neutral discreet composition symbolizing seeking relief and care.
Lighting: Soft natural light. Color Palette: Mauve (#C582AE), Warm White (#FFF8F3). Composition: Centered, discreet. Suffixes: high-fidelity lifestyle photography, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: nudity, explicit, text.
```

### 4. Ardor Vaginal (`public/sintomas/ardor-vaginal.jpg`)
```text
Warm editorial lifestyle photo of a glass of water and soft fabric textures in warm tones, symbolizing soothing relief and self-care, discreet and abstract.
Lighting: Soft warm light. Color Palette: Warm Peach (#F9D0A4), Warm White (#FFF8F3). Composition: Centered flat-lay. Suffixes: high-fidelity lifestyle photography, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: nudity, explicit, text.
```

### 5. Síntomas de la Perimenopausia (`public/sintomas/sintomas-perimenopausia.jpg`)
```text
Warm editorial lifestyle photo of a woman in her 40s fanning herself gently by a sunlit window, calm expression, symbolizing hot flashes with warmth and dignity.
Lighting: Warm natural window light. Color Palette: Gold (#EFCA81), Warm Peach (#F9D0A4). Composition: Centered portrait. Suffixes: high-fidelity lifestyle photography, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: text, watermark.
```

### 6. Dolor Pélvico (`public/sintomas/dolor-pelvico.jpg`)
```text
Warm editorial lifestyle photo of a woman gently holding her lower abdomen while resting on a couch, soft natural light, calm discreet composition.
Lighting: Soft natural light. Color Palette: Magenta (#880361), Warm White (#FFF8F3). Composition: Centered, discreet framing. Suffixes: high-fidelity lifestyle photography, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: nudity, explicit, text.
```

### 7. Sequedad Vaginal (`public/sintomas/sequedad-vaginal.jpg`)
```text
Abstract warm editorial image of a water droplet on a soft petal, symbolizing hydration and gentle care, discreet and elegant.
Lighting: Soft diffused light. Color Palette: Soft Pink (#E8ABC1), Warm White (#FFF8F3). Composition: Centered macro shot. Suffixes: high-fidelity macro photography, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: nudity, explicit, text.
```

### 8. Falta de Deseo Sexual (`public/sintomas/falta-deseo-sexual.jpg`)
```text
Warm editorial lifestyle photo of a couple sitting close together in calm conversation, soft natural light, symbolizing emotional connection and care, discreet tone.
Lighting: Warm natural light. Color Palette: Mauve (#C582AE), Warm Peach (#F9D0A4). Composition: Centered, intimate but discreet. Suffixes: high-fidelity lifestyle photography, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: nudity, explicit, text.
```

### 9. Secreción de Líquido en las Mamas (`public/sintomas/secrecion-mamas.jpg`)
```text
3D anatomical schematic illustration of breast duct anatomy in soft focus, clean educational textbook style, non-graphic.
Lighting: Soft studio lighting. Color Palette: Soft Pink (#E8ABC1), Plum (#59214c) outline, Warm White (#FFF8F3). Composition: Centered macro cross-section. Suffixes: realistic medical CGI, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: nudity, explicit, text.
```

### 10. Flujo Vaginal Anormal (`public/sintomas/flujo-vaginal-anormal.jpg`)
```text
Discreet clinical photo of a gynecology exam room with a microscope and sample slide, warm soft lighting, symbolizing diagnostic testing, no explicit content.
Lighting: Warm clinical light. Color Palette: Magenta (#880361), Warm White (#FFF8F3). Composition: Centered room/equipment shot. Suffixes: high-fidelity clinical photography, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: nudity, explicit, text.
```

### 11. Ausencia de Menstruación (`public/sintomas/ausencia-menstruacion.jpg`)
```text
Warm editorial lifestyle photo of a woman looking thoughtfully at a calendar with empty marked days, soft natural light, calm contemplative tone.
Lighting: Soft natural light. Color Palette: Mauve (#C582AE), Warm White (#FFF8F3). Composition: Centered, calm home setting. Suffixes: high-fidelity lifestyle photography, 8k, soft editorial grade --ar 16:9 --v 6.0. Negative Prompt: text, watermark.
```
