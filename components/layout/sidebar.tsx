"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
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

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 flex h-screen w-60 shrink-0 flex-col bg-white border-r border-border transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex h-20 items-center justify-between lg:justify-center px-5 border-b border-border">
        <Image
          src="/logo.svg"
          alt="SkillsBridge"
          width={130}
          height={35}
          priority
        />
        <button
          onClick={onClose}
          className="rounded-md p-1 text-muted-foreground hover:bg-muted lg:hidden"
          aria-label="Close sidebar"
        >
          <X className="size-5" />
        </button>
      </div>

      <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto px-3 pt-6 bg-navy">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-colors ${
                isActive
                  ? "bg-sidebar-active text-white"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon className="size-4.5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
