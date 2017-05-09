function showsuggest(id)
{
    //鑾峰彇textarea鍏冪礌
    var oText = document.getElementById(id);
    var oBody = document.getElementsByTagName('body')[0];

    //鍒涘缓鑱旀兂琛ュ叏涓嬫媺鍏冪礌
    var suggest = document.createElement('ul');    

    //鑾峰彇textarea鐨勬渶缁堟牱寮�
    var font_Size = getStyle(oText,'fontSize');
    //
    var font_family = getStyle(oText,'fontFamily');
    var line_height = getStyle(oText,'lineHeight');
    var input_pad_l = getStyle(oText,'paddingLeft');
    var input_pad_r = getStyle(oText,'paddingRight');
    var input_pad_t = getStyle(oText,'paddingTop');
    var input_pad_b = getStyle(oText,'paddingBottom');

    oText.style.wordBreak = 'break-all';
    oText.style.wordWrap = 'break-word';
    oText.style.fontFamily = 'Helvetica';
    font_family = 'Helvetica';

    //璁剧疆鑱旀兂琛ュ叏涓嬫媺鍏冪礌鐨勬牱寮�
    suggest.style.position = 'absolute';
    suggest.style.minWidth = '160px';
    suggest.style.border = '1px solid #d2d2d2';
    suggest.style.margin = 0+'px';
    suggest.style.padding = 0 + 'px';
    suggest.style.backgroundColor = '#fff';
    suggest.style.listStyle = 'none';
    suggest.style.display = 'none';
    suggest.style.boxShadow = '0px 0px 5px #ededed';
    oBody.appendChild(suggest);

    
    //璁剧疆鑱旀兂琛ュ叏鏁版嵁鑾峰彇鍦板潃
    var URL = "http://msg.csdn.net/attention"
    
    //璁剧疆鑱旀兂琛ュ叏涓嬫媺鍒楄〃鐨勫垵濮嬮珮浜」
    var iNow = 1;  

    //璁剧疆鑱旀兂琛ュ叏涓嬫媺鍒楄〃鍒濆鏁版嵁
    var aLi = '';

    var l_str = '';
    var r_str = '';    

    oText.onkeyup = function(ev)
    {
        var oEvent=ev || event;

        if(oEvent.keyCode==40 || oEvent.keyCode==38){
            return; 
        }        

         if(oEvent.keyCode==27)
        {                            
          
          suggest.style.display="none";
          return false;                             
        }

        var str = oText.value;

        //鎴彇褰撳墠鍏夋爣鍦╰extarea瀛楃涓蹭腑鐨勪綅缃�
        var curCount = getFocus(oText);      
             
        //鎴彇褰撳墠瀛楃涓蹭腑@鍚庤緭鍏ョ殑瀛楃涓�
        var cutresult = str_cut(str,curCount);


        var suggest_str = cutresult.str.substr(1);       

        var issuggest = cutresult.issuggest;
        var curCount2 = cutresult.curpoint;

        l_str = str.substring(0,curCount);       

        if(issuggest){
           l_str = str.substring(0,curCount2);         
        }

        //鑾峰彇鍏夋爣宸﹁竟鐨勫瓧绗︿覆鐩稿浜庡睆骞曞乏涓婅鐨勪綅缃�
        var suggest_offset = _strsize(l_str);  

        r_str = str.substring(curCount);

        if(issuggest)
        {  
             jsonp(URL, {at_name: suggest_str}, function (json){
                    
                    var data = json.data;

                    if(data.length==0)
                    {
                        suggest.style.display = 'block';
                        suggest.style.top = suggest_offset.top+22+'px';  
                        suggest.style.left = suggest_offset.left + 'px';
                        suggest.innerHTML = '';
                        var tipLi = document.createElement('li');
                        tipLi.innerHTML = '杞绘暡绌烘牸瀹屾垚杈撳叆';
                        tipLi.style.padding = '4px 9px';
                        tipLi.style.borderBottom = '1px solid #c9c9c9';
                        tipLi.style.fontSize = 12 + 'px';
                        tipLi.style.fontFamily = 'microsoft yahei';
                        tipLi.style.color = '#333333';
                        tipLi.style.textAlign = 'left';
                        suggest.appendChild(tipLi);
                    }
                    else
                    {
                        suggest.style.display = 'block';
                        suggest.style.top = suggest_offset.top+22+'px';  
                        suggest.style.left = suggest_offset.left + 'px';
                        suggest.innerHTML = '';
                        var topLi = document.createElement('li');
                        topLi.innerHTML = '杈撳叆鏄电О鎴栫敤鎴峰悕@浠�/濂�';
                        topLi.style.padding = '4px 9px';
                        topLi.style.borderBottom = '1px solid #c9c9c9';
                        topLi.style.fontSize = 12 + 'px';
                        topLi.style.fontFamily = 'microsoft yahei';
                        topLi.style.color = '#333333';
                        topLi.style.textAlign = 'left';
                        suggest.appendChild(topLi);

                        for(var i=0;i<data.length;i++)
                        {
                            var oLi = document.createElement('li');
                            oLi.style.position = 'relative';
                            var oSpan = document.createElement('span');
                            oSpan.innerHTML = data[i].nick_name;
                            var oEm = document.createElement('em');

                            if(data[i].username==null)
                            {
                            	oEm.innerHTML = 'null';
                            }
                            else
                            {                            	
                            	oEm.innerHTML = '鐢ㄦ埛鍚嶏細'+data[i].username;
                            }                            
                            oEm.style.position = 'absolute';
                            oEm.style.top = 20 + 'px';
                            oEm.style.left = 110 + 'px';
                            oEm.style.fontStyle = 'normal';
                            oEm.style.fontSize = '12px';
                            oEm.style.color = '#333';
                            oEm.style.textAlign = 'left';
                            oEm.style.display = 'none';
                            oEm.style.overflow = 'hidden';
                            oEm.style.minWidth = '80px';
                            oEm.style.padding = '0px 6px';
                            oEm.style.lineHeight = '16px';
                            oEm.style.whiteSpace= 'nowrap';
                            oEm.style.backgroundColor = "#f4f4f4";
                            oEm.style.border = "1px solid #999";
                            oLi.appendChild(oSpan);
                            oLi.appendChild(oEm);
                            oLi.style.padding = '4px 9px';
                            oLi.style.lineHeight = '20px';
                            oLi.style.fontSize = 12+'px';
                            oLi.style.fontFamily = 'microsoft yahei';
                            oLi.style.color = '#333';
                            oLi.style.cursor = 'pointer';
                            oLi.style.textAlign = 'left';
                            suggest.appendChild(oLi);
                        }

                        aLi = suggest.children;

                        iNow = 0;
                        /*
                        * 榛樿绗竴鏉￠珮浜�
                        aLi[iNow].style.backgroundColor='#ebebeb';
                        aLi[iNow].style.color = '#e31a00';

                        if(aLi[iNow].children[1].innerHTML=='null')
                        {
                        	aLi[iNow].children[1].style.display = 'none';
                        }
                        else
                        {
                        	aLi[iNow].children[1].style.display = 'block';
                        }
                        */
                        

                        for(var i=1;i<aLi.length;i++)
                        {

                            aLi[i].index=i;        
                            aLi[i].onmouseover=function(){                           

                            for(var i=1; i<aLi.length; i++){
                                aLi[i].style.background='';
                                aLi[i].style.color='';
                                aLi[i].children[1].style.display = 'none';
                            }
                                
                                this.style.background='#ebebeb';
                                this.style.color = '#e31a00';
                                if(this.children[1].innerHTML=='null')
                                {
                                	this.children[1].style.display = 'none';
                                }
                                else
                                {
                                	this.children[1].style.display = 'block';
                                }                                                                
                                iNow=this.index;                        
                            }

                            aLi[i].onmouseout=function()
                            {
                            	this.children[1].style.display = 'none';
                            }

                             aLi[i].onclick=function()
                             {
                                oText.value = l_str+aLi[this.index].children[0].innerHTML+" "+r_str;
                                suggest.style.display = 'none';
                                //oText.focus();                      
                             } 
                        }

                        
                        oText.onkeydown=function(ev)
                        {  
                            
                            var oEvent=ev || event;

                            if(oEvent.keyCode==40)
                            {
                                if(suggest.style.display=='block')
                                {                                    
                                    iNow++;            
                                    if(iNow==aLi.length){
                                        iNow=1;    
                                    }            
                                    for(var i=1; i<aLi.length; i++){
                                        aLi[i].style.background='';
                                        aLi[i].style.color = '';
                                        aLi[i].children[1].style.display = 'none';
                                    }
                                    aLi[iNow].style.background='#ebebeb';
                                    aLi[iNow].style.color = '#e31a00';
                                    if(aLi[iNow].children[1].innerHTML=='null')
                                    {
                                    	aLi[iNow].children[1].style.display = 'none';
                                    }
                                    else
                                    {
                                    	aLi[iNow].children[1].style.display = 'block';
                                    }                                    
                                }
                            }
                            
                            if(oEvent.keyCode==38){
                             if(suggest.style.display=='block')
                             {
                                iNow--;            
                                if(iNow<=0){
                                    iNow=aLi.length-1;  
                                }
                                
                                for(var i=1; i<aLi.length; i++){
                                    aLi[i].style.background='';
                                    aLi[i].style.color = '';
                                    aLi[i].children[1].style.display = 'none';
                                }           
                                aLi[iNow].style.background='#ebebeb';
                                aLi[iNow].style.color = '#e31a00';

                                if(aLi[iNow].children[1].innerHTML=='null')
                                {
                                	aLi[iNow].children[1].style.display = 'none';
                                }
                                else
                                {
                                	aLi[iNow].children[1].style.display = 'block';
                                }

                                return false;
                            }               
                            }

                            if(oEvent.keyCode==13){
                                if(suggest.style.display=='block')
                                {
                                    oText.value = l_str+aLi[iNow].children[0].innerHTML+" "+r_str;
                                    suggest.style.display = 'none';
                                    //oText.focus();  
                                    return false;
                                }          
                            }          
                        }

                        document.onclick = function()
                        {
                        	suggest.style.display = 'none';
                        }               

                    }
            }, 'callback');
        }
        else
        {      
            suggest.style.display = 'none';
        } 
    }

    

    function _strsize(obj){       

        var oDiv = document.createElement('div');
        var input_width = getStyle(oText,'width');
        var input_height = getStyle(oText,'height');

        oDiv.style.height = input_height;
        oDiv.style.width = input_width;
        oDiv.style.fontFamily = font_family;
        oDiv.style.fontSize = font_Size;
        oDiv.style.lineHeight = line_height;
        oDiv.style.textAlign = 'left';
        oDiv.style.padding = ''+input_pad_t+' '+input_pad_r+' '+input_pad_b+' '+input_pad_l+'';
        oDiv.style.visibility = 'hidden';

        var input_text_width = oText.clientWidth;

        //鑾峰彇textarea鐨勯〉闈綅缃�
        var p = getPos(oText);
       

        if((input_text_width-parseInt(input_width))<-3)
        {
            oDiv.style.overflow = 'scroll';
        }
        else
        {
            oDiv.style.overflow = 'auto';
        }                
        oDiv.style.position = 'absolute';
        oDiv.style.wordBreak = 'break-all';
        oDiv.style.wordWrap = 'break-word';
        oDiv.style.top = p.top+'px';  
        oDiv.style.left = p.left + 'px';


        var str_arr = obj.split(/\n/);

        for(var i=0;i<str_arr.length;i++)
        {
            var str_split_arr = str_arr[i].split('');

            for(var j=0;j<str_split_arr.length;j++)
            {
                var oSpan = document.createElement('span');
                if(str_split_arr[j]==" ")
                {
                   oSpan.innerHTML = "."; 
                }
                else
                {
                   oSpan.innerHTML = str_split_arr[j]; 
                }          
                oDiv.appendChild(oSpan);
            }

            //鍦╯tr_split_arr鐨勬瘡涓瓧绗︿覆鐢熸垚鐨剆pan缁勭殑鍚庨潰鍔燽r鏍囩锛屾渶鍚庝竴涓猻pan缁勪笉鍔�
            if(i<(str_arr.length-1))
            {
                var oBr = document.createElement('br');
                oDiv.appendChild(oBr);
            }
        }

        oBody.appendChild(oDiv);

        var aSpan = oDiv.children;
        var lastSpan = aSpan[aSpan.length-1];
        
        var lastpos = getPos(lastSpan);

        var scroll_top = oText.scrollTop;
        lastpos.top = lastpos.top-scroll_top;
        oBody.removeChild(oDiv);
        return lastpos;
    }
}

//鎴彇褰撳墠瀛楃涓蹭腑@鍚庤緭鍏ョ殑瀛楃涓�

function str_cut(strr,num)
{
    if(num==0)
    {
        return {
            str:"",
            issuggest:false,
            curpoint:0
        };
    }

    if(!notincode(strr,num))
    {
    	return {
            str:"",
            issuggest:false,
            curpoint:0
        };
    }

    if(!notinquote(strr,num))
    {
    	return {
            str:"",
            issuggest:false,
            curpoint:0
        };
    }   

    var cutstr = "";
    strr = strr.replace(/\n/g," ").replace(/\r/g,"");
    for(var i=num;i>0;i--)
    {                
        cutstr = strr.charAt(i-1) + cutstr;

        if((strr.charAt(i-1)==" ")||(strr.charAt(i-1)=="[")||(strr.charAt(i-1)=="]"))
        {           
           return {
                str:"",
                issuggest:false,
                curpoint:0
            };
        }      

        if(strr.charAt(i-1)=="@")
        {            
            return {
                str:cutstr,
                issuggest:true,
                curpoint:i
            };
        }        
    }
    return {
        str:"",
        issuggest:false,
        curpoint:0
    };
}

//鍒ゆ柇褰撳墠鍏夋爣鏄惁鍦╗code=xxx]...[/code]鏍囩涔嬮棿,鍦ㄦ爣绛句箣闂磋繑鍥瀎alse,涓嶅湪鏍囩涔嬮棿杩斿洖true銆�
function notincode(strr,num)
{
	var str_l = strr.substring(0,num);
	var str_r = strr.substring(num);

	var re_code1 = /\[code=[a-z]+\]/g;
	var re_code2 = /\[\/code\]/g;

	var match_l1 = str_l.match(re_code1);
	var match_l2 = str_l.match(re_code2);
	var match_r1 = str_r.match(re_code1);
	var match_r2 = str_r.match(re_code2);

	var count_l1 = 0;
	var count_l2 = 0;
	var count_r1 = 0;
	var count_r2 = 0;

    if(match_l1!=null)count_l1 = match_l1.length;
    if(match_l2!=null)count_l2 = match_l2.length;
    if(match_r1!=null)count_r1 = match_r1.length;
    if(match_r2!=null)count_r2 = match_r2.length;

    if(count_l1==count_l2&&count_r1==count_r2)return true;

    if(count_l1>count_l2&&count_r1<count_r2&&((count_l1-count_l2)==(count_r2-count_r1)))
    {
    	return false;
    }
    else
    {
    	return true;
    }
}

//鍒ゆ柇褰撳墠鍏夋爣鏄惁鍦╗quote]...[/quote]鏍囩涔嬮棿,鍦ㄦ爣绛句箣闂磋繑鍥瀎alse,涓嶅湪鏍囩涔嬮棿杩斿洖true銆�
function notinquote(strr,num)
{
	var str_l = strr.substring(0,num);
	var str_r = strr.substring(num);

	var re_code1 = /\[quote\]/g;
	var re_code2 = /\[\/quote\]/g;

	var match_l1 = str_l.match(re_code1);
	var match_l2 = str_l.match(re_code2);
	var match_r1 = str_r.match(re_code1);
	var match_r2 = str_r.match(re_code2);

	var count_l1 = 0;
	var count_l2 = 0;
	var count_r1 = 0;
	var count_r2 = 0;

    if(match_l1!=null)count_l1 = match_l1.length;
    if(match_l2!=null)count_l2 = match_l2.length;
    if(match_r1!=null)count_r1 = match_r1.length;
    if(match_r2!=null)count_r2 = match_r2.length;

    if(count_l1==count_l2&&count_r1==count_r2)return true;

    if(count_l1>count_l2&&count_r1<count_r2&&((count_l1-count_l2)==(count_r2-count_r1)))
    {
    	return false;
    }
    else
    {
    	return true;
    }
}


function jsonp(url, data, fnSucc, cbName)
{
    var fnName='jsonp_'+Math.random();
    fnName=fnName.replace('.', '');
    
    data[cbName]=fnName;
    
    window[fnName]=function (json)
    {        
        fnSucc && fnSucc(json);        
        oHead.removeChild(oS);
        window[fnName]=null;
    };   
   
    var arr=[];
    for(var i in data)
    {
        arr.push(i+'='+encodeURIComponent(data[i]));
    }
    
    var str=url+'?'+arr.join('&');
    
    //璇锋眰
    var oS=document.createElement('script');
    
    oS.src=str;
    
    var oHead=document.getElementsByTagName('head')[0];
    oHead.appendChild(oS);
}


function getFocus(elem) {  
    var index = 0;  
    if (document.selection) {// IE Support  
        elem.focus();  
        var Sel = document.selection.createRange();  
        if (elem.nodeName === 'TEXTAREA') {//textarea  
            var Sel2 = Sel.duplicate();  
            Sel2.moveToElementText(elem);  
            var index = -1;  
            while (Sel2.inRange(Sel)) {  
                Sel2.moveStart('character');  
                index++;  
            };  
        }  
        else if (elem.nodeName === 'INPUT') {// input  
            Sel.moveStart('character', -elem.value.length);  
            index = Sel.text.length;  
        }  
    }  
    else if (elem.selectionStart || elem.selectionStart == '0') { // Firefox support  
        index = elem.selectionStart;  
    }  
    return (index);  
}

function getStyle(obj,name)
{
    if(obj.currentStyle)
    {
        return obj.currentStyle[name];
    }
    else
    {
        return getComputedStyle(obj,false)[name];
    }
}

function getPos(obj)
{
   var l=0;
   var t=0;
   while(obj)
   {
       l+=obj.offsetLeft;
       t+=obj.offsetTop;
       obj=obj.offsetParent;   
   };   
   return {left:l,top:t}   
}