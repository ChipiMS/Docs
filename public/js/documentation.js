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
			title: "Overview",
			body: "",
			blue: "",
			subtopics: [
				{
					title: "Introduction",
					body: "<p>Welcome to Plaid! Here you will find information on how to integrate with and use the Plaid API. We've tried to make this documentation user-friendly and example-filled, but please drop us a line with any questions. If you're planning to use our API in production, you should take a look at our privacy policy.</p><p>The quickest way to get your integration up and running is to use Plaid Link: a secure, drop-in module that handles credential validation, multi-factor authentication, and error handling for each institution that we support, all while preventing credentials from ever hitting your server. Check out a demo.</p><p>The Plaid API is architected around REST, using standard HTTP verbs to communicate and HTTP response codes to indicate status and errors. All responses come in standard JSON. The Plaid API is served over HTTPS to ensure data privacy; HTTP is not supported. Every request must include your client_id and secret, except those sent to the Institution or Category endpoints. Request data can be included in either the body or query string, though using the body is recommended.</p>",
					blue: "",
				},
				{
					title: "Gaining Access",
					body: "<p>To gain access to the Plaid API, please create an account on our website. Upon completion of the signup process and acknowledgement of our terms, you will be provided with a live client_id and secret on the dashboard.</p><p>Once you receive your client_id and secret, get started by adding a user and getting back transaction data. Simply send a request with the quickstart parameters, and you'll receive 30 days of transactions for the user.</p>",
					blue: "Chipi sí sabe programar",
				},
				{
					title: "Sandbox",
					body: "<p>Our development environment works with both test user credentials and live accounts. The following test credentials allow access to the full API without the use of any real credentials:</p><p><strong>Credentials:</strong> The username plaid_test will return standard responses, and the username plaid_selections will force a selections MFA response for applicable institutions. All passwords except for plaid_good and plaid_locked will return as invalid. In certain cases, depending on the Financial Institution, you might be required to submit additional information in the credentials object such as a PIN number. For more details regarding these institution-specific requirements, check out our institutions endpoint.</p>",
					blue: "Chipi sí sabe programar",
				},
				{
					title: "Response Codes",
					body: "<p>We use standard HTTP response codes for success and failure notifications, and our errors are further classified by block. In general, 200 HTTP codes respond to success, 40X codes are for client-related failures, and 50X codes are for Plaid-related issues. We're doing our best to maximize the former and diminish the latter; however, if you find consistent issues, please contact support immediately. For a full list of response codes, see response code detail below or visit our GitHub support page.</p>",
					blue: "Chipi sí sabe programar",
				},
			]
		},
		{
			title: "Chipi",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			blue: "Chipi sí sabe programar",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
					blue: "Chipi sí sabe programar",
				}
			]
		},
		{
			title: "Sol",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			blue: "Chipi sí sabe programar",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
					blue: "Chipi sí sabe programar",
				}
			]
		},
		{
			title: "Introduction",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			blue: "Chipi sí sabe programar",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
					blue: "Chipi sí sabe programar",
				}
			]
		},
		{
			title: "Chipi",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			blue: "Chipi sí sabe programar",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
					blue: "Chipi sí sabe programar",
				}
			]
		},
		{
			title: "Sol",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			blue: "Chipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programarChipi sí sabe programar",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
					blue: "Chipi sí sabe programar",
				}
			]
		},
		{
			title: "Introduction",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			blue: "Chipi sí sabe programar",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
					blue: "Chipi sí sabe programar",
				}
			]
		},
		{
			title: "Chipi",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			blue: "Chipi sí sabe programar",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
					blue: "Chipi sí sabe programar",
				}
			]
		},
		{
			title: "Sol",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			blue: "Chipi sí sabe programar",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
					blue: "Chipi sí sabe programar",
				}
			]
		},
		{
			title: "Introduction",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			blue: "Chipi sí sabe programar",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
					blue: "Chipi sí sabe programar",
				}
			]
		},
		{
			title: "Chipi",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			blue: "Chipi sí sabe programar",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
					blue: "Chipi sí sabe programar",
				}
			]
		},
		{
			title: "Sol",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			blue: "Chipi sí sabe programar",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
					blue: "Chipi sí sabe programar",
				}
			]
		},
		{
			title: "Introduction",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			blue: "Chipi sí sabe programar",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
					blue: "Chipi sí sabe programar",
				}
			]
		},
		{
			title: "Chipi",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			blue: "Chipi sí sabe programar",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
					blue: "Chipi sí sabe programar",
				}
			]
		},
		{
			title: "Sol",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			blue: "Chipi sí sabe programar",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
					blue: "Chipi sí sabe programar",
				}
			]
		},
	];
});