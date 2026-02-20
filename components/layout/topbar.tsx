import { Bell, LogOut } from "lucide-react";
import Image from "next/image";

export function Topbar() {
  return (
    <header className="flex h-20 shrink-0 items-center justify-between border-b border-border bg-white px-6">
      <div>
        <h2 className="text-[15px] font-semibold text-foreground">
          Welcome, Mrs. Tola!
        </h2>
        <p className="text-xs text-muted-foreground">
          Manage your organization operations, users and learning programs.
        </p>
      </div>

      <div className="flex items-center gap-3">
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
          <div>
            <p className="text-sm font-medium text-foreground leading-tight">
              Mrs. Tola
            </p>
            <p className="text-[11px] text-muted-foreground leading-tight">
              Organization Admin
            </p>
          </div>
        </div>

        <button className="rounded-full p-2 text-muted-foreground hover:bg-muted">
          <LogOut className="size-[18px]" />
        </button>
      </div>
    </header>
  );
}
