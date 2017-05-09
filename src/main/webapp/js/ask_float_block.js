var editor_change_ask_o_domain = "";
function editor_change_ask_o(str){
    var editor = $( document ).data('editor_all');
    //editor.render(document.getElementById('editor_all'));
    window.cmDrawImageUp(editor, str);

    if (editor_change_ask_o_domain != "") {
        document.domain = editor_change_ask_o_domain;
        editor_change_ask_o_domain = "";
    }
}
(function(){
    $(function(){
        var prot = window.location.protocol;
        var afont = prot + "//ask.csdn.net/assets/ask_float_fonts_css-6b30a53970eb5c3a2a045e3df585b475.css";//璇ユ牱寮忔枃浠跺悕绉拌鏍规嵁姣忔鍙戝竷鍚庣殑鍔ㄦ€佸悕绉版潵淇敼銆�//font-awesome.min-58872ef19fd8eb4c71bc6667c200b0c0.css";
        $('body').append('<link rel="stylesheet" type="text/css" media="screen" href="' + afont + '">');

        var first_pop_str="<div class='pop_edit ask_first comm_ask_first' style='display: none;'><h3>鎻愰棶</h3><a href='#' nodetype='close' class='close'>脳</a>"+
            " <div class='context'>"+
            " <form id='form' nodetype='form-popup' class='form'>"+
            "<div class='askFirst_desc'><span class='afd_p'>CSDN 闂瓟鏄竴涓湡璇氥€佽鐪熴€佹湁娲诲姏鐨勬妧鏈ぞ鍖恒€�</span><br><span class='afd_p'>鎴戜滑寰堟効鎰忓府鍔╂偍锛屽笇鏈涙偍鎻愬嚭鐨勬瘡涓€涓棶棰橀兘鑳藉緱鍒拌В绛旓紝鍚屾椂涔熷笇鏈涙偍鐭ラ亾锛屼竴涓ソ鐨勯棶棰�</span><br><span"+
            " class='afd_p'>鏇村鏄撳緱鍒板ソ鐨勭瓟妗�<span>&nbsp;&nbsp;</span><a href='//ask.csdn.net/help?#rule12' target='_blank'>鎬庢牱鎻愬嚭涓€涓ソ鐨勯棶棰橈紵</a></span><br>"+
            "<span class='afd_p'>鎻愰棶鏃跺簲閬靛惊璁ょ湡銆佺畝娲併€佹槑纭€佽鑼冪殑鍘熷垯</span><br><span"+
            " class='afd_p'>鈥� 棣栧厛纭畾鎮ㄦ槸鍚﹂渶瑕佷娇鐢ㄦ偓璧忔彁闂紱</span><br><span class='afd_p'>鈥� 闂涓病蹇呰鍑虹幇鈥滃ぇ绁炲府甯繖鈥濄€佲€滄暀鎺堟晳鏁戞垜鈥濅箣绫讳笌鎶€鏈棶棰樻棤鍏崇殑淇℃伅锛屽強鏃堕噰绾虫渶浣崇瓟妗堝氨鏄鍥炵瓟浜虹殑鏈€濂借鍙紱</span><br><span"+
            " class='afd_p'>鈥� 闂鏍囬瑕佹湁鏄庣‘鑰屾湁浠峰€肩殑淇℃伅锛屸€滄湁浜洪亣鍒拌繃杩欑鎯呭喌鍚楋紵甯繖杩涙潵鐪嬬湅鈥濊繖绉嶆爣棰樺彧浼氶檷浣庢偍鐨勯棶棰樿鍥炵瓟鐨勬鐜囷紱</span><br><span"+
            " class='afd_p'>鈥� 鈥滄眰浠ｇ爜鈥濈被鐨勯棶棰樿鎮ㄦ偓璧忔彁闂紝鎴戜滑涔愪簬灏嗗叾鐪嬫垚涓€绉嶄氦鏄撱€�</span><br><br><span"+
            " class='afd_p'>闂瓟棰戦亾骞朵笉娆㈣繋杩欑闂</span><br><span"+
            " class='afd_p'>鈥� 鍜屽凡鏈夐棶棰樺畬鍏ㄩ噸澶嶇殑闂锛屼负閬垮厤閲嶅锛屾彁闂墠璇峰厛杩涜鎼滅储锛�</span><br><span class='afd_p'>鈥� 鎷涜仒 / 姹傝亴銆佷氦鏄� / 鍚堜綔銆佸浜� / 寰佸弸锛�</span><br><span"+
            " class='afd_p'>鈥� 鏃犳槑纭瓟妗堢殑璋冩煡绫婚棶棰樸€傚鑻规灉鍜岃胺姝岋紝澶у鏇存璧忚皝锛�</span><br><span class='afd_p'>鎯冲浼氭洿濂界殑鎻愰棶锛岃鏌ョ湅<span>&nbsp;</span><a"+
            " href='//ask.csdn.net/help' target='_blank'>闂瓟棰戦亾鎻愰棶瑙勮寖</a></span></div>"+
            "<div class='askFirst_se'><span>鎻愰棶鍓嶈鎼滅储</span></div>"+
            "<div class='search_div'><input id='askInput' type='text' placeholder='杈撳叆闂锛屾煡鐪嬫槸鍚﹀瓨鍦ㄧ浉浼肩殑闂'></div></form> </div>"+
            " <div class='success'></div></div>";
        var second_pop_str="<div class='pop_edit ask_second comm_ask_second'><h3>鎻愰棶</h3><span class='ask_float_span'>鎮ㄧ殑闂灏嗕細琚彂甯冨湪鈥�<a class='ask_float_channel' href='//ask.csdn.net' target='_blank' style='cursor:pointer'>鎶€鏈棶绛�</a>鈥濋閬�</span><a href='#' nodeType='close' class='close'>脳</a><div class='context'><div class='err_div'><span class='err_ico'></span>"+
            "<span class='err_txt'>璇ラ棶棰樺凡瀛樺湪锛岃鍕块噸澶嶆彁闂�</span></div>"+
            "<div class='input_div'><input id='askInputSecond' type='text' style='font-size:14px;' placeholder='闂鏍囬'/></div>"+
            "<div class='cm_box'><div class='cm_dialog'></div> <div class='pop_cm cm_add_link'><input type='text' placeholder='閾炬帴鍐呭' id='af_cm_link_txt'><input type='text' placeholder='閾炬帴鍦板潃' id='af_cm_link_url'><input type='text' placeholder='閾炬帴鎻愮ず' id='af_cm_link_tit'><div class='text-right'><span class='btn btn-default btn-sm' id='add_link_btn'>鎻掑叆閾炬帴</span> </div> </div>"+
            "<div class='pop_cm cm_add_img'><div class='nav-tabs'><a class='img_tab active' href='#tab_upload'>鏈湴涓婁紶</a><a class='img_tab' href='#tab_weburl'>缃戠粶鍥剧墖</a></div><div class='tab_panel active' id='tab_upload'><div class='set_img'><iframe src='http://ask.csdn.net/upload.html'></iframe></div></div><div class='tab_panel' id='tab_weburl'><input type='text' placeholder='鍥剧墖鍦板潃' id='af_cm_img_url'><input type='text' placeholder='鍥剧墖璇存槑' id='af_cm_img_alt'><div class='text-right'><span class='btn btn-default btn-sm' id='add_img_btn'>鎻掑叆鍥剧墖</span> </div></div> </div></div> "+
            "<textarea id='editor_all' rows='8'></textarea>"+
            "<div class='div_tags clearfix'><div id='divSearchTags' class='tags_con'>"+
            "<input type='text'/></div><input type='hidden' name='txtSearchTags'/></div>"+
            "<div id='ask2_tagRecomm_div' class='drt_tagRecomm tracking-ad' data-mod='popu_73'><span class='drt_tit'>鎺ㄨ崘鏍囩锛�</span></div></div>"+
            "<div class='success'><div class='left_area'><input id='chk_cb' type='checkbox'/><span class='wyxs'>鎴戣鎮祻</span><input id='cb_num'  class='cb_num' readonly='true'/>"+
            "<span class='phib_rii'><span> 甯�</span></span></div><a href='#' nodeType='cancel' class='cancel'>鍙栨秷</a><a href='#' nodeType='ok' class='ok'>鍙戝竷</a></div></div>";

        //璇ュ€兼槸杩斿洖椤堕儴鍒颁笂闈㈢殑璺濈锛屽ぇ绾﹀湪%55澶�
        var back_top_value =Math.ceil(document.documentElement.clientHeight *0.55);
        //鐜板湪鎴戜滑寮€濮嬪姞鍏ヤ簩缁寸爜鍔熻兘锛岀劧鍚庢妸鎻愰棶鏀逛负app涓嬭浇
        if(window.quickReplyflag) {
            //娉ㄩ噴鐨勯儴鍒嗘槸浠ュ墠鎻愰棶鐨勶紝杩欎釜鏃跺€欏叾瀹炲悗缁殑寰堝涓庤繖涓寜閽浉鍏崇殑浠ｇ爜娌＄敤浜嗭紝灏辨槸閭ｄ簺寮瑰嚭鐨勬彁闂锛屽厛涓嶅垹闄ゅ惂銆�
            /* var float_ask_img="<div data-mod='popu_64' class='tracking-ad' chg-blk='0' ><a id='com-ask-float-block'  title='鎻愰棶鎸夐挳' style='top:"+(back_top_value-82)+"px'></a>"+
             "<a id='com-quick-reply'  title='蹇€熷洖澶�' style='top:"+(back_top_value-41)+"px'></a><a id='com-d-top-a'  style='top:"+back_top_value+"px' title='杩斿洖椤堕儴' onclick='' ></a> </div>";*/
            /*var float_ask_img="<div data-mod='popu_64' class='tracking-ad' chg-blk='0' ><a id='com-appcode-float-block' href='http://www.csdn.net/app/' target='_blank' title='APP浜岀淮鐮�' style='top:"+(back_top_value-160)+"px'><span id='appcode-close'></span></a><a id='com-app-float-block' href='http://www.csdn.net/app/' title='APP涓嬭浇' style='top:"+(back_top_value-76)+"px'></a>"+
                "<a id='com-quick-reply'  title='蹇€熷洖澶�' style='top:"+(back_top_value-38)+"px'></a><a id='com-d-top-a'  style='top:"+back_top_value+"px' title='杩斿洖椤堕儴' onclick='' ></a> </div>";*/
            var float_ask_img="<div data-mod='popu_64' class='csdn-tracking-statistics' chg-blk='0' ><a id='com-quick-reply'  title='蹇€熷洖澶�' style='top:"+(back_top_value-38)+"px'></a><a id='com-d-top-a'  style='top:"+back_top_value+"px' title='杩斿洖椤堕儴' onclick='' ></a> </div>";
        } else if (window.eduCallCenter) {
            var float_ask_img="<div data-mod='popu_64' class='csdn-tracking-statistics' chg-blk='0' >" +
                /*"<a id='com-appcode-float-block' href='http://edu.csdn.net/app/' target='_blank' title='APP浜岀淮鐮�' style='display:none;top:"+(back_top_value-135)+"px; background: url(http://edu.csdn.net/images/weix.png) no-repeat top left;background-size:100% auto; '><span id='appcode-close' style=''></span></a> <a id='com-app-float-block'  title='APP涓嬭浇' style='top:"+(back_top_value-76)+"px'></a>"+
*/                "<a id='com-edu-call-center'  title='瀛﹂櫌瀹㈡湇' style='top:"+(back_top_value-38)+"px' target='_blank' href='http://wpa.qq.com/msgrd?v=3&amp;uin=3390397209&amp;site=qq&amp;menu=yes'></a>"+
                "<a id='com-d-top-a'  style='top:"+back_top_value+"px' title='杩斿洖椤堕儴' onclick='' ></a></div>";
        } else if (window.bbsInfoflag) { 
            var float_ask_img="<div data-mod='popu_64' class='csdn-tracking-statistics' chg-blk='0' >"+
                "<a id='com-quick-reply-bbs' title='蹇€熷洖澶�' style='top:"+(back_top_value-114)+"px'></a>" +
                "<a id='com-back-channel' title='鍥炲埌棰戦亾' style='top:"+(back_top_value-76)+"px'></a>" +
                "<a id='com-back-home' title='鍥炲埌棣栭〉' style='top:"+(back_top_value-38)+"px'></a>" +
                "<a id='com-d-top-a' style='top:"+back_top_value+"px' title='杩斿洖椤堕儴' onclick='' ></a> </div>";
        }
        //鍐嶆閲嶆柊鍔犲叆ask渚涘晢鍔￠」鐩偅杈逛娇鐢�20150610 
        else if (window.askForBussenessFlag) {
            var float_ask_img="<div data-mod='popu_64' class='csdn-tracking-statistics' chg-blk='0' >"+
                 "<a id='com-ask-float-block'  style='top:"+(back_top_value-38)+"px' title='鎴戣鎻愰棶' onclick='' ></a>"+
                "<a id='com-d-top-a'  style='top:"+back_top_value+"px' title='杩斿洖椤堕儴' onclick='' ></a></div>";
        }
        else {
            var float_ask_img="<div data-mod='popu_64' class='csdn-tracking-statistics' chg-blk='0' >"+
                "<a id='com-d-top-a'  style='top:"+back_top_value+"px' title='杩斿洖椤堕儴' onclick='' ></a></div>";
        }

        //鎼滅储寤鸿鐨凥TML
        var common_ask_div_sc="<div id=\"common_ask_div_sc\" class=\"searchContainer\"><div class=\"sTitle\">鍙兘瀛樺湪绫讳技鐨勯棶棰橈細</div><div class=\"sFooter\"><a class=\"sFirstNewAsk\">鎴戞兂鎻愪竴涓柊闂</a></div></div>"
        var total_ask_str=float_ask_img+second_pop_str+common_ask_div_sc;//float_ask_img+first_pop_str+second_pop_str+common_ask_div_sc
        $("body").append(total_ask_str);

        //鐐瑰嚮鍏抽棴浜岀淮鐮�

        $("#com-appcode-float-block #appcode-close").click(function(){
            $("#com-appcode-float-block").hide('slow');
			return false;
            //$("#com-appcode-float-block").remove();

        })

        //瀛﹂櫌APP涓嬭浇

        $("#com-app-float-block").click(function(){
            if (window.eduCallCenter){
                $("#com-appcode-float-block").show();
            }
        });

        $( 'body').bind( 'click', function ( evt ) {
            $target = $( evt.target );
            if ( $target.attr( 'id') == 'add_img_btn' )
            {
                cmDrawImage(editor, "af_");
                return false;
            }else if( $target.attr( 'class') == 'img_tab' ){
                $target.addClass('active').siblings('.img_tab').removeClass('active');
                var _target = $target.attr('href');
                $(_target).addClass('active').siblings('.tab_panel').removeClass('active');
            }else if( $target.attr( 'id') == 'add_link_btn' ) {
                cmDrawLink(editor, "af_");
                return false;
            }else if( $target.attr( 'class') == 'cm_dialog'){
                $('.pop_cm').hide(300);
                $('.cm_dialog').hide();
                if (editor_change_ask_o_domain != "") {
                    document.domain = editor_change_ask_o_domain;
                    editor_change_ask_o_domain = "";
                }
            }else if ($target.hasClass('icon-link')){     //icon-link
                var $ft = $target.parents()[1];
                //var $ft = $tb.parents()[0];
                $(".cm_dialog", $ft).fadeIn(300);
                $(".cm_add_link", $ft).slideDown(300);
                $(".cm_add_img", $ft).slideUp(300);

            }else if ($target.hasClass('icon-picture')){     //icon-link
                var $ft = $target.parents()[1];
                //var $ft = $tb.parents()[0];
                $(".cm_dialog", $ft).fadeIn(300);
                $(".cm_add_link", $ft).slideUp(300);
                $(".cm_add_img", $ft).slideDown(300);
                editor_change_ask_o_domain = document.domain;
                document.domain = "csdn.net";
            }
        } )

        //鍒ゆ柇鏄笉鏄湁蹇€熷洖澶嶏紝杩斿洖椤堕儴start
        $("#com-quick-reply").click(function(){
            if($("#comment_content").length>0){
                setEditorFocus();
            }
            else{
                window.location.href = "https://passport.csdn.net/";
            }
        });


        var d_top = $('#com-d-top-a');

        $(document).scroll(function(){
            var scrTop = (document.body.scrollTop || document.documentElement.scrollTop);
            if (scrTop > 500)
            {
                d_top.show();
            } else
            {
                d_top.hide();
            }

        })
        $('#com-d-top-a').click(function ()
        {
            scrollTo(0, 0);
            this.blur();
            return false;
        });
        //鍒ゆ柇鏄笉鏄湁蹇€熷洖澶嶏紝杩斿洖椤堕儴end

        var coin_flag=false;
        //var prot = window.location.protocol;
        //鍒ゆ柇鏄惁棣栨鐐瑰嚮鎻愰棶鎸夐挳
        var check_accept_rules_url = prot + "//ask.csdn.net/users/check_accept_rules.js";
        //鎻愰棶鏃讹紝鏍囬褰曞叆妗嗙殑鑷姩瀹屾垚
        var ask_topic_autocomplete_url = prot + "//ask.csdn.net/questions/autocomplete.js";
        //鎻愰棶鏃讹紝鍏夋爣绂诲紑鏍囬鍚庣殑鎺ㄨ崘鏍囩
        // var ask_topic_tag_suggest_url = " http://ask.csdn.net/questions/tag_autocomplete.js";
        var ask_topic_tag_suggest_proxy = prot + "//internalapi.csdn.net/proxy.html";
        var ask_topic_tag_suggest_url = prot + "//internalapi.csdn.net/myapi/ask_topic/ask_topic_tag_suggest";//?x-acl-token=Yz3GAP4stGOIrLaIrnDed-uThp8K";
        //鎻愰棶鏃讹紝鍙戝竷闂鐨勫湴鍧€
        var create_question_proxy = prot + "//ask.csdn.net/proxy.html";
        var create_question_url = prot + "//ask.csdn.net/questions/create_question.json";
        //楠岃瘉C甯�
        var valid_coin=   prot + "//ask.csdn.net/users/get_scores.js";
        //闂閾炬帴璺宠浆
        var ask_detail_url =  prot + "//ask.csdn.net/questions/";
        var ajaxProxyCaches = {};

        var isSubmitting = false;


        var editor = new Editor();
        $( document ).data( 'editor_all', editor );
        editor.render(document.getElementById('editor_all'));

        function ajaxProxy(proxyUrl, opts) {
            var c = ajaxProxyCaches[proxyUrl];
            if (c === undefined) {
                c = ajaxProxyCaches[proxyUrl] = [];
                var func = arguments.callee;
                $('<iframe class="poxy_uc" src="' + proxyUrl + '" style="display:none">').load(function () {
                    c.contentWindow = this.contentWindow;
                    func(proxyUrl, opts);
                }).prependTo('body');
            } else if (c.contentWindow === undefined) {
                c.push(opts);
            } else {
                do {
                    c.contentWindow.jQuery.ajax(opts);
                } while (opts = c.shift());
            }
        }

        //json = {status:false, error:1, msg: '璇峰厛鐧诲綍'}
        //json = {status:false, error:2, msg: '鎮ㄥ凡琚獵SDN闂瓟绂佽█'}
        //json = {status:false, error:3, msg: '鎮ㄥ凡琚皝鍙�'}
        //json = {status:true, error:0, msg: '鎮ㄥ凡缁忕櫥褰�'}

        //鏄惁棣栨鐐瑰嚮鎻愰棶
        $("#com-ask-float-block").bind('click', function(){
            //$('.editor-preview.editor-preview-active').removeClass('editor-preview-active');
            //$('.icon-preview.active').removeClass('active');
            //document.domain="csdn.net";
            //pop($("body > .ask_second"));
            //editor.codemirror.getValue = "";
            $(".ask_second").remove();
            $("body").append(second_pop_str);
            editor = new Editor();
            $( document ).data( 'editor_all', editor );
            editor.render(document.getElementById('editor_all'));


            $("#askInputSecond").focus();//
            $(".CodeMirror").removeClass("CodeMirror-focused");
            $(".comm_ask_second .CodeMirror textarea").blur();
            //$(".CodeMirror-code, .CodeMirror-measure").html("");
            $.ajax({
                type: "get",
                url: check_accept_rules_url, //"http://ask.csdn.net/users/check_accept_rules",//鍒ゆ柇鏄惁鐧诲綍锛�
                dataType: "jsonp",
                jsonp: "callback",
                success: function(obj) {

                    if (obj.error == 0) {
                        pop($("body > .ask_second"));

                        $(".CodeMirror").removeClass("CodeMirror-focused");
                    } else if (obj.error == 1) {
                        window.location.href = "https://passport.csdn.net/";
                    } else {
                        alert(obj.msg);
                    }
                },
                error: function(err) {
                    var i = 0;
                }
            });

        });

        function pop($popup){
            //閬僵
            var w = $( document ).width();
            var h = $( document ).height();
            var $marker = $( '<div class="marker"></div>' );
            if ( $.browser && $.browser.msie) {
                w = w - 18;
            }

            $marker.css( {
                opacity: 0.5,
                width: w + 'px',
                height: h + 'px'
            } );

            $( 'body' ).append( $marker );
            //浣嶇疆鍙婂脊鍑�

            //var top = $( window ).height() / 2 + $( window ).scrollTop();
            //var top =document.documentElement.clientHeight / 2 + $( window ).scrollTop();

            /*$popup.css( {
             top: top + 'px',
             left:"50%"

             } );*/

            setTimeout( function () {
                $popup.show();
                $popup.css( {
                    opacity: 1
                } );
                $(".CodeMirror").removeClass("CodeMirror-focused");
            }, 200 );
            //鍒濆鍖栧熀鏈殑浜嬩欢缁戝畾绛�
            //鍙栨秷浜嬩欢缁戝畾

            var $cancel=$popup.find( '[nodetype="cancel"]' );
            var $close = $popup.find( '[nodetype="close"]' );
            $cancel.add($close).unbind( 'click' );
            $cancel.add($close).bind( 'click', function () {
                $("#common_ask_div_sc").css("display","none");
                $popup.css( {
                    opacity: 0
                } );
                var $btn_sub = $popup.find( '[nodetype="ok"]' );
                $btn_sub.css("background-color", "#be0000");
                isSubmitting = false;
                setTimeout( function () {
                    $popup.hide();
                }, 350 );
                $( '.marker' ).remove();
                return false;
            } );
            //鎻愪氦浜嬩欢缁戝畾锛岄渶瑕佸垽鏂槸涓嶆槸绗簩涓脊绐�

            if($popup.hasClass("ask_first")){

                //缁戝畾鑷姩鎼滅储
                AskSearch({ $inputBox: $(".comm_ask_first #askInput"),
                    $container: $("body > #common_ask_div_sc"),
                    searchUrl: ask_topic_autocomplete_url, //"http://192.168.6.227:9403/ask_topic/autocomplete", //鎼滅储鐨刄rl
                    isFirst: true

                })
            }

            else{
                //杩樿繙閲嶈鍊�
                $(".err_div").css("display", "none");
                $(" .comm_ask_second #askInputSecond").val("");
                $(" .comm_ask_second #wmd-input").val("");
                $(" .comm_ask_second span.tag").remove();
                //$(" .comm_ask_second  #ask2_tagRecomm_div label").remove();
                $(" .comm_ask_second  #ask2_tagRecomm_div a").remove();
                $(".comm_ask_second #chk_cb").attr("checked",false);
                $(".comm_ask_second #cb_num").attr("readonly",true);
                $(" .comm_ask_second #cb_num").val("");
                $(" .comm_ask_second #wmd-preview").empty();
                $(" .comm_ask_second [name='txtSearchTags']").val("");
                /*$(" .comm_ask_second #wmd-preview").css("display","none");
                 $(" .comm_ask_second #wmd-input").css("display","block");*/


                //缁欐爣绛惧姞涓奻oucs鏁堟灉
                $(" .comm_ask_second #divSearchTags input").focus(function(){
                    $(" .comm_ask_second #divSearchTags").addClass('focus');
                }).blur(function(){
                    $(" .comm_ask_second #divSearchTags").removeClass('focus');
                })
                //鎮祻鐨勫紑鍚�
                $(".comm_ask_second #chk_cb").click(function(){
                    if ($(".comm_ask_second #chk_cb")[0].checked) {
                        $(".comm_ask_second #cb_num").attr("readonly",false)

                    }
                    else{
                        $(".comm_ask_second #cb_num").attr("readonly",true);
                        $(".comm_ask_second #cb_num").val("");
                        coin_flag = false;
                    }
                })
                var $submit = $popup.find( '[nodetype="ok"]' );
                $submit.unbind('click');
                $submit.bind( 'click', function () {
                    var _this = this;
                    if (isSubmitting) return;
                    isSubmitting = true;
                    $(this).css("background-color", "#999");
                    // data = _this.getBackData();闇€瑕佽嚜琛屽簭鍒楀寲鍊�
                    var _title = $(".comm_ask_second #askInputSecond").val();
                    var _content = editor.codemirror.getValue();
                    /* if (_content) {
                     _content = _content.replace(/\<br\>/g, "\n");
                     _content = _content.replace(/\<p\>/g, "");
                     _content = _content.replace(/\<\/p\>/g, "");
                     }*/
                    var _tagList = $(".comm_ask_second [name='txtSearchTags']").val();
                    var _fromType = window.location.hostname;//"read_index";

                    var _isreward = $(" .comm_ask_second #chk_cb")[0].checked;

                    var _coin = $(" .comm_ask_second #cb_num").val();

                    //楠岃瘉
                    $(".err_div").css("display", "none");
                    if (!valid($(" .comm_ask_second #askInputSecond"),_title,"闂鏍囬",10,50)){

                        return false;
                    }


                    if( !valid($(" .comm_ask_second #wmd-input"),_content,"闂鎻忚堪",30,10000)){
                        return false;
                    };
                    if( !valid( $(" .comm_ask_second #divSearchTags"),_tagList.split(','),"闂鏍囩",1,5)){
                        $(" .comm_ask_second #divSearchTags").addClass('focus');
                        return false;
                    };

                    //閭ｄ釜C甯侀偅涓鏋滃嬀閫変簡鎵嶉獙璇佹槸涓嶆槸鏁板瓧,杩橀渶楠岃瘉C甯佺殑鍊煎涓嶅
                    var _cbNum = $(".comm_ask_second #cb_num").val();
                    if ($(".comm_ask_second #chk_cb")[0].checked) {
                        if (!/^[1-9]\d*$/.test(_cbNum)) {
                            $(".err_div").css("display", "block");
                            $(".err_txt").text("鎴戣鎮祻鍙兘褰曞叆鏁板瓧锛�");
                            $(".comm_ask_second #cb_num").focus();

                            $(_this).css("background-color", "#be0000");
                            isSubmitting = false;
                            return false;
                        }
                    }

                    function valid(fild,fild_value,name,minL,maxL){

                        if((fild_value && fild_value[0] == "") || fild_value.length==0){
                            mess = '璇疯緭鍏�' + name;
                            $(".err_div").css("display", "block");
                            $(".err_txt").text(mess);
                            fild.focus();

                            $(_this).css("background-color", "#be0000");
                            isSubmitting = false;

                            return false;
                        }
                        if(fild_value.length<minL||fild_value.length>maxL){
                            mess = '璇疯緭鍏ラ暱搴︿负' +minL+"-"+maxL+"鐨�"+name;

                            $(".err_txt").text(mess);
                            $(".err_div").css("display", "block");
                            fild.focus();

                            $(_this).css("background-color", "#be0000");
                            isSubmitting = false;

                            return false;
                        }
                        else{
                            return true;
                        }
                    }
                    //楠岃瘉C甯佷笉澶熶笉璁告彁浜�
                    if(coin_flag){
                        $(".err_div").css("display", "block");
                        $(_this).css("background-color", "#be0000");
                        isSubmitting = false;
                        return false;
                    }
                    var tempDomain = document.domain;
                    document.domain = 'csdn.net';
                    //_fromType = "";
                    //鐣欐剰璇ユ帴鍙ｈ姹傜被鍨�,寮傛鎻愪氦鏁版嵁锛屽湪璇ユ鍔犲叆浜嗛獙璇佺殑鑳藉姏锛�
                    //$.ajax({
                    //	type: "get",
                    ajaxProxy(create_question_proxy, {
                        type: "post",
                        data: {
                            "question[title]": _title,
                            "question[body]": _content,
                            "question[tag_list]": _tagList,
                            "question[from_type]": _fromType,
                            "question[is_reward]": _isreward,
                            "question[coin]": _coin
                        },
                        url: create_question_url,
                        dataType: "json",
                        //dataType: "jsonp",
                        //jsonp: "callback",
                        //async: false,
                        success: function(obj) {
                            document.domain = tempDomain;
                            if (obj.status) {
                                //璺宠浆鍒版柊椤甸潰,鍏抽棴,閲嶈杩欎釜鍊煎綋鍓嶉〉闈�
                                $(".comm_ask_second").css("display","none");
                                $(_this).css("background-color", "#be0000");
                                isSubmitting = false;
                                $( '.marker' ).remove();
                                var href="//ask.csdn.net/questions/"+obj.id;
                                window.open(href, "target=_blank,location=1");
                                alert("浣犵殑闂宸插彂甯冨埌鎶€鏈棶绛旈閬撱€�");
                            } else {
                                $(".err_div").css("display", "block");
                                $(".err_txt").text(obj.msg);
                                $(_this).css("background-color", "#be0000");
                                isSubmitting = false;
                            }
                        },
                        error: function(err) {
                            document.domain = tempDomain;
                            var i = 0;
                        }
                    });

                    //闇€瑕佽皟鐢ㄥ叧闂繖涓獥鍙�
                    return false;
                } );
                //缁戝畾鑷姩鎼滅储
                AskSearch({    $inputBox: $(".comm_ask_second #askInputSecond"),
                    $container: $("body > #common_ask_div_sc"),
                    searchUrl: ask_topic_autocomplete_url, //"http://192.168.6.227:9403/ask_topic/autocomplete", //鎼滅储鐨刄rl
                    isFirst: false
                });

                $(".comm_ask_second .CodeMirror textarea").bind("focus", function() {
                    $(".CodeMirror").addClass("CodeMirror-focused");
                });

                //鍔ㄦ€佸幓鍚庡彴鑾峰彇鎺ㄨ崘鏍囩start
                $(".comm_ask_second #askInputSecond").bind("blur", function(){
                    var _title = $(".comm_ask_second #askInputSecond").val();
                    var _content = editor.codemirror.getValue();//$(".comm_ask_second #wmd-input").val();
                    /* if (_content) {
                     _content = _content.replace(/\<br\>/g, "\n");
                     } else {
                     _content = "";
                     }*/
                    setTimeout(function(){$("#div_sc").css("display", "none");},400);
                    loadRecommTags( _title, _content);
                });
                $(".comm_ask_second .CodeMirror textarea").bind("blur", function(){
                    var _title = $(".comm_ask_second #askInputSecond").val();
                    var _content = editor.codemirror.getValue();//$(".comm_ask_second #wmd-input").val();
                    /*if (_content) {
                     _content = _content.replace(/\<br\>/g, "\n");
                     } else {
                     _content = "";
                     }*/
                    loadRecommTags( _title, _content);
                });
                //鍔ㄦ€佸幓鍚庡彴鑾峰彇鎺ㄨ崘鏍囩end
                //寮傛鍚庡彴楠岃瘉C甯佽冻澶燂紵
                $(".comm_ask_second #cb_num").bind("blur",function(){

                    if($(".comm_ask_second #chk_cb")[0].checked){
                        $(".err_div").css("display", "none");
                        if (!/^[0-9]\d*$/.test( $(".comm_ask_second #cb_num").val())) {
                            $(".err_div").css("display", "block");
                            $(".err_txt").text("鎴戣鎮祻鍙兘褰曞叆鏁板瓧锛�");
                            $(".comm_ask_second #cb_num").focus();
                            return false;
                        }
                        $.ajax({
                            type: "get",
                            url: valid_coin,
                            dataType: "jsonp",
                            jsonp: "callback",
                            async: false,
                            success: function(obj) {
                                if (obj.error==0) {
                                    //杩欎釜鐘舵€佷笅琛ㄧず鎷垮埌浜咰甯�
                                    if( $(".comm_ask_second #cb_num").val()>obj.score){
                                        $(".err_div").css("display", "block");
                                        $(".err_txt").text("鎮ㄧ殑C甯佷綑棰濅笉瓒�");
                                        //楠岃瘉涓嶉€氳繃涓嶈鎻愪氦
                                        coin_flag=true;
                                    }
                                    else{
                                        coin_flag=false;
                                    }
                                } else {
                                    $(".err_div").css("display", "block");
                                    $(".err_txt").text(obj.msg);
                                    coin_flag=true;
                                }
                            },
                            error: function(err) {
                                // alert("鍚庡彴鍑洪敊浜�");
                            }
                        });}

                })
                //鎻愰棶鐨勮嚜鍔═AG,闇€瑕佷綘鑷绮樿创閭ｄ釜JS鏂囦欢
                Creat_Dynamic_Tag(".comm_ask_second #divSearchTags", ask_topic_tag_suggest_url, ".comm_ask_second input[name='txtSearchTags']");

            }

        }//close pop function

        function ShowSecondPop() {
            // askFirst.popup.closeFun();闅愯棌璧锋潵

            $("body > .ask_first").find( '[nodetype="close"]' ).click();//闅愯棌璧锋潵绗竴涓�

            pop($("body > .ask_second"));
        }

        //鑷姩鎼滅储鎻愮ず
        function AskSearch(conf) {

            $("body").click(function(e){

                var target=  e.target;

                if($(target).closest("#common_ask_div_sc").length<1){
                    conf.$container.css("display","none");
                }

            })

            var $inputBox = conf.$inputBox;
            var $container = conf.$container;
            var searchUrl = conf.searchUrl;
            var isFirst = conf.isFirst;  //璋冪敤鎼滅储鐨勬槸棣栨寮瑰嚭绐楄繕鏄彁闂脊鍑虹獥
            var nowItem = -1;
            var userInput = "";
            $container.css("display", "none");
            $inputBox.css("autocomplete", "off");
            $container.css("z-index", "1100");

            //$inputBox.unbind("keyup");
            $inputBox[0].onkeyup=function(ev) {//propertychange
                var oEvent = ev||event;
                if(oEvent.keyCode == 40 || oEvent.keyCode == 38 || oEvent.keyCode == 27 || (oEvent.keyCode >= 113 && oEvent.keyCode <= 123) ||
                    oEvent.keyCode == 16 || oEvent.keyCode == 17 || oEvent.keyCode == 18 || oEvent.keyCode == 9 || oEvent.keyCode == 20){
                    return;
                }
                $container.css("opacity", 0);
                var rect = this.getBoundingClientRect();
                var scrTop = (document.body.scrollTop || document.documentElement.scrollTop);
                $container.css("left", rect.left);
                $container.css("top", rect.bottom + scrTop);//rect.top + rect.height
                //$container.css("top", rect.bottom);
                var inVal = this.value;
                if ( this.value.length > 0 ) {
                    showHint(inVal,$container,$inputBox,isFirst);
                } else {
                    $container.css("display", "none");
                }
                userInput = inVal;

            };
            //$inputBox.unbind("keydown");
            $inputBox[0].onkeydown=function(ev){
                var evt = ev||event;
                if (evt.keyCode == 27) {
                    $container.css("display", "none");
                    $inputBox.val(userInput);
                }
                if (evt.keyCode == 13) {
                    $container.css("display", "none");
                }
                if (evt.keyCode == 40) {
                    nowItem ++;
                    var suggItems = $(".sItem", $container);
                    var itemCnt = suggItems.length;
                    if ( nowItem === itemCnt) {
                        nowItem = -1;
                    }
                    suggItems.removeClass("sItemHover");
                    if (nowItem != -1) {
                        var nowSugg = suggItems.eq(nowItem);
                        nowSugg.addClass("sItemHover");
                        $inputBox.val($(".sfirst", nowSugg).text());
                    } else {
                        $inputBox.val(userInput);
                    }
                }
                if (evt.keyCode == 38) {
                    nowItem --;
                    var suggItems = $(".sItem", $container);
                    var itemCnt = suggItems.length;
                    if (nowItem == -2) {
                        nowItem = itemCnt - 1;
                    }
                    suggItems.removeClass("sItemHover");
                    if (nowItem != -1) {
                        var nowSugg = suggItems.eq(nowItem);
                        nowSugg.addClass("sItemHover");
                        $inputBox.val($(".sfirst", nowSugg).text());
                    } else {
                        $inputBox.val(userInput);
                    }
                }
            };
        }
        //浠ヤ笅鏂规硶鏄疉skSerch鐨勫師鍨嬫柟娉曟媶瑙�
        function showHint(inVal,$container,$inputBox,isFirst) {
            $container.css("display", "block");
            $.ajax( {
                type: "get",
                url: ask_topic_autocomplete_url, //"http://192.168.6.210//mcs/problem_solving/10710/1",
                data: {query: inVal, fields:"title,id,comments"},
                dataType: 'jsonp',
                jsonp: "callback",
                async: false,
                success: function (obj) {
                    if (obj != null && obj.contents) {
                        fillSuggestData($container, obj.contents,$inputBox,isFirst);
                    }
                },
                error: function(err){
                    var i = 0;
                    //alert('err');
                }
            } );
        }

        function fillSuggestData ($container, items,$inputBox,isFirst) {
            if (isFirst) {
                $container.html("<div class=\"sTitle\">鍙兘瀛樺湪绫讳技鐨勯棶棰橈細</div><div class=\"sFooter\"><a class=\"sFirstNewAsk\">鎴戞兂鎻愪竴涓柊闂</a></div>");
            } else {
                $container.html("<div class=\"sTitle\">鍙兘瀛樺湪绫讳技鐨勯棶棰橈細</div>");
            }
            var tpl = '<div class="sItem clearfix"><a href="{2}" target="_blank"><span class="sfirst">{0}</span><span class="ssecond">{1}</span></a></div>';

            if (items.length > 0) {
                $container.css("opacity", 1);
                //$container.css("display", "none");
            }
            for (var i = 0; i < items.length; i++){
                var item = items[i];
                var itemHtml = tpl.replace(/\{0\}/, item.title)
                    .replace(/\{1\}/, item.comments + "涓洖绛�")
                    .replace(/\{2\}/, ask_detail_url + item.id);

                if (isFirst) {
                    $(".sFooter", $container).before(itemHtml);
                } else {
                    $container.append(itemHtml);
                }
            }
            if (isFirst) {
                $("#common_ask_div_sc .sFirstNewAsk").unbind("click");
                $("#common_ask_div_sc .sFirstNewAsk").bind("click", function(){
                    ShowSecondPop();
                });
            }
            $(".sItem", $container).each(function(i, item) {
                    var _i = i;
                    var _item = $(item);
                    _item.bind("mouseover", function() {
                        $(".sItem", $container).removeClass("sItemHover");
                        $(this).addClass("sItemHover");
                        nowItem = _i;
                    });
                    _item.bind("click", function() {
                        //$inputBox.val($(".sfirst", $(this)).text());
                        $container.css("display","none");
                    });
                }
            );
        }
        //鑾峰彇鍚庡彴鎺ㄨ崘鏍囩
        function  loadRecommTags( _title, _content){
            if (_title == "" && _content=="") return;
            var dataStr = JSON.stringify({title: _title, body: _content, size: 4});
            //$.ajax({

            var tempDomain = document.domain;
            document.domain = 'csdn.net';
            ajaxProxy(ask_topic_tag_suggest_proxy, {
                headers: {
                    'X-acl-token': 'Yz3GAP4stGOIrLaIrnDed-uThp8K'
                },
                type: "POST",
                url: ask_topic_tag_suggest_url + "?dataType=json",
                data: dataStr,//{title: _title, body: _content, size: 4},
                contentType: "application/json",
                dataType: "json",
                //dataType: "jsonp",
                //jsonp: "callback",
                //contentType:'application/x-www-form-urlencoded; charset=UTF-8',
                success: function(obj) {
                    document.domain = tempDomain;
                    if (obj!=null && obj.length > 0) {
                        var $dataContainer = $( ".comm_ask_second #ask2_tagRecomm_div");
                        $dataContainer.html("<span class=\"drt_tit\">鎺ㄨ崘鏍囩锛�</span>");
                        //var tpl = "<label class=\"se_key\">{0}</label>";
                        var tpl = "<a href=\"#\" class=\"se_key\">{0}</a>";

                        var items = obj;
                        for (var i = 0; i < items.length; i++){
                            var item = items[i];
                            if (item.name == "") continue;
                            var itemHtml = tpl.replace(/\{0\}/, item.name + "&nbsp;&nbsp;锛�");
                            $dataContainer.append(itemHtml);
                            if (i == 4) {
                                break;
                            }
                        }
                        try {
                            window['trackingAd']($dataContainer);
                        } catch (ex) {}
                        $(".comm_ask_second .se_key").each(function(i,item){
                            var _item = $(item);
                            _item.bind("click", function(){
                                var cTagsObj = $(".comm_ask_second input[name='txtSearchTags']");
                                var cTags = cTagsObj.val();
                                var tagArr = cTags.split(',');

                                var tagText = _item.text();
                                var tagName = tagText.substring(0, tagText.length - 3);

                                for (var i = 0; i < tagArr.length; i ++) {
                                    if (tagArr[i] === tagName) {
                                        return;
                                    }
                                }
                                var oTagStr = cTags;
                                if (tagArr.length >= 5) {
                                    //$(".err_div").css("display", "block");
                                    //$(".err_txt").text("鏍囩鏈€澶氬彧鑳藉綍鍏�5涓紒");
                                    //setTimeout(function(){$(".err_div").css("display", "none");}, 5000);
                                    return;
                                    //oTagStr = "";
                                    //for (var i = 0; i < 4; i ++) {
                                    //  oTagStr += tagArr[i] + ",";
                                    //}
                                    //oTagStr = oTagStr.substring(0, oTagStr.length-1);
                                }
                                var tagCon = $(".comm_ask_second #divSearchTags");
                                var tagInput = tagCon.find("input");

                                var preNode = tagInput[0].previousSibling;
                                if (tagArr.length >= 5 && preNode) {
                                    tagInput[0].parentNode.removeChild(preNode);
                                }
                                tagInput.before('<span class="tag">'+'<span>'+tagName+'</span>'+'<a title="鍒犻櫎鏍囩" href="javascript:;">'+'脳'+'</a>'+'</span>');

                                var newTags = oTagStr == "" ? tagName : oTagStr + "," + tagName;
                                cTagsObj.val(newTags);
                                return false;
                            });
                        });
                    }
                },
                error: function(err){
                    document.domain = tempDomain;
                    var i = 0;
                    //alert('鍒濆鍖栨帹鑽愭爣绛鹃敊璇紒');
                }
            });
        }

        //鑷姩Tag
        function Creat_Dynamic_Tag(conid,dataurl,subinput)
        {
            var oTagscon=$(conid)[0];
            var tagInput=$(conid).find('input')[0];

            var iNow=-1;
            var oldValue='';
            var tags_array = [];

            var oUl = document.createElement('ul');
            oUl.className = 'complete_list';
            var oBody=document.getElementsByTagName('body')[0];
            oBody.appendChild(oUl);

            tagInput.onkeyup=function(ev)
            {
                var oEvent=ev || event;

                if(oEvent.keyCode==40 || oEvent.keyCode==38|| oEvent.keyCode==13){
                    return false;
                }

                $(this).removeAttr("style");

                if(oEvent.keyCode==8&&tagInput.value==''){

                    oUl.style.display = 'none';
                    return false;
                }

                $.ajax({
                    type: "get",
                    //url:dataurl,
                    url: "https://recommend-api.csdn.net/tag/complete?",
                    //data:{'title': tagInput.value, body: tagInput.value, size: 4},
                    data: {'query': tagInput.value},
                    dataType:"jsonp",
                    //jsonp: "callback",
                    success: function(jsonstr){
                        //鑾峰彇input杈撳叆妗嗙殑缁濆浣嶇疆
                        var tagInput_pos = getPos(tagInput);
                        var scrTop = (document.body.scrollTop || document.documentElement.scrollTop);

                        //寮瑰嚭涓嬫媺妗嗙浉瀵逛簬input杈撳叆妗嗗悜涓嬪亸绉诲€�
                        var mp =242;
                        iNow=-1;
                        oldValue=tagInput.value;

                        var data = jsonstr.suggestions;

                        if(data.length!=0)
                        {

                            var bb = $( window ).height() - tagInput_pos.top;
                            $(oUl).empty();
                            //$(oUl).css({left:tagInput_pos.left,top:tagInput_pos.top+mp+scrTop})
                            $(oUl).css({left:tagInput_pos.left,bottom:bb});
                            for(var i=0;i<data.length;i++)
                            {
                                $(oUl).append('<li>'+data[i]+'</li>');
                            }
                            $(oUl).css('display','block');
                        }

                        var aLi = oUl.children;

                        for(var i=0; i<aLi.length; i++)
                        {
                            aLi[i].index=i;

                            aLi[i].onmouseover=function(){

                                tagInput.value = this.innerHTML;

                                for(var i=0; i<aLi.length; i++){
                                    aLi[i].className='';
                                }
                                this.className = 'outborder';
                                iNow=this.index;
                            }
                        }
                    }

                });
            }

            tagInput.onblur = function()
            {
                if(tagInput.value=='')
                {
                    return false;
                }
                else
                {
                    if ($(subinput).val() != "") {
                        tags_array = $(subinput).val().split(",");
                    }
                    var re=/[^0-9a-zA-Z\u4e00-\u9fa5\-+#]+/;
                    var re2 = /\-$/;
                    var re3 = /^\-/;
                    var str_arr = tagInput.value.split(re);
                    var str = str_arr.join("-");

                    if(str=='-')
                    {
                        $(tagInput).css('background-color','#fbd8db');
                        return false;
                    }

                    if(re2.test(str))
                    {
                        str = str.substring(0,str.length-1);
                    }

                    if(re3.test(str))
                    {
                        str = str.substr(1);
                    }

                    if(find_in_arr(tags_array,str))
                    {
                        $(tagInput).css('background-color','#fbd8db');
                        return false;
                    }
                    var tags_len = tags_array.length;
                    if (tags_len >= 5) {
                        //$(".err_div").css("display", "block");
                        //$(".err_txt").text("鏍囩鏈€澶氬彧鑳藉綍鍏�5涓紒");
                        //setTimeout(function(){$(".err_div").css("display", "none");}, 5000);
                        return;
                        //tags_array.splice(tags_len - 1, 1);
                        //_remove_last_tag(conid);
                    }

                    _add_tag(conid,str);
                    tagInput.value = '';
                    tags_array.push(str);
                    $(subinput).val(tags_array.join(','));
                    oUl.style.display = 'none';
                    return false;
                }
            }

            tagInput.onkeydown=function(ev){

                var aLi = oUl.children;

                var oEvent=ev || event;

                if(oEvent.keyCode==13||oEvent.keyCode==188){

                    if(tagInput.value=='')
                    {
                        return false;
                    }
                    else
                    {
                        if ($(subinput).val() != "") {
                            tags_array = $(subinput).val().split(",");
                        }
                        var re=/[^0-9a-zA-Z\u4e00-\u9fa5\-+#]+/;
                        var re2 = /\-$/;
                        var re3 = /^\-/;
                        var str_arr = tagInput.value.split(re);
                        var str = str_arr.join("-");
                        if(str=='-')
                        {
                            $(tagInput).css('background-color','#fbd8db');
                            return false;
                        }

                        if(re2.test(str))
                        {
                            str = str.substring(0,str.length-1);
                        }

                        if(re3.test(str))
                        {
                            str = str.substr(1);
                        }

                        if(find_in_arr(tags_array,str))
                        {
                            $(tagInput).css('background-color','#fbd8db');
                            return false;
                        }
                        var tags_len = tags_array.length;
                        if (tags_len >= 5) {
                            //$(".err_div").css("display", "block");
                            //$(".err_txt").text("鏍囩鏈€澶氬彧鑳藉綍鍏�5涓紒");
                            //setTimeout(function(){$(".err_div").css("display", "none");}, 5000);
                            return;
                            //tags_array.splice(tags_len - 1, 1);
                            //_remove_last_tag(conid);
                        }

                        _add_tag(conid,str);
                        tagInput.value = '';
                        oUl.style.display = 'none';
                        tags_array.push(str);
                        $(subinput).val(tags_array.join(','));
                        return false;
                    }
                }

                if(oEvent.keyCode==8&&tagInput.value==''){

                    _remove_last_tag(conid);
                    oUl.style.display = 'none';
                    tags_array.pop();
                    $(subinput).val(tags_array.join(','));
                }

                if(oEvent.keyCode==40){
                    iNow++;

                    if(iNow==aLi.length){
                        iNow=-1;
                    }

                    for(var i=0; i<aLi.length; i++){
                        aLi[i].className='';
                    }
                    if(iNow!=-1){
                        aLi[iNow].className='outborder';
                        tagInput.value=aLi[iNow].innerHTML;
                    }else{
                        tagInput.value=oldValue;
                    }
                }

                if(oEvent.keyCode==38){
                    iNow--;
                    if(iNow==-2){
                        iNow=aLi.length-1;
                    }

                    for(var i=0; i<aLi.length; i++){
                        aLi[i].className='';
                    }
                    if(iNow!=-1){
                        aLi[iNow].className='outborder';
                        tagInput.value=aLi[iNow].innerHTML;
                    }else{
                        tagInput.value=oldValue;
                    }
                    return false;
                }
            }

            //鐐瑰嚮姣忎釜鏍囩鍚庣殑'x'鍒犻櫎褰撳墠鏍囩

            oTagscon.onclick = function(e)
            {
                var e = e || window.event;
                var target = e.srcElement || e.target;

                if (target.title =="鍒犻櫎鏍囩")
                {
                    if ($(subinput).val() != "") {
                        tags_array = $(subinput).val().split(",");
                    }
                    var cur_str = target.parentNode.children[0].innerHTML;
                    tags_array = remove_in_arr(tags_array,cur_str);
                    $(subinput).val(tags_array.join(','));
                    _remove_cur_tag($(target));
                    tagInput.focus();
                    $(tagInput).css('background-color','#fbd8db');
                    $(oUl).css('display','none');
                }
            }

            tagInput.onclick=function(ev){
                var oEvent=ev || event;
                oEvent.cancelBubble=true;
            }

            document.onclick = function()
            {
                oUl.style.display = 'none';
            }

            //鏌ユ壘鏁扮粍涓寚瀹氱殑鍏冪礌,骞朵笖鍒犻櫎杩欎釜鍏冪礌
            function remove_in_arr(arr,str)
            {
                for(var i=0;i<arr.length;i++)
                {
                    if(arr[i]==str)
                    {
                        arr.splice(i,1);
                    }
                }
                return arr;
            }
        }


        //鏌ユ壘鏁扮粍涓寚瀹氱殑鍏冪礌,骞朵笖鍒犻櫎杩欎釜鍏冪礌
        function remove_in_arr(arr,str)
        {
            for(var i=0;i<arr.length;i++)
            {
                if(arr[i]==str)
                {
                    arr.splice(i,1);
                }
            }
            return arr;
        }


        //鏌ユ壘鏁扮粍涓湁娌℃湁鐩稿悓鐨勫厓绱�
        function find_in_arr(arr,str)
        {
            var find = false;

            for(var i=0;i<arr.length;i++)
            {
                if(arr[i]==str)
                {
                    find = true;
                }
            }
            return find;
        }

        //澧炲姞鏍囩 obj涓哄鍔犳爣绛剧殑瀹瑰櫒锛宻tr涓烘爣绛句腑鐨勬枃瀛楀唴瀹广€�
        function _add_tag(obj,str)
        {
            var tagCon = $(obj);
            var tagInput = tagCon.find('input');
            tagInput.before('<span class="tag">'+'<span>'+str+'</span>'+'<a title="鍒犻櫎鏍囩" href="javascript:;">'+'脳'+'</a>'+'</span>');
        }

        //鍒犻櫎鏈€鍚庝竴涓爣绛�
        function _remove_last_tag(obj)
        {
            var tagCon = $(obj);
            tagCon.find('.tag').last().remove();
        }

        //鍒犻櫎褰撳墠鏍囩
        function _remove_cur_tag(obj)
        {
            obj.parent().remove();
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
        };

    });
})();