import TiredFromWaitingPromiseResolveTooLongError from "errors/TiredFromWaitingPromiseResolveTooLongError"
import newPromiseUntilTired from "."

describe('newPromiseUntilTired', () => {
    describe('never resolve and timeout', () => {
        it('should reject TiredFromWaitingPromiseResolveTooLongError', async () => {
            await expect(newPromiseUntilTired<never>(() => {}, 500)).rejects.toBeInstanceOf(TiredFromWaitingPromiseResolveTooLongError)
        })
    })

    describe('resolve after timeout', () => {
        it('should reject TiredFromWaitingPromiseResolveTooLongError', async () => {
            await expect(newPromiseUntilTired<void>((resolve) => {
                setTimeout(resolve, 1000)
            }, 500)).rejects.toBeInstanceOf(TiredFromWaitingPromiseResolveTooLongError)
        })
    })

    describe('reject after timeout', () => {
        it('should reject TiredFromWaitingPromiseResolveTooLongError', async () => {
            await expect(newPromiseUntilTired<void>((_, reject) => {
                setTimeout(reject, 1000)
            }, 500)).rejects.toBeInstanceOf(TiredFromWaitingPromiseResolveTooLongError)
        })
    })

    describe('resolve before timeout', () => {
        it('should resolve the value correctly', async () => {
            const expectedResolvedValue = 'resolved-value'

            await expect(newPromiseUntilTired<string>((resolve) => {
                setTimeout(() => resolve(expectedResolvedValue), 500)
            }, 1000)).resolves.toBe(expectedResolvedValue)
        })
    })

    describe('reject before timeout', () => {
        it('should reject the value correctly', async () => {
            const expectedRejectedValue = 'rejected-value'

            await expect(newPromiseUntilTired<string>((_, reject) => {
                setTimeout(() => reject(expectedRejectedValue), 500)
            }, 1000)).rejects.toBe(expectedRejectedValue)
        })
    })
})