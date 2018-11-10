enum Type {
    paper = 0,
    scissors = 1,
    rock= 2
}

export class Button {
    private type: string;

    constructor( button: number ) {
        this.type = Type[button];
    }

    getType(): string {
        return this.type;
    }
}
