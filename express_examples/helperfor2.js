
exports.area = function(width){
    return width*width;
};
exports.perimeter = function(width){
    return 4*width;
}

//same as:
/*
module.exports = {
    area: function(width){
        return width*width;
    },
    perimeter: function(width){
        return 4*width;
    }
};
*/