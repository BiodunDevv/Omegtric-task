"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  BookOpen,
  Layers,
  FileText,
  Users,
  GraduationCap,
  Megaphone,
  BarChart3,
  Settings,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Courses", href: "/courses", icon: BookOpen },
  { label: "Modules", href: "/", icon: Layers },
  { label: "Topics", href: "/topics", icon: FileText },
  { label: "Facilitators", href: "/facilitators", icon: Users },
  { label: "Students", href: "/students", icon: GraduationCap },
  { label: "Announcements", href: "/announcements", icon: Megaphone },
  { label: "Reports & Analytics", href: "/reports", icon: BarChart3 },
  { label: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-[240px] shrink-0 flex-col bg-white border-r border-border">
      <div className="flex h-20 justify-center items-center px-5 border-b border-border">
        <Image
          src="/logo.svg"
          alt="SkillsBridge"
          width={130}
          height={35}
          priority
        />
      </div>

      <nav className="pt-6 flex flex-1 flex-col gap-0.5 px-3 bg-[#233673]">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-colors ${
                isActive
                  ? "bg-[#599DCF] text-white"
                  : "text-[#475569] hover:bg-slate-100 hover:text-foreground text-white"
              }`}
            >
              <Icon className="size-[18px]" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
