import { Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  showTooltip?: boolean;
}

export default function StarRating({ rating, maxRating = 6, showTooltip = true }: StarRatingProps) {
  const stars = Array.from({ length: maxRating }, (_, i) => i + 1);

  const modernSection = (
    <div className="relative rounded-2xl shadow-[0_10px_30px_-12px_rgba(0,0,0,0.4)]">
      {/* Modern Glass Card */}
      <div className="rounded-2xl bg-gradient-to-br from-blue-700 via-purple-600 to-violet-700 ring-1 ring-white/20 p-8 md:p-10 text-center space-y-6 text-white">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-semibold uppercase tracking-wide">
          <CheckCircle className="w-5 h-5" data-testid="icon-approved" />
          <span data-testid="text-promotion-status">
            Promotion Approved: Promotable Beyond Reason
          </span>
        </div>

        {/* Reviewee Identity Block */}
        <div className="space-y-1 leading-relaxed">
          <div className="text-2xl md:text-3xl font-semibold" data-testid="text-reviewee">
            Freek Just Rijna
          </div>
          <div className="text-xs text-white/60">
            (alias: vrgrfrk)
          </div>
          <div className="text-base md:text-lg text-white/80" data-testid="text-title">
            Founder & Six-Star Product Builder, StringKick Games™
          </div>
        </div>

        {/* Star Progression Badge */}
        <div className="flex items-center justify-center gap-4">
          <Badge className="text-base bg-amber-400 text-black font-bold border-0 flex items-center gap-2">
            <Star className="w-4 h-4 fill-current" />
            From 5-Star to 6-Star Product Builder
          </Badge>
        </div>

        {/* Stars Display */}
        <TooltipProvider>
          <div className="flex items-center justify-center gap-3 py-4">
            {stars.map((star) => {
              const isSpecialStar = star === 6 && star <= rating;
              return (
                <div key={star} className={isSpecialStar ? "relative" : ""}>
                  {isSpecialStar && showTooltip ? (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button 
                          className="rounded-full ring-2 ring-yellow-500/70 p-1 focus:outline-none focus:ring-4 focus:ring-yellow-500/50 animate-pulse" 
                          data-testid="tooltip-trigger"
                          tabIndex={0}
                        >
                          <Star
                            className="w-10 h-10 fill-yellow-500 text-yellow-500 drop-shadow-lg"
                            data-testid={`star-${star}`}
                          />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent 
                        className="bg-white/10 backdrop-blur-xl text-white/90 border-white/20"
                        data-testid="curved-arrow"
                      >
                        Benchmark exceeded, metric redefined.
                      </TooltipContent>
                    </Tooltip>
                  ) : (
                    <Star
                      className={`w-10 h-10 ${
                        star <= rating ? (star === 6 ? 'fill-yellow-500 text-yellow-500' : 'fill-yellow-400 text-yellow-400') : 'text-white/30'
                      }`}
                      data-testid={`star-${star}`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </TooltipProvider>

        {/* KPI Chip */}
        <div className="inline-flex px-4 py-2 rounded-full bg-white/10 text-white/90">
          <div className="text-lg md:text-xl font-semibold" data-testid="text-kpi">
            "15/10 Licenses Sold — Exceeding Expectations by 150%."
          </div>
        </div>

      </div>
    </div>
  );

  return modernSection;
}