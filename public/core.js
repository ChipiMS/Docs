var Plaid=angular.module('Plaid',[]);
function main($scope,$http){
	$scope.size="big";
	$scope.subview="";
	$scope.view="MainPage";
	$scope.closeAll=function(){
		$(".NavigationMoreList").removeClass("NavigationMoreListVisible");
		$(".NavigationBlocker").css("display","");
		$(".NavigationCenter").removeClass("NavigationCenterSmall");
	};
	$scope.goToSubview=function(subview){
		$scope.subview=subview;
	};
	$scope.goToView=function(view){
		$scope.view=view;
		if(view==="FAQ"){
			$scope.view="Docs"
			$scope.subview=view;
		}
		if(view==="Docs"){
			$scope.subview="Main";
		}
	};
	$scope.navbarShowMore=function(event){
		event.stopPropagation();
		$(".NavigationMoreList").addClass("NavigationMoreListVisible");
	};
	$scope.showSmallSubviews=function(event){
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
			title: "Introduction",
			body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
			subtopics: [
				{	
					title: "Introduction",
					body: "<p>The fastest way to get started with Plaid is by integrating with Plaid Link, a drop-in module that offers a secure, elegant authentication flow for each institution that Plaid supports. Read on to get started, or jump to the API reference, explore some sample apps, or tinker with the demo to see Link in action.</p>",
				}
			]
		},
	];
}