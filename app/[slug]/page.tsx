import { Card } from "@/components/ui/card";
import { Construction, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PlaceholderPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PlaceholderPage({
  params,
}: PlaceholderPageProps) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="flex h-full flex-col items-center justify-center p-4 sm:p-6">
      <Card className="max-w-lg w-full px-6 py-10 text-center border-none shadow-none bg-transparent sm:px-10 sm:py-14">
        <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2D479C] to-[#101936]">
          <Construction className="size-7 text-white" />
        </div>
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-foreground">
          {title}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          This page is coming soon. The design for this section is currently not
          available yet.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/">
            <Button variant="outline" size="sm" className="gap-2 text-[13px]">
              <ArrowLeft className="size-3.5" />
              Back to Modules
            </Button>
          </Link>
        </div>
        <div className="mt-10 flex items-center justify-center gap-6 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-amber-400" />
            In Development
          </span>
        </div>
      </Card>
    </div>
  );
}
