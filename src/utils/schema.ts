import { z } from 'zod';
import { validation } from '@/utils/validation';

/**홈폼*/
const homeSchema = z.object({
  title: validation.REQUIRED_TEXT,
  description: validation.REQUIRED_TEXT,
});

export const schema = {
  homeSchema,
};
