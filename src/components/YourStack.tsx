import type { Technology } from '../types/tech';

interface YourStackProps {
  selectedTechs: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export const YourStack = ({ selectedTechs, onRemove, onRemoveAll }: YourStackProps) => {
  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xs sticky top-8">
      <h2 className="font-bold text-gray-900 text-xl mb-1">Your Stack</h2>

      {selectedTechs.length > 0 ? (
        <>
          <p className="text-xs text-gray-400 mb-6">
            {selectedTechs.length} {selectedTechs.length === 1 ? 'Technology' : 'Technologies'} Selected
          </p>

          <div className="space-y-3 mb-6">
            {selectedTechs.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3.5 border border-gray-100 rounded-2xl bg-white"
              >
                <div className="flex items-center gap-3">
                  <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                    <p className="text-[11px] text-gray-400">{item.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-gray-300 hover:text-red-500 p-1 rounded-full transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="w-full py-2.5 border border-red-200 text-red-500 rounded-2xl font-bold text-sm hover:bg-red-50 transition-colors cursor-pointer"
          >
            Remove All
          </button>
        </>
      ) : (
        <>
          <p className="text-xs text-gray-400 mb-6">No technologies selected yet.</p>
          <div className="border-2 border-dashed border-gray-100 rounded-2xl p-8 text-center">
            <p className="text-sm text-gray-400">Your stack is empty.</p>
          </div>
        </>
      )}
    </div>
  );
};