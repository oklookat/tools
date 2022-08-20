export function randomArrayElement<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function createBodyScrollToggler(): () => void {
    let active = false
    return () => {
        if (typeof document === 'undefined') {
            console.warn("[createBodyScrollToggler] toggle on client-side, not server")
            return
        }

        const classNames = document.body.className.split(" ")

        if (!active) {
            classNames.push("no-scroll")
            document.body.className = classNames.join(" ").trim()
            active = true
            return
        }

        for (let i = 0; i < classNames.length; i++) {
            const className = classNames[i]
            if (!className) {
                delete classNames[i]
                continue
            }
            if (className === "no-scroll") {
                delete classNames[i]
                break
            }
        }
        document.body.className = classNames.join(" ").trim()
        active = false
    };
}


export function downloadFile(filename: string, base64: string) {
    const a = document.createElement('a')
    a.href = base64;
    a.download = filename;
    a.click();
    a.remove()
}


export function removeExtension(filename: string): string {
    var lastDotPosition = filename.lastIndexOf(".");
    if (lastDotPosition === -1) return filename;
    else return filename.substr(0, lastDotPosition);
}