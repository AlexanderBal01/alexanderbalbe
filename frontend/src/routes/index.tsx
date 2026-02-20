import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="flex grow">
      <section>test</section>
      <section>test2</section>
    </div>
  );
}
