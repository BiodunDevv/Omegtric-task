import { Eye, FileEdit, AlertTriangle, Award, Edit, BookCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { CourseProject } from "@/data/mock-data";

interface FinalProjectProps {
  project: CourseProject;
}

export function FinalProject({ project }: FinalProjectProps) {
  return (
    <Card className="flex flex-row items-start justify-between px-5 py-6 border-l-4 border-l-[#1A41BF]">
      <div className="flex gap-3.5">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-slate-100">
          <Award className="size-5 text-[#1A41BF]" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className="text-[13px] font-medium text-muted-foreground">
              Course Final Project
            </p>
            <Badge className="bg-[#BCE5C345] text-[#09B223] hover:bg-green-100 text-[11px] px-2 py-0">
              {project.status}
            </Badge>
          </div>
          <h3 className="mt-1 text-[15px] font-semibold text-foreground">
            {project.title}
          </h3>
          <p className="mt-0.5 max-w-lg text-[13px] leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="mt-2.5 flex items-center gap-5 text-[13px] text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <BookCheck className="size-3.5 text-[#1A41BF]" />
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

      <div className="flex shrink-0 items-center gap-2">
        <Button variant="outline" size="sm" className="gap-1.5 text-[13px]">
          <Eye className="size-3.5" />
          View Project
        </Button>
        <Button variant="outline" size="sm" className="gap-1.5 text-[13px]">
          <Edit className="size-3.5" />
          Edit Project
        </Button>
      </div>
    </Card>
  );
}
