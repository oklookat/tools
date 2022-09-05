// https://github.com/chrisguttandin/extendable-media-recorder
// https://github.com/chrisguttandin/extendable-media-recorder-wav-encoder


// async function reg() {
//     await register(await connect());
// }
// reg()

export class Recorder extends MediaRecorder {

    private duration = new DurationMeter()
    public set onDurationChanged(cb: ((sec: number) => void) | undefined) {
        this.duration.onDurationChanged = cb
    }
    public onStateChanged: (((state: RecordingState) => void) | undefined)

    constructor(stream: MediaStream) {
        super(stream, {mimeType: 'audio/wav'})
        if (this.onStateChanged) {
            this.onStateChanged('inactive')
        }
    }

    public destroy() {
        this.duration.stop()
        if (this.onStateChanged) {
            this.onStateChanged('inactive')
        }
    }

    public start(timeslice?: number | undefined): void {
        super.start(timeslice)
        this.duration.start()
        if (this.onStateChanged) {
            this.onStateChanged('recording')
        }
    }

    public pause(): void {
        super.pause()
        this.duration.pause()
        if (this.onStateChanged) {
            this.onStateChanged('paused')
        }
    }

    public resume(): void {
        super.resume()
        this.duration.start()
        if (this.onStateChanged) {
            this.onStateChanged('recording')
        }
    }

    public stop() {
        super.stop()
        this.destroy()
        if (this.onStateChanged) {
            this.onStateChanged('inactive')
        }
    }

}

/** convert seconds to string like '01:23' */
export function getPrettySeconds(seconds: number, mode: 'auto' | 'hours' | 'minutes' = 'auto'): string {
    // https://stackoverflow.com/a/1322771/16762009
    seconds = Math.round(seconds);
    const modes = {
        hours: [11, 19],
        minutes: [14, 19]
    };
    let sub = [0, 0];
    switch (mode) {
        case 'auto':
            sub = seconds < 3600 ? modes.minutes : modes.hours;
            break;
        case 'hours':
            sub = modes.hours;
            break;
        case 'minutes':
            sub = modes.minutes;
            break;
    }
    let pretty = '00:00';
    try {
        pretty = new Date(seconds * 1000).toISOString().substring(sub[0], sub[1]);
    } catch (err) {
        // Logger.warn('getPretty(): ' + err)
    }
    return pretty;
}

class DurationMeter {
    private _seconds = 0
    public onDurationChanged: ((sec: number) => void) | undefined
    private isIdle = true
    private interval: NodeJS.Timer | undefined

    private set seconds(val: number) {
        this._seconds = val
        if (this.onDurationChanged) {
            this.onDurationChanged(this.seconds)
        }
    }

    private get seconds(): number {
        return this._seconds
    }

    public start() {
        this.applyInterval()
        this.isIdle = false
    }

    public pause() {
        this.isIdle = true
    }

    public stop() {
        this.pause()
        this.seconds = 0
        if (this.interval) {
            clearInterval(this.interval)
        }
    }

    private applyInterval() {
        if (this.interval) {
            clearInterval(this.interval)
        }
        this.interval = setInterval(() => {
            if (this.isIdle) {
                return
            }
            this.seconds++
        }, 1000)
    }
}