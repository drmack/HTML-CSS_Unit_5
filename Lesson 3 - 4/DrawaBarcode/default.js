setSize(400, 100);
var NUM_LINES = 400;

function start() {
    drawBarcode(generateBarcode(NUM_LINES));
}

// Draw the given barcode
function drawBarcode(barcode) {
    // Your code goes here
}

/* Generates a bit array representing a barcode
 * The array contains booleans in each index.
 * true means there is a black line.
 * false means there is not.
 *
 * Returns the array.
 */
function generateBarcode(lines) {
    var barcode = [];
    for (var i = 0; i < lines; i++) {
        barcode[i] = Randomizer.nextBoolean(0.3);
    }
    return barcode;
}
