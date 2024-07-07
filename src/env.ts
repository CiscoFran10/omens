import { z } from 'zod';

export const envSchema = z.object({
  API_URL: z.string(),
  ENABLE_API_DELAY: z.enum(['true', 'false']),
});

export const env = envSchema.parse(process.env);
