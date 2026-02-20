"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Course } from "@/data/mock-data";

interface CourseHeaderProps {
  courses: Course[];
  activeCourseId: string;
  onCourseChange: (courseId: string) => void;
}

export function CourseHeader({
  courses,
  activeCourseId,
  onCourseChange,
}: CourseHeaderProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const activeCourse = courses.find((c) => c.id === activeCourseId)!;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="flex items-center justify-between px-8 py-6 text-white"
      style={{
        borderRadius: "15px",
        background: "linear-gradient(90deg, #2D479C 0.07%, #101936 127.65%)",
        boxShadow: "0 4px 46px -14px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div>
        <p className="text-[11px] font-medium tracking-wide text-white/70">
          {activeCourse.institution}
        </p>
        <h1 className="mt-0.5 text-xl font-bold tracking-tight">
          {activeCourse.name} ({activeCourse.shortName})
        </h1>
      </div>

      <div className="relative" ref={dropdownRef}>
        <Button
          variant="outline"
          size="sm"
          className="gap-1.5 border-white/30 bg-white text-navy font-medium hover:bg-white/90 hover:text-navy"
          onClick={() => setOpen((prev) => !prev)}
        >
          Switch Course
          <ChevronDown
            className={`size-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </Button>

        {open && (
          <div className="absolute right-0 top-full z-50 mt-2 w-72 overflow-hidden rounded-lg border border-white/10 bg-white shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="px-3 py-2 border-b border-slate-100">
              <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                Select a course
              </p>
            </div>
            {courses.map((course) => {
              const isActive = course.id === activeCourseId;
              return (
                <button
                  key={course.id}
                  onClick={() => {
                    onCourseChange(course.id);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between gap-3 px-3 py-2.5 text-left transition-colors hover:bg-slate-50 ${
                    isActive ? "bg-slate-50" : ""
                  }`}
                >
                  <div>
                    <p className="text-[13px] font-semibold text-foreground leading-tight">
                      {course.name} ({course.shortName})
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      {course.stats.totalModules} modules ·{" "}
                      {course.stats.totalStudents.toLocaleString()} students
                    </p>
                  </div>
                  {isActive && (
                    <Check className="size-4 shrink-0 text-green-600" />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
