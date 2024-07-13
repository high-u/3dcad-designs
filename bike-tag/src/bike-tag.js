// An import statement allows your code to use jscad methods:
const { cylinderElliptic, cylinder, cuboid } = require('@jscad/modeling').primitives
const { rotate, translate } = require('@jscad/modeling').transforms;
const { hullChain } = require('@jscad/modeling').hulls;
const { subtract, union } = require('@jscad/modeling').booleans;

// A function declaration that returns geometry
const main = () => {
  return [
    subtract(
      union(
        translate([0,0,4],cylinder({radius: 24, height: 4, segments: 64})),
        hullChain(
          translate([24,0,1], cuboid({size: [40,40,2]})),
          translate([24,0,4], cuboid({size: [48,48,4]})),
          translate([24,0,7], cuboid({size: [40,40,2]})),
        ),
        //cuboid({size: [50,50,50]}),
        translate([0,0,7],cylinderElliptic({height: 2, startRadius: [24, 24], endRadius: [20, 20], segments: 64})),
        translate([0,0,1],cylinderElliptic({height: 2, startRadius: [20, 20], endRadius: [24, 24], segments: 64})),
      ),
      translate([0,0,0],cylinder({radius: 16, height: 20, segments: 64})),
    ),
  ];
}

// A declaration of what elements in the module (this file) are externally available.
module.exports = { main }
