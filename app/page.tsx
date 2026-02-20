"use client";

import { useState } from "react";
import { CourseHeader } from "@/components/modules/course-header";
import { StatsCards } from "@/components/modules/stats-cards";
import { ManageHeader } from "@/components/modules/manage-header";
import { FinalProject } from "@/components/modules/final-project";
import { ModuleList } from "@/components/modules/module-list";
import { courses } from "@/data/mock-data";

export default function ModulesPage() {
  const [activeCourseId, setActiveCourseId] = useState(courses[0].id);
  const activeCourse = courses.find((c) => c.id === activeCourseId)!;

  return (
    <div className="space-y-4 p-4 sm:space-y-6 sm:p-6">
      <CourseHeader
        courses={courses}
        activeCourseId={activeCourseId}
        onCourseChange={setActiveCourseId}
      />
      <StatsCards stats={activeCourse.stats} />
      <ManageHeader
        courseName={`${activeCourse.name} (${activeCourse.shortName})`}
      />
      <FinalProject project={activeCourse.project} />
      <ModuleList key={activeCourseId} initialModules={activeCourse.modules} />
    </div>
  );
}
