/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dijit._base.manager"]){dojo._hasResource["dijit._base.manager"]=true;dojo.provide("dijit._base.manager");dojo.declare("dijit.WidgetSet",null,{constructor:function $DPW_(){this._hash={};this.length=0;},add:function $DPX_(_1){if(this._hash[_1.id]){throw new Error("Tried to register widget with id=="+_1.id+" but that id is already registered");}this._hash[_1.id]=_1;this.length++;},remove:function $DPY_(id){if(this._hash[id]){delete this._hash[id];this.length--;}},forEach:function $DPZ_(_2,_3){_3=_3||dojo.global;var i=0,id;for(id in this._hash){_2.call(_3,this._hash[id],i++,this._hash);}return this;},filter:function $DPa_(_4,_5){_5=_5||dojo.global;var _6=new dijit.WidgetSet(),i=0,id;for(id in this._hash){var w=this._hash[id];if(_4.call(_5,w,i++,this._hash)){_6.add(w);}}return _6;},byId:function $DPb_(id){return this._hash[id];},byClass:function $DPc_(_7){var _8=new dijit.WidgetSet(),id,_9;for(id in this._hash){_9=this._hash[id];if(_9.declaredClass==_7){_8.add(_9);}}return _8;},toArray:function $DPd_(){var ar=[];for(var id in this._hash){ar.push(this._hash[id]);}return ar;},map:function $DPe_(_a,_b){return dojo.map(this.toArray(),_a,_b);},every:function $DPf_(_c,_d){_d=_d||dojo.global;var x=0,i;for(i in this._hash){if(!_c.call(_d,this._hash[i],x++,this._hash)){return false;}}return true;},some:function $DPg_(_e,_f){_f=_f||dojo.global;var x=0,i;for(i in this._hash){if(_e.call(_f,this._hash[i],x++,this._hash)){return true;}}return false;}});dijit.registry=new dijit.WidgetSet();dijit._widgetTypeCtr={};dijit.getUniqueId=function $DPh_(_10){var id;do{id=_10+"_"+(_10 in dijit._widgetTypeCtr?++dijit._widgetTypeCtr[_10]:dijit._widgetTypeCtr[_10]=0);}while(dijit.byId(id));return dijit._scopeName=="dijit"?id:dijit._scopeName+"_"+id;};dijit.findWidgets=function $DPi_(_11){var _12=[];function getChildrenHelper(_13){for(var _14=_13.firstChild;_14;_14=_14.nextSibling){if(_14.nodeType==1){var _15=_14.getAttribute("widgetId");if(_15){var _16=dijit.byId(_15);_12.push(_16);}else{getChildrenHelper(_14);}}}};getChildrenHelper(_11);return _12;};dijit._destroyAll=function $DPj_(){dijit._curFocus=null;dijit._prevFocus=null;dijit._activeStack=[];dojo.forEach(dijit.findWidgets(dojo.body()),function(_17){if(!_17._destroyed){if(_17.destroyRecursive){_17.destroyRecursive();}else{if(_17.destroy){_17.destroy();}}}});};if(dojo.isIE){dojo.addOnWindowUnload(function(){dijit._destroyAll();});}dijit.byId=function $DPk_(id){return typeof id=="string"?dijit.registry._hash[id]:id;};dijit.byNode=function $DPl_(_18){return dijit.registry.byId(_18.getAttribute("widgetId"));};dijit.getEnclosingWidget=function $DPm_(_19){while(_19){var id=_19.getAttribute&&_19.getAttribute("widgetId");if(id){return dijit.byId(id);}_19=_19.parentNode;}return null;};dijit._isElementShown=function $DPn_(_1a){var _1b=dojo.style(_1a);return (_1b.visibility!="hidden")&&(_1b.visibility!="collapsed")&&(_1b.display!="none")&&(dojo.attr(_1a,"type")!="hidden");};dijit.isTabNavigable=function $DPo_(_1c){if(dojo.attr(_1c,"disabled")){return false;}else{if(dojo.hasAttr(_1c,"tabIndex")){return dojo.attr(_1c,"tabIndex")>=0;}else{switch(_1c.nodeName.toLowerCase()){case "a":return dojo.hasAttr(_1c,"href");case "area":case "button":case "input":case "object":case "select":case "textarea":return true;case "iframe":if(dojo.isMoz){return _1c.contentDocument.designMode=="on";}else{if(dojo.isWebKit){var doc=_1c.contentDocument,_1d=doc&&doc.body;return _1d&&_1d.contentEditable=="true";}else{try{doc=_1c.contentWindow.document;_1d=doc&&doc.body;return _1d&&_1d.firstChild&&_1d.firstChild.contentEditable=="true";}catch(e){return false;}}}default:return _1c.contentEditable=="true";}}}};dijit._getTabNavigable=function $DPp_(_1e){var _1f,_20,_21,_22,_23,_24;var _25=function(_26){dojo.query("> *",_26).forEach(function(_27){var _28=dijit._isElementShown(_27);if(_28&&dijit.isTabNavigable(_27)){var _29=dojo.attr(_27,"tabIndex");if(!dojo.hasAttr(_27,"tabIndex")||_29==0){if(!_1f){_1f=_27;}_20=_27;}else{if(_29>0){if(!_21||_29<_22){_22=_29;_21=_27;}if(!_23||_29>=_24){_24=_29;_23=_27;}}}}if(_28&&_27.nodeName.toUpperCase()!="SELECT"){_25(_27);}});};if(dijit._isElementShown(_1e)){_25(_1e);}return {first:_1f,last:_20,lowest:_21,highest:_23};};dijit.getFirstInTabbingOrder=function $DPq_(_2a){var _2b=dijit._getTabNavigable(dojo.byId(_2a));return _2b.lowest?_2b.lowest:_2b.first;};dijit.getLastInTabbingOrder=function $DPr_(_2c){var _2d=dijit._getTabNavigable(dojo.byId(_2c));return _2d.last?_2d.last:_2d.highest;};dijit.defaultDuration=dojo.config["defaultDuration"]||200;}