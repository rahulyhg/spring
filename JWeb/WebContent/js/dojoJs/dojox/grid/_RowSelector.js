/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojox.grid._RowSelector"]){dojo._hasResource["dojox.grid._RowSelector"]=true;dojo.provide("dojox.grid._RowSelector");dojo.require("dojox.grid._View");dojo.declare("dojox.grid._RowSelector",dojox.grid._View,{defaultWidth:"2em",noscroll:true,padBorderWidth:2,buildRendering:function $DAce_(){this.inherited("buildRendering",arguments);this.scrollboxNode.style.overflow="hidden";this.headerNode.style.visibility="hidden";},getWidth:function $DAcf_(){return this.viewWidth||this.defaultWidth;},buildRowContent:function $DAcg_(_1,_2){var w=this.contentWidth||0;_2.innerHTML="<table class=\"dojoxGridRowbarTable\" style=\"width:"+w+"px;height:1px;\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" role=\"presentation\"><tr><td class=\"dojoxGridRowbarInner\">&nbsp;</td></tr></table>";},renderHeader:function $DAch_(){},updateRow:function $DAci_(){},resize:function $DAcj_(){this.adaptHeight();},adaptWidth:function $DAck_(){if(!("contentWidth" in this)&&this.contentNode){this.contentWidth=this.contentNode.offsetWidth-this.padBorderWidth;}},doStyleRowNode:function $DAcl_(_3,_4){var n=["dojoxGridRowbar dojoxGridNonNormalizedCell"];if(this.grid.rows.isOver(_3)){n.push("dojoxGridRowbarOver");}if(this.grid.selection.isSelected(_3)){n.push("dojoxGridRowbarSelected");}_4.className=n.join(" ");},domouseover:function $DAcm_(e){this.grid.onMouseOverRow(e);},domouseout:function $DAcn_(e){if(!this.isIntraRowEvent(e)){this.grid.onMouseOutRow(e);}}});}