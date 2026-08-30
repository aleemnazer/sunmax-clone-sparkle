import { TrendingDown, TrendingUp } from "lucide-react";
import { panelRates } from "./data";

export function RateTicker({ date }: { date: string }) {
  const loop = [...panelRates, ...panelRates];

  return (
    <div className="flex flex-col border-y border-border bg-surface sm:flex-row">
      <div className="flex shrink-0 items-center gap-3 bg-gradient-solar px-4 py-2.5 sm:px-5 sm:py-3">
        <span className="font-display text-xs font-bold uppercase tracking-widest text-primary-foreground sm:text-sm">
          Solar Panel Rates
        </span>
        <span className="hidden text-xs font-semibold text-primary-foreground/80 sm:inline">
          {date}
        </span>
      </div>
      <div className="group relative flex-1 overflow-hidden py-3">
        <div className="flex w-max animate-marquee items-center gap-8 group-hover:[animation-play-state:paused]">
          {loop.map((rate, i) => (
            <span key={`${rate.name}-${i}`} className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-sm font-medium text-foreground">{rate.name}</span>
              <span className="text-sm font-bold text-foreground">Rs {rate.price}</span>
              {rate.trend === "up" ? (
                <TrendingUp className="size-4 text-up" />
              ) : (
                <TrendingDown className="size-4 text-down" />
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
