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
		card1Body: "Start building on Paybook by integrating with Paybook Link",
		card1Button: "Start",
		card1Title: "Quickstart",
		card2Body: "Explore the Paybook API with our comprehensive docs",
		card2Button: "View",
		card2Title: "Documentation",
		card3Body: "Access libraries and code samples that help work with Paybook",
		card3Button: "Explore",
		card3Title: "Resources",
		subtitle1: "Delight your customers with Paybook’s custom bank access, ",
		subtitle2: "rich transaction data, and robust security",
		title1: "Build the future ",
		title2: "of financial technology",
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
		card1Body: "Start building on Paybook by integrating with Paybook Link",
		card1Button: "Iniciar",
		card1Title: "Quickstart",
		card2Body: "Explore the Paybook API with our comprehensive docs",
		card2Button: "Ver",
		card2Title: "Documentación",
		card3Body: "Access libraries and code samples that help work with Paybook",
		card3Button: "Explorar",
		card3Title: "Recursos",
		subtitle1: "Delight your customers with Paybook’s custom bank access, ",
		subtitle2: "rich transaction data, and robust security",
		title1: "Construye el futuro de ",
		title2: "la tecnología financiera",
	};
});