var Plaid=angular.module('Plaid',["ngSanitize"]);
Plaid.controller("main",function main($scope,$http){
	$scope.view="Main";
	$scope.closeAll=function(){
		$(".NavigationMoreList").removeClass("NavigationMoreListVisible");
		$(".NavigationBlocker").css("display","");
		$(".NavigationCenter").removeClass("NavigationCenterSmall");
	};
	$scope.navbarShowMore=function(event){
		event.stopPropagation();
		$(".NavigationMoreList").addClass("NavigationMoreListVisible");
	};
	$scope.goToView=function(aux){
		$scope.view=aux;
	};
	$scope.showSmallViews=function(event){
		event.stopPropagation();
		$(".NavigationCenter").addClass("NavigationCenterSmall");
		$(".NavigationBlocker").css("display","block");
	};
	$scope.quickstart=[
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