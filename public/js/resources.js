var Plaid=angular.module('Plaid',["ngSanitize"]);
Plaid.controller("main",function main($scope,$http){
	$scope.actualTopic;
	$scope.actualSubtopic;
	$(document).scroll(function(){
		if(document.body.scrollTop<178){
			$("#TopicsLeft").addClass("TopicsLeftTop");
			$("#TopicsLeft").removeClass("TopicsLeftBottom");
			$("#TopicsLeft").removeClass("TopicsLeftMiddle");
			$scope.actualTopic=0;
			$scope.actualSubtopic=-1;
		}
		else{
			var notFound=true;
			var scroll=document.body.scrollTop;
			for(var i=$scope.info.length-1;i>=0&&notFound;i--){
				for(var j=$scope.info[i].subtopics.length-1;j>=0&&notFound;j--){
					if($("#Topic"+i+"_"+j).offset().top<scroll){
						$scope.actualTopic=i;
						$scope.actualSubtopic=j;
						notFound=false;
					}
				}
				if(notFound&&$("#Topic"+i).offset().top<scroll){
					$scope.actualTopic=i;
					$scope.actualSubtopic=-1;
					notFound=false;
				}
			}
			var bodyPadding=parseFloat($("body").css("padding-top"));
			if(document.body.offsetHeight-document.body.scrollTop<$(window.top).height()+157+bodyPadding){
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
		$scope.$apply();
	});
	$scope.view="Main";
	$scope.closeAll=function(){
		$(".NavigationMoreList").removeClass("NavigationMoreListVisible");
		$(".NavigationBlocker").css("display","");
		$(".NavigationCenter").removeClass("NavigationCenterSmall");
		$(".Subnavigation ul").removeClass("SubnaviationShowUl");
	};
	$scope.init=function(){
		if(document.body.scrollTop<178){
			$("#TopicsLeft").addClass("TopicsLeftTop");
			$("#TopicsLeft").removeClass("TopicsLeftBottom");
			$("#TopicsLeft").removeClass("TopicsLeftMiddle");
			$scope.actualTopic=0;
			$scope.actualSubtopic=-1;
		}
		else{
			var notFound=true;
			var scroll=document.body.scrollTop;
			for(var i=$scope.info.length-1;i>=0&&notFound;i--){
				for(var j=$scope.info[i].subtopics.length-1;j>=0&&notFound;j--){
					if($("#Topic"+i+"_"+j).offset()<scroll){
						$scope.actualTopic=i;
						$scope.actualSubtopic=j;
						notFound=false;
					}
				}
				if(notFound&&$("#Topic"+i).offset().top<scroll){
					$scope.actualTopic=i;
					$scope.actualSubtopic=-1;
					notFound=false;
				}
			}
			var bodyPadding=parseFloat($("body").css("padding-top"));
			if(document.body.offsetHeight-document.body.scrollTop<$(window.top).height()+157+bodyPadding){
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
	};
	$scope.navbarShowMore=function(event){
		event.stopPropagation();
		$(".NavigationMoreList").addClass("NavigationMoreListVisible");
	};
	$scope.scrollToSubtopic=function(topic,subtopic){
		$('html, body').animate({
        	scrollTop: $("#Topic"+topic+"_"+subtopic).offset().top+1
	    }, 1000);
	};
	$scope.scrollToTopic=function(topic){
		$('html, body').animate({
        	scrollTop: $("#Topic"+topic).offset().top+1
	    }, 1000);
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
	$scope.info=[
		{
			title: "Introduction",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
				}
			]
		},
		{
			title: "Chipi",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
				}
			]
		},
		{
			title: "Sol",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
				}
			]
		},
		{
			title: "Introduction",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
				}
			]
		},
		{
			title: "Chipi",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
				}
			]
		},
		{
			title: "Sol",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
				}
			]
		},
		{
			title: "Introduction",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
				}
			]
		},
		{
			title: "Chipi",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
				}
			]
		},
		{
			title: "Sol",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
				}
			]
		},
		{
			title: "Introduction",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
				}
			]
		},
		{
			title: "Chipi",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
				}
			]
		},
		{
			title: "Sol",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
				}
			]
		},
		{
			title: "Introduction",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
				}
			]
		},
		{
			title: "Chipi",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
				}
			]
		},
		{
			title: "Sol",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
				}
			]
		},
		{
			title: "Introduction",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
				}
			]
		},
		{
			title: "Chipi",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
				}
			]
		},
		{
			title: "Sol",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
				}
			]
		},
		{
			title: "Introduction",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
				}
			]
		},
		{
			title: "Chipi",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
				}
			]
		},
		{
			title: "Sol",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
				}
			]
		},
		{
			title: "Introduction",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
				}
			]
		},
		{
			title: "Chipi",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
				}
			]
		},
		{
			title: "Sol",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
				}
			]
		},
	];
});