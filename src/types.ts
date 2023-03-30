export type ResolverFunction<T> = (resolvedValue: T) => void

export type PromiseExecutor<T> = (resolve: ResolverFunction<T>, reject: ResolverFunction<any>) => void
