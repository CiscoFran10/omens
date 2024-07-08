import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

export const MoviesListSkeleton = () => {
  return Array.from({ length: 6 }).map((_, i) => (
    <div key={i} className="w-full h-full">
      <div className=" aspect-[2/3] rounded-lg">
        <Skeleton className="block h-full w-full" />
      </div>

      <div className="mt-2 space-y-2 w-full">
        <Skeleton className="h-4 block w-2/3" />

        <div className="flex items-center gap-2 w-full">
          <Skeleton className="block h-4 w-12" />
          <Skeleton className="block h-4 w-12" />
        </div>
      </div>
    </div>
  ));
};
