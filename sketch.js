let gantiWarna = false;
function setup() {
  createCanvas(800, 800, WEBGL);
}

function draw() {
  background(200);

  //membuat fungsi orbit dengan mouse
  orbitControl();

  //mengatur warna / pencahayaan
  if (gantiWarna === true) {
    let colors = color("magenta");
    ambientLight(colors);
  }

  sphere(200);
}

// membuat fungsi agar sphere bisa berubah warna
function doubleClicked() {
  gantiWarna = true;
}
