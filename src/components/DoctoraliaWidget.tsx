"use client";

import { useEffect, useRef } from "react";

/**
 * Widget real de reserva de citas de Doctoralia — excepción deliberada a la
 * regla general de "nunca formularios" de AGENTS.md §7, pedida explícitamente
 * por la usuaria para este sitio (ver doctoralia_exception en memoria del
 * proyecto). Carga el script oficial de DocPlanner una sola vez y deja que
 * el propio widget reemplace el <a id="zl-url"> por su calendario embebido.
 * Requiere que next.config.ts permita platform.docplanner.com y
 * www.doctoralia.com.mx en el CSP (script-src/connect-src/frame-src).
 */
export default function DoctoraliaWidget() {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current || document.getElementById("zl-widget-s")) return;
    loaded.current = true;
    const js = document.createElement("script");
    js.id = "zl-widget-s";
    js.src = "https://platform.docplanner.com/js/widget.js";
    js.async = true;
    document.body.appendChild(js);
  }, []);

  return (
    <a
      id="zl-url"
      className="zl-url"
      href="https://www.doctoralia.com.mx/perfil/martha-hayde-llamas-rangel"
      rel="nofollow"
      data-zlw-doctor="martha-hayde-llamas-rangel"
      data-zlw-type="big_with_calendar"
      data-zlw-opinion="false"
      data-zlw-hide-branding="true"
      data-zlw-saas-only="true"
      data-zlw-a11y-title="Widget de reserva de citas médicas"
    >
      Reserve una cita
    </a>
  );
}
