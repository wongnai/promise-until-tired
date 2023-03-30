import TiredFromWaitingPromiseResolveTooLongError from '.'

describe('TiredFromWaitingPromiseResolveTooLongError', () => {
	describe('message', () => {
		it('should return message to inform that we give up already about the response from promise which including the limit of time to wait', () => {
			expect(new TiredFromWaitingPromiseResolveTooLongError(10000).message).toBe('I have waited this promise resolving for 10 seconds, so I am tired and forgive to wait for this.')
		})
	})
})
