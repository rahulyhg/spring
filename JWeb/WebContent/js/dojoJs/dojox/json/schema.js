/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojox.json.schema"]){dojo._hasResource["dojox.json.schema"]=true;dojo.provide("dojox.json.schema");dojox.json.schema.validate=function $DAkN_(_1,_2){return this._validate(_1,_2,false);};dojox.json.schema.checkPropertyChange=function $DAkO_(_3,_4,_5){return this._validate(_3,_4,_5||"property");};dojox.json.schema.mustBeValid=function $DAkP_(_6){if(!_6.valid){throw new TypeError(dojo.map(_6.errors,function(_7){return "for property "+_7.property+": "+_7.message;}).join(", "));}};dojox.json.schema._validate=function $DAkQ_(_8,_9,_a){var _b=[];function checkProp(_c,_d,_e,i){var l;_e+=_e?typeof i=="number"?"["+i+"]":typeof i=="undefined"?"":"."+i:i;function addError(_f){_b.push({property:_e,message:_f});};if((typeof _d!="object"||_d instanceof Array)&&(_e||typeof _d!="function")){if(typeof _d=="function"){if(!(Object(_c) instanceof _d)){addError("is not an instance of the class/constructor "+_d.name);}}else{if(_d){addError("Invalid schema/property definition "+_d);}}return null;}if(_a&&_d.readonly){addError("is a readonly field, it can not be changed");}if(_d["extends"]){checkProp(_c,_d["extends"],_e,i);}function checkType(_10,_11){if(_10){if(typeof _10=="string"&&_10!="any"&&(_10=="null"?_11!==null:typeof _11!=_10)&&!(_11 instanceof Array&&_10=="array")&&!(_10=="integer"&&_11%1===0)){return [{property:_e,message:(typeof _11)+" value found, but a "+_10+" is required"}];}if(_10 instanceof Array){var _12=[];for(var j=0;j<_10.length;j++){if(!(_12=checkType(_10[j],_11)).length){break;}}if(_12.length){return _12;}}else{if(typeof _10=="object"){var _13=_b;_b=[];checkProp(_11,_10,_e);var _14=_b;_b=_13;return _14;}}}return [];};if(_c===undefined){if(!_d.optional){addError("is missing and it is not optional");}}else{_b=_b.concat(checkType(_d.type,_c));if(_d.disallow&&!checkType(_d.disallow,_c).length){addError(" disallowed value was matched");}if(_c!==null){if(_c instanceof Array){if(_d.items){if(_d.items instanceof Array){for(i=0,l=_c.length;i<l;i++){_b.concat(checkProp(_c[i],_d.items[i],_e,i));}}else{for(i=0,l=_c.length;i<l;i++){_b.concat(checkProp(_c[i],_d.items,_e,i));}}}if(_d.minItems&&_c.length<_d.minItems){addError("There must be a minimum of "+_d.minItems+" in the array");}if(_d.maxItems&&_c.length>_d.maxItems){addError("There must be a maximum of "+_d.maxItems+" in the array");}}else{if(_d.properties){_b.concat(checkObj(_c,_d.properties,_e,_d.additionalProperties));}}if(_d.pattern&&typeof _c=="string"&&!_c.match(_d.pattern)){addError("does not match the regex pattern "+_d.pattern);}if(_d.maxLength&&typeof _c=="string"&&_c.length>_d.maxLength){addError("may only be "+_d.maxLength+" characters long");}if(_d.minLength&&typeof _c=="string"&&_c.length<_d.minLength){addError("must be at least "+_d.minLength+" characters long");}if(typeof _d.minimum!==undefined&&typeof _c==typeof _d.minimum&&_d.minimum>_c){addError("must have a minimum value of "+_d.minimum);}if(typeof _d.maximum!==undefined&&typeof _c==typeof _d.maximum&&_d.maximum<_c){addError("must have a maximum value of "+_d.maximum);}if(_d["enum"]){var _15=_d["enum"];l=_15.length;var _16;for(var j=0;j<l;j++){if(_15[j]===_c){_16=1;break;}}if(!_16){addError("does not have a value in the enumeration "+_15.join(", "));}}if(typeof _d.maxDecimal=="number"&&(_c.toString().match(new RegExp("\\.[0-9]{"+(_d.maxDecimal+1)+",}")))){addError("may only have "+_d.maxDecimal+" digits of decimal places");}}}return null;};function checkObj(_17,_18,_19,_1a){if(typeof _18=="object"){if(typeof _17!="object"||_17 instanceof Array){_b.push({property:_19,message:"an object is required"});}for(var i in _18){if(_18.hasOwnProperty(i)&&!(i.charAt(0)=="_"&&i.charAt(1)=="_")){var _1b=_17[i];var _1c=_18[i];checkProp(_1b,_1c,_19,i);}}}for(i in _17){if(_17.hasOwnProperty(i)&&!(i.charAt(0)=="_"&&i.charAt(1)=="_")&&_18&&!_18[i]&&_1a===false){_b.push({property:_19,message:(typeof _1b)+"The property "+i+" is not defined in the schema and the schema does not allow additional properties"});}var _1d=_18&&_18[i]&&_18[i].requires;if(_1d&&!(_1d in _17)){_b.push({property:_19,message:"the presence of the property "+i+" requires that "+_1d+" also be present"});}_1b=_17[i];if(_18&&typeof _18=="object"&&!(i in _18)){checkProp(_1b,_1a,_19,i);}if(!_a&&_1b&&_1b.$schema){_b=_b.concat(checkProp(_1b,_1b.$schema,_19,i));}}return _b;};if(_9){checkProp(_8,_9,"",_a||"");}if(!_a&&_8&&_8.$schema){checkProp(_8,_8.$schema,"","");}return {valid:!_b.length,errors:_b};};}