import { z } from 'zod';

const FlowerSchema = z.object({
  id: z.string().uuid().describe('Unique identifier for the flower'),
  name: z.string().min(1).max(100).describe('Name of the flower'),
  species: z
    .string()
    .min(1)
    .max(100)
    .describe('Species or botanical name of the flower'),
  color: z.string().min(1).max(50).describe('Primary color of the flower'),
  bloomTime: z.string().min(1).max(50).describe('Season or period of bloom'),
  origin: z.string().optional().describe('Place of origin of the flower'),
  heightInCm: z
    .number()
    .nonnegative()
    .optional()
    .describe('Average height of the flower in cm'),
  widthInCm: z
    .number()
    .nonnegative()
    .optional()
    .describe('Average width of the flower in cm'),
  soilType: z.string().optional().describe('Preferred soil type'),
  sunExposure: z
    .enum(['Full Sun', 'Partial Shade', 'Shade'])
    .optional()
    .describe('Sunlight exposure requirements'),
  wateringFrequency: z
    .string()
    .optional()
    .describe('Recommended frequency of watering'),
  temperatureTolerance: z
    .string()
    .optional()
    .describe('Range of temperatures tolerated'),
  fragrance: z.boolean().describe('Indicates if the flower is fragrant'),
  floweringDuration: z
    .string()
    .optional()
    .describe('Typical duration for flowering'),
  foliageColor: z.string().optional().describe('Color of the leaves'),
  plantType: z
    .string()
    .optional()
    .describe('Category such as perennial, annual, etc.'),
  growthRate: z.string().optional().describe('Description of growth speed'),
  toxicity: z
    .boolean()
    .describe('Indicates if the flower is toxic to humans or pets'),
  use: z
    .array(z.string())
    .optional()
    .describe('Uses such as medicinal, ornamental, etc.'),
  pests: z
    .array(z.string())
    .optional()
    .describe('Common pests that affect the flower'),
  diseases: z
    .array(z.string())
    .optional()
    .describe('Common diseases that affect the flower'),
  propagationMethods: z
    .array(z.string())
    .optional()
    .describe('Methods for propagation'),
  pruningRequirements: z
    .string()
    .optional()
    .describe('Guidance on pruning needs'),
  plantHardinessZone: z
    .string()
    .optional()
    .describe('Hardiness zone as per USDA or similar scales'),
  companionPlants: z
    .array(z.string())
    .optional()
    .describe('Recommended companion plants'),
  maintenanceLevel: z
    .enum(['Low', 'Medium', 'High'])
    .optional()
    .describe('General care level required'),
  flowerShape: z
    .string()
    .optional()
    .describe('Description of the flower shape'),
  petalCount: z.number().optional().describe('Approximate number of petals'),
  preferredpH: z.number().optional().describe('Preferred soil pH'),
  seedType: z
    .string()
    .optional()
    .describe('Information on seed type if relevant'),
  historicalSignificance: z
    .string()
    .optional()
    .describe('Any historical or cultural relevance'),
});

export default FlowerSchema;
