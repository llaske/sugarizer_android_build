!function(t){t.parser=function(t,e){return new SAXParser(t,e)},t.SAXParser=SAXParser,t.SAXStream=SAXStream,t.createStream=function createStream(t,e){return new SAXStream(t,e)},t.MAX_BUFFER_LENGTH=65536;var e,i=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];function SAXParser(e,s){if(!(this instanceof SAXParser))return new SAXParser(e,s);!function clearBuffers(t){for(var e=0,s=i.length;e<s;e++)t[i[e]]=""}(this),this.q=this.c="",this.bufferCheckPosition=t.MAX_BUFFER_LENGTH,this.opt=s||{},this.opt.lowercase=this.opt.lowercase||this.opt.lowercasetags,this.looseCase=this.opt.lowercase?"toLowerCase":"toUpperCase",this.tags=[],this.closed=this.closedRoot=this.sawRoot=!1,this.tag=this.error=null,this.strict=!!e,this.noscript=!(!e&&!this.opt.noscript),this.state=g.BEGIN,this.strictEntities=this.opt.strictEntities,this.ENTITIES=this.strictEntities?Object.create(t.XML_ENTITIES):Object.create(t.ENTITIES),this.attribList=[],this.opt.xmlns&&(this.ns=Object.create(h)),this.trackPosition=!1!==this.opt.position,this.trackPosition&&(this.position=this.line=this.column=0),emit(this,"onready")}t.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"],Object.create||(Object.create=function(t){function F(){}return F.prototype=t,new F}),Object.keys||(Object.keys=function(t){var e=[];for(var i in t)t.hasOwnProperty(i)&&e.push(i);return e}),SAXParser.prototype={end:function(){end(this)},write:function write(e){if(this.error)throw this.error;if(this.closed)return error(this,"Cannot write after close. Assign an onready handler.");if(null===e)return end(this);"object"==typeof e&&(e=e.toString());var s=0,r="";for(;r=charAt(e,s++),this.c=r,r;)switch(this.trackPosition&&(this.position++,"\n"===r?(this.line++,this.column=0):this.column++),this.state){case g.BEGIN:if(this.state=g.BEGIN_WHITESPACE,"\ufeff"===r)continue;beginWhiteSpace(this,r);continue;case g.BEGIN_WHITESPACE:beginWhiteSpace(this,r);continue;case g.TEXT:if(this.sawRoot&&!this.closedRoot){for(var n=s-1;r&&"<"!==r&&"&"!==r;)(r=charAt(e,s++))&&this.trackPosition&&(this.position++,"\n"===r?(this.line++,this.column=0):this.column++);this.textNode+=e.substring(n,s-1)}"<"!==r||this.sawRoot&&this.closedRoot&&!this.strict?(!not(a,r)||this.sawRoot&&!this.closedRoot||strictFail(this,"Text data outside of root node."),"&"===r?this.state=g.TEXT_ENTITY:this.textNode+=r):(this.state=g.OPEN_WAKA,this.startTagPosition=this.position);continue;case g.SCRIPT:"<"===r?this.state=g.SCRIPT_ENDING:this.script+=r;continue;case g.SCRIPT_ENDING:"/"===r?this.state=g.CLOSE_TAG:(this.script+="<"+r,this.state=g.SCRIPT);continue;case g.OPEN_WAKA:if("!"===r)this.state=g.SGML_DECL,this.sgmlDecl="";else if(is(a,r));else if(is(l,r))this.state=g.OPEN_TAG,this.tagName=r;else if("/"===r)this.state=g.CLOSE_TAG,this.tagName="";else if("?"===r)this.state=g.PROC_INST,this.procInstName=this.procInstBody="";else{if(strictFail(this,"Unencoded <"),this.startTagPosition+1<this.position){var u=this.position-this.startTagPosition;r=new Array(u).join(" ")+r}this.textNode+="<"+r,this.state=g.TEXT}continue;case g.SGML_DECL:"[CDATA["===(this.sgmlDecl+r).toUpperCase()?(emitNode(this,"onopencdata"),this.state=g.CDATA,this.sgmlDecl="",this.cdata=""):this.sgmlDecl+r==="--"?(this.state=g.COMMENT,this.comment="",this.sgmlDecl=""):"DOCTYPE"===(this.sgmlDecl+r).toUpperCase()?(this.state=g.DOCTYPE,(this.doctype||this.sawRoot)&&strictFail(this,"Inappropriately located doctype declaration"),this.doctype="",this.sgmlDecl=""):">"===r?(emitNode(this,"onsgmldeclaration",this.sgmlDecl),this.sgmlDecl="",this.state=g.TEXT):is(o,r)?(this.state=g.SGML_DECL_QUOTED,this.sgmlDecl+=r):this.sgmlDecl+=r;continue;case g.SGML_DECL_QUOTED:r===this.q&&(this.state=g.SGML_DECL,this.q=""),this.sgmlDecl+=r;continue;case g.DOCTYPE:">"===r?(this.state=g.TEXT,emitNode(this,"ondoctype",this.doctype),this.doctype=!0):(this.doctype+=r,"["===r?this.state=g.DOCTYPE_DTD:is(o,r)&&(this.state=g.DOCTYPE_QUOTED,this.q=r));continue;case g.DOCTYPE_QUOTED:this.doctype+=r,r===this.q&&(this.q="",this.state=g.DOCTYPE);continue;case g.DOCTYPE_DTD:this.doctype+=r,"]"===r?this.state=g.DOCTYPE:is(o,r)&&(this.state=g.DOCTYPE_DTD_QUOTED,this.q=r);continue;case g.DOCTYPE_DTD_QUOTED:this.doctype+=r,r===this.q&&(this.state=g.DOCTYPE_DTD,this.q="");continue;case g.COMMENT:"-"===r?this.state=g.COMMENT_ENDING:this.comment+=r;continue;case g.COMMENT_ENDING:"-"===r?(this.state=g.COMMENT_ENDED,this.comment=textopts(this.opt,this.comment),this.comment&&emitNode(this,"oncomment",this.comment),this.comment=""):(this.comment+="-"+r,this.state=g.COMMENT);continue;case g.COMMENT_ENDED:">"!==r?(strictFail(this,"Malformed comment"),this.comment+="--"+r,this.state=g.COMMENT):this.state=g.TEXT;continue;case g.CDATA:"]"===r?this.state=g.CDATA_ENDING:this.cdata+=r;continue;case g.CDATA_ENDING:"]"===r?this.state=g.CDATA_ENDING_2:(this.cdata+="]"+r,this.state=g.CDATA);continue;case g.CDATA_ENDING_2:">"===r?(this.cdata&&emitNode(this,"oncdata",this.cdata),emitNode(this,"onclosecdata"),this.cdata="",this.state=g.TEXT):"]"===r?this.cdata+="]":(this.cdata+="]]"+r,this.state=g.CDATA);continue;case g.PROC_INST:"?"===r?this.state=g.PROC_INST_ENDING:is(a,r)?this.state=g.PROC_INST_BODY:this.procInstName+=r;continue;case g.PROC_INST_BODY:if(!this.procInstBody&&is(a,r))continue;"?"===r?this.state=g.PROC_INST_ENDING:this.procInstBody+=r;continue;case g.PROC_INST_ENDING:">"===r?(emitNode(this,"onprocessinginstruction",{name:this.procInstName,body:this.procInstBody}),this.procInstName=this.procInstBody="",this.state=g.TEXT):(this.procInstBody+="?"+r,this.state=g.PROC_INST_BODY);continue;case g.OPEN_TAG:is(T,r)?this.tagName+=r:(newTag(this),">"===r?openTag(this):"/"===r?this.state=g.OPEN_TAG_SLASH:(not(a,r)&&strictFail(this,"Invalid character in tag name"),this.state=g.ATTRIB));continue;case g.OPEN_TAG_SLASH:">"===r?(openTag(this,!0),closeTag(this)):(strictFail(this,"Forward-slash in opening tag not followed by >"),this.state=g.ATTRIB);continue;case g.ATTRIB:if(is(a,r))continue;">"===r?openTag(this):"/"===r?this.state=g.OPEN_TAG_SLASH:is(l,r)?(this.attribName=r,this.attribValue="",this.state=g.ATTRIB_NAME):strictFail(this,"Invalid attribute name");continue;case g.ATTRIB_NAME:"="===r?this.state=g.ATTRIB_VALUE:">"===r?(strictFail(this,"Attribute without value"),this.attribValue=this.attribName,attrib(this),openTag(this)):is(a,r)?this.state=g.ATTRIB_NAME_SAW_WHITE:is(T,r)?this.attribName+=r:strictFail(this,"Invalid attribute name");continue;case g.ATTRIB_NAME_SAW_WHITE:if("="===r)this.state=g.ATTRIB_VALUE;else{if(is(a,r))continue;strictFail(this,"Attribute without value"),this.tag.attributes[this.attribName]="",this.attribValue="",emitNode(this,"onattribute",{name:this.attribName,value:""}),this.attribName="",">"===r?openTag(this):is(l,r)?(this.attribName=r,this.state=g.ATTRIB_NAME):(strictFail(this,"Invalid attribute name"),this.state=g.ATTRIB)}continue;case g.ATTRIB_VALUE:if(is(a,r))continue;is(o,r)?(this.q=r,this.state=g.ATTRIB_VALUE_QUOTED):(strictFail(this,"Unquoted attribute value"),this.state=g.ATTRIB_VALUE_UNQUOTED,this.attribValue=r);continue;case g.ATTRIB_VALUE_QUOTED:if(r!==this.q){"&"===r?this.state=g.ATTRIB_VALUE_ENTITY_Q:this.attribValue+=r;continue}attrib(this),this.q="",this.state=g.ATTRIB_VALUE_CLOSED;continue;case g.ATTRIB_VALUE_CLOSED:is(a,r)?this.state=g.ATTRIB:">"===r?openTag(this):"/"===r?this.state=g.OPEN_TAG_SLASH:is(l,r)?(strictFail(this,"No whitespace between attributes"),this.attribName=r,this.attribValue="",this.state=g.ATTRIB_NAME):strictFail(this,"Invalid attribute name");continue;case g.ATTRIB_VALUE_UNQUOTED:if(not(c,r)){"&"===r?this.state=g.ATTRIB_VALUE_ENTITY_U:this.attribValue+=r;continue}attrib(this),">"===r?openTag(this):this.state=g.ATTRIB;continue;case g.CLOSE_TAG:if(this.tagName)">"===r?closeTag(this):is(T,r)?this.tagName+=r:this.script?(this.script+="</"+this.tagName,this.tagName="",this.state=g.SCRIPT):(not(a,r)&&strictFail(this,"Invalid tagname in closing tag"),this.state=g.CLOSE_TAG_SAW_WHITE);else{if(is(a,r))continue;not(l,r)?this.script?(this.script+="</"+r,this.state=g.SCRIPT):strictFail(this,"Invalid tagname in closing tag."):this.tagName=r}continue;case g.CLOSE_TAG_SAW_WHITE:if(is(a,r))continue;">"===r?closeTag(this):strictFail(this,"Invalid characters in closing tag");continue;case g.TEXT_ENTITY:case g.ATTRIB_VALUE_ENTITY_Q:case g.ATTRIB_VALUE_ENTITY_U:var h,E;switch(this.state){case g.TEXT_ENTITY:h=g.TEXT,E="textNode";break;case g.ATTRIB_VALUE_ENTITY_Q:h=g.ATTRIB_VALUE_QUOTED,E="attribValue";break;case g.ATTRIB_VALUE_ENTITY_U:h=g.ATTRIB_VALUE_UNQUOTED,E="attribValue"}";"===r?(this[E]+=parseEntity(this),this.entity="",this.state=h):is(this.entity.length?p:m,r)?this.entity+=r:(strictFail(this,"Invalid character in entity name"),this[E]+="&"+this.entity+r,this.entity="",this.state=h);continue;default:throw new Error(this,"Unknown state: "+this.state)}this.position>=this.bufferCheckPosition&&function checkBufferLength(e){for(var s=Math.max(t.MAX_BUFFER_LENGTH,10),a=0,r=0,n=i.length;r<n;r++){var o=e[i[r]].length;if(o>s)switch(i[r]){case"textNode":closeText(e);break;case"cdata":emitNode(e,"oncdata",e.cdata),e.cdata="";break;case"script":emitNode(e,"onscript",e.script),e.script="";break;default:error(e,"Max buffer length exceeded: "+i[r])}a=Math.max(a,o)}var c=t.MAX_BUFFER_LENGTH-a;e.bufferCheckPosition=c+e.position}(this);return this}
/*! http://mths.be/fromcodepoint v0.1.0 by @mathias */,resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){!function flushBuffers(t){closeText(t),""!==t.cdata&&(emitNode(t,"oncdata",t.cdata),t.cdata=""),""!==t.script&&(emitNode(t,"onscript",t.script),t.script="")}(this)}};try{e=require("stream").Stream}catch(t){e=function(){}}var s=t.EVENTS.filter((function(t){return"error"!==t&&"end"!==t}));function SAXStream(t,i){if(!(this instanceof SAXStream))return new SAXStream(t,i);e.apply(this),this._parser=new SAXParser(t,i),this.writable=!0,this.readable=!0;var a=this;this._parser.onend=function(){a.emit("end")},this._parser.onerror=function(t){a.emit("error",t),a._parser.error=null},this._decoder=null,s.forEach((function(t){Object.defineProperty(a,"on"+t,{get:function(){return a._parser["on"+t]},set:function(e){if(!e)return a.removeAllListeners(t),a._parser["on"+t]=e,e;a.on(t,e)},enumerable:!0,configurable:!1})}))}SAXStream.prototype=Object.create(e.prototype,{constructor:{value:SAXStream}}),SAXStream.prototype.write=function(t){if("function"==typeof Buffer&&"function"==typeof Buffer.isBuffer&&Buffer.isBuffer(t)){if(!this._decoder){var e=require("string_decoder").StringDecoder;this._decoder=new e("utf8")}t=this._decoder.write(t)}return this._parser.write(t.toString()),this.emit("data",t),!0},SAXStream.prototype.end=function(t){return t&&t.length&&this.write(t),this._parser.end(),!0},SAXStream.prototype.on=function(t,i){var a=this;return a._parser["on"+t]||-1===s.indexOf(t)||(a._parser["on"+t]=function(){var e=1===arguments.length?[arguments[0]]:Array.apply(null,arguments);e.splice(0,0,t),a.emit.apply(a,e)}),e.prototype.on.call(a,t,i)};var a="\r\n\t ",r="0124356789",n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",o="'\"",c=a+">",u="http://www.w3.org/XML/1998/namespace",h={xml:u,xmlns:"http://www.w3.org/2000/xmlns/"};a=charClass(a),r=charClass(r),n=charClass(n);var l=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,T=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040\.\d-]/,m=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,p=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040\.\d-]/;function charClass(t){return t.split("").reduce((function(t,e){return t[e]=!0,t}),{})}function is(t,e){return function isRegExp(t){return"[object RegExp]"===Object.prototype.toString.call(t)}(t)?!!e.match(t):t[e]}function not(t,e){return!is(t,e)}o=charClass(o),c=charClass(c);var E,N,d,g=0;for(var f in t.STATE={BEGIN:g++,BEGIN_WHITESPACE:g++,TEXT:g++,TEXT_ENTITY:g++,OPEN_WAKA:g++,SGML_DECL:g++,SGML_DECL_QUOTED:g++,DOCTYPE:g++,DOCTYPE_QUOTED:g++,DOCTYPE_DTD:g++,DOCTYPE_DTD_QUOTED:g++,COMMENT_STARTING:g++,COMMENT:g++,COMMENT_ENDING:g++,COMMENT_ENDED:g++,CDATA:g++,CDATA_ENDING:g++,CDATA_ENDING_2:g++,PROC_INST:g++,PROC_INST_BODY:g++,PROC_INST_ENDING:g++,OPEN_TAG:g++,OPEN_TAG_SLASH:g++,ATTRIB:g++,ATTRIB_NAME:g++,ATTRIB_NAME_SAW_WHITE:g++,ATTRIB_VALUE:g++,ATTRIB_VALUE_QUOTED:g++,ATTRIB_VALUE_CLOSED:g++,ATTRIB_VALUE_UNQUOTED:g++,ATTRIB_VALUE_ENTITY_Q:g++,ATTRIB_VALUE_ENTITY_U:g++,CLOSE_TAG:g++,CLOSE_TAG_SAW_WHITE:g++,SCRIPT:g++,SCRIPT_ENDING:g++},t.XML_ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'"},t.ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},Object.keys(t.ENTITIES).forEach((function(e){var i=t.ENTITIES[e],s="number"==typeof i?String.fromCharCode(i):i;t.ENTITIES[e]=s})),t.STATE)t.STATE[t.STATE[f]]=f;function emit(t,e,i){t[e]&&t[e](i)}function emitNode(t,e,i){t.textNode&&closeText(t),emit(t,e,i)}function closeText(t){t.textNode=textopts(t.opt,t.textNode),t.textNode&&emit(t,"ontext",t.textNode),t.textNode=""}function textopts(t,e){return t.trim&&(e=e.trim()),t.normalize&&(e=e.replace(/\s+/g," ")),e}function error(t,e){return closeText(t),t.trackPosition&&(e+="\nLine: "+t.line+"\nColumn: "+t.column+"\nChar: "+t.c),e=new Error(e),t.error=e,emit(t,"onerror",e),t}function end(t){return t.sawRoot&&!t.closedRoot&&strictFail(t,"Unclosed root tag"),t.state!==g.BEGIN&&t.state!==g.BEGIN_WHITESPACE&&t.state!==g.TEXT&&error(t,"Unexpected end"),closeText(t),t.c="",t.closed=!0,emit(t,"onend"),SAXParser.call(t,t.strict,t.opt),t}function strictFail(t,e){if("object"!=typeof t||!(t instanceof SAXParser))throw new Error("bad call to strictFail");t.strict&&error(t,e)}function newTag(t){t.strict||(t.tagName=t.tagName[t.looseCase]());var e=t.tags[t.tags.length-1]||t,i=t.tag={name:t.tagName,attributes:{}};t.opt.xmlns&&(i.ns=e.ns),t.attribList.length=0,emit(t,"onopentagstart",i)}function qname(t,e){var i=t.indexOf(":")<0?["",t]:t.split(":"),s=i[0],a=i[1];return e&&"xmlns"===t&&(s="xmlns",a=""),{prefix:s,local:a}}function attrib(t){if(t.strict||(t.attribName=t.attribName[t.looseCase]()),-1!==t.attribList.indexOf(t.attribName)||t.tag.attributes.hasOwnProperty(t.attribName))t.attribName=t.attribValue="";else{if(t.opt.xmlns){var e=qname(t.attribName,!0),i=e.prefix,s=e.local;if("xmlns"===i)if("xml"===s&&t.attribValue!==u)strictFail(t,"xml: prefix must be bound to "+u+"\nActual: "+t.attribValue);else if("xmlns"===s&&"http://www.w3.org/2000/xmlns/"!==t.attribValue)strictFail(t,"xmlns: prefix must be bound to http://www.w3.org/2000/xmlns/\nActual: "+t.attribValue);else{var a=t.tag,r=t.tags[t.tags.length-1]||t;a.ns===r.ns&&(a.ns=Object.create(r.ns)),a.ns[s]=t.attribValue}t.attribList.push([t.attribName,t.attribValue])}else t.tag.attributes[t.attribName]=t.attribValue,emitNode(t,"onattribute",{name:t.attribName,value:t.attribValue});t.attribName=t.attribValue=""}}function openTag(t,e){if(t.opt.xmlns){var i=t.tag,s=qname(t.tagName);i.prefix=s.prefix,i.local=s.local,i.uri=i.ns[s.prefix]||"",i.prefix&&!i.uri&&(strictFail(t,"Unbound namespace prefix: "+JSON.stringify(t.tagName)),i.uri=s.prefix);var a=t.tags[t.tags.length-1]||t;i.ns&&a.ns!==i.ns&&Object.keys(i.ns).forEach((function(e){emitNode(t,"onopennamespace",{prefix:e,uri:i.ns[e]})}));for(var r=0,n=t.attribList.length;r<n;r++){var o=t.attribList[r],c=o[0],u=o[1],h=qname(c,!0),l=h.prefix,T=h.local,m=""===l?"":i.ns[l]||"",p={name:c,value:u,prefix:l,local:T,uri:m};l&&"xmlns"!==l&&!m&&(strictFail(t,"Unbound namespace prefix: "+JSON.stringify(l)),p.uri=l),t.tag.attributes[c]=p,emitNode(t,"onattribute",p)}t.attribList.length=0}t.tag.isSelfClosing=!!e,t.sawRoot=!0,t.tags.push(t.tag),emitNode(t,"onopentag",t.tag),e||(t.noscript||"script"!==t.tagName.toLowerCase()?t.state=g.TEXT:t.state=g.SCRIPT,t.tag=null,t.tagName=""),t.attribName=t.attribValue="",t.attribList.length=0}function closeTag(t){if(!t.tagName)return strictFail(t,"Weird empty close tag."),t.textNode+="</>",void(t.state=g.TEXT);if(t.script){if("script"!==t.tagName)return t.script+="</"+t.tagName+">",t.tagName="",void(t.state=g.SCRIPT);emitNode(t,"onscript",t.script),t.script=""}var e=t.tags.length,i=t.tagName;t.strict||(i=i[t.looseCase]());for(var s=i;e--;){if(t.tags[e].name===s)break;strictFail(t,"Unexpected close tag")}if(e<0)return strictFail(t,"Unmatched closing tag: "+t.tagName),t.textNode+="</"+t.tagName+">",void(t.state=g.TEXT);t.tagName=i;for(var a=t.tags.length;a-- >e;){var r=t.tag=t.tags.pop();t.tagName=t.tag.name,emitNode(t,"onclosetag",t.tagName);var n={};for(var o in r.ns)n[o]=r.ns[o];var c=t.tags[t.tags.length-1]||t;t.opt.xmlns&&r.ns!==c.ns&&Object.keys(r.ns).forEach((function(e){var i=r.ns[e];emitNode(t,"onclosenamespace",{prefix:e,uri:i})}))}0===e&&(t.closedRoot=!0),t.tagName=t.attribValue=t.attribName="",t.attribList.length=0,t.state=g.TEXT}function parseEntity(t){var e,i=t.entity,s=i.toLowerCase(),a="";return t.ENTITIES[i]?t.ENTITIES[i]:t.ENTITIES[s]?t.ENTITIES[s]:("#"===(i=s).charAt(0)&&("x"===i.charAt(1)?(i=i.slice(2),a=(e=parseInt(i,16)).toString(16)):(i=i.slice(1),a=(e=parseInt(i,10)).toString(10))),i=i.replace(/^0+/,""),a.toLowerCase()!==i?(strictFail(t,"Invalid character entity"),"&"+t.entity+";"):String.fromCodePoint(e))}function beginWhiteSpace(t,e){"<"===e?(t.state=g.OPEN_WAKA,t.startTagPosition=t.position):not(a,e)&&(strictFail(t,"Non-whitespace before first tag."),t.textNode=e,t.state=g.TEXT)}function charAt(t,e){var i="";return e<t.length&&(i=t.charAt(e)),i}g=t.STATE,String.fromCodePoint||(E=String.fromCharCode,N=Math.floor,d=function(){var t,e,i=16384,s=[],a=-1,r=arguments.length;if(!r)return"";for(var n="";++a<r;){var o=Number(arguments[a]);if(!isFinite(o)||o<0||o>1114111||N(o)!==o)throw RangeError("Invalid code point: "+o);o<=65535?s.push(o):(t=55296+((o-=65536)>>10),e=o%1024+56320,s.push(t,e)),(a+1===r||s.length>i)&&(n+=E.apply(null,s),s.length=0)}return n},Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:d,configurable:!0,writable:!0}):String.fromCodePoint=d)}("undefined"==typeof exports?this.sax={}:exports);