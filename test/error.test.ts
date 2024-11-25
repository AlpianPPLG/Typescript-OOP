describe('error', () => {
    
    class ValidationError extends Error {
        constructor(public message: string) {
            super(message);
        }
    }

    function doubleIt(value: number): number {
        if(value < 0) {
            throw new ValidationError("Value Cannot Be Less Than 0");
        }
        return value * 2;
    }
    
    it('error', () => {
        try {
            const result = doubleIt(-1);
            console.info(result);
        } catch(e) {
            if(e instanceof ValidationError) {
                console.info(e.message);
            }
        }
    })
})