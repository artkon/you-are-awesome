// DO WHATEVER YOU WANT HERE

// 1
const createEnumerableProperty = ( propertyName ) => { return propertyName };


// 2
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


// 3
const createProtoMagicObject = () => {
	func = function(){};
  func.prototype = func.__proto__;
  return func;
};


// 4
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


// 5
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


// 6
// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
  let promise = new Promise(function (succes) {
  	setTimeout( 
  		function(){
  			succes(param)
  		}, 1000);
  });
  return promise;
};


// 7
const getDeepPropertiesCount = (object) => {
	var count = 0;
  
  var tempObj = object;  
  iterObj(tempObj);

  function iterObj(obj){

    var objKeys = Object.keys(obj);
    var objLength = Object.keys(obj).length;

    count += objLength;

    for(let i = 0; i < objLength; i++){

      if( Object.keys( obj[objKeys[i]] ).length > 0 ){

        obj = obj[objKeys[i]];
        iterObj(obj);
        break;
      }
    }
  }

  return count;
};
const createSerializedObject = () => {return null};
const toBuffer = () => {};
const sortByProto = (arr) => {
	arr.sort(function(a, b){
    return a.isPrototypeOf(b);
  });
  return arr;
};

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