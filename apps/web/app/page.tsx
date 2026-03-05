import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <main className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold">The Estimator</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Monorepo powered by Turborepo
        </p>
        <Button>
          Open alert
        </Button>
      </main>
    </div>
  );
}
