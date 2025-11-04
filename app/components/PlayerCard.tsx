interface Player {
  name: string;
  ign: string;
  nationality: string;
  currentTeam: string;
  csTeams: string[];
  csMajorTitles: number;
  valorantTitles: string[];
  role: string;
}

export function PlayerCard({ player }: { player: Player }) {
  return (
    <div className="bg-valorant-dark rounded-lg p-6 border border-gray-800 hover:border-valorant-red transition-all duration-300 hover:shadow-lg hover:shadow-valorant-red/20">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-white">{player.ign}</h2>
          <p className="text-gray-400 text-sm">{player.name}</p>
          <p className="text-gray-500 text-xs mt-1">{player.nationality}</p>
        </div>
        <div className="text-right">
          <span className="inline-block px-3 py-1 bg-valorant-red/20 text-valorant-red text-xs font-semibold rounded-full">
            {player.role}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-400 mb-2">Current Team</h3>
          <p className="text-white font-medium">{player.currentTeam}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-400 mb-2">CS:GO Legacy</h3>
          <div className="flex flex-wrap gap-2 mb-2">
            {player.csTeams.map((team) => (
              <span
                key={team}
                className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
              >
                {team}
              </span>
            ))}
          </div>
          {player.csMajorTitles > 0 && (
            <p className="text-xs text-yellow-400">
              🏆 {player.csMajorTitles} CS:GO Major{player.csMajorTitles > 1 ? 's' : ''}
            </p>
          )}
        </div>

        {player.valorantTitles.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-2">Valorant Achievements</h3>
            <ul className="space-y-1">
              {player.valorantTitles.map((title) => (
                <li key={title} className="text-sm text-gray-300">
                  • {title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
