var Paybook=angular.module('Paybook',["ngSanitize"]);
Paybook.controller("main",function main($scope,$http){
	$scope.actualTopic=0;
	$(document).scroll(function(){
		var bodyPadding,auxTop,auxBottom;
		if(document.body.offsetWidth<1008){
			bodyPadding=0;
			auxTop=97;
			auxBottom=72;
		}
		else{
			bodyPadding=parseFloat($("body").css("padding-top"));
			auxTop=192;
			auxBottom=157;
		}
		if(document.body.scrollTop<auxTop+bodyPadding){
			$("#TopicsLeft").addClass("TopicsLeftTop");
			$("#TopicsLeft").removeClass("TopicsLeftBottom");
			$("#TopicsLeft").removeClass("TopicsLeftMiddle");
		}
		else{
			if(document.body.offsetHeight-document.body.scrollTop<$(window.top).height()+auxBottom+bodyPadding){
				$("#TopicsLeft").addClass("TopicsLeftBottom");
				$("#TopicsLeft").removeClass("TopicsLeftTop");
				$("#TopicsLeft").removeClass("TopicsLeftMiddle");
			}
			else{
				$("#TopicsLeft").addClass("TopicsLeftMiddle");
				$("#TopicsLeft").removeClass("TopicsLeftTop");
				$("#TopicsLeft").removeClass("TopicsLeftBottom");
			}
		}
		var notFound=true;
		var scroll=document.body.scrollTop;
		for(var i=$scope.info.length-1;i>=0&&notFound;i--){
			if($("#Topic"+i).offset().top<scroll){
				$scope.actualTopic=i;
				notFound=false;
			}
		}
		$scope.$apply();
	});
	$(window).resize(function(){
		var bodyPadding,auxTop,auxBottom;
		if(document.body.offsetWidth<1008){
			bodyPadding=0;
			auxTop=97;
			auxBottom=72;
		}
		else{
			bodyPadding=parseFloat($("body").css("padding-top"));
			auxTop=192;
			auxBottom=157;
		}
		if(document.body.scrollTop<auxTop+bodyPadding){
			$("#TopicsLeft").addClass("TopicsLeftTop");
			$("#TopicsLeft").removeClass("TopicsLeftBottom");
			$("#TopicsLeft").removeClass("TopicsLeftMiddle");
		}
		else{
			if(document.body.offsetHeight-document.body.scrollTop<$(window.top).height()+auxBottom+bodyPadding){
				$("#TopicsLeft").addClass("TopicsLeftBottom");
				$("#TopicsLeft").removeClass("TopicsLeftTop");
				$("#TopicsLeft").removeClass("TopicsLeftMiddle");
			}
			else{
				$("#TopicsLeft").addClass("TopicsLeftMiddle");
				$("#TopicsLeft").removeClass("TopicsLeftTop");
				$("#TopicsLeft").removeClass("TopicsLeftBottom");
			}
		}
		var notFound=true;
		var scroll=document.body.scrollTop;
		for(var i=$scope.info.length-1;i>=0&&notFound;i--){
			if($("#Topic"+i).offset().top<scroll){
				$scope.actualTopic=i;
				notFound=false;
			}
		}
		$scope.$apply();
	});
	$scope.closeAll=function(){
		$(".Languages").removeClass("LanguagesVisible");
		$(".NavigationMoreList").removeClass("NavigationMoreListVisible");
		$(".NavigationBlocker").css("display","");
		$(".NavigationCenter").removeClass("NavigationCenterSmall");
		$(".Subnavigation ul").removeClass("SubnaviationShowUl");
	};
	$scope.init=function(){
		var languageCode=document.documentElement.lang;
		if(languageCode=="en"){
			$scope.language={
				code: "en",
				name: "English"
			};
			$scope.info=$scope.infoEn;
			$scope.allPages=$scope.allPagesEn;
		}
		else{
			if(languageCode=="es"){
				$scope.language={
					code: "es",
					name: "Español"
				};
				$scope.info=$scope.infoEs;
				$scope.allPages=$scope.allPagesEs;
			}
		}
		var bodyPadding,auxTop,auxBottom;
		if(document.body.offsetWidth<1008){
			bodyPadding=0;
			auxTop=97;
			auxBottom=72;
		}
		else{
			bodyPadding=parseFloat($("body").css("padding-top"));
			auxTop=192;
			auxBottom=157;
		}
		if(document.body.scrollTop<auxTop+bodyPadding){
			$("#TopicsLeft").addClass("TopicsLeftTop");
			$("#TopicsLeft").removeClass("TopicsLeftBottom");
			$("#TopicsLeft").removeClass("TopicsLeftMiddle");
		}
		else{
			if(document.body.offsetHeight-document.body.scrollTop<$(window.top).height()+auxBottom+bodyPadding){
				$("#TopicsLeft").addClass("TopicsLeftBottom");
				$("#TopicsLeft").removeClass("TopicsLeftTop");
				$("#TopicsLeft").removeClass("TopicsLeftMiddle");
			}
			else{
				$("#TopicsLeft").addClass("TopicsLeftMiddle");
				$("#TopicsLeft").removeClass("TopicsLeftTop");
				$("#TopicsLeft").removeClass("TopicsLeftBottom");
			}
		}
		setTimeout(function(){
			var notFound=true;
			var scroll=document.body.scrollTop;
			for(var i=$scope.info.length-1;i>=0&&notFound;i--){
				if($("#Topic"+i).offset().top<scroll){
					$scope.actualTopic=i;
					notFound=false;
				}
			}
		},500);
	};
	$scope.navbarShowMore=function(event){
		event.stopPropagation();
		$(".NavigationMoreList").addClass("NavigationMoreListVisible");
	};
	$scope.scrollToTopic=function(topic){
		$('html, body').animate({
        	scrollTop: $("#Topic"+topic).offset().top+1
	    }, 1000);
	};
	$scope.showLanguages=function(event){
		event.stopPropagation();
		$(".Languages").addClass("LanguagesVisible");
	};
	$scope.showSmallViews=function(event){
		event.stopPropagation();
		$(".NavigationCenter").addClass("NavigationCenterSmall");
		$(".NavigationBlocker").css("display","block");
	};
	$scope.showSmallSubviews=function(event){
		event.stopPropagation();
		$(".Subnavigation ul").addClass("SubnaviationShowUl");
	};
	/*
	███████╗███╗   ██╗
	██╔════╝████╗  ██║
	█████╗  ██╔██╗ ██║
	██╔══╝  ██║╚██╗██║
	███████╗██║ ╚████║
	╚══════╝╚═╝  ╚═══╝
	*/
	$scope.allPagesEn={
		Blog: "Blog",
		Company: "Company",
		Contact: "Contact",
		Docs: "Docs",
		Documentation: "Documentation",
		FAQ: "FAQ",
		Fin: "Fin",
		More: "More",
		Products: "Products",
		Questions: "Questions or comments?",
		Quickstart: "Quickstart",
		Resources: "Resources",
		Security: "Security",
		Solutions: "Solutions",
		Support: "Contact support",
		Status: "Status",
		TermsAndPrivacy: "Terms and Privacy",
	}
	$scope.infoEn=[
		{
			title: "Introduction",
			body: "<p>All libraries for Paybook are listed below. If you've built anything that you'd be willing to share, please let us know and we'll link to it here (and send you a t-shirt)!</p>",
		},
		{
			title: "Official libraries",
			body: '<a href="https://github.com/Paybook/Lite.JS" class="ResourcesCard"><img src="img/node.svg"><div><h3>Node</h3><p>paybook-node</p></div><div class="fa fa-chevron-right"></div></a><a href="https://github.com/Paybook/Lite.GO" class="ResourcesCard"><img src="img/go.svg"><div><h3>Go</h3><p>paybook-go</p></div><div class="fa fa-chevron-right"></div></a><a href="https://github.com/Paybook/Lite.Py" class="ResourcesCard"><img src="img/python.svg"><div><h3>Python</h3><p>paybook-python</p></div><div class="fa fa-chevron-right"></div></a>',
		},
		{
			title: "Community libraries",
			body: '<a href="https://github.com/Paybook/Lite.GO" class="ResourcesCard"><img src="img/ruby.svg"><div><h3>Ruby</h3><p>paybook-ruby</p></div><div class="fa fa-chevron-right"></div></a><a href="https://github.com/Paybook/Lite.GO" class="ResourcesCard"><img src="img/java.svg"><div><h3>Java</h3><p>paybook-java</p></div><div class="fa fa-chevron-right"></div></a><a href="https://github.com/Paybook/Lite.GO" class="ResourcesCard"><img src="img/php.svg"><div><h3>PHP</h3><p>paybook-php</p></div><div class="fa fa-chevron-right"></div></a><a href="https://github.com/Paybook/Lite.GO" class="ResourcesCard"><img src="img/swift.svg"><div><h3>Swift</h3><p>paybook-swift</p></div><div class="fa fa-chevron-right"></div></a>',
		},
		{
			title: "Community Resources",
			body: "<p>Ember component, by @jasonkriss</p><p>Example Angular/Ionic app, by @pbernasconi</p><p>Angular component, by @csbarnes</p>",
		},
	];
	/*
	███████╗███████╗
	██╔════╝██╔════╝
	█████╗  ███████╗
	██╔══╝  ╚════██║
	███████╗███████║
	╚══════╝╚══════╝
	*/
	$scope.allPagesEs={
		Blog: "Blog",
		Company: "Compañía",
		Contact: "Contacto",
		Docs: "Docs",
		Documentation: "Documentación",
		FAQ: "FAQ",
		Fin: "Fin",
		More: "Más",
		Products: "Productos",
		Questions: "¿Preguntas o comentarios?",
		Quickstart: "Quickstart",
		Resources: "Recursos",
		Security: "Seguridad",
		Solutions: "Soluciones",
		Support: "Contactar a soporte",
		Status: "Status",
		TermsAndPrivacy: "Términos y Privacidad",
	}
	$scope.infoEs=[
		{
			title: "Introduction",
			body: "<p>All libraries for Paybook are listed below. If you've built anything that you'd be willing to share, please let us know and we'll link to it here (and send you a t-shirt)!</p>",
		},
		{
			title: "Official libraries",
			body: '<a href="https://github.com/Paybook/Lite.JS" class="ResourcesCard"><img src="img/node.svg"><div><h3>Node</h3><p>paybook-node</p></div><div class="fa fa-chevron-right"></div></a><a href="https://github.com/Paybook/Lite.GO" class="ResourcesCard"><img src="img/go.svg"><div><h3>Go</h3><p>paybook-go</p></div><div class="fa fa-chevron-right"></div></a><a href="https://github.com/Paybook/Lite.Py" class="ResourcesCard"><img src="img/python.svg"><div><h3>Python</h3><p>paybook-python</p></div><div class="fa fa-chevron-right"></div></a>',
		},
		{
			title: "Community libraries",
			body: '<a href="https://github.com/Paybook/Lite.GO" class="ResourcesCard"><img src="img/ruby.svg"><div><h3>Ruby</h3><p>paybook-ruby</p></div><div class="fa fa-chevron-right"></div></a><a href="https://github.com/Paybook/Lite.GO" class="ResourcesCard"><img src="img/java.svg"><div><h3>Java</h3><p>paybook-java</p></div><div class="fa fa-chevron-right"></div></a><a href="https://github.com/Paybook/Lite.GO" class="ResourcesCard"><img src="img/php.svg"><div><h3>PHP</h3><p>paybook-php</p></div><div class="fa fa-chevron-right"></div></a><a href="https://github.com/Paybook/Lite.GO" class="ResourcesCard"><img src="img/swift.svg"><div><h3>Swift</h3><p>paybook-swift</p></div><div class="fa fa-chevron-right"></div></a>',
		},
		{
			title: "Community Resources",
			body: "<p>Ember component, by @jasonkriss</p><p>Example Angular/Ionic app, by @pbernasconi</p><p>Angular component, by @csbarnes</p>",
		},
	];
});