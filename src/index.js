// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = ( propertyName ) => { return propertyName };

const createNotEnumerableProperty = ( propertyName ) => {     
	Object.defineProperty(Object.prototype, propertyName, {
    enumerable: false,
    get: function () { 
      return propertyName;
    },
    set: function (value) { 
      propertyName = value;
    }
  });
  return propertyName; };


const createProtoMagicObject = () => {
	func = function(){};
  func.prototype = func.__proto__;
  return func;
};


const incrementor = () => {  

	++incrementor.currentCount;

  function incrementCounter(){
    ++incrementor.currentCount;
    return incrementCounter;
  }

  incrementCounter.valueOf = function() {
    return incrementor.currentCount;
  }

  return incrementCounter;
};

incrementor.currentCount = 0;

const asyncIncrementor = () => {
	return ++asyncIncrementor.currentCount;
};
asyncIncrementor.currentCount = 0;

const createIncrementer = () => {
	let current = 0;

  return {

    next() {

      return {
        done: false,
        value: ++current
      };
    },

    [Symbol.iterator](){
      return this;
    }

  }
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
