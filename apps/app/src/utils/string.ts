export const concat = (a: string | number, b: string | number) => `${a}${b}`;

export const concatCurry = (b: string | number) => (a: string | number) => concat(a, b);
