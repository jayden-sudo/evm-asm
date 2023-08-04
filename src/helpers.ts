// additional helper functions, their call replacements and implementations
export const helpers = {
    stack_peak_1: {call: i => stack_peak_call(1, i), implementation: _ => stack_peak_implementation(1)},
    stack_peak_2: {call: i => stack_peak_call(2, i), implementation: _ => stack_peak_implementation(2)},
    stack_peak_3: {call: i => stack_peak_call(3, i), implementation: _ => stack_peak_implementation(3)},
    stack_peak_4: {call: i => stack_peak_call(4, i), implementation: _ => stack_peak_implementation(4)},
    stack_peak_5: {call: i => stack_peak_call(5, i), implementation: _ => stack_peak_implementation(5)},
    stack_peak_6: {call: i => stack_peak_call(6, i), implementation: _ => stack_peak_implementation(6)},
    stack_peak_7: {call: i => stack_peak_call(7, i), implementation: _ => stack_peak_implementation(7)},
    stack_peak_8: {call: i => stack_peak_call(8, i), implementation: _ => stack_peak_implementation(8)},
    stack_peak_9: {call: i => stack_peak_call(9, i), implementation: _ => stack_peak_implementation(9)},
    stack_peak_10: {call: i => stack_peak_call(10, i), implementation: _ => stack_peak_implementation(10)},
    stack_peak_11: {call: i => stack_peak_call(11, i), implementation: _ => stack_peak_implementation(11)},
    stack_peak_12: {call: i => stack_peak_call(12, i), implementation: _ => stack_peak_implementation(12)},
}

const stack_peak_call = (stackPos: number, codeIndex: number): string[] => {
    return [`stack_peak_${stackPos}_return_${codeIndex}`, `stack_peak_${stackPos}`, 'jump', `stack_peak_${stackPos}_return_${codeIndex}:`]
}

const stack_peak_implementation = (stackPos: number): string[] => {
    // note: this has been mostly copied from code that has been generated from solc and can be further optimized
    return [`stack_peak_${stackPos}:`, "0x40", "dup1", "mload", `0x${stackPos.toString(16).padStart(2,'0')}`, "dup2", "mstore", `dup${3+stackPos}`, "0x20", "dup3", "add", "mstore", "0xac317cf427840c9d375c58b4921bb3b3e9082dd602bc95eb3c1d46afb7a72bb4", "swap2", "add", "mload(0x40)", "dup1", "swap2", "sub", "swap1", "log1", "jump"]
}