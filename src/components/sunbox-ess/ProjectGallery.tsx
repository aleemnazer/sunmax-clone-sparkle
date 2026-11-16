import { useRef, useState, type KeyboardEvent, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import type { Project } from "./projects";

const SWIPE_THRESHOLD_PX = 40;

function projectDetails(p: Project): [string, string][] {
  const rows: [string, string | null][] = [
    ["Location", p.location.display],
    ["Capacity", p.capacityKw === null ? null : `${p.capacityKw} kW`],
    ["System type", p.systemType],
    ["Storage", p.storage],
    ["Inverter", p.inverter],
    ["System", p.systemNote],
    ["Equipment on site", p.equipmentOnSite],
  ];
  return rows.filter((r): r is [string, string] => r[1] !== null);
}

// Mount with `key={project.id}` so the photo index resets per project.
type Props = {
  project: Project;
  onClose: () => void;
};

export function ProjectGallery({ project, onClose }: Props) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const count = project.images.length;
  const image = project.images[index] ?? project.images[0];
  const hasMany = count > 1;
  const go = (delta: number) => setIndex((i) => (i + delta + count) % count);

  const onKeyDown = (e: KeyboardEvent) => {
    if (!hasMany) return;
    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(1);
  };
  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: TouchEvent) => {
    const start = touchStartX.current;
    const end = e.changedTouches[0]?.clientX;
    touchStartX.current = null;
    if (!hasMany || start === null || end === undefined) return;
    const dx = end - start;
    if (Math.abs(dx) >= SWIPE_THRESHOLD_PX) go(dx < 0 ? 1 : -1);
  };

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        onKeyDown={onKeyDown}
        className="max-h-[95dvh] w-[calc(100%-2rem)] max-w-4xl gap-0 overflow-y-auto rounded-lg p-0 [&>button:last-child]:z-10 [&>button:last-child]:rounded-full [&>button:last-child]:bg-background/85 [&>button:last-child]:p-2 [&>button:last-child]:opacity-100 [&>button:last-child]:shadow-card"
      >
        <figure
          className="relative bg-foreground"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {image && (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="mx-auto h-[55dvh] w-full object-contain sm:h-[65dvh]"
            />
          )}
          {hasMany && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-background/85 text-foreground shadow-card transition hover:bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next photo"
                className="absolute right-2 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-background/85 text-foreground shadow-card transition hover:bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <ChevronRight className="size-5" />
              </button>
            </>
          )}
          {image && (
            <figcaption className="flex items-start justify-between gap-4 bg-background px-5 pt-4 text-sm text-muted-foreground">
              <span>{image.alt}</span>
              {hasMany && (
                <span className="shrink-0 tabular-nums" aria-live="polite">
                  {index + 1} / {count}
                </span>
              )}
            </figcaption>
          )}
        </figure>

        <div className="p-5 sm:p-6">
          <p className="text-eyebrow">{project.sector} Sector</p>
          <DialogTitle className="mt-2 font-display text-xl font-bold uppercase leading-tight text-foreground">
            {project.displayTitle}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Photo gallery and system details for {project.displayTitle}
          </DialogDescription>
          <dl className="mt-4 grid gap-x-6 gap-y-3 text-sm sm:grid-cols-2">
            {projectDetails(project).map(([label, value]) => (
              <div key={label}>
                <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {label}
                </dt>
                <dd className="mt-0.5 text-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </DialogContent>
    </Dialog>
  );
}
