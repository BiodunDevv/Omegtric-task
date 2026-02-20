import { Award, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ManageHeaderProps {
  courseName: string;
}

export function ManageHeader({ courseName }: ManageHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h2 className="text-base font-semibold text-foreground">
          Manage Modules
        </h2>
        <p className="mt-0.5 text-[13px] text-muted-foreground">
          View and manage modules under{" "}
          <span className="font-medium text-foreground">{courseName}</span>
        </p>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <Button
          variant="outline"
          size="sm"
          className="gap-2 text-[12px] sm:text-[13px]"
        >
          <Award className="size-4" />
          <span className="hidden sm:inline">Manage Course</span> Final Project
        </Button>
        <Button
          size="sm"
          className="gap-2 text-[12px] sm:text-[13px]"
          style={{
            background:
              "linear-gradient(90deg, #2D479C 0.07%, #101936 127.65%)",
          }}
        >
          <Plus className="size-4" />
          Create Module
        </Button>
      </div>
    </div>
  );
}
