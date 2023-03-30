import TimeoutError from "./errors/TiredFromWaitingPromiseResolveTooLongError"
import { PromiseExecutor } from "./types"

function newPromiseUntilTired<T>(executor: PromiseExecutor<T>, timeout: number) {
    let isResolved = false

    return new Promise<T>((resolve, reject) => {
        setTimeout(() => {
            if (!isResolved) {
                reject(new TimeoutError(timeout))
            }
        }, timeout)

        const resolveWithMarked = (resolvedValue: T) => {
            isResolved = true
            
            resolve(resolvedValue)
        }

        const rejectWithMarked = (rejectedValue: any) => {
            isResolved = true

            reject(rejectedValue)
        }

        executor(resolveWithMarked, rejectWithMarked)
    })
}

export const TiredFromWaitingPromiseResolveTooLongError = TimeoutError

export default newPromiseUntilTired
