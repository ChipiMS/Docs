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
			title: "Introduction",
			body: '<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p><img src="../img/quickstartIntroduction.jpg" width="100%">',
			subtopics: []
		},
		{
			title: "Glossary",
			body: "<p>Most Plaid API calls involve three pieces of information: a client_id, secret, and an access_token. All three of these are considered private information - they are not meant to be shared or hard coded directly into an app or site. This poses a problem for Plaid Link, as a user will be onboarding directly in the browser. To address this, Plaid client accounts now have an additional identifier: a public_key.</p>",
			subtopics: [
				{	
					title: "The public_key",
					body: "<ol><li>Associates users that onboard through Plaid Link with your client_id and secret</li><li>Cannot be used to make authenticated Plaid API calls (i.e. retrieving account and routing numbers for a user)</li></ol>",
				},
				{	
					title: "The public_token",
					body: "<p>Once a user has successfully onboarded via Plaid Link, the module will provide a public_token. This is in contrast to typical Plaid API requests, which return an access_token.</p><ol><li>Is safe to expose in an app or browser</li><li>Cannot be used to retrieve account and routing numbers (for auth) or transactions (for connect) directly</li><li>Can be exchanged for a Plaid access_token via the /exchange_token endpoint.</li></ol><p>The getting started guide below covers illustrates how to use your public_key to get up and running with Plaid Link. The guide also covers how to exchange a public_token for an access_token.</p>",
				}
			]
		},
		{
			title: "Getting started",
			body: '<p>There are two different integrations:</p><ol><li>Simple The simple integration provides a customizable "Link your Bank Account" button and handles submitting a Plaid public_token to a server endpoint that you specify.</li><li>Custom The custom integration lets you trigger the Plaid Link module via client-side Javascript. You specify your own callback function to be called with the public_token once a user has authenticated.</li></ol>',
			subtopics: [
				{	
					title: "Step 1: Get your public_key",
					body: '<p>Your public_key is available from the Plaid dashboard:</p><img src="../img/quickstartStep1.png" width="100%"><p>Your public_key is a less privileged version of your client_id and secret. It simply associates accounts you create using Plaid Link with your client_id. All Plaid API requests must be made using your private client_id and secret.</p>',
				},
				{	
					title: "Step 2: Simple integration",
					body: '<p>Include the following markup (the form and script tags) in your site or web application:</p><div class="Code HTML"><div class="Comment">A hidden input named public_token will be appended to this form once the user has completed the Link flow. Link will then submit the form, sending the public_token to your server.</div><div class="Tag"><span class="Type">form</span><span class="Property"><span class="PropertyName">id</span><span class="PropertyValue">some-id</span></span><span class="Property"><span class="PropertyName">method</span><span class="PropertyValue">POST</span></span><span class="Property"><span class="PropertyName">action</span><span class="PropertyValue">/authenticate</span></span><span class="Content"></span><span class="Type">form</span></div><div class="Comment">To use Link with longtail institutions on Connect, set thedata-longtail attribute to \'true\'. See the Parameter Reference foradditional documentation.</div><div class="Tag"><span class="Type">script</span><span class="Property"><span class="PropertyName">src</span><span class="PropertyValue">https://cdn.plaid.com/link/stable/link-initialize.js</span></span><span class="Property"><span class="PropertyName">data-client-name</span><span class="PropertyValue">Client Name</span></span><span class="Property"><span class="PropertyName">data-form-id</span><span class="PropertyValue">some-id</span></span><span class="Property"><span class="PropertyName">data-key</span><span class="PropertyValue">test-key</span></span><span class="Property"><span class="PropertyName">data-product</span><span class="PropertyValue">auth</span></span><span class="Property"><span class="PropertyName">data-env</span><span class="PropertyValue">tartan</span></span><span class="Content"></span><span class="Type">script</span></div></div><p></p><p></p>',
				},
				{	
					title: "Step 3: Custom integration",
					body: "<p></p>",
				},
				{	
					title: "Step 4: Write server-side handler",
					body: "<p></p>",
				},
				{	
					title: "Step 5: Test with sandbox credentials",
					body: "<p></p>",
				},
			]
		},
		{
			title: "",
			body: "<p></p>",
			subtopics: [
				{	
					title: "",
					body: "<p></p>",
				}
			]
		},
		{
			title: "",
			body: "<p></p>",
			subtopics: [
				{	
					title: "",
					body: "<p></p>",
				}
			]
		},
		{
			title: "",
			body: "<p></p>",
			subtopics: [
				{	
					title: "",
					body: "<p></p>",
				}
			]
		},
		{
			title: "",
			body: "<p></p>",
			subtopics: [
				{	
					title: "",
					body: "<p></p>",
				}
			]
		},
		{
			title: "",
			body: "<p></p>",
			subtopics: [
				{	
					title: "",
					body: "<p></p>",
				}
			]
		},
		{
			title: "",
			body: "<p></p>",
			subtopics: [
				{	
					title: "",
					body: "<p></p>",
				}
			]
		},
		{
			title: "",
			body: "<p></p>",
			subtopics: [
				{	
					title: "",
					body: "<p></p>",
				}
			]
		},
	];
});