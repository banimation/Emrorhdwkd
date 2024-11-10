export interface Suspensed<T> {
	get value(): T
}
export const suspensed = <T>(fetchData: () => Promise<T>): Suspensed<T> => {
	let completed = false
	let value: T | null = null
	
	const promise = fetchData().then(x => {
		completed = true
		value = x
	})
	
	return {
		get value() {
			if (!completed) throw promise
			
			return value!
		}
	}
}
