// An import statement allows your code to use jscad methods:
const { polygon, cylinderElliptic, cylinder, cuboid } = require('@jscad/modeling').primitives
const { rotate, translate } = require('@jscad/modeling').transforms;
const { hullChain, hull } = require('@jscad/modeling').hulls;
const { subtract, union } = require('@jscad/modeling').booleans;
const { extrudeLinear, extrudeRectangular, extrudeRotate } = require('@jscad/modeling').extrusions;

// A function declaration that returns geometry
const main = () => {
  const a = 0.0032;
  const angle = 20;
  const count = 72;
  return [
    subtract(
      union(
        hullChain(
          ...[...Array(count)].map((e,i) => {
            return rotate([0,0,Math.PI / 180 * i * angle],
              translate([0,-2.2,i * a * angle],
                rotate([Math.PI / 180 * 90,0,0],
                  cylinderElliptic({height: 0.6, startRadius: [0.1, 0.1], endRadius: [0.5, 0.5],segments:16}),
                ),
              )
            );
          }),
        ),
        hullChain(
          ...[...Array(count)].map((e,i) => {
            return rotate([0,0,Math.PI / 180 * i * angle],
              translate([0,2,i * a * angle],
                rotate([Math.PI / 180 * 90,0,0],
                  cylinderElliptic({height: 0.6, startRadius: [0.1, 0.1], endRadius: [0.5, 0.5], segments:16}),
                ),
              )
            );
          }),
        ),
        cylinder({radius: 1.8, height: 6, center: [0, 0, 2], segments: 32}),
        subtract(
          cylinder({radius:3,height: 6,center:[0,0,2],segments:32}),
          cylinder({radius:2.4,height: 6,center:[0,0,2],segments:32}),
        ),
      ), // union
      cuboid({size: [10,10,10], center:[5,0,0]}),
      
    ), // subtract
  ];
}

// A declaration of what elements in the module (this file) are externally available.
module.exports = { main }
