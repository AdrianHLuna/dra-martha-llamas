"use client";

import { useState, useEffect, useRef } from "react";
import type { Route } from "next";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Symptom } from "@/types/schema";
import EntityCard from "./EntityCard";

interface SymptomsCarouselProps {
  symptoms: Symptom[];
}

export default function SymptomsCarousel({ symptoms }: SymptomsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    function updateVisibleCount() {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 640) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    }
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, symptoms.length - visibleCount);

  // Asegurar que el índice no supere el máximo si la ventana cambia de tamaño
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Contenedor deslizante */}
      <div
        className="w-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`,
          }}
        >
          {symptoms.map((symptom, i) => (
            <div
              key={symptom.id}
              className="shrink-0 px-2 sm:px-3"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <EntityCard
                href={`/sintomas/${symptom.slug}` as Route}
                index={i}
                name={symptom.name}
                excerpt={`${symptom.description.slice(0, 95)}...`}
                image={symptom.image}
                categoryLabel="Síntoma"
                ctaLabel="Ver orientación médica"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Controles de navegación y paginación */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 px-2">
        {/* Indicadores de puntos (dots) */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Ir a síntoma ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-7 bg-primary"
                  : "w-2.5 bg-primary/20 hover:bg-primary/40"
              }`}
            />
          ))}
        </div>

        {/* Botones Anterior / Siguiente */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Síntoma anterior"
            className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-border bg-background text-[color:var(--color-ink)] transition-colors hover:bg-primary/10 disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            aria-label="Siguiente síntoma"
            className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-border bg-background text-[color:var(--color-ink)] transition-colors hover:bg-primary/10 disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

