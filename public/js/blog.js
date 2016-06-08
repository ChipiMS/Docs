var Paybook=angular.module('Paybook',[]);
Paybook.controller("main",function main($scope,$http){
	$scope.url=window.location.pathname.slice(3);
	$scope.closeAll=function(){
		$(".Languages").removeClass("LanguagesVisible");
		$(".NavigationMoreList").removeClass("NavigationMoreListVisible");
		$(".NavigationBlocker").css("display","");
		$(".NavigationCenter").removeClass("NavigationCenterSmall");
	};
	$scope.init=function(){
		var languageCode=window.location.pathname.slice(1,3);
		if(languageCode=="en"){
			$scope.language={
				code: "/en",
				name: "English"
			};
			$scope.info=$scope.infoEn;
			$scope.allPages=$scope.allPagesEn;
		}
		else{
			if(languageCode=="es"){
				$scope.language={
					code: "/es",
					name: "Español"
				};
				$scope.info=$scope.infoEs;
				$scope.allPages=$scope.allPagesEs;
			}
		}
	};
	$scope.navbarShowMore=function(event){
		event.stopPropagation();
		$(".NavigationMoreList").addClass("NavigationMoreListVisible");
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
		FAQ: "FAQ",
		Fin: "Fin",
		More: "More",
		Products: "Products",
		Security: "Security",
		Solutions: "Solutions",
		Status: "Status",
		TermsAndPrivacy: "Terms and Privacy",
	}
	$scope.infoEn={
		title: "English Blog",
	};
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
		FAQ: "FAQ",
		Fin: "Fin",
		More: "Más",
		Products: "Productos",
		Security: "Seguridad",
		Solutions: "Soluciones",
		Status: "Status",
		TermsAndPrivacy: "Términos y Privacidad",
	}
	$scope.infoEs={
		title: "Blog en español",
	};
});