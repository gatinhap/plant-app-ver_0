// eslint-disable-next-line import/prefer-default-export
export const createEnumObject = <T extends string>(enumObject: {
  [P in T]: P;
}) => enumObject;
