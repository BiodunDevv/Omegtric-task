import {
  Eye,
  Trash2,
  BookOpen,
  Clock,
  CheckCircle2,
  Mail,
  UserX,
  SquarePen,
  Layers,
  CircleX,
  GraduationCap,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import type { Module } from "@/data/mock-data";

interface ModuleCardProps {
  module: Module;
  onDelete: (id: string) => void;
}

function AdminStatusBadge({ module }: { module: Module }) {
  const base =
    "inline-flex gap-2.5 rounded-sm px-3 py-2.5 w-full sm:px-3.5 sm:py-3 sm:w-75";

  switch (module.adminStatus) {
    case "active":
      return (
        <div className={`${base} border border-green-200 bg-success-bg-solid`}>
          <CheckCircle2 className="size-3.5 shrink-0 text-green-600 mt-0.5" />
          <div>
            <p className="text-[12px] font-semibold text-success leading-tight">
              Active
            </p>
            <p className="text-[10px] text-black">Admin has dashboard access</p>
          </div>
        </div>
      );
    case "invite-sent":
      return (
        <div className={`${base} border border-blue-200 bg-blue-50`}>
          <Mail className="size-3.5 shrink-0 text-blue-600 mt-0.5" />
          <div>
            <p className="text-[12px] font-semibold text-blue-700 leading-tight">
              Invite Sent
            </p>
            <p className="text-[10px] text-black">
              Awaiting profile completion
            </p>
          </div>
        </div>
      );
    case "expired":
      return (
        <div className={`${base} justify-between border border-red-200 bg-red-50`}>
          <div className="flex gap-2">
            <CircleX className="size-3.5 shrink-0 text-red-600 mt-0.5" />
            <div>
              <p className="text-[12px] font-semibold text-red-700 leading-tight">
                Expired link
              </p>
              <p className="text-[10px] text-black">Invitation link expired</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="xs"
            className="ml-1 text-[10px] h-5 rounded-sm bg-white"
          >
            Resend Invite
          </Button>
        </div>
      );
    case "inactive":
      return (
        <div className={`${base} justify-between border border-gray-200 bg-gray-100`}>
          <div className="flex gap-2">
            <UserX className="size-3.5 shrink-0 text-gray-500 mt-0.5" />
            <div>
              <p className="text-[12px] font-semibold text-gray-700 leading-tight">
                Inactive
              </p>
              <p className="text-[10px] text-black">No admin assigned</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="xs"
            className="ml-1 text-[10px] h-5 rounded-sm bg-white"
          >
            Assign Admin
          </Button>
        </div>
      );
  }
}

export function ModuleCard({ module, onDelete }: ModuleCardProps) {
  return (
    <Card className="px-4 py-4 sm:px-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-slate-100">
            <Layers className="size-5 text-accent-blue" />
          </div>
          <div className="flex flex-wrap items-center gap-2 pt-0.5">
           <h3 className="text-[15px] font-semibold text-foreground leading-tight whitespace-pre-line">
              {module.code} — {module.name.replace(/ & /g, " &\n")}
            </h3>
            <Badge
              className={
                module.status === "active"
                  ? "bg-success-bg text-success hover:bg-green-100 text-[11px] px-2 py-0"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-100 text-[11px] px-2 py-0"
              }
            >
              {module.status === "active" ? "Active" : "Inactive"}
            </Badge>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-1.5 pl-13 sm:pl-0">
          <Button
            variant="outline"
            size="sm"
            className="gap-1.5 text-[12px] h-8"
          >
            <Eye className="size-3.5" />
            <span className="xs:hidden">View Details</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="gap-1.5 text-[12px] h-8"
          >
            <SquarePen className="size-3.5" />
            Edit
          </Button>
          <Button
            variant="outline"
            size="icon-sm"
            className="text-red-500"
            onClick={() => onDelete(module.id)}
          >
            <Trash2 className="size-3.5" />
          </Button>
        </div>
      </div>

      {/* Details section */}
      <div className="mt-3 ml-0 sm:ml-13">
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <div>
            <p className="text-[12px] text-muted-foreground">Assigned Admin</p>
            <p className="mt-0.5 text-[14px] font-semibold text-foreground">
              {module.admin ? module.admin.name : "Not Assigned"}
            </p>
            {module.admin && (
              <p className="text-[12px] text-muted-foreground">
                {module.admin.email}
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-end gap-3 text-[12px] text-muted-foreground sm:gap-4 sm:justify-end">
            <span className="flex items-center gap-1.5">
              <BookOpen className="size-3.5" />
              {module.topicsCount} Topics
            </span>
            <span className="flex items-center gap-1.5">
              <GraduationCap className="size-3.5" />
              {module.studentsCount} Students
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5" />
              {module.duration}
            </span>
          </div>
        </div>

        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-end">
          <AdminStatusBadge module={module} />

          <div className="flex flex-col gap-1.5 w-full sm:max-w-70">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-muted-foreground">
                Avg. Completion Progress
              </span>
              <span className="text-[13px] font-bold text-foreground">
                {module.avgCompletion}%
              </span>
            </div>
            <Progress value={module.avgCompletion} className="h-1.5 w-full" />
          </div>
        </div>
      </div>
    </Card>
  );
}
