const { polygon, cylinderElliptic, cylinder, cuboid } = require('@jscad/modeling').primitives
const { rotate, translate } = require('@jscad/modeling').transforms;
const { hullChain, hull } = require('@jscad/modeling').hulls;
const { subtract, union } = require('@jscad/modeling').booleans;
const { extrudeLinear, extrudeRectangular, extrudeRotate } = require('@jscad/modeling').extrusions;

const main = () => {
    return [
        cuboid({size: [20,20,20]});
    ];
}

module.exports = {main};
