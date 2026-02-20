import { Bell, LogOut, Menu } from "lucide-react";
import Image from "next/image";

interface TopbarProps {
  onMenuToggle: () => void;
}

export function Topbar({ onMenuToggle }: TopbarProps) {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-border bg-white px-4 sm:h-20 sm:px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuToggle}
          className="rounded-md p-2 text-muted-foreground hover:bg-muted lg:hidden"
          aria-label="Toggle sidebar"
        >
          <Menu className="size-5" />
        </button>
        <div>
          <h2 className="text-sm font-semibold text-foreground sm:text-[15px]">
            Welcome, Mrs. Tola!
          </h2>
          <p className="hidden text-xs text-muted-foreground sm:block">
            Manage your organization operations, users and learning programs.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button className="relative rounded-full p-2 text-muted-foreground hover:bg-muted">
          <Bell className="size-5" />
          <span className="absolute right-2 top-2 size-2 rounded-full bg-red-500" />
        </button>

        <div className="flex items-center gap-2.5">
          <div className="relative size-9 overflow-hidden rounded-full">
            <Image
              src="/profile.png"
              alt="Mrs. Tola"
              fill
              className="object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-foreground leading-tight">
              Mrs. Tola
            </p>
            <p className="text-[11px] text-muted-foreground leading-tight">
              Organization Admin
            </p>
          </div>
        </div>

        <button className="rounded-full p-2 text-muted-foreground hover:bg-muted">
          <LogOut className="size-4.5" />
        </button>
      </div>
    </header>
  );
}
