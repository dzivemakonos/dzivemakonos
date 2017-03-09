// Garden Gnome Software - Skin
// Pano2VR pro 4.5beta2/10512
// Filename: tonuss-skin-html.ggsk
// Generated Thu Feb 20 13:41:03 2014

function pano2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.preloadImages=function() {
		var preLoadImg=new Image();
		preLoadImg.src=basePath + 'images/button_21__o.png';
		preLoadImg.src=basePath + 'images/button_21__a.png';
	}
	
	this.addSkin=function() {
		this._image_4=document.createElement('div');
		this._image_4.ggId="Image 4";
		this._image_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_4.ggVisible=true;
		this._image_4.className='ggskin ggskin_image';
		this._image_4.ggType='image';
		this._image_4.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-161 + w/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -161px;';
		hs+='top:  113px;';
		hs+='width: 323px;';
		hs+='height: 110px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0;';
		hs+='visibility: hidden;';
		this._image_4.setAttribute('style',hs);
		this._image_4__img=document.createElement('img');
		this._image_4__img.className='ggskin ggskin_image';
		this._image_4__img.setAttribute('src',basePath + 'images/image_4.png');
		this._image_4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._image_4__img.className='ggskin ggskin_image';
		this._image_4__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_4__img);
		this._image_4.appendChild(this._image_4__img);
		this._image_4.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._image_4.style[domTransition]='none';
			} else {
				me._image_4.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_4.style.opacity='0';
			me._image_4.style.visibility='hidden';
		}
		this._rectangle_1=document.createElement('div');
		this._rectangle_1.ggId="Rectangle 1";
		this._rectangle_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_1.ggVisible=true;
		this._rectangle_1.className='ggskin ggskin_rectangle';
		this._rectangle_1.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 95px;';
		hs+='top:  73px;';
		hs+='width: 91px;';
		hs+='height: 16px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.05;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		this._rectangle_1.setAttribute('style',hs);
		this._rectangle_1.onclick=function () {
			me.player.openUrl("http:\/\/www.tonuss.lv","_self");
		}
		this._image_4.appendChild(this._rectangle_1);
		this.divSkin.appendChild(this._image_4);
		this._image_3=document.createElement('div');
		this._image_3.ggId="Image 3";
		this._image_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_3.ggVisible=true;
		this._image_3.className='ggskin ggskin_image';
		this._image_3.ggType='image';
		this._image_3.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-80 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-52 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -80px;';
		hs+='top:  -52px;';
		hs+='width: 87px;';
		hs+='height: 30px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._image_3.setAttribute('style',hs);
		this._image_3__img=document.createElement('img');
		this._image_3__img.className='ggskin ggskin_image';
		this._image_3__img.setAttribute('src',basePath + 'images/image_3.png');
		this._image_3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._image_3__img.className='ggskin ggskin_image';
		this._image_3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_3__img);
		this._image_3.appendChild(this._image_3__img);
		this._image_3.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._image_4.style[domTransition]='none';
			} else {
				me._image_4.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_4.style.opacity='1';
			me._image_4.style.visibility=me._image_4.ggVisible?'inherit':'hidden';
		}
		this._image_3.onmouseover=function () {
			me.elementMouseOver['image_3']=true;
		}
		this._image_3.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._image_3.style[domTransition]='none';
			} else {
				me._image_3.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._image_3.ggParameter.rx=0;me._image_3.ggParameter.ry=0;
			me._image_3.style[domTransform]=parameterToTransform(me._image_3.ggParameter);
			me.elementMouseOver['image_3']=false;
		}
		this._image_3.ontouchend=function () {
			me.elementMouseOver['image_3']=false;
		}
		this.divSkin.appendChild(this._image_3);
		this._button_21=document.createElement('div');
		this._button_21.ggId="Button 21";
		this._button_21.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_21.ggVisible=true;
		this._button_21.className='ggskin ggskin_button';
		this._button_21.ggType='button';
		this._button_21.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-54 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  -54px;';
		hs+='width: 178px;';
		hs+='height: 37px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_21.setAttribute('style',hs);
		this._button_21__img=document.createElement('img');
		this._button_21__img.className='ggskin ggskin_button';
		this._button_21__img.setAttribute('src',basePath + 'images/button_21.png');
		this._button_21__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_21__img.className='ggskin ggskin_button';
		this._button_21__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_21__img);
		this._button_21.appendChild(this._button_21__img);
		this._button_21.onclick=function () {
			me.player.openUrl("http:\/\/www.skatskat.lv\/virtuala-ture\/jelgava\/jelgava.html","");
		}
		this._button_21.onmouseover=function () {
			me._button_21__img.src=basePath + 'images/button_21__o.png';
		}
		this._button_21.onmouseout=function () {
			me._button_21__img.src=basePath + 'images/button_21.png';
		}
		this._button_21.onmousedown=function () {
			me._button_21__img.src=basePath + 'images/button_21__a.png';
		}
		this._button_21.onmouseup=function () {
			me._button_21__img.src=basePath + 'images/button_21.png';
		}
		this.divSkin.appendChild(this._button_21);
		this._head_az_boulings=document.createElement('div');
		this._head_az_boulings.ggId="head_az_boulings";
		this._head_az_boulings.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._head_az_boulings.ggVisible=true;
		this._head_az_boulings.className='ggskin ggskin_image';
		this._head_az_boulings.ggType='image';
		this._head_az_boulings.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-144 + w/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -144px;';
		hs+='top:  3px;';
		hs+='width: 284px;';
		hs+='height: 38px;';
		hs+=cssPrefix + 'transform-origin: 50% 0%;';
		hs+='visibility: inherit;';
		this._head_az_boulings.setAttribute('style',hs);
		this._head_az_boulings__img=document.createElement('img');
		this._head_az_boulings__img.className='ggskin ggskin_image';
		this._head_az_boulings__img.setAttribute('src',basePath + 'images/head_az_boulings.png');
		this._head_az_boulings__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._head_az_boulings__img.className='ggskin ggskin_image';
		this._head_az_boulings__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._head_az_boulings__img);
		this._head_az_boulings.appendChild(this._head_az_boulings__img);
		this.divSkin.appendChild(this._head_az_boulings);
		this._image_1=document.createElement('div');
		this._image_1.ggId="Image 1";
		this._image_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_1.ggVisible=true;
		this._image_1.className='ggskin ggskin_image';
		this._image_1.ggType='image';
		this._image_1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-83 + w/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -83px;';
		hs+='top:  51px;';
		hs+='width: 80px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._image_1.setAttribute('style',hs);
		this._image_1__img=document.createElement('img');
		this._image_1__img.className='ggskin ggskin_image';
		this._image_1__img.setAttribute('src',basePath + 'images/image_1.png');
		this._image_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._image_1__img.className='ggskin ggskin_image';
		this._image_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_1__img);
		this._image_1.appendChild(this._image_1__img);
		this._image_1.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._image_1.style[domTransition]='none';
			} else {
				me._image_1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_1.style.opacity='1';
			me._image_1.style.visibility=me._image_1.ggVisible?'inherit':'hidden';
			me.player.openNext("{node5}","");
		}
		this._image_1.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._image_1.style[domTransition]='none';
			} else {
				me._image_1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_1.style.opacity='0.8';
			me._image_1.style.visibility=me._image_1.ggVisible?'inherit':'hidden';
		}
		this.divSkin.appendChild(this._image_1);
		this._image_2=document.createElement('div');
		this._image_2.ggId="Image 2";
		this._image_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_2.ggVisible=true;
		this._image_2.className='ggskin ggskin_image';
		this._image_2.ggType='image';
		this._image_2.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(4 + w/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 4px;';
		hs+='top:  51px;';
		hs+='width: 80px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._image_2.setAttribute('style',hs);
		this._image_2__img=document.createElement('img');
		this._image_2__img.className='ggskin ggskin_image';
		this._image_2__img.setAttribute('src',basePath + 'images/image_2.png');
		this._image_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._image_2__img.className='ggskin ggskin_image';
		this._image_2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_2__img);
		this._image_2.appendChild(this._image_2__img);
		this._image_2.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._image_2.style[domTransition]='none';
			} else {
				me._image_2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_2.style.opacity='1';
			me._image_2.style.visibility=me._image_2.ggVisible?'inherit':'hidden';
			me.player.openNext("{node6}","");
		}
		this._image_2.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._image_2.style[domTransition]='none';
			} else {
				me._image_2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_2.style.opacity='0.8';
			me._image_2.style.visibility=me._image_2.ggVisible?'inherit':'hidden';
		}
		this.divSkin.appendChild(this._image_2);
		this.preloadImages();
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		if (me.elementMouseOver['image_3']) {
			if (me.player.transitionsDisabled) {
				me._image_3.style[domTransition]='none';
			} else {
				me._image_3.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._image_3.ggParameter.rx=-5;me._image_3.ggParameter.ry=0;
			me._image_3.style[domTransform]=parameterToTransform(me._image_3.ggParameter);
		}
	};
	this.addSkin();
};