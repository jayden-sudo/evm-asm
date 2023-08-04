// additional helper functions, their call replacements and implementations
export const helpers = {
    stack_peek_1: {call: i => stack_peek_call(1, i), implementation: _ => stack_peek_implementation(1)},
    stack_peek_2: {call: i => stack_peek_call(2, i), implementation: _ => stack_peek_implementation(2)},
    stack_peek_3: {call: i => stack_peek_call(3, i), implementation: _ => stack_peek_implementation(3)},
    stack_peek_4: {call: i => stack_peek_call(4, i), implementation: _ => stack_peek_implementation(4)},
    stack_peek_5: {call: i => stack_peek_call(5, i), implementation: _ => stack_peek_implementation(5)},
    stack_peek_6: {call: i => stack_peek_call(6, i), implementation: _ => stack_peek_implementation(6)},
    stack_peek_7: {call: i => stack_peek_call(7, i), implementation: _ => stack_peek_implementation(7)},
    stack_peek_8: {call: i => stack_peek_call(8, i), implementation: _ => stack_peek_implementation(8)},
    stack_peek_9: {call: i => stack_peek_call(9, i), implementation: _ => stack_peek_implementation(9)},
    stack_peek_10: {call: i => stack_peek_call(10, i), implementation: _ => stack_peek_implementation(10)},
    stack_peek_11: {call: i => stack_peek_call(11, i), implementation: _ => stack_peek_implementation(11)},
    stack_peek_12: {call: i => stack_peek_call(12, i), implementation: _ => stack_peek_implementation(12)},
}

const stack_peek_call = (stackPos: number, codeIndex: number): string[] => {
    return [`stack_peek_${stackPos}_return_${codeIndex}`, `stack_peek_${stackPos}`, 'jump', `stack_peek_${stackPos}_return_${codeIndex}:`]
}

const stack_peek_implementation = (stackPos: number): string[] => {
    // note: this has been mostly copied from code that has been generated from solc and can be further optimized
    return [`stack_peek_${stackPos}:`, "0x40", "dup1", "mload", `0x${stackPos.toString(16).padStart(2,'0')}`, "dup2", "mstore", `dup${3+stackPos}`, "0x20", "dup3", "add", "mstore", "0xac317cf427840c9d375c58b4921bb3b3e9082dd602bc95eb3c1d46afb7a72bb4", "swap2", "add", "mload(0x40)", "dup1", "swap2", "sub", "swap1", "log1", "jump"]
}