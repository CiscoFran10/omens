'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { StarIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

interface StarReviewProps {
  movieId: string;
}

export const StarReview = ({ movieId }: StarReviewProps) => {
  const [ratings, setRatings] = useState<{ [movieId: string]: number }>({});
  const [hoveredStar, setHoveredStar] = useState<number>(ratings[movieId]);

  const handleMouseEnter = (starValue: number) => {
    setHoveredStar(starValue);
  };

  const handleMouseLeave = () => {
    setHoveredStar(ratings[movieId]);
  };

  useEffect(() => {
    const storedRatings = localStorage.getItem('ratings');
    if (storedRatings) {
      setRatings(JSON.parse(storedRatings));
    }
  }, []);

  const handleStarClick = (starValue: number) => {
    const newRatings = { ...ratings, [movieId]: starValue };
    setRatings(newRatings);

    localStorage.setItem('ratings', JSON.stringify(newRatings));

    toast('Review enviado 🥳.', {
      description: 'Obrigado por compartilhar sua opinião.',
    });
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipContent side="bottom" align="center">
          <p>Deixe seu review</p>
        </TooltipContent>

        <TooltipTrigger className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((starValue) => (
            <StarIcon
              key={starValue}
              className={`w-5 h-5 text-yellow-500 cursor-pointer transition-all  ${
                starValue <= (ratings[movieId] || 0) || starValue <= hoveredStar
                  ? 'fill-yellow-500'
                  : ''
              }`}
              onClick={() => handleStarClick(starValue)}
              onMouseEnter={() => handleMouseEnter(starValue)}
              onMouseLeave={() => handleMouseLeave()}
            />
          ))}
        </TooltipTrigger>
      </Tooltip>
    </TooltipProvider>
  );
};
