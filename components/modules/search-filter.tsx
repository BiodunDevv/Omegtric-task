"use client";

import { Funnel, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { ModuleStatus } from "@/data/mock-data";

interface SearchFilterProps {
  searchQuery: string;
  statusFilter: ModuleStatus | "all";
  onSearchChange: (value: string) => void;
  onStatusChange: (value: ModuleStatus | "all") => void;
}

export function SearchFilter({
  searchQuery,
  statusFilter,
  onSearchChange,
  onStatusChange,
}: SearchFilterProps) {
  return (
    <div className="rounded-xl bg-white px-3 py-3 border-b border-slate-100 sm:px-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search modules..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 bg-input-bg border-0 shadow-none text-sm h-10 rounded-lg placeholder:text-muted-foreground focus-visible:ring-0"
          />
        </div>
        <div className="flex items-center gap-4 bg-input-bg h-10 px-3 rounded-lg shrink-0">
          <Funnel className="size-4 shrink-0 text-muted-foreground" />
          <Select
            value={statusFilter}
            onValueChange={(val) => onStatusChange(val as ModuleStatus | "all")}
          >
            <SelectTrigger className="w-32.5 h-full text-sm border-0 shadow-none rounded-lg focus:ring-0 p-0">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
