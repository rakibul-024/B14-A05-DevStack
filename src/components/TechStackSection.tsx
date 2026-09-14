import { use, useState } from 'react';
import { toast } from 'react-toastify';
import type { Technology } from '../types/tech';
import { TechCard } from './TechCard';
import { YourStack } from './YourStack';

interface TechStackSectionProps {
  techPromise: Promise<Technology[]>;
}

export function TechStackSection({ techPromise }: TechStackSectionProps) {

  const technologies = use(techPromise);
  const [selectedTechs, setSelectedTechs] = useState<Technology[]>([]);

  const handleAddToStack = (tech: Technology) => {
    if (selectedTechs.some((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack`);
      return;
    }

    setSelectedTechs((prev) => [...prev, tech]);
    toast.success(`${tech.name} Selected successfully`);
  };

  const handleRemoveFromStack = (id: string) => {
    const itemToRemove = selectedTechs.find((item) => item.id === id);

    setSelectedTechs((prev) => prev.filter((item) => item.id !== id));

    if (itemToRemove) {
      toast.info(`${itemToRemove.name} removed from your stack`);
    }
  };

  const handleRemoveAll = () => {
    if (selectedTechs.length > 0) {
      setSelectedTechs([]);
      toast.error('All technologies removed');
    } else {
      toast.info('Your stack is already empty');
    }
  };

  return (
    <main id="technologies" className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
      <div className="mb-10">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          Explore the <span className="text-pink-500">Technologies</span>
        </h2>
        <p className="text-gray-400 text-sm">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <TechCard
              key={tech.id}
              tech={tech}
              onAdd={handleAddToStack}
              isSelected={selectedTechs.some((item) => item.id === tech.id)}
            />
          ))}
        </div>

        <div className="lg:col-span-1">
          <YourStack
            selectedTechs={selectedTechs}
            onRemove={handleRemoveFromStack}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </main>
  );
}