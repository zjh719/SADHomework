<%@ page contentType="text/html; charset=utf-8" language="java"
	errorPage=""%>
<%@ taglib uri="/struts-tags" prefix="s" %>
<!DOCTYPE html>
<html>
<head>
	<title>
		市场营销系实验管理系统
	</title>
	<meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Cache-Control" content="no-cache" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="custom/favicon.ico"/>
        <!-- Bootstrap core CSS -->
        
        <link href="css/bootstrap.min.css" rel="stylesheet" />
        
        <link href="css/bootstrap-reset.css" rel="stylesheet" />
        <link href="css/typeaheadjs.css" rel="stylesheet" />
     

        <!--external css-->
        <link href="assets/font-awesome/css/font-awesome.css" rel="stylesheet" />
        <link href="assets/bootstrap-datepicker/Content/bootstrap-datepicker.css" rel="stylesheet" />
        
        <link href="assets/jquery-multi-select/css/multi-select.css" rel="stylesheet" />
        
    
        <!-- Custom styles for this template -->
        
        <link href="css/style.css" rel="stylesheet" />
        <link href="css/style-responsive.css" rel="stylesheet" />
        
        <link href="css/open-sans-font.css" rel="stylesheet" />
        <link href="css/custom.css" rel="stylesheet" />
        <link href="css/task.css" rel="stylesheet" />


    <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.css"/>
    <script type="text/javascript" src="vendor/jquery/jquery-1.10.2.min.js"></script>
  
    <script type="text/javascript" src="js/Ajax.js"></script>    
    <!--common script for all pages-->
      <script type="text/javascript" src="vendor/jquery/jquery-1.10.2.min.js"></script>
      <script type="text/javascript" src="vendor/bootstrap/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="dist/js/bootstrapValidator.js"></script>
    <script type="text/javascript" src="dist/js/formValidation.js"></script>
    <script type="text/javascript" src="dist/js/framework/bootstrap.js"></script>
    <script type="text/javascript" src="dist/js/language/zh_CN.js"></script>
    <script src="assets/bootstrap-accessibility-plugin/js/bootstrap-accessibility.min.js"></script>
     <script src="assets/jquery-multi-select/js/jquery.multi-select-0.9.11.min.js"></script>
    <script src="assets/jquery-knob/js/jquery.knob.1.2.8.min.js"></script>
    <script type="text/javascript" src="js/typeahead.bundle-0.10.2.min.js"></script>
    
    <script type="text/javascript" src="js/jquery.pulsate.min.js"></script>
        <script src="js/common-scripts.js"></script>
    
     <link rel="stylesheet" href="dist/css/bootstrapValidator.css"/>  
        <style>
            /* Tagline and Background Image */

            #logocontainer.panel-body {
        	    margin:0 auto;
	            vertical-align: middle;
	            text-align: center;
	            min-height: 140px !important;
	            max-height: 140px !important;
	            padding-top: 15px; /* EMS_UI_LOGO_PADDING */
            }

            #taglinebody {
        	    vertical-align: middle;
	            background: url(custom/schoolimage.png) no-repeat center center; /* EMS_UI_BACKGROUND_IMAGE? */
	            min-height: 140px;
	            background-position: 25% 40%;
	            border-radius: 5px;
	            padding: 0px;	
            }

            h3.taglinetext {
				opacity:0.9;
	            font-size: 1.1em;
	            width: 100%;
	            letter-spacing: 1px;
	            text-align: center;
	            color: #FFFFFF; /* EMS_UI_HEADLINE_COLOR */
	            background: #1C86EE; /* EMS_UI_PRIMARY_COLOR */
	            margin: 56px auto !important;
	            padding: 6px;	
            }

            ul.nav.navbar-nav.navbar-right.a {
	            color:#4E2C7E !important; /* EMS_UI_PRIMARY_COLOR */
            }

            a {
	            color:#4E2C7E !important; /* EMS_UI_PRIMARY_COLOR */
            }

            a:hover, a:focus {
	            color:#2D194B !important; /* EMS_UI_SECONDARY_COLOR */
            }

            a.navbar-brand, li.nav {
	            color:#FFFFFF !important; /* EMS_UI_HEADLINE_COLOR */
            }

            .navbar-inverse .navbar-nav>li>a { /* EMS_UI_HEADLINE_COLOR */
	            color:#FFFFFF !important;
            }

            a.dropdown-toggle {
                color:#FFFFFF !important; /* EMS_UI_HEADLINE_COLOR */
            }

            .dropdown-menu > li {
	            color:#FFFFFF !important; /* EMS_UI_HEADLINE_COLOR */
            }

            .dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus {
	            background-color: #2D194B; /* EMS_UI_SECONDARY_COLOR */
	            color: #FFFFFF !important;
	            text-decoration: none;	
            }

            a.list-group-item:hover {
                color: #2D194B !important; /* EMS_UI_SECONDARY_COLOR */
            }

            .navbar-inverse {
                background-color: #4E2C7E !important; /* EMS_UI_PRIMARY_COLOR */
                border-color: #4E2C7E !important; /* EMS_UI_PRIMARY_COLOR */
            }

            .dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus {
                background-color: #2D194B; /* EMS_UI_SECONDARY_COLOR */
                color: #FFFFFF; /* EMS_UI_HEADLINE_COLOR */
                text-decoration: none;
            }

            .navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus, .navbar-inverse .navbar-nav > .open > a, .navbar-inverse .navbar-nav > .open > a:focus{
                background-color: #2D194B !important; /* EMS_UI_SECONDARY_COLOR */
            }

            .profile-nav .user-heading {
                background: #2D194B; /* EMS_UI_SECONDARY_COLOR */
                color: #FFFFFF; /* EMS_UI_HEADLINE_COLOR */
                border-radius: 4px 4px 0 0;
                -webkit-border-radius: 4px 4px 0 0;
                padding: 30px;
                text-align: center;
            }

            .panel-heading .nav {
                border: medium none;
                font-size: 13px;
                background:#4E2C7E;  /* EMS_UI_PRIMARY_COLOR */
                border-radius: 5px;
                margin: -10px -15px -11px;
            }

            .panel-heading .nav > li.active > a {
	            color: #4E2C7E !important;  /* EMS_UI_PRIMARY_COLOR */
            }

            .panel-heading .nav > li.active > a, .panel-heading .nav > li > a:hover {
	            color: #2D194B !important;  /* EMS_UI_SECONDARY_COLOR */
            }

            .profile-nav ul > li > a:hover, .profile-nav ul > li > a:focus, .profile-nav ul li.active a {
	            background: #f8f7f5 !important;
	            border-left: 5px solid #4E2C7E;   /* EMS_UI_PRIMARY_COLOR */
	            color: #303030 !important;  /* Black color used for all sites */
            }

            .site-footer {
	            background:#1C86EE; /* EMS_UI_PRIMARY_COLOR */
	            color: #FFFFFF;  /* EMS_UI_HEADLINE_COLOR */
            }

            .form-signin h2.form-signin-heading {
                margin: 0;
                padding:20px 15px;
                text-align: center;
	            background:#1C86EE; /* EMS_UI_PRIMARY_COLOR */
                border-radius: 5px 5px 0 0;
                -webkit-border-radius: 5px 5px 0 0;
                color: #fff;
                font-size: 24px;
                text-transform: uppercase;
                font-weight: 300;
                font-family: 'Open Sans', sans-serif; /* Open Sans for all, Font Style - Set by Google */
            }

            .task-thumb-details h1, .task-thumb-details h1 a, .task-progress h1, .task-progress h1 a {
                color: #4E2C7E; /* EMS_UI_PRIMARY_COLOR */
                font-size: 24px;
                margin: 0;
                padding: 0;
                font-weight: 400;
            }

            .btn-primary {
	            background-color:#4E2C7E; /* EMS_UI_PRIMARY_COLOR */
                border-color: #4E2C7E; /* EMS_UI_PRIMARY_COLOR */
	            color:#FFFFFF; /* EMS_UI_HEADLINE_COLOR */
            }

            .btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open .dropdown-toggle.btn-primary {
                background-color: #2D194B; /* EMS_UI_SECONDARY_COLOR */
                border-color: #2D194B; /* EMS_UI_SECONDARY_COLOR */
                color: #fff !important;
            }

            .activity.red span {
                background: #2D194B; /* EMS_UI_SECONDARY_COLOR */
            }

            .ms-container .ms-selectable li.ms-hover, .ms-container .ms-selection li.ms-hover {
                background-color: #4E2C7E !important; /* EMS_UI_PRIMARY_COLOR */
                color: #FFFFFF !important; /* EMS_UI_HEADLINE_COLOR */
                cursor: pointer;
                text-decoration: none;
            }

            ::selection {
                background: #4E2C7E !important; /* EMS_UI_PRIMARY_COLOR */
                color: #fff;
            }


            ::-moz-selection {
                background: #4E2C7E !important; /* EMS_UI_PRIMARY_COLOR */
                color: #fff;
            }

            .bio-desk h4.title2 {
            color: #4E2C7E !important; /* EMS_UI_PRIMARY_COLOR */
            }

            .label-primary {
	            background-color: #4E2C7E !important; /* EMS_UI_PRIMARY_COLOR */
            }

            .badge.bg-primary {
            background: #4E2C7E !important; /* EMS_UI_PRIMARY_COLOR */
            }
        
            .text-center a {
	            color:#FFFFFF !important;   /* EMS_UI_HEADLINE_COLOR */
	            text-decoration: underline;
            }

            .modal-header {
                background:#4E2C7E !important; /* EMS_UI_PRIMARY_COLOR */
            }
        </style>
    
    
    <!-- Get jQuery from the Microsoft CDN and fallback to the local copy, if not available -->
</head>
<body class="boxed-page">
 

    <div class="container">
        <section id="container" class="">

            <!--main content start-->
            <section id="primary-content">
                <section class=" wrapper site-min-height">
                    <div class="row">
                        <div class="col-lg-3">
                            <!-- banner start -->
                            <div class="row">
                                <div class="col-xs-12">
                                     <section class="panel">
                                        <a href="http://sm.xmu.edu.cn/html/about/department/marketing/" target="_blank" id="ctl00_BannerLink">
                                            <div id="logocontainer" class="panel-body">
                                                    <img id="SchoolImg" title="厦门大学'" src="custom/customlogo.png" alt="厦门大学管理学院图标'" style="border-width:0px;" />
                                            </div>
                                        </a>
                                    </section>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-lg-9">
                            <div class="row">
                                <div class="col-xs-12">
                                    <section class="panel">
                                        <a id="ctl00_Banner2Link">
                                            <div id="taglinebody" class="panel-body">
                                                    <h3 class="taglinetext"><strong id="ctl00_DepartmentText">市场学系</strong>&nbsp;<span id="ctl00_SiteNameText">实验管理系统</span></h3>
                                            </div>
                                        </a>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <!-- banner end -->
                    </div>

                    <!-- START NOTIFICATIONS -->
                    
                    <!-- END NOTIFICATIONS -->
                    
                    <!-- page start-->

    <div class="row">
        <div class="col-lg-6">
            <section class="panel">
                <div class="panel-body">
                    <div class="form-signin">
                        <h2 class="form-signin-heading">实验管理系统</h2>
                        
                        
                         <form id="defaultForm" name="aspnetForm" method="post" action="StudentsLogin" >  
                        <div class="login-wrap">
                            <div class="form-group">
                            <label>用户名</label>
                            <input name="id" type="text" maxlength="12" size="25" id="id" class="form-control" autofocus placeholder="请输您的学工号" />
                            </div>
                            <div class="form-group">
                            <label>密码</label>
                            <input name="password" type="password" maxlength="16" size="25" id="password" class="form-control" placeholder="请输入您的密码" />
                            </div>
                            <div class="form-group">
                                    <div class="radio-inline">
                                	<label class="radio-inline">
                                    <input type="radio" name="1" id="radio1" checked/>教师
                                    </label>
                                    </div>
                                    <div class="radio-inline">
                                    <label class="radio-inline">
                                    <input type="radio" name="1" id="radio2"/>学生
                                    </label>
                                    </div>
                                    <div class="radio-inline">
                                    <label class="radio-inline">
                                    <input type="radio" name="1" id="radio3"/>管理员	
                                    </label>
                                    </div>       
                            </div>
                            <input type="submit" name="login" value="登录" id="ctl00_ContentPlaceHolder1_default_auth_button" class="btn btn-info btn-lg btn-block"  onkeydown="return checkForm1()" onClick="return checkForm()"/>
                            
                            <div class="form-group">

                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>

        <div class="col-lg-6">
            <section class="panel">
                <div class="panel-body">
                     

                    

                    
                        <strong></strong>
				        <a class="btn btn-info btn-block" href="register">学生注册</a>
                    
                </div>
            </section>
             <section class="panel">
                <div class="panel-body">
                     

                    

                    
                        <strong></strong>
				        <a class="btn btn-info btn-block" href="forgetpass">忘记密码?</a>
                    
                </div>
            </section>
        </div>
    </div>


                    <!-- page end-->

                </section>
            </section>
                
            <!--footer start-->
            <footer class="site-footer">
                <div class="text-center">
                    <address>
                        <span id="ctl00_TextPageFooterLabel">Email questions to</span> <a id="ctl00_MailToHyperLink" href="mailto:tomking15@qq.com">tomking15@qq.com</a><br/>
                        Copyright &copy; <span id="ctl00_YearLabel">2017</span>&nbsp;<a href="http://sm.cumt.edu.cn" target="_blank">SM.CUMT.Edu</a>
                    </address>
                </div>
            </footer>
            <!--footer end-->
        </section>
    </div>
    <script type="text/javascript">
  var vr='${requestScope.message}';
  if(vr!=''){
    confirm(vr);}
  else{
  
	  }
  </script>
    <script type="text/javascript">
		$(document).ready(function() {
			//  alert(" 输入值为空！");
		    $('#defaultForm').formValidation({
		        err: {
		            container: 'tooltip'
		        },
		//        trigger: 'blur',
		        icon: {
		            valid: 'glyphicon glyphicon-ok',
		            invalid: 'glyphicon glyphicon-remove',
		            validating: 'glyphicon glyphicon-refresh'
		        },
		        fields: {
		        	 password: {
			                validators: {
			                    stringLength: {
	                                min:6,
			                        message: '密码至少为6位'
									/* 根据实际情况设置 */
			                    },
			                    notEmpty: {
			                        message: '密码不能为空'
			                    },
			                    regexp: {
			                        enabled: true,
			                        regexp: /^[a-z,0-9]+$/i,
			                        message: '密码为数字与字母的组合'
			                    }
			                }
			            },            
			            id: {
			                validators: {
			                    stringLength: {
	                                min:8,
			                        message: '学工号至少为8位数字'
									/* 根据实际情况设置 */
			                    },
			                    notEmpty: {
			                        message: '学工号不能为空'
			                    },
			                    regexp: {
			                        enabled: true,
			                        regexp: /^[0-9]+$/i,
			                        message: '请正确输入学工号'
			                    }
			            }
		            },
		        }
		    });
		});
	</script>


<script>


function checkForm(){
	 var val1=$('input:radio[id="radio1"]:checked').val();
	 var val2=$('input:radio[id="radio2"]:checked').val();
	 var val3=$('input:radio[id="radio3"]:checked').val();
	if(val1!=null){
		var teachers_id=$("#id").val();
		var teachers_password=$("#password").val();
		$.ajax({
			   url:'Check1_Check_TeachersLogin',// 跳转到 action  
			   data:{  
				   id : teachers_id,password : teachers_password  
			    }, 
			    type:'post',  
			    cache:false,  
			    dataType:'json',  
			    success:function(data) { 
			    	console.log(data);
			    	if(data.flag==false){
			    		 alert("账号或密码错误,请重新输入!");
			    		 return false;
			    	}
			    	else{
			    		$("#defaultForm").attr("action", "TeachersLogin");
			    		$("#defaultForm").submit();
				    	return true;}
			     }
			   
		});
		return false;
	}
	else if(val2!=null){
		
		var students_id=$("#id").val();
	
		var students_password=$("#password").val();
		$.ajax({
			   url:'Check_Check_StudentsLogin',// 跳转到 action  
			   data:{  
				   id : students_id,password : students_password  
			    }, 
			    type:'post',  
			    cache:false,  
			    dataType:'json',  
			    success:function(data) { 
			    	console.log(data);
			    	if(data.flag==false){
			    		 alert("账号或密码错误,请重新输入!");
			    		 
			    		 return false;
			    	}
			    	else{
			    		$("#defaultForm").submit();
				    	return true;}
			     }
			   
		});
		return false;
		
	}
	else{
		var admins_id=$("#id").val();
		var admins_password=$("#password").val();
		$.ajax({
			   url:'Check2_Check_AdminsLogin',// 跳转到 action  
			   data:{  
				   id : admins_id,password : admins_password  
			    }, 
			    type:'post',  
			    cache:false,  
			    dataType:'json',  
			    success:function(data) { 
			    	console.log(data);
			    	if(data.flag==false){
			    		 alert("账号或密码错误,请重新输入!");
			    		 return false;
			    	}
			    	else{
			    		$("#defaultForm").attr("action", "AdminsLogin");
			    		$("#defaultForm").submit();
				    	return true;}
			     }
			   
		});
		return false;
	}
	
	return false
};


$("body").keydown(function() {
    if (event.keyCode == "13") {//keyCode=13是回车键
    	checkForm();
    }
});    

</script>




</body>
</html>