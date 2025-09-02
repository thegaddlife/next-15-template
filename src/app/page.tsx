import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <main className="text-center">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="mt-8 text-4xl font-bold">Next.js 15 Template</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          A modern template with TypeScript, Tailwind CSS, and essential dev
          tools
        </p>
        <div className="mt-8 flex gap-4">
          <a
            className="rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Docs
          </a>
          <a
            className="rounded-lg border border-gray-300 px-6 py-3 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800"
            href="https://github.com/vercel/next.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </main>
    </div>
  );
}
