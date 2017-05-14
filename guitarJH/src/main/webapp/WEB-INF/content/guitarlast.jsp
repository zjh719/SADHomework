<%@ page contentType="text/html; charset=utf-8" language="java"
	errorPage=""%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html>
<html>
<head>
	<title>
		搜索结果
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
<body>
	<p><font size="6" color="blue">搜索结果</font></p>

<table class="table" contenteditable="true">
	<thead>
		<tr>
			<th>serialNumber<span style="font-weight: normal;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></th>
			<th>price<span style="font-weight: normal;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></th>
			<th>builder<span style="font-weight: normal;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></th>
			<th>model<span style="font-weight: normal;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></th>
			<th>type<span style="font-weight: normal;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></th>
			<th>backWood<span style="font-weight: normal;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></th>
			<th>topWood<span style="font-weight: normal;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></th>
		</tr>
	</thead>
	<s:iterator value="#session.list1" id="Guitar">
	<tbody>
		<tr>
			<td><s:property value="#Guitar.serialNumber"/></td>
			<td><s:property value="#Guitar.price"/></td>
			<td><s:property value="#Guitar.spec.builder"/></td>
			<td><s:property value="#Guitar.spec.model"/></td>
			<td><s:property value="#Guitar.spec.type "/></td>
			<td><s:property value="#Guitar.spec.backWood"/></td>
			<td><s:property value="#Guitar.spec.topWood"/></td>
		</tr>
	</tbody>
	</s:iterator>
</table>
	
</body>
</html>