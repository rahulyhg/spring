/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojox.timing._base"]){dojo._hasResource["dojox.timing._base"]=true;dojo.provide("dojox.timing._base");dojo.experimental("dojox.timing");dojox.timing.Timer=function $DAxO_(_1){this.timer=null;this.isRunning=false;this.interval=_1;this.onStart=null;this.onStop=null;};dojo.extend(dojox.timing.Timer,{onTick:function $DAxK_(){},setInterval:function $DAxL_(_2){if(this.isRunning){window.clearInterval(this.timer);}this.interval=_2;if(this.isRunning){this.timer=window.setInterval(dojo.hitch(this,"onTick"),this.interval);}},start:function $DAxM_(){if(typeof this.onStart=="function"){this.onStart();}this.isRunning=true;this.timer=window.setInterval(dojo.hitch(this,"onTick"),this.interval);},stop:function $DAxN_(){if(typeof this.onStop=="function"){this.onStop();}this.isRunning=false;window.clearInterval(this.timer);}});}