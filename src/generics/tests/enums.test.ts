import { createEnumObject } from '../enums.ts';

describe('createEnumObject', () => {
  it('should return the same object when keys and values are identical', () => {
    const input = {
      OPTION_ONE: 'OPTION_ONE',
      OPTION_TWO: 'OPTION_TWO',
    } as const;

    const result = createEnumObject(input);

    expect(result).toStrictEqual(input);
  });

  it('should return the same object when keys and values are identical with defined type union', () => {
    type Options = 'OPTION_ONE' | 'OPTION_TWO';

    const result = createEnumObject<Options>({
      OPTION_ONE: 'OPTION_ONE',
      OPTION_TWO: 'OPTION_TWO',
    });

    expect(result).toStrictEqual({
      OPTION_ONE: 'OPTION_ONE',
      OPTION_TWO: 'OPTION_TWO',
    });
  });
});
