export default function HowItWorks() {
  return (
    <section className="section-wrapper text-center">
      <p className="section-subheading">How It Works</p>
      <h2 className="text-3xl font-bold mt-2">Simple, yet powerful</h2>
      <div className="mt-10 grid gap-10 md:grid-cols-3 text-left max-w-6xl mx-auto">
        <div>
          <h3 className="font-semibold text-lg mb-2 text-[var(--color-text)]">1. Start a Timer</h3>
          <p className="text-gray-600">Choose a Pomodoro session and get to work. The timer keeps you focused.</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2 text-[var(--color-text)]">2. Track Your Tasks</h3>
          <p className="text-gray-600">Add and complete tasks as you go. Visual progress helps keep momentum.</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2 text-[var(--color-text)]">3. Build Daily Streaks</h3>
          <p className="text-gray-600">Stay consistent and see your streak grow. It’s a game, and you win by showing up.</p>
        </div>
      </div>
    </section>
  );
}
