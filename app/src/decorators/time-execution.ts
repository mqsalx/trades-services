export function logTimeExecution(inSeconds: boolean = false) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value
        descriptor.value = function(...args: any[]) {
            let unit = 'ms'
            let divisor = 1
            if (inSeconds) {
                unit = 's'
                divisor = 1000
            }
            // console.log('---')
            // console.log(`Method ${propertyKey} execution time`)
            // console.log(`Params: ${JSON.stringify(args)}`)
            const t1 = performance.now()
            const returnOriginal = originalMethod.apply(this, args)
            const t2 = performance.now()
            // console.log(`Return: ${JSON.stringify(returnOriginal)}`)
            console.log(`Execution time: ${(t2 - t1) / divisor} ${unit}`)
            return returnOriginal
        }
    }
}