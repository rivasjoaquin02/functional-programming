import { compose } from "./fn-composition";

function divideTwoIfEven(num: number): number {
	if (num === 0) throw "cannot divide by zero";
	else if (num % 2 !== 0) throw "num is not even";
	return 2 / num;
}

// console.log(divideTwoIfEven(8)); // 👍
// console.log(divideTwoIfEven(0)); // ❌
// console.log(divideTwoIfEven(3)); // ❌

// we don't work with partial function in functional programming

type Either<E, A> = Left<E> | Right<A>;
interface Left<E> {
	_tag: "Left";
	left: E;
}
interface Right<A> {
	_tag: "Right";
	right: A;
}

const left = <E, A = never>(e: E): Either<E, A> => ({
	_tag: "Left",
	left: e,
});

const right = <A, E = never>(a: A): Either<E, A> => ({
	_tag: "Right",
	right: a,
});

const isLeft = <E, A>(x: Either<E, A>): x is Left<E> => x._tag === "Left";

function divideTwoIfEven2(num: number): Either<string, number> {
	if (num === 0) return left("cannot divide by zero");
	else if (num % 2 !== 0) return left("num is not even");
	return right(2 / num);
}

console.log(divideTwoIfEven2(8)); // 👍
console.log(divideTwoIfEven2(0)); // 👍
console.log(divideTwoIfEven2(3)); // 👍

type Increment = (x: number) => number;
const increment: Increment = (x) => x + 1;

const composed = compose(
	(x) => (isLeft(x) ? x : right(increment(x.right))),
	divideTwoIfEven2
);

console.log(composed(8)); // 👍
console.log(composed(0)); // 👍
console.log(composed(3)); // 👍

