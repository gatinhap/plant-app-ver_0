 
export const createEnumObject = <T extends string>(enumObject: {
  [P in T]: P;
}) => enumObject;
