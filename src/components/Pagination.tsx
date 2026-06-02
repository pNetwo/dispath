import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./Button";

type Props = {
  current: number;
  total: number;
  onNext: () => void;
  onPrevious: () => void;
};

export function Pagination({ current, total, onNext, onPrevious }: Props) {
  return (
    <div className="flex justify-center items-center gap-4 h-12">
      <Button
        onClick={onPrevious}
        disabled={current === 1}
        isLoading
        className="mt-0 w-8 h-8"
      >
        <ChevronLeft />
      </Button>
      <span className="text-sm text-neutral">
        {current}/{total}
      </span>
      <Button
        onClick={onNext}
        disabled={current === total}
        isLoading
        className="mt-0 h-8 w-8"
      >
        <ChevronRight />
      </Button>
    </div>
  );
}
