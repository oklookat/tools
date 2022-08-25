/** 
 * 1. Math.round
 * 2. X > 100 = 100 || X < 0 = 0 
 * */
function beautifyPercents(X: number): number {
    X = Math.round(X)
    if (X > 100) {
        X = 100
    } else if (X < 0) {
        X = 0
    }
    return X
}

/** get percents of current param by setting the total param */
export function computePercents(current: number, total: number): number {
    let percents = (current / total) * 100;
    percents = Math.ceil(percents);
    percents = beautifyPercents(percents)
    return percents;
}


/** https://stackoverflow.com/a/18953446
 * 
 * Round **X** up to the next multiple of **STEP** param
 */
export function roundX(x: number, step: number) {
    if (step < 1) {
        step = 1;
    }
    const rounded = Math.round(x / step) * step
    return beautifyPercents(rounded)
}

/** calc slider dot left position */
export function calcDotLeft(percents: number): number {
    let left = percents - 4;
    return beautifyPercents(left);
}