"use strict";
function paintPainting(painter, painting, material) {
    if (painter.paint(painting, material)) {
        console.log("Painting is done");
    }
    else {
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
    paint(painting, material) {
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
