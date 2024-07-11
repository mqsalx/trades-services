export function scape (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
){
    const originalMethod = descriptor.value
    descriptor.value = function(...args: any[]) {
        let returnOriginal = originalMethod.apply(this, args)
        if (typeof returnOriginal === "string") {
            returnOriginal = returnOriginal.replace(/<script>[\s\S]*?<\/script>/, '')
        }
        return returnOriginal
    }
}