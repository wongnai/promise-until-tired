import { MS_IN_SEC } from "variables"

class TiredFromWaitingPromiseResolveTooLongError extends Error {
    constructor(timeout: number) {
        super(`I have waited this promise resolving for ${timeout / MS_IN_SEC} seconds, so I am tired and forgive to wait for this.`)
    }
}

export default TiredFromWaitingPromiseResolveTooLongError
