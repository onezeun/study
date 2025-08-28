import UI from "./ui";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl p-10 text-center">
      <main>
        <h1 className="text-bold text-2xl">TODO LIST</h1>
        <UI />
      </main>
    </div>
  );
}
