"use client";

import type { FC } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export const CategoryFilter: FC<CategoryFilterProps> = ({
  categories,
  selected,
  onSelect,
}) => {
  return (
    <nav aria-label="Categories" className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <Button
          key={cat}
          variant={selected === cat ? "default" : "outline"}
          className={cn(
            "capitalize px-4 py-2 text-base font-medium transition",
            selected === cat && "ring-2 ring-primary/40"
          )}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </Button>
      ))}
    </nav>
  );
};
