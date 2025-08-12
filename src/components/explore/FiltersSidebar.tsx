import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

export type Filters = {
  categories: string[];
  minRating: number;
  maxPrice: number;
  levels: string[]; // Beginner, Intermediate, Advanced
};

export function FiltersSidebar({ value, onChange }: { value: Filters; onChange: (v: Filters) => void; }) {
  const toggle = (arr: string[], item: string) => arr.includes(item) ? arr.filter(i => i !== item) : [...arr, item];

  return (
    <aside className="glass rounded-xl p-4 sticky top-24 h-fit">
      <div className="font-medium">Filters</div>
      <div className="mt-4 space-y-5">
        <div>
          <div className="text-sm mb-2">Categories</div>
          <div className="grid grid-cols-1 gap-2">
            {['ChatGPT','Data Science','Python','Machine Learning','Deep Learning','AI'].map(cat => (
              <label key={cat} className="flex items-center gap-2 text-sm">
                <Checkbox checked={value.categories.includes(cat)} onCheckedChange={() => onChange({ ...value, categories: toggle(value.categories, cat) })} />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between text-sm mb-2">
            <span>Minimum rating</span>
            <span className="subtle">{value.minRating}+</span>
          </div>
          <Slider value={[value.minRating]} min={0} max={5} step={0.5} onValueChange={(v) => onChange({ ...value, minRating: v[0] })} />
        </div>
        <div>
          <div className="flex items-center justify-between text-sm mb-2">
            <span>Max price</span>
            <span className="subtle">${value.maxPrice}</span>
          </div>
          <Slider value={[value.maxPrice]} min={0} max={200} step={5} onValueChange={(v) => onChange({ ...value, maxPrice: v[0] })} />
        </div>
        <div>
          <div className="text-sm mb-2">Difficulty</div>
          <div className="grid gap-2">
            {['Beginner','Intermediate','Advanced'].map(level => (
              <label key={level} className="flex items-center gap-2 text-sm">
                <Checkbox checked={value.levels.includes(level)} onCheckedChange={() => onChange({ ...value, levels: toggle(value.levels, level) })} />
                <span>{level}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
