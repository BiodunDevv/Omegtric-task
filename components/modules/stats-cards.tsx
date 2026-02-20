import { Layers, Users, GraduationCap, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { CourseStats } from "@/data/mock-data";

interface StatsCardsProps {
  stats: CourseStats;
}

const statConfig = [
  {
    key: "totalModules" as const,
    label: "Total Modules",
    icon: Layers,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    key: "totalFacilitators" as const,
    label: "Total Facilitators",
    icon: Users,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    key: "totalStudents" as const,
    label: "Total Students",
    icon: GraduationCap,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    key: "completionRate" as const,
    label: "Module\nCompletion Rate",
    icon: TrendingUp,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
  },
];

function formatValue(key: string, value: number): string {
  if (key === "completionRate") return `${value}%`;
  if (key === "totalStudents") return value.toLocaleString();
  return String(value);
}

export function StatsCards({ stats }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
      {statConfig.map((config) => {
        const Icon = config.icon;
        return (
          <Card
            key={config.key}
            className="flex flex-row items-center gap-3 px-6 py-9.5 rounded-md shadow-md border-none bg-[#f9f9f9] "
          >
            <div
              className={`flex size-11 items-center justify-center rounded-md ${config.iconBg}`}
            >
              <Icon className={`size-5 ${config.iconColor}`} />
            </div>
            <div>
              <p className="text-xl text-foreground leading-tight">
                {formatValue(config.key, stats[config.key])}
              </p>
              <p className="text-[11px] text-muted-foreground leading-tight whitespace-pre-line">
                {config.label}
              </p>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
