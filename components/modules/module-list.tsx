"use client";

import { useState, useMemo } from "react";
import { SearchFilter } from "@/components/modules/search-filter";
import { ModuleCard } from "@/components/modules/module-card";
import { Pagination } from "@/components/modules/pagination";
import type { Module, ModuleStatus } from "@/data/mock-data";

function filterModules(
  modules: Module[],
  searchQuery: string,
  statusFilter: ModuleStatus | "all",
): Module[] {
  return modules.filter((mod) => {
    const matchesSearch =
      searchQuery === "" ||
      mod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mod.code.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || mod.status === statusFilter;
    return matchesSearch && matchesStatus;
  });
}

function paginateItems<T>(items: T[], page: number, perPage: number) {
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * perPage;
  return {
    items: items.slice(start, start + perPage),
    totalPages,
    currentPage: safePage,
  };
}

const ITEMS_PER_PAGE = 4;

interface ModuleListProps {
  initialModules: Module[];
}

export function ModuleList({ initialModules }: ModuleListProps) {
  const [modules, setModules] = useState<Module[]>(initialModules);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<ModuleStatus | "all">("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(
    () => filterModules(modules, searchQuery, statusFilter),
    [modules, searchQuery, statusFilter],
  );

  const {
    items,
    totalPages,
    currentPage: safePage,
  } = useMemo(
    () => paginateItems(filtered, currentPage, ITEMS_PER_PAGE),
    [filtered, currentPage],
  );

  function handleSearchChange(value: string) {
    setSearchQuery(value);
    setCurrentPage(1);
  }

  function handleStatusChange(value: ModuleStatus | "all") {
    setStatusFilter(value);
    setCurrentPage(1);
  }

  function handleDelete(id: string) {
    setModules((prev) => prev.filter((m) => m.id !== id));
  }

  return (
    <div className="space-y-4">
      <SearchFilter
        searchQuery={searchQuery}
        statusFilter={statusFilter}
        onSearchChange={handleSearchChange}
        onStatusChange={handleStatusChange}
      />

      <div className="space-y-4">
        {items.length > 0 ? (
          items.map((mod) => (
            <ModuleCard key={mod.id} module={mod} onDelete={handleDelete} />
          ))
        ) : (
          <div className="rounded-lg border border-dashed p-8 text-center text-sm text-muted-foreground">
            No modules found matching your search criteria.
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={safePage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
