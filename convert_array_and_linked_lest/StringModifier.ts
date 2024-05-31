import { ModifiedString } from "./ModifiedString";

export class StringModifier {
    private data: string;

    constructor(data: string) {
        this.data = data;
    }
    public modifyString(): ModifiedString {
        const modified = this.data.split('').reverse().join('');

        return {
            original: this.data,
            modified: modified,
        };
    }
}