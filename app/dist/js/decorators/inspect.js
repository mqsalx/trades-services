export function inspect(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`--- Method ${propertyKey}`);
        console.log(`------ Params: ${JSON.stringify(args)}`);
        const returnOriginal = originalMethod.apply(this, args);
        console.log(`------ Return: ${JSON.stringify(returnOriginal)}`);
        return returnOriginal;
    };
}
//# sourceMappingURL=inspect.js.map