/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dijit.layout.LayoutContainer"]){dojo._hasResource["dijit.layout.LayoutContainer"]=true;dojo.provide("dijit.layout.LayoutContainer");dojo.require("dijit.layout._LayoutWidget");dojo.declare("dijit.layout.LayoutContainer",dijit.layout._LayoutWidget,{baseClass:"dijitLayoutContainer",constructor:function $DI2_(){dojo.deprecated("dijit.layout.LayoutContainer is deprecated","use BorderContainer instead",2);},layout:function $DI3_(){dijit.layout.layoutChildren(this.domNode,this._contentBox,this.getChildren());},addChild:function $DI4_(_1,_2){this.inherited(arguments);if(this._started){dijit.layout.layoutChildren(this.domNode,this._contentBox,this.getChildren());}},removeChild:function $DI5_(_3){this.inherited(arguments);if(this._started){dijit.layout.layoutChildren(this.domNode,this._contentBox,this.getChildren());}}});dojo.extend(dijit._Widget,{layoutAlign:"none"});}