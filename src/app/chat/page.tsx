export default function Chat() {
  return (
    <main className="max-h-screen min-h-[100svh] overflow-hidden">
      <div className="h-screen overflow-auto">
        <div className="border">
          {new Array(60).fill(0).map((_, i) => (
            <div
              key={i}
              className={`${
                i % 2 === 0 ? "bg-gray-100" : "bg-white"
              } flex h-16 items-center justify-center`}
            >
              {i}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
