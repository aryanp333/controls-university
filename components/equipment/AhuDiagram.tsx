"use client";

import type { EquipmentComponentId } from "@/lib/types";
import { cn } from "@/lib/utils";

import { EquipmentHotspot } from "./EquipmentHotspot";
import { OutsideAirDamperVisual } from "./OutsideAirDamperVisual";

interface AhuDiagramProps {
  selectedId: EquipmentComponentId | null;
  onSelect: (id: EquipmentComponentId) => void;
  oadDamperOpenPercent?: number;
  isRepairing?: boolean;
  className?: string;
}

const HOTSPOTS: {
  id: EquipmentComponentId;
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
}[] = [
  { id: "outside-air-damper", label: "OA Damper", x: 48, y: 120, width: 56, height: 100 },
  { id: "return-air-damper", label: "RA Damper", x: 48, y: 280, width: 56, height: 80 },
  { id: "mixed-air-sensor", label: "Mixed Air", x: 160, y: 195, width: 64, height: 48 },
  { id: "filter", label: "Filter", x: 280, y: 175, width: 80, height: 88 },
  { id: "supply-fan", label: "Supply Fan", x: 410, y: 165, width: 96, height: 108 },
  {
    id: "supply-air-temp-sensor",
    label: "SAT Sensor",
    x: 580,
    y: 195,
    width: 72,
    height: 48,
  },
];

export function AhuDiagram({
  selectedId,
  onSelect,
  oadDamperOpenPercent = 0,
  isRepairing = false,
  className,
}: AhuDiagramProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-lg border border-border/60 bg-card/30",
        className,
      )}
    >
      <div className="border-b border-border/60 px-5 py-3">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
          AHU-2 — Equipment View
        </h2>
        <p className="text-xs text-muted-foreground">
          North Ridge Office Building · Mechanical Room 2
        </p>
      </div>

      <div className="flex flex-1 items-center justify-center p-6">
        <svg
          viewBox="0 0 720 420"
          className="h-full max-h-[480px] w-full max-w-4xl"
          aria-label="Air Handling Unit diagram"
        >
          {/* Unit cabinet */}
          <rect
            x={24}
            y={80}
            width={672}
            height={260}
            rx={8}
            className="fill-muted/20 stroke-border/80"
            strokeWidth={1.5}
          />

          {/* Ductwork */}
          <path
            d="M 104 145 L 160 170 L 280 170 L 580 170 L 680 170"
            className="stroke-muted-foreground/40"
            strokeWidth={12}
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 104 320 L 160 220"
            className="stroke-muted-foreground/40"
            strokeWidth={10}
            fill="none"
            strokeLinecap="round"
          />

          {/* OA intake */}
          <rect
            x={8}
            y={110}
            width={40}
            height={120}
            rx={4}
            className="fill-muted/30 stroke-border/60"
          />
          <text x={28} y={105} textAnchor="middle" className="fill-muted-foreground text-[10px]">
            OA
          </text>

          {/* RA intake */}
          <rect
            x={8}
            y={270}
            width={40}
            height={80}
            rx={4}
            className="fill-muted/30 stroke-border/60"
          />
          <text x={28} y={365} textAnchor="middle" className="fill-muted-foreground text-[10px]">
            RA
          </text>

          {/* Supply duct */}
          <rect
            x={640}
            y={155}
            width={48}
            height={30}
            rx={4}
            className="fill-muted/30 stroke-border/60"
          />
          <text x={664} y={148} textAnchor="middle" className="fill-muted-foreground text-[10px]">
            SUPPLY
          </text>

          {/* Fan symbol */}
          <circle
            cx={458}
            cy={219}
            r={36}
            className="fill-primary/10 stroke-primary/40"
            strokeWidth={1.5}
          />
          <circle
            cx={458}
            cy={219}
            r={6}
            className="fill-primary/60"
          />
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <line
              key={angle}
              x1={458}
              y1={219}
              x2={458 + Math.cos((angle * Math.PI) / 180) * 28}
              y2={219 + Math.sin((angle * Math.PI) / 180) * 28}
              className="stroke-primary/50"
              strokeWidth={2}
            />
          ))}

          {/* Filter hatching */}
          <line x1={295} y1={178} x2={295} y2={260} className="stroke-border/80" strokeWidth={1} />
          <line x1={310} y1={178} x2={310} y2={260} className="stroke-border/80" strokeWidth={1} />
          <line x1={325} y1={178} x2={325} y2={260} className="stroke-border/80" strokeWidth={1} />
          <line x1={340} y1={178} x2={340} y2={260} className="stroke-border/80" strokeWidth={1} />

          {HOTSPOTS.filter((hotspot) => hotspot.id !== "outside-air-damper").map((hotspot) => (
            <EquipmentHotspot
              key={hotspot.id}
              {...hotspot}
              isSelected={selectedId === hotspot.id}
              onSelect={(id) => onSelect(id as EquipmentComponentId)}
            />
          ))}

          <OutsideAirDamperVisual
            openPercent={oadDamperOpenPercent}
            isRepairing={isRepairing}
          />
          <EquipmentHotspot
            id="outside-air-damper"
            label="OA Damper"
            x={48}
            y={120}
            width={56}
            height={100}
            isSelected={selectedId === "outside-air-damper"}
            onSelect={(id) => onSelect(id as EquipmentComponentId)}
          />
        </svg>
      </div>
    </div>
  );
}
