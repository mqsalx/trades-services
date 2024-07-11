export function logTimeExecution(inSeconds = false) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let unit = 'ms';
            let divisor = 1;
            if (inSeconds) {
                unit = 's';
                divisor = 1000;
            }
            const t1 = performance.now();
            const returnOriginal = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`Execution time: ${(t2 - t1) / divisor} ${unit}`);
            return returnOriginal;
        };
    };
}
//# sourceMappingURL=time-execution.js.map