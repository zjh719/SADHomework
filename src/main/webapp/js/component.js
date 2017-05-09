/*
 * 銆愰€氱敤缁勪欢銆戠敤浜庡涓〉闈㈢殑鍏叡缁勪欢
 *  by: zhaoxin@csdn.net
 *  2012-10-05 AM
 */
(function (window) {

    var csdn = window.csdn || { }
    csdn.comp = {};
    /*
     * 婊戝姩闂�(tab)
     * param <object> 閰嶇疆椤�:
     * {
     *     id : 鍏冪礌Id  锛�
     *    highlight : 褰撳墠婵€娲荤姸鎬佷笅鐨勬牱寮廲lass 锛�
     *    callback : 鐐瑰嚮浜嬩欢瑙﹀彂鍚庡洖璋冨嚱鏁�
     * }
     */
    csdn.comp.tab = function (conf) {
        this.conf = conf;
        this.Dom = {};
        this.init.apply(this, []);
    };
    csdn.comp.tab.prototype = {
        init:function () {
            var id = this.conf.id;
            this.Dom.title = $("#" + id + " .tit");
            this.Dom.li = $("#" + id + " .tit li");
            this.Dom.con = $("#" + id + " .con");
            this.addEvent();
        },
        addEvent:function (){
            var that = this,
                highlight = this.conf.highlight,
                callback = this.conf.callback;
            this.Dom.title.bind("click", function (e) {
                var target = e.target, item = {}, index = 0;
                if (target.tagName == "UL") {
                    return;
                }
                that.Dom.li.each(function (i) {
                    item = that.Dom.li[i];
                    $(item).removeClass(highlight);
                    if (target !== item) {
                        that.Dom.con[i].style.display = "none";
                    } else {
                        $(item).addClass(highlight);
                        that.Dom.con[i].style.display = "block";
                        index = i;
                    }
                });
                if (typeof callback == "function") {
                    callback(index);
                }
            })
        }
    };

    /*
     * 瀛楃鏁伴噺闄愬埗
     * param <object> 閰嶇疆椤� :
     * {
     *   btn :  杈撳叆瀹屾垚鍚庣殑鎻愪氦鎸夐挳
     *   textarea : 瑕佹娴嬪瓧绗︽暟閲忕殑杈撳叆妗�
     *   tip : 杈撳叆妗嗗凡杈撳叆瀛楁暟鏂囧瓧鎻愮ず
     * }
     *
     */
    csdn.comp.txtCounter = function (conf) {
        this.conf = conf;
        this.Dom = {};
        this.init.apply(this, []);
    };
    csdn.comp.txtCounter.prototype = {
        init:function () {
            this.Dom.btn = this.conf.btn;
            this.Dom.textarea = this.conf.textarea;
            this.Dom.max = this.conf.max;
            this.Dom.tip = this.conf.tip;
            this.addEvent();
        },
        addEvent:function () {
            var that = this,
                btn = this.Dom.btn,
                textarea = this.Dom.textarea,
                max = this.Dom.max,
                remain;
            this.Dom.textarea.keyup(function (e) {
                console.log(csdn.toolkit);
                var len = csdn.toolkit.computeStrLen(textarea.val())/3;
                if (len <= max) {
                    remain = parseInt(max - len);
                    that.Dom.tip.html("杩樺彲浠ュ啀杈撳叆<span>" + remain + "</span>涓瓧");
                    btn.removeClass("disabled");
                } else {
                    remain =  parseInt(len - max);
                    that.Dom.tip.html("宸茶秴鍑�<span>" + remain + "</span>涓瓧");
                    btn.addClass("disabled");
                }
            });
        }
    }

    /*
     * 鍒嗛〉
     * param <object> 閰嶇疆椤癸細
     * {
     *   size : 姣忓垎椤垫樉绀哄疄浣撴暟鎹暟閲忥紝
     *   wrap 锛氬疄鐜板垎椤电粍浠剁殑DOM鍏冪礌锛�
     *   curr : 褰撳墠椤靛彿鐮侊紝
     *   total : 瀹炰綋鏁版嵁鎬绘暟閲� 锛�
     *   shownum :  姣忎釜鍒嗛〉鍙樉绀洪〉鐮佹暟閲�
     *   callback : 鐐瑰嚮姣忎釜椤电爜瑙﹀彂鐨勫洖璋冨嚱鏁�
     * }
     */
    csdn.comp.pagination = function (conf) {
        this.conf = conf;
        this.init.apply(this, []);
    };
    csdn.comp.pagination.prototype = {
        init:function (conf) {
            conf = conf || this.conf;
            this.wrap = conf.wrap || this.wrap;
            this.callback = conf.callback || this.callback;
            this.render(conf);
            this.addEvent();
        },
        render:function (conf) {
            var that = this;
            var size = this.size = conf.size || 10,
                curr = this.curr = conf.curr * 1 || 1,
                total = this.total = conf.total || 0;
            showNum = this.conf.shownum || 10;
            var totalpage = this.totalpage;
            totalpage = this.totalpage = parseInt(total / size);
            (total % size > 0) && totalpage++;
            var hlClass = conf.hlClass || "on",
                wrap = this.wrap || conf.wrap;
            //鏋勯€犻〉鐮佺粍
            var buildPages = function (start, end, pages) {
                pages = pages || [];
                if (start < len) {
                    return
                }
                var j = 1;
                start = start || "0";
                start = start * 1;
                end = end || showNum;
                end = (end > totalpage) ? totalpage : end;
                var len = (end > totalpage) ? totalpage : end;
                if (start < len) {
                    pages.push([start, end]);
                    buildPages(end, end + showNum, pages);
                }
                return pages;
            };

            //鑾峰彇褰撳墠椤电爜缁�
            var fetchPages = function (pages, curr) {
                for (var i = 0, len = pages.length, item; i < len; i++) {
                    item = pages[i];
                    if (curr >= item[0] && curr <= item[1]) {
                        return item;
                    }
                }
            };

            var pageList = function (curr, pages) {
                var newPageList = [], _curr;
                var i = pages[0], len = pages[1];
                while (i < len) {
                    _curr = (i == curr - 1) ? 'on' : '';
                    newPageList.push('<a class="pages ' + _curr + '" href="javascript:void(0);"  lang="' + (i * 1 + 1) + '">' + (i * 1 + 1) + '</a>');
                    i++;
                }
                return newPageList;
            };
            pageList = pageList(curr, fetchPages(buildPages(), curr));
            pageList = pageList.join("");
            var tpl = '<span style="display:none;">鍏�<span class="num">' + total + '</span>涓� </span>鍏�<span class="total">' + totalpage + '</span>椤� <a class="homepage" href="javascript:void(0);">棣栭〉</a>&nbsp;&nbsp;<a class="prev" href="javascript:void(0);">涓婁竴椤�</a>&nbsp;' + pageList + '&nbsp;<a class="next" href="javascript:void(0);">涓嬩竴椤�</a>&nbsp;&nbsp;<a class="endpage" href="javascript:void(0);">鏈〉</a>';
            wrap.html(tpl);
        },
        addEvent:function () {
            var that = this;
            $(that.wrap).bind("click", function (e) {
                that.eventHandler(that.wrap, e);
            })
        },
        eventHandler:function (wrap, e) {
            var that = this,
                target = e.target,
                hook = {
                    "pages":function () {
                        that.setPage($(target).attr("lang"));
                    },
                    "homepage":function () {
                        that.setPage(1);
                    },
                    "endpage":function () {
                        that.setPage(that.totalpage + 1);
                    },
                    "prev":function () {
                        if (that.curr > 1) {
                            that.setPage(that.curr - 1);
                        }
                    },
                    "next":function () {
                        if (that.curr < that.totalpage + 1) {
                            that.setPage(that.curr + 1);
                        }
                    }
                };
            target = $(target);
            for (var i in hook) {
                if (hook.hasOwnProperty(i) && target.hasClass(i)) {
                    hook[i]();
                }
            }
        },
        setPage:function (i) {
            this.conf.curr = i;
            this.callback(i);
        }
    }

    /*
     * 鏂囧瓧鎻愮ず
     * param <object> 閰嶇疆椤�
     * {
     *   el 锛� 瑕佸疄鐜版枃瀛楁彁绀虹殑DOM鍏冪礌
     *   txt : <string>鎻愮ず鏂囨湰
     * }
     */
    csdn.comp.tip = function (el, txt) {
        if (!txt) {
            return
        }
        var tip;
        if ($(el).parent().find('.noticetip').length > 0) {
            $(el).parent().find('.noticetip').remove();
        }
        tip = $("<div class=\"noticetip\">" + txt + "</div>").insertBefore(el);
        tip[0].style.left = $(el).offset().left + 'px';
        tip[0].style.top = $(el).offset().top + 'px';
        tip.animate({
            top:'-=30'
        }, 300, function (e) {
            $(this).delay(500).animate({
                opacity:0,
                top:'-=10'
            }, 200)
        });
    };

    /*
     *   绀句氦鍒嗕韩(鐩墠鍙敮鎸佹柊娴井鍗氾紝鑵捐寰崥锛宷q绌洪棿锛宖acebook,twitter,缃戞槗寰崥锛宻ohu寰崥锛屼汉浜猴紝寰俊锛岃眴鐡ｅ垎浜�)
     *  param <object>閰嶇疆椤�
     * {
     *   url : 鍒嗕韩URL,榛樿涓哄綋鍓嶉〉闈RL
     *   title : 鍒嗕韩鐨勬枃瀛楀唴瀹�(鍙€夛紝榛樿涓烘墍鍦ㄩ〉闈㈢殑title)
     *   pic : 鍒嗕韩鍥剧墖鐨勮矾寰�(鍙€�)
     *   wrap : 鍒嗕韩鎸夐挳鐨凞OM鑺傜偣
     *   position : 鍒嗕韩鎸夐挳涓巜rap浣嶇疆鍏崇郴锛屽彲閫変负before锛宨nline锛宎fter
     *   ralateuid : {
     *		鈥渢sina鈥�: 鈥滄柊娴敤鎴风殑UID锛屽垎浜井鍗氫細@璇ョ敤鎴�(鍙€�)鈥滐紝
     *		鈥渢qq鈥�:	鈥濊吘璁井鍗氱敤鎴风殑UID锛屽垎浜井鍗氫細@璇ョ敤鎴�(鍙€�)鈥�
     *	锝�
     *   socialWebIds 锛歔tsina,tqq,qzone,renren,weixin,douban,twitter,fb,tsohu,t163] //缂虹渷鍊间负鏂版氮寰崥锛岃吘璁井鍗�
     *   appkey : {
     *      "tsina":"鎮ㄧ綉绔欑殑鏂版氮寰崥APPKEY",
            "tqq":"鎮ㄧ綉绔欑殑鑵捐寰崥APPKEY",
           "tpeople":"鎮ㄧ綉绔欑殑浜烘皯寰崥APPKEY"
     *   }
     * }
     */
    csdn.comp.socialShare = function (conf) {
        var wrap = conf.wrap || document.body,
            socialWebIds = conf.socialWebIds || ['tsina','tqq'],
            pos = conf.position || 'after',
            setPos = {
                'before' : function(wrap,tpl){
                    wrap.before(tpl);
                },
                'after' : function(wrap,tpl){
                    wrap.after(tpl);
                },
                'inline' : function(wrap,tpl){
                    wrap.append(tpl);
                }
            },
            tpl = '<span id="ckepop"></span>',
            oDom = $(tpl),
            socialWebIdObj = {
                "tsina" : "tsina",
                "tqq" : "tqq",
                "qzone" : "qzone",
                "renren" : "renren",
                "weixin" : "weixin",
                "douban"  : "douban",
                "twitter" : "twitter",
                "fb" : "fb",
                "tsohu" : "tsohu",
                "t163" : "t163"
            };
        jiathis_config = {
            url : conf.url || location.href, /** 鍒嗕韩URL,榛樿涓哄綋鍓嶉〉闈RL */
            title : conf.title || document.title, /**鍒嗕韩鐨勬枃瀛楀唴瀹�(鍙€夛紝榛樿涓烘墍鍦ㄩ〉闈㈢殑title)*/
            pic: conf.pic || '' , /**鍒嗕韩鍥剧墖鐨勮矾寰�(鍙€�)*/
            ralateuid: conf.ralateuid || '', /**鍏宠仈鐢ㄦ埛鐨刄ID锛屽垎浜井鍗氫細@璇ョ敤鎴�(鍙€�)*/
            sm : socialWebIds.join(','),
            searchPic : true,
            appkey : conf.appkey,
        }
        setPos[pos]($(conf.wrap),oDom);
        $.each(socialWebIds,function(i,index){
            for( var id in socialWebIdObj){
               if( socialWebIdObj.hasOwnProperty(id) && id == index){
                    $('<a class="jiathis_button_'+ socialWebIdObj[id] + '"></a>').appendTo(oDom);
                } 
            }
            
        });  
                  
        $.getScript('http://v3.jiathis.com/code/jia.js?uid=1',function(){
            
        });
    };


    /*
     *鍗曢〉闈㈠姞杞芥洿澶氭暟鎹�
     *param <object> 閰嶇疆椤癸細{
     *  wrap : 瀹炵幇loadMore 鍔熻兘鐨刣om鍏冪礌
     *  size : 姣忔鐐瑰嚮鏇村鍔犺浇鏁伴噺
     *  curr : 褰撳墠鍔犺浇娆℃暟锛岄娆″姞杞介粯璁や负1
     *  total : 鎵€瑕佸姞杞芥暟鎹殑鎬绘暟閲�
     * }
    */
    csdn.comp.loadMore = function(conf){
        this.conf = conf;
        this.init.apply(this,[]);
    };
    csdn.comp.loadMore.prototype = {
        init:function(conf){
            conf = conf || this.conf;
            this.wrap = conf.wrap || this.wrap;
            this.callback = conf.callback || this.callback;
            this.render(conf);
            this.addEvent();
        },
        render : function(conf){
            var that = this;
            var size = this.loadSize = conf.loadSize || 10,
                firstSize = this.firstSize = conf.firstSize || size,
                curr = this.curr = conf.curr * 1 || 1,
                total = this.total = conf.total || 0;
            if(curr===1){
                $('<div class="data_list"></div>').appendTo(this.wrap);
            }
            if(curr <= Math.ceil((total-firstSize)/size+1)){
                if($(".more").length==0){
                     $('<div class="more"><a href="javascript:void(0)" class="load_more">鏇村</a></div>').appendTo(this.wrap);
                }
                if(curr == Math.ceil((total-firstSize)/size+1)){
                    this.wrap.find(".more").remove();
                }
                this.callback(curr);
            }
        },
        addEvent : function(){
            var that = this;
            this.wrap.bind("click",function(e){
                that.eventHandler(that.wrap, e);
            });
        },
        eventHandler:function (wrap, e) {
            var that = this,
                target = e.target,
                hook = {
                    "load_more":function () {
                            that.conf.curr++;
                            that.render(that.conf);
                        }

                };

            target = $(target);
            for (var i in hook) {
                if (hook.hasOwnProperty(i) && target.hasClass(i)) {
                    hook[i]();
                }
            }
        },
    };

    /*
     * 澶у浘杞挱
     * parem <object> 閰嶇疆椤� 锛歿
     *    wrap : 瀹炵幇澶у浘杞挱鐨凞OM鍏冪礌锛�
     *    timeout : 姣忓抚鍋滅暀鏃堕棿
     *    auto : 鏄惁鑷姩杩愯
     *    duration : 甯у垏鎹㈡椂闂�
     * }
     */

     csdn.comp.slide = function(conf){
        $.extend(this,conf);
        this.init();

     };
     csdn.comp.slide.prototype = {
        init : function(){
            this.time = null;
            this.render();
            this.addEvent();
        },
        render : function(){
            var oLi = this.wrap.find(".slide li"),
                oDiv,
                l,
                control_area = '<a href="javascript:void(0)" class="prev"></a><a href="javascript:void(0)" class="next"></a>',
                s = '<ul>';
            if(l=oLi.length){
                this.wrap.find(".slide").width(oLi.width()*l);
                oDiv=$('<div class="slide_control"></div>').appendTo(this.wrap);
                for(var i=0;i<l;i++){
                    s += '<li><a href="javascript:void(0)">'+i+'</a></li>';
                }
                s += '</ul>';
                oDiv[0].innerHTML = s;
                oDiv.width($(".slide_control li").width()*l);
                oDiv.find("li:first").addClass("on");
                $(control_area).appendTo(this.wrap);
            }
        },
        addEvent : function(){
            var that = this;
            var n =0;
            this.wrap.bind("click",function(e){
                that.eventHandler(that.wrap,e);
            });
            that.setMove(n);
            this.wrap.bind("mouseout",function(e){
                var target = e.target
                that.auto = !0;
                var n =$(target).find(".slide_control .on a").html()*1
                that.setMove(++n);
            })

        },
        setMove : function(n){
            var that = this;
            var oLi = this.wrap.find('.slide li');
            if(this.auto){
                if(this.time){
                    clearInterval(this.time);
                }
                this.time = setInterval(function(){
                    n = (n >= oLi.length) ? 0 :
                        n<0 ? 0 : n;
                    that.slideTo(n);
                    n++;
                },this.timeout);
            }
        },
        slideTo : function(n){

            var oLi = this.wrap.find('.slide li');
            var that =this;
            if((that.auto &&n>0) || (!that.auto && n >= 0)){
                this.wrap.find('.slide').animate({'left' : -oLi.width()*n },{duration: that.duration});
            }else {
                this.wrap.find('.slide').css("left",0);
            }

            this.wrap.find('.slide_control li').removeClass('on');
            this.wrap.find('.slide_control li:eq(' + n +')').addClass('on');
        },

        eventHandler : function(wrap,e){
            var target = e.target,
                that = this,
                hook = {
                    ".slide_control li" : function(){
                        clearInterval(that.time);
                        that.auto = !1;
                        wrap.find(".slide_control li").removeClass('on');
                        $(target).parent().addClass('on');
                        that.slideTo($(target).html());
                    },
                    ".prev" :function(){
                        clearInterval(that.time);
                        that.auto = !1;
                        var n = that.wrap.find(".on a").html();
                        console.log(n)
                        that.slideTo(--n);
                    },
                    ".next" : function(){
                        clearInterval(that.time);
                        that.auto = !1;
                        var n = that.wrap.find(".on a").html()*1;
                        that.slideTo(++n);
                    }

                };
                //console.log($(target).is(".prev"));
            for(var j in hook){
                if($(target).parents().filter(j).length || $(target).is(j)){
                    //console.log(1);
                    hook[j]();
                }
            }
        }
     };

    /**
     * 杩斿洖鍒伴《閮ㄦ晥鏋�
     * @description
     *     灏哸pp/csdn/returnTop/returnTo.html涓殑JS绉诲姩鑷虫
     */
    csdn.scrollTop = function () {
        var topArrow = $( '<img alt="Top_arrow" id="top_arrow" src="http://csdnimg.cn/www/images/top_arrow.png" />' );
        topArrow.css( {
            display: 'none',
            cursor: 'pointer',
            border: '0 none',
            bottom: '80px',
            height: 'auto',
            margin: 0,
            opacity: 0.5,
            padding: 0,
            position: 'fixed',
            right: '40px',
            width: '35px'
        } );
        $( 'body' ).append( topArrow );

        $(window).scroll(function(){
            $( window ).scrollTop() > 20 ? $( topArrow ).fadeIn( 400 ) : $( topArrow ).fadeOut( 400 );
        });

        $('body,html').scroll(function(){
            $( 'body, html' ).scrollTop() > 20 ? $( topArrow ).fadeIn( 400 ) : $( topArrow ).fadeOut( 400 );
        });

        //褰撶偣鍑昏烦杞摼鎺ュ悗锛屽洖鍒伴〉闈㈤《閮ㄤ綅缃�
        $( topArrow ).click(function(){
            $('body,html').animate({scrollTop:0},400);
            return false;
        });
    };

    /**
     * 鎼滅储寤鸿鍔熻兘
     * @param <Object> conf
     * @deprecated conf = { search: 鎼滅储妗咺D/className }
     * @author liuwei@csdn.net(鐡滅苯锛氬彧瑕佸啀濂介偅涔堜竴鐐圭偣锛�)
     * @see https://github.com/devbridge/jQuery-Autocomplete
     **/
    csdn.comp.search = function ( conf ) {
        this.conf = conf;
        this.search = $( conf.search );
        this.init.apply( this, [] );
    };

    csdn.comp.search.prototype = {
        init: function () {
            this.sentData();
        },

        sentData: function () {
            var ops = {
                serviceUrl: 'http://recommend.api.csdn.net/tag/complete?X-ACL-TOKEN=tag_suggest_kdfjkqwuiplkajmncbsb_token',
                maxHeight: 'auto',
                width: 'auto',
                dataType: 'jsonp',
                onSelect: function ( data ) {
                    // Todo....
                    alert( data.value );
                }
            };
            $.extend( ops, this.conf );
            this.search.autocomplete( ops );
        }
    };

    //csdn.search = csdn.comp.search;
    window["csdn"] = csdn;
})(window);

