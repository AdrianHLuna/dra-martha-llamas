"use client";

import { useEffect, useRef, useState } from "react";

type Status = "loading" | "ok" | "fallback";

/**
 * Widget real de reserva de citas de Doctoralia — excepción deliberada a la
 * regla general de "nunca formularios" de AGENTS.md §7, pedida explícitamente
 * por la usuaria para este sitio (ver doctoralia_exception en memoria del
 * proyecto). Carga el script oficial de DocPlanner y deja que reemplace el
 * <a id="zl-url"> por su calendario embebido.
 *
 * El widget SÍ se inicializa correctamente (el script carga, crea un iframe
 * real hacia www.doctoralia.com.mx), pero el servidor de Doctoralia rechaza
 * la petición al probarse desde `localhost` (casi seguro por validación de
 * dominio del lado del servidor — el perfil real de la doctora está activo,
 * con 1,111 reseñas) y devuelve un iframe diminuto (~150px) con el ícono
 * nativo del navegador de "no se pudo cargar el frame". Es esperable que
 * funcione completo una vez desplegado en el dominio final.
 *
 * Para que el ícono roto nunca sea visible al usuario — ni en producción si
 * algún día fallara por cualquier otra razón —, el contenedor donde
 * Doctoralia inyecta su iframe permanece oculto hasta confirmar que el
 * iframe realmente cargó con una altura razonable (calendario real, no un
 * error). Si no, se muestra un botón de respaldo bien diseñado hacia el
 * perfil real en Doctoralia.com.mx.
 */
export default function DoctoraliaWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    if (!document.getElementById("zl-widget-s")) {
      const js = document.createElement("script");
      js.id = "zl-widget-s";
      js.src = "https://platform.docplanner.com/js/widget.js";
      js.async = true;
      document.body.appendChild(js);
    }

    const timer = setTimeout(() => {
      const iframe = containerRef.current?.querySelector("iframe");
      setStatus(iframe && iframe.offsetHeight > 250 ? "ok" : "fallback");
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      <div ref={containerRef} className={status === "ok" ? "" : "hidden"}>
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
      </div>

      {status === "loading" && (
        <div className="h-[72px] w-full animate-pulse rounded-2xl bg-[color:var(--color-lavender)]/30" aria-hidden="true" />
      )}

      {status === "fallback" && (
        <a
          href="https://www.doctoralia.com.mx/perfil/martha-hayde-llamas-rangel"
          target="_blank"
          rel="noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-center text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02]"
        >
          Reservar en Doctoralia.com.mx
        </a>
      )}
    </div>
  );
}
