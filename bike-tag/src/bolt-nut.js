// An import statement allows your code to use jscad methods:
const { polygon, cylinderElliptic, cylinder, cuboid } = require('@jscad/modeling').primitives
const { rotate, translate } = require('@jscad/modeling').transforms;
const { hullChain, hull } = require('@jscad/modeling').hulls;
const { subtract, union } = require('@jscad/modeling').booleans;
const { extrudeLinear, extrudeRectangular, extrudeRotate } = require('@jscad/modeling').extrusions;

// A function declaration that returns geometry
const main = () => {
  return [
    hullChain(
      ...[...Array(36)].map((e,i) => {
        return rotate([0,0,Math.PI / 180 * i * 10],
          translate([0,2,i * 0.03],
            rotate([Math.PI / 180 * 90,0,0],
              cylinderElliptic({height: 0.6, startRadius: [0.1, 0.1], endRadius: [0.5, 0.5]}),
            ),
          )
        );
      }),
    )
  ];
}

// A declaration of what elements in the module (this file) are externally available.
module.exports = { main }
