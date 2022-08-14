/** splits word for future cursifying */
class Word {
    private cutLen = 0

    /** укроп */
    public full = '';
    /** укр */
    public first = '';
    /** оп */
    public second = '';

    constructor(word: string, cutLen?: number) {
        this.full = word
        if (!cutLen) {
            cutLen = 10
        }
        this.cutLen = cutLenPercents(this.full.length, cutLen)
        this.handle()
    }

    private handle() {
        // петр
        const first = this.full.slice(0, this.cutLen);
        this.first = first;

        // ушка
        const second = this.full.slice(this.cutLen);
        this.second = second;
    }
}

/** computed words for curse */
let words: Word[] = []

/** make words cursed. */
export default function process(inputVal: string, madness?: number): string {
    // clean
    words = []
    if (!inputVal) {
        return inputVal
    }

    // clean input
    let result = inputVal
    // remove duplicate whitespace
    result = result.replace(/\s+/g, " ").trim();
    const inputWords = result.split(" ");
    // < 2 words = not process
    if (inputWords.length < 2) {
        return result;
    }

    // create words
    for (const word of inputWords) {
        words.push(new Word(word, madness))
    }

    // cursify words
    const finalWords: string[] = []
    for (let i = 0; i < words.length; i += 2) {
        console.log(i)
        if (!words[i + 1]) {
            break
        }
        const { w1, w2 } = cursify(words[i], words[i + 1])
        finalWords.push(w1.full, w2.full)
    }

    return finalWords.join(" ")
}

/** cursify two words */
function cursify(word1: Word, word2: Word): { w1: Word, w2: Word } {
    if (!(word1 instanceof Word) || !(word2 instanceof Word)) {
        throw Error("cursify: words bad instance")
    }
    const cursed1 = word2.first + word1.second
    const cursed2 = word1.first + word2.second
    console.log(cursed1, cursed2)
    let result: { w1: Word, w2: Word } = {
        w1: new Word(cursed1),
        w2: new Word(cursed2)
    }
    return result
}

/** get word cut length by percents of word */
function cutLenPercents(wordLength: number, cutPercents: number): number {
    let perc = (wordLength * cutPercents) / 100
    perc = Math.ceil(perc)
    if (!perc || perc < 0) {
        return 0
    }
    return perc
}