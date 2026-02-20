import {
  Eye,
  FileEdit,
  AlertTriangle,
  Award,
  Edit,
  BookCheck,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { CourseProject } from "@/data/mock-data";

interface FinalProjectProps {
  project: CourseProject;
}

export function FinalProject({ project }: FinalProjectProps) {
  return (
    <Card className="flex flex-col gap-4 px-4 py-5 border-l-4 border-l-accent-blue sm:flex-row sm:items-start sm:justify-between sm:px-5 sm:py-6">
      <div className="flex gap-3 sm:gap-3.5">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-slate-100">
          <Award className="size-5 text-accent-blue" />
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-[13px] font-medium text-muted-foreground">
              Course Final Project
            </p>
            <Badge className="bg-success-bg text-success hover:bg-green-100 text-[11px] px-2 py-0">
              {project.status}
            </Badge>
          </div>
          <h3 className="mt-1 text-[14px] font-semibold text-foreground sm:text-[15px]">
            {project.title}
          </h3>
          <p className="mt-0.5 max-w-lg text-[12px] leading-relaxed text-muted-foreground sm:text-[13px]">
            {project.description}
          </p>
          <div className="mt-2.5 flex flex-wrap items-center gap-4 text-[12px] text-muted-foreground sm:gap-5 sm:text-[13px]">
            <span className="flex items-center gap-1.5">
              <BookCheck className="size-3.5 text-accent-blue" />
              <span className="font-semibold text-foreground">
                {project.submissions}
              </span>{" "}
              Submissions
            </span>
            <span className="flex items-center gap-1.5">
              <AlertTriangle className="size-3.5 text-amber-500" />
              <span className="font-semibold text-foreground">
                {project.pendingReviews}
              </span>{" "}
              Pending Reviews
            </span>
          </div>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2 pl-13 sm:pl-0">
        <Button variant="outline" size="sm" className="gap-1.5 text-[13px]">
          <Eye className="size-3.5" />
          <span className="hidden xs:inline">View</span> Project
        </Button>
        <Button variant="outline" size="sm" className="gap-1.5 text-[13px]">
          <Edit className="size-3.5" />
          <span className="hidden xs:inline">Edit</span> Project
        </Button>
      </div>
    </Card>
  );
}
