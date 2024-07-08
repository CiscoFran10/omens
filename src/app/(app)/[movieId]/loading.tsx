import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <main className="container flex flex-col min-h-screen px-4 md:px-6 py-28 md:py-40">
      <div className="grid grid-cols-1 gap-8 md:gap-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.5fr_1fr] md:gap-12">
          <div className="overflow-hidden rounded-lg h-[600px]">
            <Skeleton className="object-cover w-full h-full" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-12" />

            <div className="flex items-center gap-4">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-20" />
            </div>

            <div className="flex items-center gap-2 text-yellow-500">
              <Skeleton className="w-5 h-5" />
              <Skeleton className="w-5 h-5" />
              <Skeleton className="w-5 h-5" />
              <Skeleton className="w-5 h-5" />
              <Skeleton className="w-5 h-5" />
            </div>

            <Skeleton className="h-32 w-full" />

            <div className='grid grid-cols-[0.2fr_1fr] gap-4'>
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-32 w-full" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
