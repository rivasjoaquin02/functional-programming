import { Option, none, isNone } from "./lib/Option";
import { Either, Left, Right, left, right, isLeft } from "./lib/Either";
import { Cons, List, cons, isNil, nil } from "./lib/List";
import { match } from "ts-pattern";

/* 🏷️ Option */

// type MatchW = <A, B, C>(
// 	onNone: () => B,
// 	onSome: (a: A) => C
// ) => (x: Option<A>) => B | C;

// const matchWide: MatchW = (onNone, onSome) => (x) =>
// 	isNone(x) ? onNone() : onSome(x.value);

// const maybeNum: Option<number> = none;
// const result = matchWide(
// 	() => -1,
// 	(a: number) => `num is ${a}`
// )(maybeNum);

// console.log(result);

/* 🏷️ Either  */

// type Match = <E, A, B>(
// 	onLeft: (e: E) => B,
// 	onRight: (a: A) => B
// ) => (x: Either<E, A>) => B;
// const match: Match = (onLeft, onRight) => (x) =>
// 	isLeft(x) ? onLeft(x.left) : onRight(x.right);

// const errorOnNum: Either<string, number> = left(`bad input`);
// const result = match(
// 	(e: string) => `Error happened: ${e}`,
// 	(a: number) => `num is ${a}`
// )(errorOnNum);

// console.log(result);

/* 🏷️ List  */

// type Match = <A, B>(
// 	onNil: () => B,
// 	onCons: (head: A, tail: List<A>) => B
// ) => (xs: List<A>) => B;
// const match: Match = (onNil, onCons) => (xs) =>
// 	isNil(xs) ? onNil() : onCons(xs.head, xs.tail);

const myList: List<number> = cons(1, cons(2, cons(3, nil)));
// const myList: List<number> = nil;
// const result = match(
// 	() => `list is empty`,
// 	(head: number, tail: List<number>) => `head is ${head}`
// )(myList);

// console.log(result);

const result = match(myList)
	.with({ _tag: "Nil" }, () => `list is empty`)
	.with({ _tag: "Cons" }, ({ head, tail }: Cons<number>) => `head is ${head}`)
	.exhaustive();

console.log(result);
