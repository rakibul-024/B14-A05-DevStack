import type { Technology } from '../types/tech';

interface TechCardProps {
  tech: Technology;
  onAdd: (tech: Technology) => void;
  isSelected: boolean;
}

export const TechCard = ({ tech, onAdd, isSelected }: TechCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-4">
          <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
          {tech.badge && (
            <span className="text-[11px] font-semibold text-sky-500 bg-sky-50 px-2.5 py-1 rounded-full">
              {tech.badge}
            </span>
          )}
        </div>

        <h3 className="font-bold text-gray-900 text-lg mb-2">{tech.name}</h3>
        <p className="text-gray-500 text-xs leading-relaxed mb-6 line-clamp-3">
          {tech.description}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs text-gray-400 mb-4 pt-2">
          <span className="bg-gray-50 text-gray-600 px-2.5 py-1 rounded-md font-medium">
            {tech.category}
          </span>
          <span>{tech.difficulty ?? 'General'}</span>
          <span className="flex items-center gap-1 font-semibold text-gray-700">
            <span className="text-amber-400">★</span> {tech.rating}
          </span>
        </div>

        <button
          onClick={() => onAdd(tech)}
          disabled={isSelected}
          className={`w-full py-2.5 rounded-xl font-semibold text-xs transition-all cursor-pointer ${
            isSelected
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-slate-900 text-white hover:bg-slate-800 active:scale-[0.98]'
          }`}
        >
          {isSelected ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
};