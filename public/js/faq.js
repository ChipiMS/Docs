var Plaid=angular.module('Plaid',["ngSanitize"]);
Plaid.controller("main",function main($scope,$http){
	$scope.actualTopic;
	$(document).scroll(function(){
		if(document.body.scrollTop<178){
			$("#TopicsLeft").addClass("TopicsLeftTop");
			$("#TopicsLeft").removeClass("TopicsLeftBottom");
			$("#TopicsLeft").removeClass("TopicsLeftMiddle");
		}
		else{
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
		}
		else{
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
			title: "What are Plaid's products?",
			body: "<p>Our core products are called \"Auth\" and \"Connect\". Auth enables you to instantly authenticate a bank account. Connect provides you transactional data on a user's bank or credit card accounts. You can find additional detail about these products in our documentation. If you're looking for other products or to solve other product needs, please feel free to reach out to us at info@plaid.com with details and we'll get back to you!</p>",
		},
		{
			title: "How many banks does Plaid support?",
			body: "<p>We support bank account authentication via Auth for the top 14 banks, which covers the vast majority of active depository accounts. Feel free to read more about what banks we currently support on our site. For Connect, we provide transactional data for 18,000+ banks and credit unions across the U.S. and Canada.</p>",
		},
		{
			title: "What type of information does Plaid provide via Connect?",
			body: "<p>Please see our site for a list of the fields we return via Connect. If there's something you want that you don't see, we'd love to hear from you. Feel free to reach us at signups@plaid.com to share your feedback and get answers to any additional questions you have on our products and your data needs.</p>",
		},
		{
			title: "Can I test Plaid’s data and products?",
			body: "<p>We make it easy for you to validate our data and products. You can create an account on our site to gain immediate access to the platform and a live set of API keys. You will be able to add up to 100 live users for free in the development environment.</p>",
		},
		{
			title: "Once I’ve tested Plaid, how do I upgrade to a production-level account?",
			body: "<p>Feel free to reach out to signups@plaid.com to get set up with a fully upgraded account.</p>",
		},
		{
			title: "How much does Plaid cost?",
			body: "<p>Please reach out to signups@plaid.com to receive pricing details.</p>",
		},
		{
			title: "Does Plaid process transactions?",
			body: "<p>While Plaid does not process ACH transactions (which is what is required to send money between accounts), we can help to instantly authenticate accounts for ACH. Instead of requiring an account and routing number followed by micro-deposits that typically take days to post, Plaid only needs a user's online banking credentials to authenticate an account so that you can begin transferring money immediately. You can read more about our Auth product on our site.</p>",
		},
		{
			title: "Does Plaid support Multi-Factor Authentication (MFA)?",
			body: "<p>Our API supports the MFA processes at all supported institutions. Feel free to read about how MFA is handled in our documentation.</p>",
		},
		{
			title: "Does Plaid support business bank accounts?",
			body: "<p>Plaid supports both consumer and business bank accounts.</p>",
		},
		{
			title: "Does Plaid pull investment/loan/brokerage data?",
			body: "<p>Plaid can pull high-level asset information as relevant to the overall financial picture of a user. However, we currently do not pull detailed account holding information, but hope to do so in the near future! If this is something you're interested in, please drop us a note at signups@plaid.com with specifics on your data needs and use cases. We're always looking to hear from companies about their data needs.</p>",
		},
		{
			title: "Does Plaid support international bank accounts?",
			body: "<p>We currently support US and Canadian institutions only. We do hope to expand coverage to international banks at some point in the future, but we have no concrete timeline for that yet.</p>",
		},
		{
			title: "How do I integrate with Plaid?",
			body: "<p>Plaid Link is a quick and secure way to integrate with the Plaid API. Link is a drop-in module that handles credential validation, multi-factor authentication, and error handling for each institution that we support – all while keeping credentials from ever hitting your server. Head over to the Link documentation to get started right away. Otherwise, clients are also welcome to integrate directly with our API for onboarding!</p><p>If you have additional questions, feel free to reach out to our team at info@plaid.com!</p>",
		},
	];
});