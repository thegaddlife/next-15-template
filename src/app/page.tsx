import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <main className="w-full max-w-2xl space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Next.js 15 Template</h1>
          <p className="text-muted-foreground mt-4">
            A modern template with TypeScript, Tailwind CSS, shadcn/ui, and
            essential dev tools
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Components</CardTitle>
              <CardDescription>
                Pre-configured shadcn/ui components with slate theme
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full">Primary Button</Button>
              <Button variant="secondary" className="w-full">
                Secondary Button
              </Button>
              <Button variant="outline" className="w-full">
                Outline Button
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
              <CardDescription>
                Everything you need to start your next project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>✅ Next.js 15 with App Router</li>
                <li>✅ TypeScript & Tailwind CSS</li>
                <li>✅ shadcn/ui components</li>
                <li>✅ ESLint & Prettier</li>
                <li>✅ Import sorting</li>
                <li>✅ pnpm package manager</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg">Get Started</Button>
        </div>
      </main>
    </div>
  );
}
