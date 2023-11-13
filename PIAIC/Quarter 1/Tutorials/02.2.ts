interface material {
    name : string;
    quantity : number;
    price : number;
}


interface Painter {
    finish(): boolean;
    ownmaterial: material[];
    paint(painying: string, material: material[]): boolean;
}

function paintPainting(painter: Painter, painting: string): boolean {
    painter.finish();
    return true;
}