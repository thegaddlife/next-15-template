import { Container } from "@/components/layout/container";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-14 items-center justify-end">
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
