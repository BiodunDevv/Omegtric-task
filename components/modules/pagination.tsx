import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-1.5 pt-6 pb-2">
      <Button
        variant="outline"
        size="sm"
        className="gap-1 text-[13px] h-8"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronLeft className="size-3.5" />
        Previous
      </Button>
      <span className="px-4 text-[13px] text-muted-foreground">
        Page {currentPage} of {totalPages}
      </span>
      <Button
        variant="outline"
        size="sm"
        className="gap-1 text-[13px] font-semibold h-8"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
        <ChevronRight className="size-3.5" />
      </Button>
    </div>
  );
}
