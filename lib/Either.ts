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

export { Either, Left, Right, left, right, isLeft };
