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


function paintPainting(painter: Painter, painting: string, material: material[]) {
    if (painter.paint(painting, material)) {
        console.log("Painting is done");
    } else {
        console.log("Painting is not done");
    }
}
paintPainting({
    finish() {
        return true;
    },
    ownmaterial: [{
        name: "Oil Paint",
        quantity: 2,
        price: 1000
    },
    {
        name: "Brush",
        quantity: 5,
        price: 500
    }],
    paint(painting: string, material: material[]) {
        console.log("Painting is done");
        return true;
    }
}, "Mona Lisa", [{
    name: "Oil Paint",
    quantity: 2,
    price: 1000
},
{
    name: "Brush",
    quantity: 5,
    price: 500
}]);