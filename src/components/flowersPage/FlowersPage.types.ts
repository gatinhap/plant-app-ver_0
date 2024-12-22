import { z } from 'zod';
import { FlowerSchema } from './FlowersPage.schema.ts';

export type FlowerSchemaType = z.infer<typeof FlowerSchema>;
