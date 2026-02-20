import { Award, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ManageHeaderProps {
  courseName: string;
}

export function ManageHeader({ courseName }: ManageHeaderProps) {
  return (
    <div className="flex items-start justify-between">
      <div>
        <h2 className="text-base font-semibold text-foreground">
          Manage Modules
        </h2>
        <p className="mt-0.5 text-[13px] text-muted-foreground">
          View and manage modules under{" "}
          <span className="font-medium text-foreground">{courseName}</span>
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm" className="gap-2 text-[13px]">
          <Award className="size-4" />
          Manage Course Final Project
        </Button>
        <Button
          size="sm"
          className="gap-2 text-[13px]"
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
