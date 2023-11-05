type Option<A> = Some<A> | None;
interface Some<A> {
	_tag: "Some";
	value: A;
}
interface None {
	_tag: "None";
}


const some = <A>(x: A): Option<A> => ({ _tag: "Some", value: x });
const none: Option<never> = { _tag: "None" };
const isNone = <A>(x: Option<A>): x is None => x._tag === "None";

export { Option, None, none, Some, some, isNone };
