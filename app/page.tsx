import { PlayerCard } from './components/PlayerCard';
import { players } from './data/players';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-valorant-red to-red-400 bg-clip-text text-transparent">
            From CS:GO to Valorant
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Elite players who transitioned from tier 1 Counter-Strike competitions to dominate Valorant esports
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {players.map((player) => (
            <PlayerCard key={player.name} player={player} />
          ))}
        </div>

        <footer className="mt-16 text-center text-gray-400 text-sm">
          <p>Data compiled from public esports records and tournament results</p>
        </footer>
      </div>
    </main>
  );
}
