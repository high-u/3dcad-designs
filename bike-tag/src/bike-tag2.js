// An import statement allows your code to use jscad methods:
const { polygon, cylinderElliptic, cylinder, cuboid } = require('@jscad/modeling').primitives
const { rotate, translate } = require('@jscad/modeling').transforms;
const { hullChain, hull } = require('@jscad/modeling').hulls;
const { subtract, union } = require('@jscad/modeling').booleans;
const { extrudeLinear, extrudeRectangular, extrudeRotate } = require('@jscad/modeling').extrusions;

// A function declaration that returns geometry
const main = () => {
  return [
    translate([0,0,4],union(
      extrudeRotate({segments: 64}, translate([24,0,0],polygon({ points: [ 
        [-2,4],[-4,2],[-4,-2],[-2,-4],[2,-4],[4,-2],[4,2],[2,4],
      ] }))),
      hullChain(
        translate([0.5,24,0],rotate([0,Math.PI / 180 * 90,0],extrudeLinear({height: 1}, translate([0,0,0],polygon({ points: [ 
          [-2,4],[-4,2],[-4,-2],[-2,-4],[2,-4],[4,-2],[4,2],[2,4],
        ] }))))),
      
        translate([80,24,0],rotate([0,Math.PI / 180 * 90,0],extrudeLinear({height: 1}, translate([0,0,0],polygon({ points: [ 
          [-2,4],[-4,2],[-4,-2],[-2,-4],[2,-4],[4,-2],[4,2],[2,4],
        ] }))))),
      
        translate([82,23,0],rotate([Math.PI / 180 * 90,0,0],extrudeLinear({height: 1}, translate([0,0,0],polygon({ points: [ 
          [-2,4],[-4,2],[-4,-2],[-2,-4],[2,-4],[4,-2],[4,2],[2,4],
        ] }))))),
        translate([82,-21,0],rotate([Math.PI / 180 * 90,0,0],extrudeLinear({height: 1}, translate([0,0,0],polygon({ points: [ 
          [-2,4],[-4,2],[-4,-2],[-2,-4],[2,-4],[4,-2],[4,2],[2,4],
        ] }))))),
        translate([80,-24,0],rotate([0,Math.PI / 180 * 90,0],extrudeLinear({height: 1}, translate([0,0,0],polygon({ points: [ 
          [-2,4],[-4,2],[-4,-2],[-2,-4],[2,-4],[4,-2],[4,2],[2,4],
        ] }))))),
        translate([0.5,-24,0],rotate([0,Math.PI / 180 * 90,0],extrudeLinear({height: 1}, translate([0,0,0],polygon({ points: [ 
          [-2,4],[-4,2],[-4,-2],[-2,-4],[2,-4],[4,-2],[4,2],[2,4],
        ] }))))),
      ),
      translate([50,0,0],cuboid({size: [56,50,2]})),
      hull(
        translate([24,24,0],rotate([Math.PI / 180 * 90,0,0],extrudeLinear({height: 1}, translate([0,0,0],polygon({ points: [ 
          [-2,4],[-4,2],[-4,-2],[-2,-4],[2,-4],[4,-2],[4,2],[2,4],
        ] }))))),
        translate([24,-24,0],rotate([Math.PI / 180 * 90,0,0],extrudeLinear({height: 1}, translate([0,0,0],polygon({ points: [ 
          [-2,4],[-4,2],[-4,-2],[-2,-4],[2,-4],[4,-2],[4,2],[2,4],
        ] }))))),
      ),
    ))
  ];
}

// A declaration of what elements in the module (this file) are externally available.
module.exports = { main }
