type inc = (x: number) => number;
const inc: inc = (x) => x + 1;

type tostr = (x: number) => string;
const tostr: tostr = (x) => `"${x}"`;

type inc_then_tostr = (x: number) => string;
const inc_then_tostr: inc_then_tostr = (x) => tostr(inc(x));

console.log(inc_then_tostr(1));

type Compose = <A, B, C>(f: (x: B) => C, g: (x: A) => B) => (x: A) => C;

const compose: Compose = (f, g) => (x) => f(g(x));

const inc_then_tostr2 = compose(tostr, inc);
console.log(inc_then_tostr2(1));

export { compose };
