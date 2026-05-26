import { type LucideIcon } from "lucide-react";

interface LayoutHeaderProps {
  title: string;
  subtitle: string;
  cards: Card[];
}

interface Card {
  title: string;
  value: string;
  iconValue: LucideIcon;
  iconDescription: LucideIcon;
  description: string;
  descriptionColor: string;
}

export function LayoutHeader({ title, subtitle, cards }: LayoutHeaderProps) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col mb-8">
        <h1 className="text-3xl font-bold text-primary">{title}</h1>
        <p className=" text-sm font-semibold text-neutral">{subtitle}</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {cards.map((card) => {
          const IconValue = card.iconValue;
          const IconDescription = card.iconDescription;

          return (
            <div
              key={card.title}
              className="w-full p-4 border border-zinc-400 rounded-lg bg-white flex flex-col gap-3   "
            >
              <h3 className="uppercase text-sm font-semibold text-zinc-700">
                {card.title}
              </h3>
              <span className="text-primary font-bold text-2xl flex justify-between items-center">
                {card.value}
                <IconValue size={32} className="text-zinc-300" />
              </span>
              <p
                className={`${card.descriptionColor} text-xxs flex items-center gap-1`}
              >
                <IconDescription size={16} />
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
