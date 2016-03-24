
var ObjectUtils = {

  hasOwnProperty: function(obj, prop) {
    var proto = obj.__proto__ || obj.constructor.prototype;
    return (prop in obj) &&
        (!(prop in proto) || proto[prop] !== obj[prop]);
  }

};

module.exports = ObjectUtils;
