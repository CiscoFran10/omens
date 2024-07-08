'use client';

import React, { FormEvent, useState } from 'react';
import { Input } from '@/components/ui/input';
import { useRouter, useSearchParams } from 'next/navigation';

export const MovieSearchInput = () => {
  const movieTitle = useSearchParams().get('title') || '';
  const router = useRouter();
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const handleSearchMovie = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const movieTitle = data.get('title')?.toString().toLowerCase();

    if (timer) {
      clearTimeout(timer);
    }

    setTimer(
      setTimeout(() => {
        if (movieTitle === '') {
          router.push('/');
        } else {
          router.push(`/?title=${movieTitle}`);
        }
      }, 300)
    );
  };

  return (
    <form onChange={handleSearchMovie}>
      <Input
        defaultValue={movieTitle}
        name="title"
        placeholder="Procurar filmes..."
      />
    </form>
  );
};
