export function inspect (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value
    descriptor.value = function(...args: any[]) {
        console.log(`--- Method ${propertyKey}`)
        console.log(`------ Params: ${JSON.stringify(args)}`)
        const returnOriginal = originalMethod.apply(this, args)
        console.log(`------ Return: ${JSON.stringify(returnOriginal)}`)
        return returnOriginal
    }
}