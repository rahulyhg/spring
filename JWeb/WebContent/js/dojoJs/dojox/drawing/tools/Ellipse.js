/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojox.drawing.tools.Ellipse"]){dojo._hasResource["dojox.drawing.tools.Ellipse"]=true;dojo.provide("dojox.drawing.tools.Ellipse");dojox.drawing.tools.Ellipse=dojox.drawing.util.oo.declare(dojox.drawing.stencil.Ellipse,function(){},{draws:true,onDrag:function $Dzl_(_1){var s=_1.start,e=_1;var x=s.x<e.x?s.x:e.x,y=s.y<e.y?s.y:e.y,w=s.x<e.x?e.x-s.x:s.x-e.x,h=s.y<e.y?e.y-s.y:s.y-e.y;if(this.keys.shift){w=h=Math.max(w,h);}if(!this.keys.alt){x+=w/2;y+=h/2;w/=2;h/=2;}else{if(y-h<0){h=y;}if(x-w<0){w=x;}}this.points=[{x:x-w,y:y-h},{x:x+w,y:y-h},{x:x+w,y:y+h},{x:x-w,y:y+h}];this.render();},onUp:function $Dzm_(_2){if(this.created||!this.shape){return;}var o=this.pointsToData();if(o.rx*2<this.minimumSize&&o.ry*2<this.minimumSize){this.remove(this.shape,this.hit);return;}this.onRender(this);}});dojox.drawing.tools.Ellipse.setup={name:"dojox.drawing.tools.Ellipse",tooltip:"Ellipse Tool",iconClass:"iconEllipse"};dojox.drawing.register(dojox.drawing.tools.Ellipse.setup,"tool");}