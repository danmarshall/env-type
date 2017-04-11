export enum envTypes {
    unknown,
    browser,
    node,
    worker
}

function detectEnvironment() {
    var undef = '' + (void 0);

    if ((typeof WorkerGlobalScope != undef) && (typeof self != undef)) {
        return envTypes.worker;
    }
    if ((typeof window != undef) && (typeof document != undef)) {
        return envTypes.browser;
    }
    if ((typeof global != undef) && (typeof process != undef)) {
        return envTypes.node;
    }
    return envTypes.unknown;
}

export var env = detectEnvironment();
