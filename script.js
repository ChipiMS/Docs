(function(angular) {
	'use strict';
angular.module('ngRouteExample', ['ngRoute',"ngSanitize"])
	/*
	███╗   ███╗ █████╗ ██╗███╗   ██╗
	████╗ ████║██╔══██╗██║████╗  ██║
	██╔████╔██║███████║██║██╔██╗ ██║
	██║╚██╔╝██║██╔══██║██║██║╚██╗██║
	██║ ╚═╝ ██║██║  ██║██║██║ ╚████║
	╚═╝     ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝
	*/
	.controller('MainController', function($scope, $route, $routeParams, $location){
		$scope.url=window.location.pathname.slice(3);
		$scope.$route = $route;
		$scope.$location = $location;
		$scope.$routeParams = $routeParams;
		$scope.closeAll=function(){
			$(".Languages").removeClass("LanguagesVisible");
			$(".Libraries").removeClass("LibrariesVisible");
			$(".NavigationMoreList").removeClass("NavigationMoreListVisible");
			$(".NavigationBlocker").css("display","");
			$(".NavigationCenter").removeClass("NavigationCenterSmall");
			$(".Subnavigation ul").removeClass("SubnaviationShowUl");
			$scope.url=window.location.pathname.slice(3);
		};
		$scope.init=function(){
			setTimeout(function(){
				var languageCode=window.location.pathname.slice(1,3);
				if(languageCode=="en"){
					$scope.language={
						code: "/en",
						name: "English"
					};
					$scope.allPages=$scope.allPagesEn;
				}
				else{
					if(languageCode=="es"){
						$scope.language={
							code: "/es",
							name: "Español"
						};
						$scope.allPages=$scope.allPagesEs;
					}
				}
				$scope.$apply();
			},50);
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
		};
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
		};
	})
	/*
	██████╗ ██╗      ██████╗  ██████╗ 
	██╔══██╗██║     ██╔═══██╗██╔════╝ 
	██████╔╝██║     ██║   ██║██║  ███╗
	██╔══██╗██║     ██║   ██║██║   ██║
	██████╔╝███████╗╚██████╔╝╚██████╔╝
	╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝
	*/
	.controller('BlogController',function($scope,$routeParams){
		$(document).off();
		$scope.init=function(){
			var languageCode=window.location.pathname.slice(1,3);
			if(languageCode=="en"){
				$scope.language={
					code: "/en",
					name: "English"
				};
				$scope.info=$scope.infoEn;
			}
			else{
				if(languageCode=="es"){
					$scope.language={
						code: "/es",
						name: "Español"
					};
					$scope.info=$scope.infoEs;
				}
			}
		};
		/*_______ .__   __. 
		|   ____||  \ |  |
		|  |__   |   \|  |
		|   __|  |  . `  |
		|  |____ |  |\   |
		|_______||__| \__|*/
		$scope.infoEn={
			title: "English Blog",
		};
		/*_______    _______.
		|   ____|   /       |
		|  |__     |   (----`
		|   __|     \   \    
		|  |____.----)   |   
		|_______|_______/ */
		$scope.infoEs={
			title: "Blog en español",
		};
	})
	/*
	 ██████╗ ██████╗ ███╗   ███╗██████╗  █████╗ ███╗   ██╗██╗   ██╗
	██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔══██╗████╗  ██║╚██╗ ██╔╝
	██║     ██║   ██║██╔████╔██║██████╔╝███████║██╔██╗ ██║ ╚████╔╝
	██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██╔══██║██║╚██╗██║  ╚██╔╝
	╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ██║  ██║██║ ╚████║   ██║
	 ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝
	*/
	.controller('CompanyController',function($scope,$routeParams){
		$(document).off();
		$scope.init=function(){
			var languageCode=window.location.pathname.slice(1,3);
			if(languageCode=="en"){
				$scope.language={
					code: "/en",
					name: "English"
				};
				$scope.info=$scope.infoEn;
			}
			else{
				if(languageCode=="es"){
					$scope.language={
						code: "/es",
						name: "Español"
					};
					$scope.info=$scope.infoEs;
				}
			}
		};
		/*_______ .__   __. 
		|   ____||  \ |  |
		|  |__   |   \|  |
		|   __|  |  . `  |
		|  |____ |  |\   |
		|_______||__| \__|*/
		$scope.infoEn={
			title: "Company",
		};
		/*_______    _______.
		|   ____|   /       |
		|  |__     |   (----`
		|   __|     \   \    
		|  |____.----)   |   
		|_______|_______/ */
		$scope.infoEs={
			title: "Compañía",
		};
	})
	/*
	 ██████╗ ██████╗ ███╗   ██╗████████╗ █████╗  ██████╗████████╗
	██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔════╝╚══██╔══╝
	██║     ██║   ██║██╔██╗ ██║   ██║   ███████║██║        ██║
	██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██║██║        ██║
	╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╗   ██║
	 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ╚═╝
	*/
	.controller('ContactController',function($scope,$routeParams){
		$(document).off();
		$scope.init=function(){
			var languageCode=window.location.pathname.slice(1,3);
			if(languageCode=="en"){
				$scope.language={
					code: "/en",
					name: "English"
				};
				$scope.info=$scope.infoEn;
			}
			else{
				if(languageCode=="es"){
					$scope.language={
						code: "/es",
						name: "Español"
					};
					$scope.info=$scope.infoEs;
				}
			}
		};
		/*_______ .__   __. 
		|   ____||  \ |  |
		|  |__   |   \|  |
		|   __|  |  . `  |
		|  |____ |  |\   |
		|_______||__| \__|*/
		$scope.infoEn={
			title: "How can we help?",
			subtitle: "Get in touch with the Paybook team—we want to ensure you have what you need",
		};
		/*_______    _______.
		|   ____|   /       |
		|  |__     |   (----`
		|   __|     \   \    
		|  |____.----)   |   
		|_______|_______/ */
		$scope.infoEs={
			title: "¿Cómo podemos ayudarte?",
			subtitle: "Bla bla",
		};
	})
	/*
	██████╗  ██████╗  ██████╗███████╗
	██╔══██╗██╔═══██╗██╔════╝██╔════╝
	██║  ██║██║   ██║██║     ███████╗
	██║  ██║██║   ██║██║     ╚════██║
	██████╔╝╚██████╔╝╚██████╗███████║
	╚═════╝  ╚═════╝  ╚═════╝╚══════╝
	*/
	.controller('DocsController',function($scope,$routeParams){
		$(document).off();
		$scope.init=function(){
			var languageCode=window.location.pathname.slice(1,3);
			if(languageCode=="en"){
				$scope.language={
					code: "/en",
					name: "English"
				};
				$scope.info=$scope.infoEn;
			}
			else{
				if(languageCode=="es"){
					$scope.language={
						code: "/es",
						name: "Español"
					};
					$scope.info=$scope.infoEs;
				}
			}
		};
		/*_______ .__   __. 
		|   ____||  \ |  |
		|  |__   |   \|  |
		|   __|  |  . `  |
		|  |____ |  |\   |
		|_______||__| \__|*/
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
		/*_______    _______.
		|   ____|   /       |
		|  |__     |   (----`
		|   __|     \   \    
		|  |____.----)   |   
		|_______|_______/ */
		$scope.infoEs=$scope.infoEs={
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
	})
	/*
	██████╗  ██████╗  ██████╗██╗   ██╗███╗   ███╗███████╗███╗   ██╗████████╗ █████╗ ████████╗██╗ ██████╗ ███╗   ██╗
	██╔══██╗██╔═══██╗██╔════╝██║   ██║████╗ ████║██╔════╝████╗  ██║╚══██╔══╝██╔══██╗╚══██╔══╝██║██╔═══██╗████╗  ██║
	██║  ██║██║   ██║██║     ██║   ██║██╔████╔██║█████╗  ██╔██╗ ██║   ██║   ███████║   ██║   ██║██║   ██║██╔██╗ ██║
	██║  ██║██║   ██║██║     ██║   ██║██║╚██╔╝██║██╔══╝  ██║╚██╗██║   ██║   ██╔══██║   ██║   ██║██║   ██║██║╚██╗██║
	██████╔╝╚██████╔╝╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗██║ ╚████║   ██║   ██║  ██║   ██║   ██║╚██████╔╝██║ ╚████║
	╚═════╝  ╚═════╝  ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
	*/
	.controller('DocumentationController',function($scope,$routeParams){
		$scope.actualTopic=0;
		$scope.actualSubtopic=-1;
		$(document).off();
		$(document).scroll(function(){
			var auxBottom,auxTop,bodyPadding;
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
			$scope.$apply();
		});
		$(window).resize(function(){
			var auxBottom,auxTop,bodyPadding;
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
			$scope.$apply();
		});
		$scope.init=function(){
			var languageCode=window.location.pathname.slice(1,3);
			if(languageCode=="en"){
				$scope.language={
					code: "/en",
					name: "English"
				};
				$scope.info=$scope.infoEn;
			}
			else{
				if(languageCode=="es"){
					$scope.language={
						code: "/es",
						name: "Español"
					};
					$scope.info=$scope.infoEs;
				}
			}
			var auxBottom,auxTop,bodyPadding;
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
			},500);
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
		$scope.showSmallSubviews=function(event){
			event.stopPropagation();
			$(".Subnavigation ul").addClass("SubnaviationShowUl");
		};
		/*_______ .__   __. 
		|   ____||  \ |  |
		|  |__   |   \|  |
		|   __|  |  . `  |
		|  |____ |  |\   |
		|_______||__| \__|*/
		$scope.infoEn=[
			{
				title: "Welcome to Sync!",
				body: '<p>Let this section be your guide as you explore, test, and implement Sync\'s API. If you have any questions along the way, feel free to check out our <a target="_blank" href="https://forums.paybook.com/">forum</a>, or give us a <a href="mailto:support@paybook.com" rel="nofollow">shout</a>, and we’ll be happy to get you squared away.</p>',
				blue: '',
				subtopics: []
			},
			{
				title: "Overview",
				body: '<p>Sync retrieves user-authorized account and transactional data from financial institutions and returns it to third-party solutions in an organized, highly usable format.</p><p>Sync’s API has an architectural style of a RESTful design pattern. It uses HTTP as its underlying protocol, where standard HTTP verbs and HTTP response codes are used. Communication travels via HTTPS to ensure a secure data exchange. Almost every response body is JSON encoded, unless stated on the endpoint description. Since RESTful services and JSON are highly popular, and most major development languages include a form to interact with these technologies, it\'s quite easy to integrate with Sync\'s API. </p>',
				blue: '<pre><p><b>Head</b></p><div class="Code Console GET">https://sync.paybook.com/v1/</div></pre>',
				subtopics: [
					{	
						title: "Accessing the API",
						body: '<p>Start using our API ASAP with just a few steps.</p><ol><li><b>Register:</b><br>In order to gain entry to Sync, you need to register for both a Paybook account and a Sync account. If you haven’t already done so, please head over to our <a href="https://www.paybook.com/en">website</a>, sign up, accept our terms, and you’re good to go!</li><li><b>Play in the Sandbox:</b><br>Once you\'re registered, you\'ll be taken to the Sync Control Panel where you can obtain your sandbox key to start testing the API without the need for valid user credentials.</li><li><b>Access the Production Environment:</b><br>When you\'re ready to work with live data, you\'ll need to accept the Sync Service Agreement and upload the by-laws or your (or your client\'s) entity to validate the authenticity of those entering into the agreement with Paybook.<ul><li><b>30-day Trial:</b><br>Want to give Sync a test drive before committing? Try us risk-free for up to 30 days.</li><li><b>Select a Plan:</b><br>At the end of the trial or any point prior, simply choose the plan that fits your needs and enjoy continuous feeds of financial data right at your fingertips.</li></ul></li></ol><p>Once you\'re up and running, you can do the following:</p><ul><li><b>Invite your Team:</b><br>Feel free to collaborate with fellow developers by sending them an invitation. They\'ll just need to create their own Paybook account and sign the Developer Terms prior to gaining access to the shared Sync Account.</li><li><b>Add Sync Profiles:</b><br>Got multiple clients wanting Sync? No problem! Just register for a new Sync account for each business and manage them all from your Sync Control Panel.</li></ul>',
						blue: '',
					}
				]
			},
			{
				title: "Request",
				body: '',
				blue: '',
				subtopics: [
					{	
						title: "Parameters",
						body: '<p>Parameters can be send on via the query string or encoded in the payload body of the request. They are not enforce to use on a particular way of sending it, but if the parameter is absent it can trigger a status 400 response. When sending parameters via the payload body the request content type must be set to the following:</p><p><b>application/json:</b></p><p>when sending a JSON structure, the JSON key must match the parameter name in order to make them match, example: POST /some-path HTTP/1.1</p><p><b>multipart/form-data or application/x-www-form-urlencoded:</b></p><p>when sending form data</p>',
						blue: '<pre><p><b>application/json:</b></p><div class="Code Console">Content-Type: application/json [ "token" : "56280b1578480664048b456b", "id_user" : "56280b2178480661048b4569" ]</div><p><b>multipart/form-data or application/x-www-form-urlencoded:</b></p><div class="Code Console">POST /some-path HTTP/1.1 Content-Type: application/x-www-form-urlencoded token=5620b1578480664048b456b&id_user=56280b2178480661048b4569</div><p><b>Head</b></p><div class="Code Console GET">https://sync.paybook.com/v1/</div></pre>',
					},
					{	
						title: "Authentication",
						body: '<p>Some resources can be authenticated in two ways:</p><ul><li>api_key and id_user : Developer key and User ID</li><li>token : Session token</li></ul><p>On more specific developer endpoints only the api_key will be required.</p>',
						blue: '<pre><p><b>Head</b></p><div class="Code Console GET">https://sync.paybook.com/v1/</div></pre>',
					}
				]
			},
			{
				title: "Response",
				body: '<p>Almost every response body returns a JSON structure (unless specified). There are four main keys:</p><ul><li><b>code</b>: This is the same as the HTTP Response code. Expect any of the following codes:<ul><li>200: <b>Success</b> (request finished correctly)</li><li>400: <b>Bad Request</b> Invalid parameter (missing a parameter or invalid value for a parameter)</li><li>401: <b>Unauthorized</b> (invalid API Key or Session Token)</li><li>402: <b>Payment Required</b> (the API Key has a pending payment)</li><li>403: <b>Forbidden</b> (the authorization parameters are invalid for that specific endpoint)</li><li>404: <b>Not Found</b> (end point was not found)</li><li>500: <b>Internal Server Error</b> (server error)</li><li>503: <b>Service Unavailable</b> (schedule maintenance)</li></ul></li><li><b>status</b>: Boolean value that indicates if the request finished correctly or not:<ul><li>true : if response code is 200 and the request finish correctly</li><li>false :<ul><li>if response code is 400, 401, 402, 403, 404, 500, 503 expect this value to be false</li><li>if response code is 200, and the current operation didn\'t finish correctly, Example: trying to delete an invalid id of a given resource</li></ul></li></ul></li><li><b>message</b>: String error message for that specific request. Expect this to be null if no error was thrown.</li><li><b>response</b>: This is the response of the request, the default value is null, but it can also be an array or scalar variable depending on the end point.</li></ul>',
				blue: '<pre><p><b>Head</b></p><div class="Code Console GET">https://sync.paybook.com/v1/</div></pre>',
				subtopics: []
			},
			{
				title: "Quickstart",
				body: '<p>Implement in no time with this step-by-step guide.</p>',
				blue: '<pre><p><b>Head</b></p><div class="Code Console GET">https://sync.paybook.com/v1/</div></pre>',
				subtopics: [
					{	
						title: "The first thing you will need is to manager your users, you can do this by interacting with the /users endpoints",
						body: '',
						blue: '<pre><p>Create user</p><div class="Code Console">/v1/users?_method=post&api_key=[api_key]&name=Test</div><p>View users</p><div class="Code Console">/v1/users?api_key=[api_key]</div><p>Delete a user</p><div class="Code Console">/v1/users/[id_user]?api_key=[api_key]</div></pre>',
					},
					{	
						title: "Create session for your users with the /sessions endpoints (this best practice is recommended in order to not make your api_key public)",
						body: '',
						blue: '<pre><p>Create session</p><div class="Code Console">/v1/session?_method=post&api_key=[api_key]&id_user=[id_user]</div><p>Check if a session is valid</p><div class="Code Console">/v1/session/[token]/verify</div><p>Delete a session</p><div class="Code Console">/v1/session/[token]?_method=delete</div></pre>',
					},
					{	
						title: "Get or display the site catalogue with the /catalogues endpoints (accept a user session (token) or the api_key)",
						body: '',
						blue: '<pre><p>View sites group by organizations</p><div class="Code Console">/v1/catalogues/organizations/sites?api_key=[api_key]</div><p>View sites (ungrouped)</p><div class="Code Console">/v1/catalogues/sites?token=[token]</div></pre>',
					},
					{	
						title: "Manage the user credentials with the /credentials endpoints (accept a user session (token) or the api_key)",
						body: '<p>Inspect credentials for the site selected</p><ul><li>For each site there is a credentials object field that is going to be used in order to register new credentials</li><li>Each object in the array represents a different value that will be needed from the end-user.<br>The object structure is:<ul><li>name : Submit value name</li><li>type : Input type (text, password, etc), you can use this to render a form element</li><li>label : Input label</li><li>required : Is this field required</li><li>username : Is this field represent the username</li><li>validation : Does this field needs some type of validation (only integer values, etc)</li></ul></li></ul>',
						blue: '<pre><p>Search site</p><div class="Code Console">/v1/catalogues/organizations/sites?api_key={api_key}</div><p>Create credentials</p><div class="Code Console">/v1/credentials?_method=post&api_key=[api_key]&id_user=[id_user]&id_site=[id_site]&credentials%5Busername%5D=[value]&credentials%5Bpassword%5D=[value]</div><p>Note: you will need to reference the "credentials" field for each site in order to create the credentials array in the example</p><p>View credentials</p><div class="Code Console">/v1/credentials?api_key=[api_key]&id_user=[id_user]</div><p>Delete credentials</p><div class="Code Console">/v1/credentials/[id_credential]?api_key=[api_key]&id_user=[id_user]</div><p>Note: this will remove all data like transactions, attachments and accounts</p></pre>',
					},
					{	
						title: "Check the socket to know the current job status",
						body: '<ul><li>1xx - Job Information<ul><li><b>100 - Register</b> API register a new job (via a REST request)</li><li><b>101 - Starting</b> Sync got job information to start working</li><li><b>102 - Running</b> Sync is running (login successful)</li></ul></li><li>2xx - Success<ul><li><b>200 - Finish</b> Data was processed correctly</li><li><b>201 - Pending</b> Data was processed correctly, pending data will continue to download in the background</li><li><b>202 - NoTransactions</b> Job finish correctly, but there where no transactions found</li></ul></li><li>4xx - User Errors<ul><li><b>401 - Unauthorized</b> Invalid credentials (user and password are not valid)</li><li><b>405 - Locked</b> Account is locked</li><li><b>406 - Conflict</b> User is already logged</li><li><b>410 - Waiting</b> Waiting for two-fa</li><li><b>411 - TwofaTimeout</b> Timeout for user input on two-fa</li></ul></li><li>5xx - System Errors<ul><li><b>500 - Error</b> Bank requires attention (Sync error)</li><li><b>501 - Unavailable</b> Bank temporarily unavailable (timeout)</li><li><b>504 - ScriptTimeout</b> Sync timeout</li><li><b>505 - ScriptNotFound</b> Script not found</li></ul></li></ul>',
						blue: '',
					},
					{	
						title: "Retrieve credentials generated data with the /transactions, /accounts and /attachments endpoints",
						body: '',
						blue: '<pre><p>View accounts</p><div class="Code Console">/v1/accounts?api_key=[api_key]&id_user=[id_user]</div><p>View attachments</p><div class="Code Console">/v1/attachments?api_key=[api_key]&id_user=[id_user]</div><p>Count attachments</p><div class="Code Console">/v1/attachments/count?api_key=[api_key]&id_user=[id_user]</div><p>Download an attachment</p><div class="Code Console">/v1/attachments/[id_attachment]?api_key=[api_key]&id_user=[id_user]</div><p>Get extracted data from attachment</p><div class="Code Console">/v1/attachments/[id_attachment]/extra?api_key=[api_key]&id_user=[id_user]</div><p>View transactions</p><div class="Code Console">/v1/transactions/[id_transaction]?api_key=[api_key]&id_user=[id_user]</div><p>Count transactions</p><div class="Code Console">/v1/transactions/[id_transaction]/count?api_key=[api_key]&id_user=[id_user]</div></pre>',
					}
				]
			},
			{
				title: "Accounts",
				body: '',
				blue: '',
				subtopics: [
					{
						title: "Request accounts for a specific user",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_account</code> (opcional)</td><td>String</td><td>Account ID.</td></tr><tr><td><code>id_credential</code> (opcional)</td><td>String</td><td>Credentials ID.</td></tr><tr><td><code>id_site</code> (opcional)</td><td>String</td><td>Site ID.</td></tr><tr><td><code>id_site_organization</code> (opcional)</td><td>String</td><td>Site Organization ID.</td></tr><tr><td><code>id_site_organization_type</code> (opcional)</td><td>String</td><td>Site Organization Type ID.</td></tr><tr><td><code>fields</code> (opcional)</td><td>String</td><td>Select fields to be returned.</td></tr><tr><td><code>limit</code> (opcional)</td><td>Number</td><td>Limit the number of rows to be returned.</td></tr><tr><td><code>skip</code> (opcional)</td><td>Number</td><td>Skip rows to be returned.</td></tr><tr><td><code>order</code> (opcional)</td><td>String</td><td>Order the rows to be returned.</td></tr><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_account</code></td><td>String</td><td>Account ID.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>id_external</code></td><td>String</td><td>External ID.</td></tr><tr><td><code>id_credential</code></td><td>String</td><td>Credentials ID.</td></tr><tr><td><code>id_site</code></td><td>String</td><td>Site ID.</td></tr><tr><td><code>id_site_organization</code></td><td>String</td><td>Site Organization ID.</td></tr><tr><td><code>name</code></td><td>String</td><td>Account name.</td></tr><tr><td><code>number</code></td><td>Number</td><td>Account number.</td></tr><tr><td><code>balance</code></td><td>Number</td><td>Account balance.</td></tr><tr><td><code>site</code></td><td>Collection</td><td>[id_site: Site ID, name: Site name, avatar: Site avatar, cover: Site cover, small_cover: Site small cover].</td></tr><tr><td><code>dt_refresh</code></td><td>Timestamp</td><td>Date when account was last updated</td></tr></tbody></table>',
						blue: '<pre><p><b>Get</b></p><div class="Code Console GET">https://sync.paybook.com/v1/accounts</div><p><b>Success-Response:</b></p><div class="Code JS"><div>HTTP/<span class="LightBlue">1.1 200</span> OK</div><div>[</div><div>	id_account: <span class="Green">"3406d3750b215b9a7f8b4523"</span>,</div><div>	id_user: <span class="Green">"15f98da7784606ef028b4598"</span>,</div><div>	id_external: <span class="Green">"37f98da4584806ef028b4567"</span>,</div><div>	id_credential: <span class="Green">"4806d33c0b234af8028b478b"</span>,</div><div>	id_site: <span class="Green">"98cf5728784839f72b8b449f"</span>,</div><div>	id_site_organization: <span class="Green">"29cf4ff5784806152c8b4548"</span>,</div><div>	name: <span class="Green">"My Bank Account"</span>,</div><div>	number: <span class="Yellow">null</span>,</div><div>	balance: <span class="LightBlue">1200</span>,</div><div>	site: [</div><div>		id_site: <span class="Green">"12cf5728784883f72b8b495f"</span>,</div><div>		name: <span class="Green">"The Bank"</span>,</div><div>		avatar: <span class="Green">"/images/8574c68f0b212a194a8c1819/avatar"</span>,</div><div>		cover: <span class="Green">"/images/5944c68f0b212a194a8c3949/cover"</span>,</div><div>		small_cover: <span class="Green">"/images/59454c68f0b212a194a8c5719/small_cover"</span></div><div>	],</div><div>	dt_refresh: <span class="LightBlue">1460816581</span></div><div>]</div></div></pre>',
					}
				]
			},
			{
				title: "Attachments",
				body: '',
				blue: '',
				subtopics: [
					{
						title: "Request attachments for specific user",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_account</code> (opcional)</td><td>String</td><td>Filters by account ID.</td></tr><tr><td><code>id_attachment_type</code> (opcional)</td><td>String</td><td>Attachment Type ID.</td></tr><tr><td><code>id_transaction</code> (opcional)</td><td>String</td><td>Transaction ID.</td></tr><tr><td><code>dt_refresh_from</code> (opcional)</td><td>Timestamp</td><td>Filters by transaction refresh date, expected UNIX timestamp.</td></tr><tr><td><code>dt_refresh_to</code> (opcional)</td><td>Timestamp</td><td>Filters by transaction refresh date, expected UNIX timestamp.</td></tr><tr><td><code>fields</code> (opcional)</td><td>String</td><td>Select fields to be returned.</td></tr><tr><td><code>limit</code> (opcional)</td><td>Number</td><td>Limit the number of rows to be returned.</td></tr><tr><td><code>skip</code> (opcional)</td><td>Number</td><td>Skip rows to be returned.</td></tr><tr><td><code>order</code> (opcional)</td><td>String</td><td>Order the rows to be returned.</td></tr><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_account</code></td><td>String</td><td>Account ID.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>id_external</code></td><td>String</td><td>External ID.</td></tr><tr><td><code>id_attachment_type</code></td><td>String</td><td>Attachment Type ID.</td></tr><tr><td><code>id_transaction</code></td><td>String</td><td>Transaction ID.</td></tr><tr><td><code>file</code></td><td>String</td><td>File name.</td></tr><tr><td><code>url</code></td><td>String</td><td>File URL so it can be downloaded.</td></tr><tr><td><code>dt_refresh</code></td><td>Timestamp</td><td>Date when transaction was last updated.</td></tr></tbody></table>',
						blue: '<pre><p><b>Get</b></p><div class="Code Console GET">https://sync.paybook.com/v1/attachments</div><p><b>Success-Response:</b></p><div class="Code JS"><div>HTTP/<span class="LightBlue">1.1 200</span> OK</div><div>[</div><div>	[</div><div>		[</div><div>			id_account: <span class="Green">"3406d3750b215b9a7f8b4523"</span>,</div><div>			id_user: <span class="Green">"15f98da7784606ef028b4598"</span>,</div><div>			id_external: <span class="Green">"37f98da4584806ef028b4567"</span>,</div><div>			id_attachment_type: <span class="Green">"4806d33c0b234af8028b478b"</span>,</div><div>			id_transaction: <span class="Green">"5710122e0b212a9b3b8b4662"</span>,</div><div>			file: <span class="Green">"F1BE3A4174D74980376045318BF78174.pdf"</span>,</div><div>			url: <span class="Green">"/attachments/F1BE3A4174D74980376045318BF78174"</span>,</div><div>			dt_refresh: <span class="LightBlue">1461030301</span></div><div>		],</div><div>		[</div><div>			id_account: <span class="Green">"3406d3750b215b9a7f8b4524"</span>,</div><div>			id_user: <span class="Green">"15f98da7784606ef028b4598"</span>,</div><div>			id_external: <span class="Green">"56f98da7784806ef028b4588"</span>,</div><div>			id_attachment_type: <span class="Green">"4806d33c0b234af8028b478b"</span>,</div><div>			id_transaction: <span class="Green">"5710122e0b212a9b3b8b4662"</span>,</div><div>			file: <span class="Green">"F1BE3A6274D74989376045318BF63174.xml"</span>,</div><div>			url: <span class="Green">"/attachments/F1BE3A6274D74989376045318BF63174"</span>,</div><div>			dt_refresh: <span class="LightBlue">1461030301</span></div><div>		]</div><div>	]</div><div>]</div></div></pre>',
					},
					{
						title: "Request the attachment",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table>',
						blue: '<pre><p><b>Get</b></p><div class="Code Console GET">https://sync.paybook.com/v1/attachments/:id_attachment</div></pre>',
					},
					{
						title: "Request the extracted data from attachment",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_attachment</code></td><td>String</td><td>Attachment ID.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>id_external</code></td><td>String</td><td>External ID.</td></tr><tr><td><code>file</code></td><td>String</td><td>File name.</td></tr><tr><td><code>extra</code></td><td>String</td><td>Extracted data.</td></tr></tbody></table>',
						blue: '<pre><p><b>Get</b></p><div class="Code Console GET">https://sync.paybook.com/v1/attachments/:id_attachment/extra</div><p><b>Success-Response:</b></p><div class="Code JS"><div>HTTP/<span class="LightBlue">1.1 200</span> OK</div><div>[</div><div>	id_attachment: <span class="Green">"3406d3750b215b9a7f8b4523"</span>,</div><div>	id_user: <span class="Green">"15f98da7784606ef028b4598"</span>,</div><div>	id_external: <span class="Green">"37f98da4584806ef028b4567"</span>,</div><div>	id_attachment_type: <span class="Green">"4806d33c0b234af8028b478b"</span>,</div><div>	file: <span class="Green">"F1BE3A4174D74980376045318BF78174.pdf"</span>,</div><div>	extra: <span class="Green">"FILE DATA"</span></div><div>]</div></div></pre>',
					},
					{
						title: "Request the number of attachments given some search parameters",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_account</code> (opcional)</td><td>String</td><td>Filters by account ID.</td></tr><tr><td><code>id_attachment_type</code> (opcional)</td><td>String</td><td>Attachment Type ID.</td></tr><tr><td><code>id_transaction</code> (opcional)</td><td>String</td><td>Transaction ID.</td></tr><tr><td><code>dt_refresh_from</code> (opcional)</td><td>Timestamp</td><td>Filters by transaction refresh date, expected UNIX timestamp.</td></tr><tr><td><code>dt_refresh_to</code> (opcional)</td><td>Timestamp</td><td>Filters by transaction refresh date, expected UNIX timestamp.</td></tr><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>count</code></td><td>Number</td><td>Number of transactions.</td></tr></tbody></table>',
						blue: '<pre><p><b>Get</b></p><div class="Code Console GET">https://sync.paybook.com/v1/attachments/counts</div><p><b>Success-Response:</b></p><div class="Code JS"><div>HTTP/<span class="LightBlue">1.1 200</span> OK</div><div>[</div>	count: <span class="LightBlue">3946</span><div>]</div></div></pre>',
					}
				]
			},
			{
				title: "Catalogues",
				body: '',
				blue: '',
				subtopics: [
					{
						title: "Request account types",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>fields</code> (opcional)</td><td>String</td><td>Select fields to be returned.</td></tr><tr><td><code>limit</code> (opcional)</td><td>Number</td><td>Limit the number of rows to be returned.</td></tr><tr><td><code>skip</code> (opcional)</td><td>Number</td><td>Skip rows to be returned.</td></tr><tr><td><code>order</code> (opcional)</td><td>String</td><td>Order the rows to be returned.</td></tr><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_account_type</code></td><td>String</td><td>Account type ID.</td></tr><tr><td><code>name</code></td><td>String</td><td>Account type name.</td></tr></tbody></table>',
						blue: '<pre><p><b>Get</b></p><div class="Code Console GET">https://sync.paybook.com/v1/catalogues/account_types</div><p><b>Success-Response:</b></p><div class="Code JS"><div>HTTP/<span class="LightBlue">1.1 200</span> OK</div><div>[</div><div>	[</div><div>		[</div><div>			id_account_type: <span class="Green">"520d3aa93b8e778e0d003412"</span>,</div><div>			name: <span class="Green">"Account Type 1"</span></div><div>		],</div><div>		[</div><div>			id_account_type: <span class="Green">"520d3aa93b8e778e0d003417"</span>,</div><div>			name: <span class="Green">"Account Type 2"</span></div><div>		]</div><div>	]</div><div>]</div></div></pre>',
					},
					{
						title: "Request attachment types",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>fields</code> (opcional)</td><td>String</td><td>Select fields to be returned.</td></tr><tr><td><code>limit</code> (opcional)</td><td>Number</td><td>Limit the number of rows to be returned.</td></tr><tr><td><code>skip</code> (opcional)</td><td>Number</td><td>Skip rows to be returned.</td></tr><tr><td><code>order</code> (opcional)</td><td>String</td><td>Order the rows to be returned.</td></tr><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>_id</code></td><td>String</td><td>Attachment type ID.</td></tr><tr><td><code>name</code></td><td>String</td><td>Attachment type name.</td></tr></tbody></table>',
						blue: '<pre><p><b>Get</b></p><div class="Code Console GET">https://sync.paybook.com/v1/catalogues/attachment_types</div><p><b>Success-Response:</b></p><div class="Code JS"><div>HTTP/<span class="LightBlue">1.1 200</span> OK</div><div>[</div><div>	[</div><div>		[</div><div>			id_attachment_type: <span class="Green">"56bcdfca784806d1378b1234"</span>,</div><div>			name: <span class="Green">"Type 1"</span></div><div>		],</div><div>		[</div><div>			id_attachment_type: <span class="Green">"56bcdfca784806d1378b4321"</span>,</div><div>			name: <span class="Green">"Type 2"</span></div><div>		]</div><div>	]</div><div>]</div></div></pre>',
					},
					{
						title: "Request available countries",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>fields</code> (opcional)</td><td>String</td><td>Select fields to be returned.</td></tr><tr><td><code>limit</code> (opcional)</td><td>Number</td><td>Limit the number of rows to be returned.</td></tr><tr><td><code>skip</code> (opcional)</td><td>Number</td><td>Skip rows to be returned.</td></tr><tr><td><code>order</code> (opcional)</td><td>String</td><td>Order the rows to be returned.</td></tr><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_country</code></td><td>String</td><td>Country ID.</td></tr><tr><td><code>name</code></td><td>String</td><td>Country name.</td></tr><tr><td><code>code</code></td><td>String</td><td>Country code.</td></tr></tbody></table>',
						blue: '<pre><p><b>Get</b></p><div class="Code Console GET">https://sync.paybook.com/v1/catalogues/countries</div><p><b>Success-Response:</b></p><div class="Code JS"><div>HTTP/<span class="LightBlue">1.1 200</span> OK</div><div>[</div><div>	[</div><div>		[</div><div>			id_country: <span class="Green">"56bcdfca784806d1378b1234"</span>,</div><div>			name: <span class="Green">"United States"</span>,</div><div>			code: <span class="Green">"US"</span></div><div>		],</div><div>		[</div><div>			id_country: <span class="Green">"56bcdfca784806d1378b1239"</span>,</div><div>			name: <span class="Green">"Mexico"</span>,</div><div>			code: <span class="Green">"MX"</span></div><div>		]</div><div>	]</div><div>]</div></div></pre>',
					},
					{
						title: "Request available sites",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_site</code> (opcional)</td><td>String</td><td>Site ID.</td></tr><tr><td><code>id_site_organization</code> (opcional)</td><td>String</td><td>Site Organization ID.</td></tr><tr><td><code>id_site_organization_type</code> (opcional)</td><td>String</td><td>Site Organization Type ID.</td></tr><tr><td><code>fields</code> (opcional)</td><td>String</td><td>Select fields to be returned.</td></tr><tr><td><code>limit</code> (opcional)</td><td>Number</td><td>Limit the number of rows to be returned.</td></tr><tr><td><code>skip</code> (opcional)</td><td>Number</td><td>Skip rows to be returned.</td></tr><tr><td><code>order</code> (opcional)</td><td>String</td><td>Order the rows to be returned.</td></tr><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_site</code></td><td>String</td><td>Site ID.</td></tr><tr><td><code>id_site_organization</code></td><td>String</td><td>Site Organization ID.</td></tr><tr><td><code>id_site_organization_type</code></td><td>String</td><td>Site Organization Type ID.</td></tr><tr><td><code>name</code></td><td>String</td><td>Site name.</td></tr><tr><td><code>credentials</code></td><td>Collection</td><td>[name: Field name, type : Input render type, label : Label, required : Indicates if field is required, username : Indicates if field is username, validation : Validate field]</td></tr></tbody></table>',
						blue: '<pre><p><b>Get</b></p><div class="Code Console GET">https://sync.paybook.com/v1/catalogues/sites</div><p><b>Success-Response</b></p><div class="Code JS"><div>HTTP/<span class="LightBlue">1.1 200</span> OK</div><div>[</div><div>	[</div><div>		[</div><div>			id_site: <span class="Green">"56de2130784806d7028b4589"</span>,</div><div>			id_site_organization: <span class="Green">"56bcdfca784806d173611234"</span>,</div><div>			id_site_organization_type: <span class="Green">"56bcdfca846106d1378b9182"</span>,</div><div>			name: <span class="Green">"Site Name"</span>,</div><div>			credentials: [</div><div>				<span class="LightBlue">0</span>: [</div><div>					name: <span class="Green">"credential1"</span>,</div><div>					type: <span class="Green">"text"</span>,</div><div>					label: <span class="Green">"Credential"</span>,</div><div>					required: <span class="Yellow">true</span>,</div><div>					username: <span class="Yellow">true</span>,</div><div>					validation: <span class="Yellow">null</span></div><div>				],</div><div>				1: [</div><div>					name: <span class="Green">"credential2"</span>,</div><div>					type: <span class="Green">"password"</span>,</div><div>					label: <span class="Green">"pass"</span>,</div><div>					required: <span class="Yellow">true</span>,</div><div>					username: <span class="Yellow">false</span>,</div><div>					validation: <span class="Yellow">null</span></div><div>				]</div><div>			]</div><div>		],</div><div>		[</div><div>			id_site: <span class="Green">"56de2130784806d7028b4581"</span>,</div><div>			id_site_organization: <span class="Green">"56bcdfca784806d173611232"</span>,</div><div>			id_site_organization_type: <span class="Green">"56bcdfca846106d1378b9183"</span>,</div><div>			name: <span class="Green">"Other Site Name"</span>,</div><div>			credentials: [</div><div>				<span class="LightBlue">0</span>: [</div><div>					name: <span class="Green">"credential1"</span>,</div><div>					type: <span class="Green">"text"</span>,</div><div>					label: <span class="Green">"Credential"</span>,</div><div>					required: <span class="Yellow">true</span>,</div><div>					username: <span class="Yellow">true</span>,</div><div>					validation: <span class="Yellow">null</span></div><div>				],</div><div>				1: [</div><div>					name: <span class="Green">"credential2"</span>,</div><div>					type: <span class="Green">"password"</span>,</div><div>					label: <span class="Green">"pass"</span>,</div><div>					required: <span class="Yellow">true</span>,</div><div>					username: <span class="Yellow">false</span>,</div><div>					validation: <span class="Yellow">null</span></div><div>				]</div><div>			]</div><div>		]</div><div>	]</div><div>]</div></div></pre>',
					},
					{
						title: "Request site organizations",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_site_organization</code> (opcional)</td><td>String</td><td>Site Organization ID.</td></tr><tr><td><code>id_site_organization_type</code> (opcional)</td><td>String</td><td>Site Organization Type ID.</td></tr><tr><td><code>id_country</code> (opcional)</td><td>String</td><td>Country ID.</td></tr><tr><td><code>fields</code> (opcional)</td><td>String</td><td>Select fields to be returned.</td></tr><tr><td><code>limit</code> (opcional)</td><td>Number</td><td>Limit the number of rows to be returned.</td></tr><tr><td><code>skip</code> (opcional)</td><td>Number</td><td>Skip rows to be returned.</td></tr><tr><td><code>order</code> (opcional)</td><td>String</td><td>Order the rows to be returned.</td></tr><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_site_organization</code></td><td>String</td><td>Site Organization ID.</td></tr><tr><td><code>id_site_organization_type</code></td><td>String</td><td>Site Organization Type ID.</td></tr><tr><td><code>id_country</code></td><td>String</td><td>Country ID.</td><tr><td><code>name</code></td><td>String</td><td>Organization name.</td></tr><tr><td><code>avatar</code></td><td>String</td><td>Avatar logo.</td></tr><tr><td><code>small_cover</code></td><td>String</td><td>Small cover.</td></tr><tr><td><code>cover</code></td><td>String</td><td>Cover logo.</td></tr></tbody></table>',
						blue: '<pre><p><b>Get</b></p><div class="Code Console GET">https://sync.paybook.com/v1/catalogues/site_organizations</div><p><b>Success-Response</b></p><div class="Code JS"><div>HTTP/<span class="LightBlue">1.1 200</span> OK</div><div>[</div><div>	[</div><div>		[</div><div>			id_site: <span class="Green">"56de2130784806d7028b4589"</span>,</div><div>			id_site_organization: <span class="Green">"56bcdfca784806d173611234"</span>,</div><div>			id_site_organization_type: <span class="Green">"56bcdfca846106d1378b9182"</span>,</div><div>			name: <span class="Green">"Site Name"</span>,</div><div>			credentials: [</div><div>				<span class="LightBlue">0</span>: [</div><div>					name: <span class="Green">"credential1"</span>,</div><div>					type: <span class="Green">"text"</span>,</div><div>					label: <span class="Green">"Credential"</span>,</div><div>					required: <span class="Yellow">true</span>,</div><div>					username: <span class="Yellow">true</span>,</div><div>					validation: <span class="Yellow">null</span></div><div>				],</div><div>				1: [</div><div>					name: <span class="Green">"credential2"</span>,</div><div>					type: <span class="Green">"password"</span>,</div><div>					label: <span class="Green">"pass"</span>,</div><div>					required: <span class="Yellow">true</span>,</div><div>					username: <span class="Yellow">false</span>,</div><div>					validation: <span class="Yellow">null</span></div><div>				]</div><div>			]</div><div>		],</div><div>		[</div><div>			id_site: <span class="Green">"56de2130784806d7028b4581"</span>,</div><div>			id_site_organization: <span class="Green">"56bcdfca784806d173611232"</span>,</div><div>			id_site_organization_type: <span class="Green">"56bcdfca846106d1378b9183"</span>,</div><div>			name: <span class="Green">"Other Site Name"</span>,</div><div>			credentials: [</div><div>				<span class="LightBlue">0</span>: [</div><div>					name: <span class="Green">"credential1"</span>,</div><div>					type: <span class="Green">"text"</span>,</div><div>					label: <span class="Green">"Credential"</span>,</div><div>					required: <span class="Yellow">true</span>,</div><div>					username: <span class="Yellow">true</span>,</div><div>					validation: <span class="Yellow">null</span></div><div>				],</div><div>				1: [</div><div>					name: <span class="Green">"credential2"</span>,</div><div>					type: <span class="Green">"password"</span>,</div><div>					label: <span class="Green">"pass"</span>,</div><div>					required: <span class="Yellow">true</span>,</div><div>					username: <span class="Yellow">false</span>,</div><div>					validation: <span class="Yellow">null</span></div><div>				]</div><div>			]</div><div>		]</div><div>	]</div><div>]</div></div></pre>',
					},
					{
						title: "Request sites group by site organizations",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_site_organization</code> (opcional)</td><td>String</td><td>Site Organization ID.</td></tr><tr><td><code>id_site_organization_type</code> (opcional)</td><td>String</td><td>Site Organization Type ID.</td></tr><tr><td><code>id_country</code> (opcional)</td><td>String</td><td>Country ID.</td></tr><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_site_organization</code></td><td>String</td><td>Site Organization ID.</td></tr><tr><td><code>id_site_organization_type</code></td><td>String</td><td>Site Organization Type ID.</td></tr><tr><td><code>id_country</code></td><td>String</td><td>Country ID.</td></tr><tr><tr><td><code>name</code></td><td>String</td><td>Organization name.</td></tr><tr><td><code>avatar</code></td><td>String</td><td>Avatar logo.</td></tr><tr><td><code>small_cover</code></td><td>String</td><td>Small cover.</td></tr><tr><td><code>cover</code></td><td>String</td><td>Cover logo.</td></tr><tr><td><code>sites</code></td><td>Collection</td><td>[id_site : Site ID, name : site name, credentials:[name : Field name, type : Input render type, label : Label, required : Indicates if field is required, username : Indicates if field is username, validation : Validate field]]</td></tr></tbody></table>',
						blue: '<pre><p><b>Get</b></p><div class="Code Console">https://sync.paybook.com/v1/catalogues/organizations/sites</div><p><b>Success-Response:</b></p><div class="Code JS"><div>HTTP/<span class="LightBlue">1.1 200</span> OK</div><div>[</div><div>	[</div><div>		[</div><div>			id_site_organization: <span class="Green">"56bcdfca784806d173611234"</span>,</div><div>			id_site_organization_type: <span class="Green">"56bcdfca846106d1378b9182"</span>,</div><div>			is_disable: <span class="LightBlue">0</span>,</div><div>			[</div><div>				[</div><div>					id_site: <span class="Green">"56de2130784806d7028b4589"</span>,</div><div>					name: <span class="Green">"Site Name"</span>,</div><div>					credentials: [</div><div>						<span class="LightBlue">0</span>: [</div><div>							name: <span class="Green">"credential1"</span>,</div><div>							type: <span class="Green">"text"</span>,</div><div>							label: <span class="Green">"Credential"</span>,</div><div>							required: <span class="Yellow">true</span>,</div><div>							username: <span class="Yellow">true</span>,</div><div>							validation: <span class="Yellow">null</span></div><div>						],</div><div>						<span class="LightBlue">1</span>: [</div><div class="Identation"><div>							name: <span class="Green">"credential2"</span>,</div><div>							type: <span class="Green">"password"</span>,</div><div>							label: <span class="Green">"pass"</span>,</div><div>							required: <span class="Yellow">true</span>,</div><div>							username: <span class="Yellow">false</span>,</div><div>							validation: <span class="Yellow">null</span></div><div>						]</div><div>					]</div><div>				]</div><div>			]</div><div>		]</div><div>	]</div><div>]</div></div></pre>',
					}
				]
			},
			{
				title: "Credentials",
				body: '',
				blue: '',
				subtopics: [
					{
						title: "Deletes any data for that credential",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table>',
						blue: '<pre><p><b>Delete</b></p><div class="Code Console">https://sync.paybook.com/v1/credentials/:id_credential</div></pre>',
					},
					{
						title: "Request register credentials",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_credential</code></td><td>String</td><td>Credential ID.</td></tr><tr><td><code>id_site</code></td><td>String</td><td>Site ID.</td></tr><tr><td><code>id_site_organization</code></td><td>String</td><td>Site Organization ID.</td></tr><tr><td><code>id_site_organization_type</code></td><td>String</td><td>Site Organization Type ID.</td></tr><tr><td><code>username</code></td><td>String</td><td>Register username.</td></tr><tr><td><code>dt_last_successful_refresh</code></td><td>Timestamp</td><td>Last successful refresh date.</td></tr></tbody></table>',
						blue: '<pre><p><b>Delete</b></p><div class="Code Console">https://sync.paybook.com/v1/credentials</div></pre>',
					},
					{
						title: "Creates or updates credentials",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_site</code></td><td>String</td><td>Site ID.</td></tr><tr><td><code>credentials</code></td><td>String</td><td>Credentials Array (this must be created using the credentials field of the Site ID provided).</td></tr><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_credential</code></td><td>String</td><td>Credential ID.</td></tr><tr><td><code>username</code></td><td>String</td><td>Register username.</td></tr><tr><td><code>ws</code></td><td>String</td><td>Websocket address to listen for job status changes.</td></tr><tr><td><code>status</code></td><td>String</td><td>URL to get job status changes.</td></tr><tr><td><code>twofa</code></td><td>String</td><td>Two-fa url to send data.</td></tr></tbody></table>',
						blue: '<pre><p><b>Post</b></p><div class="Code Console">https://sync.paybook.com/v1/credentials</div></pre>',
					}
				]
			},
			{
				title: "Sessions",
				body: '',
				blue: '',
				subtopics: [
					{
						title: "Creates a session token",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table>',
						blue: '<pre><p><b>Post</b></p><div class="Code Console">https://sync.paybook.com/v1/sessions</div></pre>',
					},
					{
						title: "Deletes a session token",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table>',
						blue: '<pre><p><b>Delete</b></p><div class="Code Console">https://sync.paybook.com/v1/sessions/:token</div></pre>',
					},
					{
						title: "Validates session token",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table>',
						blue: '<pre><p><b>Get</b></p><div class="Code Console">https://sync.paybook.com/v1/sessions/:token/verify</div></pre>',
					}
				]
			},
			{
				title: "Transaction",
				body: '',
				blue: '',
				subtopics: [
					{
						title: "Request the number of transactions given some search parameters",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_transaction</code> (opcional)</td><td>String</td><td>Filters by transaction ID.</td></tr><tr><td><code>id_account</code> (opcional)</td><td>String</td><td>Filters by account ID.</td></tr><tr><td><code>id_credential</code> (opcional)</td><td>String</td><td>Credentials ID.</td></tr><tr><td><code>id_site</code> (opcional)</td><td>String</td><td>Filters by site ID.</td></tr><tr><td><code>id_site_organization</code> (opcional)</td><td>String</td><td>Filters by site organization ID.</td></tr><tr><td><code>id_site_organization_type</code> (opcional)</td><td>String</td><td>Filters by site organization type ID.</td></tr><tr><td><code>is_disable</code> (opcional)</td><td>Number</td><td>Filters by disable transaction.</td></tr><tr><td><code>dt_refresh_from</code> (opcional)</td><td>Timestamp</td><td>Filters by transaction refresh date, expected UNIX timestamp.</td></tr><tr><td><code>dt_refresh_to</code> (opcional)</td><td>Timestamp</td><td>Filters by transaction refresh date, expected UNIX timestamp.</td></tr><tr><td><code>dt_transaction_from</code> (opcional)</td><td>Timestamp</td><td>Filters by transaction date, expected UNIX timestamp.</td></tr><tr><td><code>dt_transaction_to</code> (opcional)</td><td>Timestamp</td><td>Filters by transaction date, expected UNIX timestamp.</td></tr><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>count</code></td><td>String</td><td>Number of transactions.</td></tr></tbody></table>',
						blue: '<pre><p><b>Get</b></p><div class="Code Console">https://sync.paybook.com/v1/transactions/count</div></pre>',
					},
					{
						title: "Request transactions for a specific user",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_transaction</code> (opcional)</td><td>String</td><td>Filters by transaction ID.</td></tr><tr><td><code>id_account</code> (opcional)</td><td>String</td><td>Filters by account ID.</td></tr><tr><td><code>id_credential</code> (opcional)</td><td>String</td><td>Credentials ID.</td></tr><tr><td><code>id_site</code> (opcional)</td><td>String</td><td>Filters by site ID.</td></tr><tr><td><code>id_site_organization</code> (opcional)</td><td>String</td><td>Filters by site organization ID.</td></tr><tr><td><code>id_site_organization_type</code> (opcional)</td><td>String</td><td>Filters by site organization type ID.</td></tr><tr><td><code>is_disable</code> (opcional)</td><td>Number</td><td>Filters by disable transaction.</td></tr><tr><td><code>dt_refresh_from</code> (opcional)</td><td>Timestamp</td><td>Filters by transaction refresh date, expected UNIX timestamp.</td></tr><tr><td><code>dt_refresh_to</code> (opcional)</td><td>Timestamp</td><td>Filters by transaction refresh date, expected UNIX timestamp.</td></tr><tr><td><code>dt_transaction_from</code> (opcional)</td><td>Timestamp</td><td>Filters by transaction date, expected UNIX timestamp.</td></tr><tr><td><code>dt_transaction_to</code> (opcional)</td><td>Timestamp</td><td>Filters by transaction date, expected UNIX timestamp.</td></tr><tr><td><code>fields</code> (opcional)</td><td>String</td><td>Select fields to be returned.</td></tr><tr><td><code>limit</code> (opcional)</td><td>Number</td><td>Limit the number of rows to be returned.</td></tr><tr><td><code>skip</code> (opcional)</td><td>Number</td><td>Skip rows to be returned.</td></tr><tr><td><code>order</code> (opcional)</td><td>String</td><td>Order the rows to be returned.</td></tr><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_transaction</code></td><td>String</td><td>Transaction ID.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>id_external</code></td><td>String</td><td>External ID.</td></tr><tr><td><code>id_site</code></td><td>String</td><td>Site ID.</td></tr><tr><td><code>id_site_organization</code></td><td>String</td><td>Site Organization ID.</td></tr><tr><td><code>id_site_organization_type</code></td><td>String</td><td>Site Organization Type ID.</td></tr><tr><td><code>id_account</code></td><td>String</td><td>Account ID.</td></tr><tr><td><code>id_account_type</code></td><td>String</td><td>Account Type ID.</td></tr><tr><td><code>is_disable</code></td><td>Number</td><td>Is disable.</td></tr><tr><td><code>description</code></td><td>String</td><td>Transaction description.</td></tr><tr><td><code>amount</code></td><td>String</td><td>Transaction amount.</td></tr><tr><td><code>dt_transaction</code></td><td>Timestamp</td><td>Transaction date in UNIX timestamp.</td></tr><tr><td><code>dt_refresh</code></td><td>Timestamp</td><td>Date when transaction was last updated.</td></tr></tbody></table>',
						blue: '<pre><p><b>Get</b></p><div class="Code Console">https://sync.paybook.com/v1/transactions</div></pre>',
					}
				]
			},
			{
				title: "Users",
				body: '',
				blue: '',
				subtopics: [
					{
						title: "Creates a new user",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>api_key</code></td><td>String</td><td>Developer key for authentication.</td></tr><tr><td><code>id_external</code> (opcional)</td><td>String</td><td>External ID, this field can be null and be used to keep track of that user with an external ID.</td></tr><tr><td><code>name</code></td><td>String</td><td>User name.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>id_external</code></td><td>String</td><td>External ID.</td></tr><tr><td><code>name</code></td><td>String</td><td>User name.</td></tr><tr><td><code>dt_create</code></td><td>String</td><td>Date created.</td></tr><tr><td><code>dt_modify</code></td><td>String</td><td>Date modified.</td></tr></tbody></table>',
						blue: '<pre><p><b>Post</b></p><div class="Code Console">https://sync.paybook.com/v1/users</div></pre>',
					},
					{
						title: "Deletes a user",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>api_key</code></td><td>String</td><td>Developer key for authentication.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr></tbody></table>',
						blue: '<pre><p><b>Delete</b></p><div class="Code Console">https://sync.paybook.com/v1/users/:id_user</div></pre>',
					},
					{
						title: "Request users for that token",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>api_key</code></td><td>String</td><td>Developer key for authentication.</td></tr><tr><td><code>id_external</code> (opcional)</td><td>String</td><td>External ID.</td></tr><tr><td><code>fields</code> (opcional)</td><td>String</td><td>Select fields to be returned.</td></tr><tr><td><code>limit</code> (opcional)</td><td>Number</td><td>Limit the number of rows to be returned.</td></tr><tr><td><code>skip</code> (opcional)</td><td>Number</td><td>Skip rows to be returned.</td></tr><tr><td><code>order</code> (opcional)</td><td>String</td><td>Order the rows to be returned.</td></tr></tbody></table><p><b>Success 200</b></p></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>id_external</code></td><td>String</td><td>External ID.</td></tr><tr><td><code>name</code></td><td>String</td><td>User name.</td></tr><tr><td><code>dt_create</code></td><td>String</td><td>Date created.</td></tr><tr><td><code>dt_modify</code></td><td>String</td><td>Date modified.</td></tr></tbody></table>',
						blue: '<pre><p><b>Get</b></p><div class="Code Console">https://sync.paybook.com/v1/users</div></pre>',
					}
				]
			},
			{
				title: "Widget",
				body: '',
				blue: '',
				subtopics: [
					{
						title: "Link Bank Account",
						body: '<p>If you want to link an account, first you should select an institution from the options below.</p><img src="../img/widget1.png"><p>Then if the institution has multiple options, select one of them.</p><img src="../img/widget2.png"><p>This is how it should look.</p><img src="../img/widget3.png"><p>Now you should set your credentials and proceed to the next step.</p><img src="../img/widget4.png"><p>The widgets is going to send your credentials in order to link you account.</p><img src="../img/widget5.png"><p>And finally if everything is ok, your account will be successfully linked.</p><img src="../img/widget6.png"><p>But if something went wrong.</p><img src="../img/widget7.png">',
						blue: '<pre><p><b>Head</b></p><div class="Code Console">https://sync.paybook.com/v1/</div></pre>',
					},
					{
						title: "Link Tributary Services",
						body: '<p>If you want to link a tributary service account, first you should switch to Tributary Services.</p><img src="../img/widget1.png"><p>Then select your tributary institution.</p><img src="../img/widget8.png"><p>This is how it should look.</p><img src="../img/widget9.png"><p>ow you should set your credentials and proceed to the next step.</p><img src="../img/widget10.png"><p>The widgets is going to send your credentials in order to link you account.</p><img src="../img/widget11.png"><p>And finally if everything is ok, your account will be successfully linked.</p><img src="../img/widget6.png">',
						blue: '<pre><p><b>Head</b></p><div class="Code Console">https://sync.paybook.com/v1/</div></pre>',
					}
				]
			}
		];
		/*_______    _______.
		|   ____|   /       |
		|  |__     |   (----`
		|   __|     \   \    
		|  |____.----)   |   
		|_______|_______/ */
		$scope.infoEs=[
			{
				title: "Bienvenido a Sync!",
				body: '<p>Let this section be your guide as you explore, test, and implement Sync\'s API. If you have any questions along the way, feel free to check out our <a target="_blank" href="https://forums.paybook.com/">forum</a>, or give us a <a href="mailto:support@paybook.com" rel="nofollow">shout</a>, and we’ll be happy to get you squared away.</p>',
				blue: '',
				subtopics: []
			},
			{
				title: "Overview",
				body: '<p>Sync retrieves user-authorized account and transactional data from financial institutions and returns it to third-party solutions in an organized, highly usable format.</p><p>Sync’s API has an architectural style of a RESTful design pattern. It uses HTTP as its underlying protocol, where standard HTTP verbs and HTTP response codes are used. Communication travels via HTTPS to ensure a secure data exchange. Almost every response body is JSON encoded, unless stated on the endpoint description. Since RESTful services and JSON are highly popular, and most major development languages include a form to interact with these technologies, it\'s quite easy to integrate with Sync\'s API. </p>',
				blue: '<pre><p><b>Head</b></p><div class="Code Console GET">https://sync.paybook.com/v1/</div></pre>',
				subtopics: [
					{	
						title: "Accessing the API",
						body: '<p>Start using our API ASAP with just a few steps.</p><ol><li><b>Register:</b><br>In order to gain entry to Sync, you need to register for both a Paybook account and a Sync account. If you haven’t already done so, please head over to our <a href="https://www.paybook.com/en">website</a>, sign up, accept our terms, and you’re good to go!</li><li><b>Play in the Sandbox:</b><br>Once you\'re registered, you\'ll be taken to the Sync Control Panel where you can obtain your sandbox key to start testing the API without the need for valid user credentials.</li><li><b>Access the Production Environment:</b><br>When you\'re ready to work with live data, you\'ll need to accept the Sync Service Agreement and upload the by-laws or your (or your client\'s) entity to validate the authenticity of those entering into the agreement with Paybook.<ul><li><b>30-day Trial:</b><br>Want to give Sync a test drive before committing? Try us risk-free for up to 30 days.</li><li><b>Select a Plan:</b><br>At the end of the trial or any point prior, simply choose the plan that fits your needs and enjoy continuous feeds of financial data right at your fingertips.</li></ul></li></ol><p>Once you\'re up and running, you can do the following:</p><ul><li><b>Invite your Team:</b><br>Feel free to collaborate with fellow developers by sending them an invitation. They\'ll just need to create their own Paybook account and sign the Developer Terms prior to gaining access to the shared Sync Account.</li><li><b>Add Sync Profiles:</b><br>Got multiple clients wanting Sync? No problem! Just register for a new Sync account for each business and manage them all from your Sync Control Panel.</li></ul>',
						blue: '',
					}
				]
			},
			{
				title: "Request",
				body: '',
				blue: '',
				subtopics: [
					{	
						title: "Parameters",
						body: '<p>Parameters can be send on via the query string or encoded in the payload body of the request. They are not enforce to use on a particular way of sending it, but if the parameter is absent it can trigger a status 400 response. When sending parameters via the payload body the request content type must be set to the following:</p><p><b>application/json:</b></p><p>when sending a JSON structure, the JSON key must match the parameter name in order to make them match, example: POST /some-path HTTP/1.1</p><p><b>multipart/form-data or application/x-www-form-urlencoded:</b></p><p>when sending form data</p>',
						blue: '<pre><p><b>application/json:</b></p><div class="Code Console">Content-Type: application/json [ "token" : "56280b1578480664048b456b", "id_user" : "56280b2178480661048b4569" ]</div><p><b>multipart/form-data or application/x-www-form-urlencoded:</b></p><div class="Code Console">POST /some-path HTTP/1.1 Content-Type: application/x-www-form-urlencoded token=5620b1578480664048b456b&id_user=56280b2178480661048b4569</div><p><b>Head</b></p><div class="Code Console GET">https://sync.paybook.com/v1/</div></pre>',
					},
					{	
						title: "Authentication",
						body: '<p>Some resources can be authenticated in two ways:</p><ul><li>api_key and id_user : Developer key and User ID</li><li>token : Session token</li></ul><p>On more specific developer endpoints only the api_key will be required.</p>',
						blue: '<pre><p><b>Head</b></p><div class="Code Console GET">https://sync.paybook.com/v1/</div></pre>',
					}
				]
			},
			{
				title: "Response",
				body: '<p>Almost every response body returns a JSON structure (unless specified). There are four main keys:</p><ul><li><b>code</b>: This is the same as the HTTP Response code. Expect any of the following codes:<ul><li>200: <b>Success</b> (request finished correctly)</li><li>400: <b>Bad Request</b> Invalid parameter (missing a parameter or invalid value for a parameter)</li><li>401: <b>Unauthorized</b> (invalid API Key or Session Token)</li><li>402: <b>Payment Required</b> (the API Key has a pending payment)</li><li>403: <b>Forbidden</b> (the authorization parameters are invalid for that specific endpoint)</li><li>404: <b>Not Found</b> (end point was not found)</li><li>500: <b>Internal Server Error</b> (server error)</li><li>503: <b>Service Unavailable</b> (schedule maintenance)</li></ul></li><li><b>status</b>: Boolean value that indicates if the request finished correctly or not:<ul><li>true : if response code is 200 and the request finish correctly</li><li>false :<ul><li>if response code is 400, 401, 402, 403, 404, 500, 503 expect this value to be false</li><li>if response code is 200, and the current operation didn\'t finish correctly, Example: trying to delete an invalid id of a given resource</li></ul></li></ul></li><li><b>message</b>: String error message for that specific request. Expect this to be null if no error was thrown.</li><li><b>response</b>: This is the response of the request, the default value is null, but it can also be an array or scalar variable depending on the end point.</li></ul>',
				blue: '<pre><p><b>Head</b></p><div class="Code Console GET">https://sync.paybook.com/v1/</div></pre>',
				subtopics: []
			},
			{
				title: "Quickstart",
				body: '<p>Implement in no time with this step-by-step guide.</p>',
				blue: '<pre><p><b>Head</b></p><div class="Code Console GET">https://sync.paybook.com/v1/</div></pre>',
				subtopics: [
					{	
						title: "The first thing you will need is to manager your users, you can do this by interacting with the /users endpoints",
						body: '',
						blue: '<pre><p>Create user</p><div class="Code Console">/v1/users?_method=post&api_key=[api_key]&name=Test</div><p>View users</p><div class="Code Console">/v1/users?api_key=[api_key]</div><p>Delete a user</p><div class="Code Console">/v1/users/[id_user]?api_key=[api_key]</div></pre>',
					},
					{	
						title: "Create session for your users with the /sessions endpoints (this best practice is recommended in order to not make your api_key public)",
						body: '',
						blue: '<pre><p>Create session</p><div class="Code Console">/v1/session?_method=post&api_key=[api_key]&id_user=[id_user]</div><p>Check if a session is valid</p><div class="Code Console">/v1/session/[token]/verify</div><p>Delete a session</p><div class="Code Console">/v1/session/[token]?_method=delete</div></pre>',
					},
					{	
						title: "Get or display the site catalogue with the /catalogues endpoints (accept a user session (token) or the api_key)",
						body: '',
						blue: '<pre><p>View sites group by organizations</p><div class="Code Console">/v1/catalogues/organizations/sites?api_key=[api_key]</div><p>View sites (ungrouped)</p><div class="Code Console">/v1/catalogues/sites?token=[token]</div></pre>',
					},
					{	
						title: "Manage the user credentials with the /credentials endpoints (accept a user session (token) or the api_key)",
						body: '<p>Inspect credentials for the site selected</p><ul><li>For each site there is a credentials object field that is going to be used in order to register new credentials</li><li>Each object in the array represents a different value that will be needed from the end-user.<br>The object structure is:<ul><li>name : Submit value name</li><li>type : Input type (text, password, etc), you can use this to render a form element</li><li>label : Input label</li><li>required : Is this field required</li><li>username : Is this field represent the username</li><li>validation : Does this field needs some type of validation (only integer values, etc)</li></ul></li></ul>',
						blue: '<pre><p>Search site</p><div class="Code Console">/v1/catalogues/organizations/sites?api_key={api_key}</div><p>Create credentials</p><div class="Code Console">/v1/credentials?_method=post&api_key=[api_key]&id_user=[id_user]&id_site=[id_site]&credentials%5Busername%5D=[value]&credentials%5Bpassword%5D=[value]</div><p>Note: you will need to reference the "credentials" field for each site in order to create the credentials array in the example</p><p>View credentials</p><div class="Code Console">/v1/credentials?api_key=[api_key]&id_user=[id_user]</div><p>Delete credentials</p><div class="Code Console">/v1/credentials/[id_credential]?api_key=[api_key]&id_user=[id_user]</div><p>Note: this will remove all data like transactions, attachments and accounts</p></pre>',
					},
					{	
						title: "Check the socket to know the current job status",
						body: '<ul><li>1xx - Job Information<ul><li><b>100 - Register</b> API register a new job (via a REST request)</li><li><b>101 - Starting</b> Sync got job information to start working</li><li><b>102 - Running</b> Sync is running (login successful)</li></ul></li><li>2xx - Success<ul><li><b>200 - Finish</b> Data was processed correctly</li><li><b>201 - Pending</b> Data was processed correctly, pending data will continue to download in the background</li><li><b>202 - NoTransactions</b> Job finish correctly, but there where no transactions found</li></ul></li><li>4xx - User Errors<ul><li><b>401 - Unauthorized</b> Invalid credentials (user and password are not valid)</li><li><b>405 - Locked</b> Account is locked</li><li><b>406 - Conflict</b> User is already logged</li><li><b>410 - Waiting</b> Waiting for two-fa</li><li><b>411 - TwofaTimeout</b> Timeout for user input on two-fa</li></ul></li><li>5xx - System Errors<ul><li><b>500 - Error</b> Bank requires attention (Sync error)</li><li><b>501 - Unavailable</b> Bank temporarily unavailable (timeout)</li><li><b>504 - ScriptTimeout</b> Sync timeout</li><li><b>505 - ScriptNotFound</b> Script not found</li></ul></li></ul>',
						blue: '',
					},
					{	
						title: "Retrieve credentials generated data with the /transactions, /accounts and /attachments endpoints",
						body: '',
						blue: '<pre><p>View accounts</p><div class="Code Console">/v1/accounts?api_key=[api_key]&id_user=[id_user]</div><p>View attachments</p><div class="Code Console">/v1/attachments?api_key=[api_key]&id_user=[id_user]</div><p>Count attachments</p><div class="Code Console">/v1/attachments/count?api_key=[api_key]&id_user=[id_user]</div><p>Download an attachment</p><div class="Code Console">/v1/attachments/[id_attachment]?api_key=[api_key]&id_user=[id_user]</div><p>Get extracted data from attachment</p><div class="Code Console">/v1/attachments/[id_attachment]/extra?api_key=[api_key]&id_user=[id_user]</div><p>View transactions</p><div class="Code Console">/v1/transactions/[id_transaction]?api_key=[api_key]&id_user=[id_user]</div><p>Count transactions</p><div class="Code Console">/v1/transactions/[id_transaction]/count?api_key=[api_key]&id_user=[id_user]</div></pre>',
					}
				]
			},
			{
				title: "Accounts",
				body: '',
				blue: '',
				subtopics: [
					{
						title: "Request accounts for a specific user",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_account</code> (opcional)</td><td>String</td><td>Account ID.</td></tr><tr><td><code>id_credential</code> (opcional)</td><td>String</td><td>Credentials ID.</td></tr><tr><td><code>id_site</code> (opcional)</td><td>String</td><td>Site ID.</td></tr><tr><td><code>id_site_organization</code> (opcional)</td><td>String</td><td>Site Organization ID.</td></tr><tr><td><code>id_site_organization_type</code> (opcional)</td><td>String</td><td>Site Organization Type ID.</td></tr><tr><td><code>fields</code> (opcional)</td><td>String</td><td>Select fields to be returned.</td></tr><tr><td><code>limit</code> (opcional)</td><td>Number</td><td>Limit the number of rows to be returned.</td></tr><tr><td><code>skip</code> (opcional)</td><td>Number</td><td>Skip rows to be returned.</td></tr><tr><td><code>order</code> (opcional)</td><td>String</td><td>Order the rows to be returned.</td></tr><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_account</code></td><td>String</td><td>Account ID.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>id_external</code></td><td>String</td><td>External ID.</td></tr><tr><td><code>id_credential</code></td><td>String</td><td>Credentials ID.</td></tr><tr><td><code>id_site</code></td><td>String</td><td>Site ID.</td></tr><tr><td><code>id_site_organization</code></td><td>String</td><td>Site Organization ID.</td></tr><tr><td><code>name</code></td><td>String</td><td>Account name.</td></tr><tr><td><code>number</code></td><td>Number</td><td>Account number.</td></tr><tr><td><code>balance</code></td><td>Number</td><td>Account balance.</td></tr><tr><td><code>site</code></td><td>Collection</td><td>[id_site: Site ID, name: Site name, avatar: Site avatar, cover: Site cover, small_cover: Site small cover].</td></tr><tr><td><code>dt_refresh</code></td><td>Timestamp</td><td>Date when account was last updated</td></tr></tbody></table>',
						blue: '<pre><p><b>Get</b></p><div class="Code Console GET">https://sync.paybook.com/v1/accounts</div><p><b>Success-Response:</b></p><div class="Code JS"><div>HTTP/<span class="LightBlue">1.1 200</span> OK</div><div>[</div><div>	id_account: <span class="Green">"3406d3750b215b9a7f8b4523"</span>,</div><div>	id_user: <span class="Green">"15f98da7784606ef028b4598"</span>,</div><div>	id_external: <span class="Green">"37f98da4584806ef028b4567"</span>,</div><div>	id_credential: <span class="Green">"4806d33c0b234af8028b478b"</span>,</div><div>	id_site: <span class="Green">"98cf5728784839f72b8b449f"</span>,</div><div>	id_site_organization: <span class="Green">"29cf4ff5784806152c8b4548"</span>,</div><div>	name: <span class="Green">"My Bank Account"</span>,</div><div>	number: <span class="Yellow">null</span>,</div><div>	balance: <span class="LightBlue">1200</span>,</div><div>	site: [</div><div>		id_site: <span class="Green">"12cf5728784883f72b8b495f"</span>,</div><div>		name: <span class="Green">"The Bank"</span>,</div><div>		avatar: <span class="Green">"/images/8574c68f0b212a194a8c1819/avatar"</span>,</div><div>		cover: <span class="Green">"/images/5944c68f0b212a194a8c3949/cover"</span>,</div><div>		small_cover: <span class="Green">"/images/59454c68f0b212a194a8c5719/small_cover"</span></div><div>	],</div><div>	dt_refresh: <span class="LightBlue">1460816581</span></div><div>]</div></div></pre>',
					}
				]
			},
			{
				title: "Attachments",
				body: '',
				blue: '',
				subtopics: [
					{
						title: "Request attachments for specific user",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_account</code> (opcional)</td><td>String</td><td>Filters by account ID.</td></tr><tr><td><code>id_attachment_type</code> (opcional)</td><td>String</td><td>Attachment Type ID.</td></tr><tr><td><code>id_transaction</code> (opcional)</td><td>String</td><td>Transaction ID.</td></tr><tr><td><code>dt_refresh_from</code> (opcional)</td><td>Timestamp</td><td>Filters by transaction refresh date, expected UNIX timestamp.</td></tr><tr><td><code>dt_refresh_to</code> (opcional)</td><td>Timestamp</td><td>Filters by transaction refresh date, expected UNIX timestamp.</td></tr><tr><td><code>fields</code> (opcional)</td><td>String</td><td>Select fields to be returned.</td></tr><tr><td><code>limit</code> (opcional)</td><td>Number</td><td>Limit the number of rows to be returned.</td></tr><tr><td><code>skip</code> (opcional)</td><td>Number</td><td>Skip rows to be returned.</td></tr><tr><td><code>order</code> (opcional)</td><td>String</td><td>Order the rows to be returned.</td></tr><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_account</code></td><td>String</td><td>Account ID.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>id_external</code></td><td>String</td><td>External ID.</td></tr><tr><td><code>id_attachment_type</code></td><td>String</td><td>Attachment Type ID.</td></tr><tr><td><code>id_transaction</code></td><td>String</td><td>Transaction ID.</td></tr><tr><td><code>file</code></td><td>String</td><td>File name.</td></tr><tr><td><code>url</code></td><td>String</td><td>File URL so it can be downloaded.</td></tr><tr><td><code>dt_refresh</code></td><td>Timestamp</td><td>Date when transaction was last updated.</td></tr></tbody></table>',
						blue: '<pre><p><b>Get</b></p><div class="Code Console GET">https://sync.paybook.com/v1/attachments</div><p><b>Success-Response:</b></p><div class="Code JS"><div>HTTP/<span class="LightBlue">1.1 200</span> OK</div><div>[</div><div>	[</div><div>		[</div><div>			id_account: <span class="Green">"3406d3750b215b9a7f8b4523"</span>,</div><div>			id_user: <span class="Green">"15f98da7784606ef028b4598"</span>,</div><div>			id_external: <span class="Green">"37f98da4584806ef028b4567"</span>,</div><div>			id_attachment_type: <span class="Green">"4806d33c0b234af8028b478b"</span>,</div><div>			id_transaction: <span class="Green">"5710122e0b212a9b3b8b4662"</span>,</div><div>			file: <span class="Green">"F1BE3A4174D74980376045318BF78174.pdf"</span>,</div><div>			url: <span class="Green">"/attachments/F1BE3A4174D74980376045318BF78174"</span>,</div><div>			dt_refresh: <span class="LightBlue">1461030301</span></div><div>		],</div><div>		[</div><div>			id_account: <span class="Green">"3406d3750b215b9a7f8b4524"</span>,</div><div>			id_user: <span class="Green">"15f98da7784606ef028b4598"</span>,</div><div>			id_external: <span class="Green">"56f98da7784806ef028b4588"</span>,</div><div>			id_attachment_type: <span class="Green">"4806d33c0b234af8028b478b"</span>,</div><div>			id_transaction: <span class="Green">"5710122e0b212a9b3b8b4662"</span>,</div><div>			file: <span class="Green">"F1BE3A6274D74989376045318BF63174.xml"</span>,</div><div>			url: <span class="Green">"/attachments/F1BE3A6274D74989376045318BF63174"</span>,</div><div>			dt_refresh: <span class="LightBlue">1461030301</span></div><div>		]</div><div>	]</div><div>]</div></div></pre>',
					},
					{
						title: "Request the attachment",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table>',
						blue: '<pre><p><b>Get</b></p><div class="Code Console GET">https://sync.paybook.com/v1/attachments/:id_attachment</div></pre>',
					},
					{
						title: "Request the extracted data from attachment",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_attachment</code></td><td>String</td><td>Attachment ID.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>id_external</code></td><td>String</td><td>External ID.</td></tr><tr><td><code>file</code></td><td>String</td><td>File name.</td></tr><tr><td><code>extra</code></td><td>String</td><td>Extracted data.</td></tr></tbody></table>',
						blue: '<pre><p><b>Get</b></p><div class="Code Console GET">https://sync.paybook.com/v1/attachments/:id_attachment/extra</div><p><b>Success-Response:</b></p><div class="Code JS"><div>HTTP/<span class="LightBlue">1.1 200</span> OK</div><div>[</div><div>	id_attachment: <span class="Green">"3406d3750b215b9a7f8b4523"</span>,</div><div>	id_user: <span class="Green">"15f98da7784606ef028b4598"</span>,</div><div>	id_external: <span class="Green">"37f98da4584806ef028b4567"</span>,</div><div>	id_attachment_type: <span class="Green">"4806d33c0b234af8028b478b"</span>,</div><div>	file: <span class="Green">"F1BE3A4174D74980376045318BF78174.pdf"</span>,</div><div>	extra: <span class="Green">"FILE DATA"</span></div><div>]</div></div></pre>',
					},
					{
						title: "Request the number of attachments given some search parameters",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_account</code> (opcional)</td><td>String</td><td>Filters by account ID.</td></tr><tr><td><code>id_attachment_type</code> (opcional)</td><td>String</td><td>Attachment Type ID.</td></tr><tr><td><code>id_transaction</code> (opcional)</td><td>String</td><td>Transaction ID.</td></tr><tr><td><code>dt_refresh_from</code> (opcional)</td><td>Timestamp</td><td>Filters by transaction refresh date, expected UNIX timestamp.</td></tr><tr><td><code>dt_refresh_to</code> (opcional)</td><td>Timestamp</td><td>Filters by transaction refresh date, expected UNIX timestamp.</td></tr><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>count</code></td><td>Number</td><td>Number of transactions.</td></tr></tbody></table>',
						blue: '<pre><p><b>Get</b></p><div class="Code Console GET">https://sync.paybook.com/v1/attachments/counts</div><p><b>Success-Response:</b></p><div class="Code JS"><div>HTTP/<span class="LightBlue">1.1 200</span> OK</div><div>[</div>	count: <span class="LightBlue">3946</span><div>]</div></div></pre>',
					}
				]
			},
			{
				title: "Catalogues",
				body: '',
				blue: '',
				subtopics: [
					{
						title: "Request account types",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>fields</code> (opcional)</td><td>String</td><td>Select fields to be returned.</td></tr><tr><td><code>limit</code> (opcional)</td><td>Number</td><td>Limit the number of rows to be returned.</td></tr><tr><td><code>skip</code> (opcional)</td><td>Number</td><td>Skip rows to be returned.</td></tr><tr><td><code>order</code> (opcional)</td><td>String</td><td>Order the rows to be returned.</td></tr><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_account_type</code></td><td>String</td><td>Account type ID.</td></tr><tr><td><code>name</code></td><td>String</td><td>Account type name.</td></tr></tbody></table>',
						blue: '<pre><p><b>Get</b></p><div class="Code Console GET">https://sync.paybook.com/v1/catalogues/account_types</div><p><b>Success-Response:</b></p><div class="Code JS"><div>HTTP/<span class="LightBlue">1.1 200</span> OK</div><div>[</div><div>	[</div><div>		[</div><div>			id_account_type: <span class="Green">"520d3aa93b8e778e0d003412"</span>,</div><div>			name: <span class="Green">"Account Type 1"</span></div><div>		],</div><div>		[</div><div>			id_account_type: <span class="Green">"520d3aa93b8e778e0d003417"</span>,</div><div>			name: <span class="Green">"Account Type 2"</span></div><div>		]</div><div>	]</div><div>]</div></div></pre>',
					},
					{
						title: "Request attachment types",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>fields</code> (opcional)</td><td>String</td><td>Select fields to be returned.</td></tr><tr><td><code>limit</code> (opcional)</td><td>Number</td><td>Limit the number of rows to be returned.</td></tr><tr><td><code>skip</code> (opcional)</td><td>Number</td><td>Skip rows to be returned.</td></tr><tr><td><code>order</code> (opcional)</td><td>String</td><td>Order the rows to be returned.</td></tr><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>_id</code></td><td>String</td><td>Attachment type ID.</td></tr><tr><td><code>name</code></td><td>String</td><td>Attachment type name.</td></tr></tbody></table>',
						blue: '<pre><p><b>Get</b></p><div class="Code Console GET">https://sync.paybook.com/v1/catalogues/attachment_types</div><p><b>Success-Response:</b></p><div class="Code JS"><div>HTTP/<span class="LightBlue">1.1 200</span> OK</div><div>[</div><div>	[</div><div>		[</div><div>			id_attachment_type: <span class="Green">"56bcdfca784806d1378b1234"</span>,</div><div>			name: <span class="Green">"Type 1"</span></div><div>		],</div><div>		[</div><div>			id_attachment_type: <span class="Green">"56bcdfca784806d1378b4321"</span>,</div><div>			name: <span class="Green">"Type 2"</span></div><div>		]</div><div>	]</div><div>]</div></div></pre>',
					},
					{
						title: "Request available countries",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>fields</code> (opcional)</td><td>String</td><td>Select fields to be returned.</td></tr><tr><td><code>limit</code> (opcional)</td><td>Number</td><td>Limit the number of rows to be returned.</td></tr><tr><td><code>skip</code> (opcional)</td><td>Number</td><td>Skip rows to be returned.</td></tr><tr><td><code>order</code> (opcional)</td><td>String</td><td>Order the rows to be returned.</td></tr><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_country</code></td><td>String</td><td>Country ID.</td></tr><tr><td><code>name</code></td><td>String</td><td>Country name.</td></tr><tr><td><code>code</code></td><td>String</td><td>Country code.</td></tr></tbody></table>',
						blue: '<pre><p><b>Get</b></p><div class="Code Console GET">https://sync.paybook.com/v1/catalogues/countries</div><p><b>Success-Response:</b></p><div class="Code JS"><div>HTTP/<span class="LightBlue">1.1 200</span> OK</div><div>[</div><div>	[</div><div>		[</div><div>			id_country: <span class="Green">"56bcdfca784806d1378b1234"</span>,</div><div>			name: <span class="Green">"United States"</span>,</div><div>			code: <span class="Green">"US"</span></div><div>		],</div><div>		[</div><div>			id_country: <span class="Green">"56bcdfca784806d1378b1239"</span>,</div><div>			name: <span class="Green">"Mexico"</span>,</div><div>			code: <span class="Green">"MX"</span></div><div>		]</div><div>	]</div><div>]</div></div></pre>',
					},
					{
						title: "Request available sites",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_site</code> (opcional)</td><td>String</td><td>Site ID.</td></tr><tr><td><code>id_site_organization</code> (opcional)</td><td>String</td><td>Site Organization ID.</td></tr><tr><td><code>id_site_organization_type</code> (opcional)</td><td>String</td><td>Site Organization Type ID.</td></tr><tr><td><code>fields</code> (opcional)</td><td>String</td><td>Select fields to be returned.</td></tr><tr><td><code>limit</code> (opcional)</td><td>Number</td><td>Limit the number of rows to be returned.</td></tr><tr><td><code>skip</code> (opcional)</td><td>Number</td><td>Skip rows to be returned.</td></tr><tr><td><code>order</code> (opcional)</td><td>String</td><td>Order the rows to be returned.</td></tr><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_site</code></td><td>String</td><td>Site ID.</td></tr><tr><td><code>id_site_organization</code></td><td>String</td><td>Site Organization ID.</td></tr><tr><td><code>id_site_organization_type</code></td><td>String</td><td>Site Organization Type ID.</td></tr><tr><td><code>name</code></td><td>String</td><td>Site name.</td></tr><tr><td><code>credentials</code></td><td>Collection</td><td>[name: Field name, type : Input render type, label : Label, required : Indicates if field is required, username : Indicates if field is username, validation : Validate field]</td></tr></tbody></table>',
						blue: '<pre><p><b>Get</b></p><div class="Code Console GET">https://sync.paybook.com/v1/catalogues/sites</div><p><b>Success-Response</b></p><div class="Code JS"><div>HTTP/<span class="LightBlue">1.1 200</span> OK</div><div>[</div><div>	[</div><div>		[</div><div>			id_site: <span class="Green">"56de2130784806d7028b4589"</span>,</div><div>			id_site_organization: <span class="Green">"56bcdfca784806d173611234"</span>,</div><div>			id_site_organization_type: <span class="Green">"56bcdfca846106d1378b9182"</span>,</div><div>			name: <span class="Green">"Site Name"</span>,</div><div>			credentials: [</div><div>				<span class="LightBlue">0</span>: [</div><div>					name: <span class="Green">"credential1"</span>,</div><div>					type: <span class="Green">"text"</span>,</div><div>					label: <span class="Green">"Credential"</span>,</div><div>					required: <span class="Yellow">true</span>,</div><div>					username: <span class="Yellow">true</span>,</div><div>					validation: <span class="Yellow">null</span></div><div>				],</div><div>				1: [</div><div>					name: <span class="Green">"credential2"</span>,</div><div>					type: <span class="Green">"password"</span>,</div><div>					label: <span class="Green">"pass"</span>,</div><div>					required: <span class="Yellow">true</span>,</div><div>					username: <span class="Yellow">false</span>,</div><div>					validation: <span class="Yellow">null</span></div><div>				]</div><div>			]</div><div>		],</div><div>		[</div><div>			id_site: <span class="Green">"56de2130784806d7028b4581"</span>,</div><div>			id_site_organization: <span class="Green">"56bcdfca784806d173611232"</span>,</div><div>			id_site_organization_type: <span class="Green">"56bcdfca846106d1378b9183"</span>,</div><div>			name: <span class="Green">"Other Site Name"</span>,</div><div>			credentials: [</div><div>				<span class="LightBlue">0</span>: [</div><div>					name: <span class="Green">"credential1"</span>,</div><div>					type: <span class="Green">"text"</span>,</div><div>					label: <span class="Green">"Credential"</span>,</div><div>					required: <span class="Yellow">true</span>,</div><div>					username: <span class="Yellow">true</span>,</div><div>					validation: <span class="Yellow">null</span></div><div>				],</div><div>				1: [</div><div>					name: <span class="Green">"credential2"</span>,</div><div>					type: <span class="Green">"password"</span>,</div><div>					label: <span class="Green">"pass"</span>,</div><div>					required: <span class="Yellow">true</span>,</div><div>					username: <span class="Yellow">false</span>,</div><div>					validation: <span class="Yellow">null</span></div><div>				]</div><div>			]</div><div>		]</div><div>	]</div><div>]</div></div></pre>',
					},
					{
						title: "Request site organizations",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_site_organization</code> (opcional)</td><td>String</td><td>Site Organization ID.</td></tr><tr><td><code>id_site_organization_type</code> (opcional)</td><td>String</td><td>Site Organization Type ID.</td></tr><tr><td><code>id_country</code> (opcional)</td><td>String</td><td>Country ID.</td></tr><tr><td><code>fields</code> (opcional)</td><td>String</td><td>Select fields to be returned.</td></tr><tr><td><code>limit</code> (opcional)</td><td>Number</td><td>Limit the number of rows to be returned.</td></tr><tr><td><code>skip</code> (opcional)</td><td>Number</td><td>Skip rows to be returned.</td></tr><tr><td><code>order</code> (opcional)</td><td>String</td><td>Order the rows to be returned.</td></tr><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_site_organization</code></td><td>String</td><td>Site Organization ID.</td></tr><tr><td><code>id_site_organization_type</code></td><td>String</td><td>Site Organization Type ID.</td></tr><tr><td><code>id_country</code></td><td>String</td><td>Country ID.</td><tr><td><code>name</code></td><td>String</td><td>Organization name.</td></tr><tr><td><code>avatar</code></td><td>String</td><td>Avatar logo.</td></tr><tr><td><code>small_cover</code></td><td>String</td><td>Small cover.</td></tr><tr><td><code>cover</code></td><td>String</td><td>Cover logo.</td></tr></tbody></table>',
						blue: '<pre><p><b>Get</b></p><div class="Code Console GET">https://sync.paybook.com/v1/catalogues/site_organizations</div><p><b>Success-Response</b></p><div class="Code JS"><div>HTTP/<span class="LightBlue">1.1 200</span> OK</div><div>[</div><div>	[</div><div>		[</div><div>			id_site: <span class="Green">"56de2130784806d7028b4589"</span>,</div><div>			id_site_organization: <span class="Green">"56bcdfca784806d173611234"</span>,</div><div>			id_site_organization_type: <span class="Green">"56bcdfca846106d1378b9182"</span>,</div><div>			name: <span class="Green">"Site Name"</span>,</div><div>			credentials: [</div><div>				<span class="LightBlue">0</span>: [</div><div>					name: <span class="Green">"credential1"</span>,</div><div>					type: <span class="Green">"text"</span>,</div><div>					label: <span class="Green">"Credential"</span>,</div><div>					required: <span class="Yellow">true</span>,</div><div>					username: <span class="Yellow">true</span>,</div><div>					validation: <span class="Yellow">null</span></div><div>				],</div><div>				1: [</div><div>					name: <span class="Green">"credential2"</span>,</div><div>					type: <span class="Green">"password"</span>,</div><div>					label: <span class="Green">"pass"</span>,</div><div>					required: <span class="Yellow">true</span>,</div><div>					username: <span class="Yellow">false</span>,</div><div>					validation: <span class="Yellow">null</span></div><div>				]</div><div>			]</div><div>		],</div><div>		[</div><div>			id_site: <span class="Green">"56de2130784806d7028b4581"</span>,</div><div>			id_site_organization: <span class="Green">"56bcdfca784806d173611232"</span>,</div><div>			id_site_organization_type: <span class="Green">"56bcdfca846106d1378b9183"</span>,</div><div>			name: <span class="Green">"Other Site Name"</span>,</div><div>			credentials: [</div><div>				<span class="LightBlue">0</span>: [</div><div>					name: <span class="Green">"credential1"</span>,</div><div>					type: <span class="Green">"text"</span>,</div><div>					label: <span class="Green">"Credential"</span>,</div><div>					required: <span class="Yellow">true</span>,</div><div>					username: <span class="Yellow">true</span>,</div><div>					validation: <span class="Yellow">null</span></div><div>				],</div><div>				1: [</div><div>					name: <span class="Green">"credential2"</span>,</div><div>					type: <span class="Green">"password"</span>,</div><div>					label: <span class="Green">"pass"</span>,</div><div>					required: <span class="Yellow">true</span>,</div><div>					username: <span class="Yellow">false</span>,</div><div>					validation: <span class="Yellow">null</span></div><div>				]</div><div>			]</div><div>		]</div><div>	]</div><div>]</div></div></pre>',
					},
					{
						title: "Request sites group by site organizations",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_site_organization</code> (opcional)</td><td>String</td><td>Site Organization ID.</td></tr><tr><td><code>id_site_organization_type</code> (opcional)</td><td>String</td><td>Site Organization Type ID.</td></tr><tr><td><code>id_country</code> (opcional)</td><td>String</td><td>Country ID.</td></tr><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_site_organization</code></td><td>String</td><td>Site Organization ID.</td></tr><tr><td><code>id_site_organization_type</code></td><td>String</td><td>Site Organization Type ID.</td></tr><tr><td><code>id_country</code></td><td>String</td><td>Country ID.</td></tr><tr><tr><td><code>name</code></td><td>String</td><td>Organization name.</td></tr><tr><td><code>avatar</code></td><td>String</td><td>Avatar logo.</td></tr><tr><td><code>small_cover</code></td><td>String</td><td>Small cover.</td></tr><tr><td><code>cover</code></td><td>String</td><td>Cover logo.</td></tr><tr><td><code>sites</code></td><td>Collection</td><td>[id_site : Site ID, name : site name, credentials:[name : Field name, type : Input render type, label : Label, required : Indicates if field is required, username : Indicates if field is username, validation : Validate field]]</td></tr></tbody></table>',
						blue: '<pre><p><b>Get</b></p><div class="Code Console">https://sync.paybook.com/v1/catalogues/organizations/sites</div><p><b>Success-Response:</b></p><div class="Code JS"><div>HTTP/<span class="LightBlue">1.1 200</span> OK</div><div>[</div><div>	[</div><div>		[</div><div>			id_site_organization: <span class="Green">"56bcdfca784806d173611234"</span>,</div><div>			id_site_organization_type: <span class="Green">"56bcdfca846106d1378b9182"</span>,</div><div>			is_disable: <span class="LightBlue">0</span>,</div><div>			[</div><div>				[</div><div>					id_site: <span class="Green">"56de2130784806d7028b4589"</span>,</div><div>					name: <span class="Green">"Site Name"</span>,</div><div>					credentials: [</div><div>						<span class="LightBlue">0</span>: [</div><div>							name: <span class="Green">"credential1"</span>,</div><div>							type: <span class="Green">"text"</span>,</div><div>							label: <span class="Green">"Credential"</span>,</div><div>							required: <span class="Yellow">true</span>,</div><div>							username: <span class="Yellow">true</span>,</div><div>							validation: <span class="Yellow">null</span></div><div>						],</div><div>						<span class="LightBlue">1</span>: [</div><div class="Identation"><div>							name: <span class="Green">"credential2"</span>,</div><div>							type: <span class="Green">"password"</span>,</div><div>							label: <span class="Green">"pass"</span>,</div><div>							required: <span class="Yellow">true</span>,</div><div>							username: <span class="Yellow">false</span>,</div><div>							validation: <span class="Yellow">null</span></div><div>						]</div><div>					]</div><div>				]</div><div>			]</div><div>		]</div><div>	]</div><div>]</div></div></pre>',
					}
				]
			},
			{
				title: "Credentials",
				body: '',
				blue: '',
				subtopics: [
					{
						title: "Deletes any data for that credential",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table>',
						blue: '<pre><p><b>Delete</b></p><div class="Code Console">https://sync.paybook.com/v1/credentials/:id_credential</div></pre>',
					},
					{
						title: "Request register credentials",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_credential</code></td><td>String</td><td>Credential ID.</td></tr><tr><td><code>id_site</code></td><td>String</td><td>Site ID.</td></tr><tr><td><code>id_site_organization</code></td><td>String</td><td>Site Organization ID.</td></tr><tr><td><code>id_site_organization_type</code></td><td>String</td><td>Site Organization Type ID.</td></tr><tr><td><code>username</code></td><td>String</td><td>Register username.</td></tr><tr><td><code>dt_last_successful_refresh</code></td><td>Timestamp</td><td>Last successful refresh date.</td></tr></tbody></table>',
						blue: '<pre><p><b>Delete</b></p><div class="Code Console">https://sync.paybook.com/v1/credentials</div></pre>',
					},
					{
						title: "Creates or updates credentials",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_site</code></td><td>String</td><td>Site ID.</td></tr><tr><td><code>credentials</code></td><td>String</td><td>Credentials Array (this must be created using the credentials field of the Site ID provided).</td></tr><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_credential</code></td><td>String</td><td>Credential ID.</td></tr><tr><td><code>username</code></td><td>String</td><td>Register username.</td></tr><tr><td><code>ws</code></td><td>String</td><td>Websocket address to listen for job status changes.</td></tr><tr><td><code>status</code></td><td>String</td><td>URL to get job status changes.</td></tr><tr><td><code>twofa</code></td><td>String</td><td>Two-fa url to send data.</td></tr></tbody></table>',
						blue: '<pre><p><b>Post</b></p><div class="Code Console">https://sync.paybook.com/v1/credentials</div></pre>',
					}
				]
			},
			{
				title: "Sessions",
				body: '',
				blue: '',
				subtopics: [
					{
						title: "Creates a session token",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table>',
						blue: '<pre><p><b>Post</b></p><div class="Code Console">https://sync.paybook.com/v1/sessions</div></pre>',
					},
					{
						title: "Deletes a session token",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table>',
						blue: '<pre><p><b>Delete</b></p><div class="Code Console">https://sync.paybook.com/v1/sessions/:token</div></pre>',
					},
					{
						title: "Validates session token",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table>',
						blue: '<pre><p><b>Get</b></p><div class="Code Console">https://sync.paybook.com/v1/sessions/:token/verify</div></pre>',
					}
				]
			},
			{
				title: "Transaction",
				body: '',
				blue: '',
				subtopics: [
					{
						title: "Request the number of transactions given some search parameters",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_transaction</code> (opcional)</td><td>String</td><td>Filters by transaction ID.</td></tr><tr><td><code>id_account</code> (opcional)</td><td>String</td><td>Filters by account ID.</td></tr><tr><td><code>id_credential</code> (opcional)</td><td>String</td><td>Credentials ID.</td></tr><tr><td><code>id_site</code> (opcional)</td><td>String</td><td>Filters by site ID.</td></tr><tr><td><code>id_site_organization</code> (opcional)</td><td>String</td><td>Filters by site organization ID.</td></tr><tr><td><code>id_site_organization_type</code> (opcional)</td><td>String</td><td>Filters by site organization type ID.</td></tr><tr><td><code>is_disable</code> (opcional)</td><td>Number</td><td>Filters by disable transaction.</td></tr><tr><td><code>dt_refresh_from</code> (opcional)</td><td>Timestamp</td><td>Filters by transaction refresh date, expected UNIX timestamp.</td></tr><tr><td><code>dt_refresh_to</code> (opcional)</td><td>Timestamp</td><td>Filters by transaction refresh date, expected UNIX timestamp.</td></tr><tr><td><code>dt_transaction_from</code> (opcional)</td><td>Timestamp</td><td>Filters by transaction date, expected UNIX timestamp.</td></tr><tr><td><code>dt_transaction_to</code> (opcional)</td><td>Timestamp</td><td>Filters by transaction date, expected UNIX timestamp.</td></tr><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>count</code></td><td>String</td><td>Number of transactions.</td></tr></tbody></table>',
						blue: '<pre><p><b>Get</b></p><div class="Code Console">https://sync.paybook.com/v1/transactions/count</div></pre>',
					},
					{
						title: "Request transactions for a specific user",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_transaction</code> (opcional)</td><td>String</td><td>Filters by transaction ID.</td></tr><tr><td><code>id_account</code> (opcional)</td><td>String</td><td>Filters by account ID.</td></tr><tr><td><code>id_credential</code> (opcional)</td><td>String</td><td>Credentials ID.</td></tr><tr><td><code>id_site</code> (opcional)</td><td>String</td><td>Filters by site ID.</td></tr><tr><td><code>id_site_organization</code> (opcional)</td><td>String</td><td>Filters by site organization ID.</td></tr><tr><td><code>id_site_organization_type</code> (opcional)</td><td>String</td><td>Filters by site organization type ID.</td></tr><tr><td><code>is_disable</code> (opcional)</td><td>Number</td><td>Filters by disable transaction.</td></tr><tr><td><code>dt_refresh_from</code> (opcional)</td><td>Timestamp</td><td>Filters by transaction refresh date, expected UNIX timestamp.</td></tr><tr><td><code>dt_refresh_to</code> (opcional)</td><td>Timestamp</td><td>Filters by transaction refresh date, expected UNIX timestamp.</td></tr><tr><td><code>dt_transaction_from</code> (opcional)</td><td>Timestamp</td><td>Filters by transaction date, expected UNIX timestamp.</td></tr><tr><td><code>dt_transaction_to</code> (opcional)</td><td>Timestamp</td><td>Filters by transaction date, expected UNIX timestamp.</td></tr><tr><td><code>fields</code> (opcional)</td><td>String</td><td>Select fields to be returned.</td></tr><tr><td><code>limit</code> (opcional)</td><td>Number</td><td>Limit the number of rows to be returned.</td></tr><tr><td><code>skip</code> (opcional)</td><td>Number</td><td>Skip rows to be returned.</td></tr><tr><td><code>order</code> (opcional)</td><td>String</td><td>Order the rows to be returned.</td></tr><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_transaction</code></td><td>String</td><td>Transaction ID.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>id_external</code></td><td>String</td><td>External ID.</td></tr><tr><td><code>id_site</code></td><td>String</td><td>Site ID.</td></tr><tr><td><code>id_site_organization</code></td><td>String</td><td>Site Organization ID.</td></tr><tr><td><code>id_site_organization_type</code></td><td>String</td><td>Site Organization Type ID.</td></tr><tr><td><code>id_account</code></td><td>String</td><td>Account ID.</td></tr><tr><td><code>id_account_type</code></td><td>String</td><td>Account Type ID.</td></tr><tr><td><code>is_disable</code></td><td>Number</td><td>Is disable.</td></tr><tr><td><code>description</code></td><td>String</td><td>Transaction description.</td></tr><tr><td><code>amount</code></td><td>String</td><td>Transaction amount.</td></tr><tr><td><code>dt_transaction</code></td><td>Timestamp</td><td>Transaction date in UNIX timestamp.</td></tr><tr><td><code>dt_refresh</code></td><td>Timestamp</td><td>Date when transaction was last updated.</td></tr></tbody></table>',
						blue: '<pre><p><b>Get</b></p><div class="Code Console">https://sync.paybook.com/v1/transactions</div></pre>',
					}
				]
			},
			{
				title: "Users",
				body: '',
				blue: '',
				subtopics: [
					{
						title: "Creates a new user",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>api_key</code></td><td>String</td><td>Developer key for authentication.</td></tr><tr><td><code>id_external</code> (opcional)</td><td>String</td><td>External ID, this field can be null and be used to keep track of that user with an external ID.</td></tr><tr><td><code>name</code></td><td>String</td><td>User name.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>id_external</code></td><td>String</td><td>External ID.</td></tr><tr><td><code>name</code></td><td>String</td><td>User name.</td></tr><tr><td><code>dt_create</code></td><td>String</td><td>Date created.</td></tr><tr><td><code>dt_modify</code></td><td>String</td><td>Date modified.</td></tr></tbody></table>',
						blue: '<pre><p><b>Post</b></p><div class="Code Console">https://sync.paybook.com/v1/users</div></pre>',
					},
					{
						title: "Deletes a user",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>api_key</code></td><td>String</td><td>Developer key for authentication.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr></tbody></table>',
						blue: '<pre><p><b>Delete</b></p><div class="Code Console">https://sync.paybook.com/v1/users/:id_user</div></pre>',
					},
					{
						title: "Request users for that token",
						body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>api_key</code></td><td>String</td><td>Developer key for authentication.</td></tr><tr><td><code>id_external</code> (opcional)</td><td>String</td><td>External ID.</td></tr><tr><td><code>fields</code> (opcional)</td><td>String</td><td>Select fields to be returned.</td></tr><tr><td><code>limit</code> (opcional)</td><td>Number</td><td>Limit the number of rows to be returned.</td></tr><tr><td><code>skip</code> (opcional)</td><td>Number</td><td>Skip rows to be returned.</td></tr><tr><td><code>order</code> (opcional)</td><td>String</td><td>Order the rows to be returned.</td></tr></tbody></table><p><b>Success 200</b></p></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>id_external</code></td><td>String</td><td>External ID.</td></tr><tr><td><code>name</code></td><td>String</td><td>User name.</td></tr><tr><td><code>dt_create</code></td><td>String</td><td>Date created.</td></tr><tr><td><code>dt_modify</code></td><td>String</td><td>Date modified.</td></tr></tbody></table>',
						blue: '<pre><p><b>Get</b></p><div class="Code Console">https://sync.paybook.com/v1/users</div></pre>',
					}
				]
			},
			{
				title: "Widget",
				body: '',
				blue: '',
				subtopics: [
					{
						title: "Link Bank Account",
						body: '<p>If you want to link an account, first you should select an institution from the options below.</p><img src="../img/widget1.png"><p>Then if the institution has multiple options, select one of them.</p><img src="../img/widget2.png"><p>This is how it should look.</p><img src="../img/widget3.png"><p>Now you should set your credentials and proceed to the next step.</p><img src="../img/widget4.png"><p>The widgets is going to send your credentials in order to link you account.</p><img src="../img/widget5.png"><p>And finally if everything is ok, your account will be successfully linked.</p><img src="../img/widget6.png"><p>But if something went wrong.</p><img src="../img/widget7.png">',
						blue: '<pre><p><b>Head</b></p><div class="Code Console">https://sync.paybook.com/v1/</div></pre>',
					},
					{
						title: "Link Tributary Services",
						body: '<p>If you want to link a tributary service account, first you should switch to Tributary Services.</p><img src="../img/widget1.png"><p>Then select your tributary institution.</p><img src="../img/widget8.png"><p>This is how it should look.</p><img src="../img/widget9.png"><p>ow you should set your credentials and proceed to the next step.</p><img src="../img/widget10.png"><p>The widgets is going to send your credentials in order to link you account.</p><img src="../img/widget11.png"><p>And finally if everything is ok, your account will be successfully linked.</p><img src="../img/widget6.png">',
						blue: '<pre><p><b>Head</b></p><div class="Code Console">https://sync.paybook.com/v1/</div></pre>',
					}
				]
			}
		];
	})
	/*
	███████╗ █████╗  ██████╗
	██╔════╝██╔══██╗██╔═══██╗
	█████╗  ███████║██║   ██║
	██╔══╝  ██╔══██║██║▄▄ ██║
	██║     ██║  ██║╚██████╔╝
	╚═╝     ╚═╝  ╚═╝ ╚══▀▀═╝
	*/
	.controller('FAQController',function($scope,$routeParams){
		$scope.actualTopic=0;
		$(document).off();
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
		$scope.init=function(){
			var languageCode=window.location.pathname.slice(1,3);
			if(languageCode=="en"){
				$scope.language={
					code: "/en",
					name: "English"
				};
				$scope.info=$scope.infoEn;
			}
			else{
				if(languageCode=="es"){
					$scope.language={
						code: "/es",
						name: "Español"
					};
					$scope.info=$scope.infoEs;
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
		$scope.scrollToTopic=function(topic){
			$('html, body').animate({
	        	scrollTop: $("#Topic"+topic).offset().top+1
		    }, 1000);
		};
		$scope.showSmallSubviews=function(event){
			event.stopPropagation();
			$(".Subnavigation ul").addClass("SubnaviationShowUl");
		};
		/*_______ .__   __. 
		|   ____||  \ |  |
		|  |__   |   \|  |
		|   __|  |  . `  |
		|  |____ |  |\   |
		|_______||__| \__|*/
		$scope.infoEn=[
			{
				title: "What are Paybook's products?",
				body: "<p>Our core products are called \"Auth\" and \"Connect\". Auth enables you to instantly authenticate a bank account. Connect provides you transactional data on a user's bank or credit card accounts. You can find additional detail about these products in our documentation. If you're looking for other products or to solve other product needs, please feel free to reach out to us at info@Paybook.com with details and we'll get back to you!</p>",
			},
			{
				title: "How many banks does Paybook support?",
				body: "<p>We support bank account authentication via Auth for the top 14 banks, which covers the vast majority of active depository accounts. Feel free to read more about what banks we currently support on our site. For Connect, we provide transactional data for 18,000+ banks and credit unions across the U.S. and Canada.</p>",
			},
			{
				title: "What type of information does Paybook provide via Connect?",
				body: "<p>Please see our site for a list of the fields we return via Connect. If there's something you want that you don't see, we'd love to hear from you. Feel free to reach us at signups@Paybook.com to share your feedback and get answers to any additional questions you have on our products and your data needs.</p>",
			},
			{
				title: "Can I test Paybook’s data and products?",
				body: "<p>We make it easy for you to validate our data and products. You can create an account on our site to gain immediate access to the platform and a live set of API keys. You will be able to add up to 100 live users for free in the development environment.</p>",
			},
			{
				title: "Once I’ve tested Paybook, how do I upgrade to a production-level account?",
				body: "<p>Feel free to reach out to signups@Paybook.com to get set up with a fully upgraded account.</p>",
			},
			{
				title: "How much does Paybook cost?",
				body: "<p>Please reach out to signups@Paybook.com to receive pricing details.</p>",
			},
			{
				title: "Does Paybook process transactions?",
				body: "<p>While Paybook does not process ACH transactions (which is what is required to send money between accounts), we can help to instantly authenticate accounts for ACH. Instead of requiring an account and routing number followed by micro-deposits that typically take days to post, Paybook only needs a user's online banking credentials to authenticate an account so that you can begin transferring money immediately. You can read more about our Auth product on our site.</p>",
			},
			{
				title: "Does Paybook support Multi-Factor Authentication (MFA)?",
				body: "<p>Our API supports the MFA processes at all supported institutions. Feel free to read about how MFA is handled in our documentation.</p>",
			},
			{
				title: "Does Paybook support business bank accounts?",
				body: "<p>Paybook supports both consumer and business bank accounts.</p>",
			},
			{
				title: "Does Paybook pull investment/loan/brokerage data?",
				body: "<p>Paybook can pull high-level asset information as relevant to the overall financial picture of a user. However, we currently do not pull detailed account holding information, but hope to do so in the near future! If this is something you're interested in, please drop us a note at signups@Paybook.com with specifics on your data needs and use cases. We're always looking to hear from companies about their data needs.</p>",
			},
			{
				title: "Does Paybook support international bank accounts?",
				body: "<p>We currently support US and Canadian institutions only. We do hope to expand coverage to international banks at some point in the future, but we have no concrete timeline for that yet.</p>",
			},
			{
				title: "How do I integrate with Paybook?",
				body: "<p>Paybook Link is a quick and secure way to integrate with the Paybook API. Link is a drop-in module that handles credential validation, multi-factor authentication, and error handling for each institution that we support – all while keeping credentials from ever hitting your server. Head over to the Link documentation to get started right away. Otherwise, clients are also welcome to integrate directly with our API for onboarding!</p><p>If you have additional questions, feel free to reach out to our team at info@Paybook.com!</p>",
			},
		];
		/*_______    _______.
		|   ____|   /       |
		|  |__     |   (----`
		|   __|     \   \    
		|  |____.----)   |   
		|_______|_______/ */
		$scope.infoEs=[
			{
				title: "What are Paybook's products?",
				body: "<p>Our core products are called \"Auth\" and \"Connect\". Auth enables you to instantly authenticate a bank account. Connect provides you transactional data on a user's bank or credit card accounts. You can find additional detail about these products in our documentation. If you're looking for other products or to solve other product needs, please feel free to reach out to us at info@Paybook.com with details and we'll get back to you!</p>",
			},
			{
				title: "How many banks does Paybook support?",
				body: "<p>We support bank account authentication via Auth for the top 14 banks, which covers the vast majority of active depository accounts. Feel free to read more about what banks we currently support on our site. For Connect, we provide transactional data for 18,000+ banks and credit unions across the U.S. and Canada.</p>",
			},
			{
				title: "What type of information does Paybook provide via Connect?",
				body: "<p>Please see our site for a list of the fields we return via Connect. If there's something you want that you don't see, we'd love to hear from you. Feel free to reach us at signups@Paybook.com to share your feedback and get answers to any additional questions you have on our products and your data needs.</p>",
			},
			{
				title: "Can I test Paybook’s data and products?",
				body: "<p>We make it easy for you to validate our data and products. You can create an account on our site to gain immediate access to the platform and a live set of API keys. You will be able to add up to 100 live users for free in the development environment.</p>",
			},
			{
				title: "Once I’ve tested Paybook, how do I upgrade to a production-level account?",
				body: "<p>Feel free to reach out to signups@Paybook.com to get set up with a fully upgraded account.</p>",
			},
			{
				title: "How much does Paybook cost?",
				body: "<p>Please reach out to signups@Paybook.com to receive pricing details.</p>",
			},
			{
				title: "Does Paybook process transactions?",
				body: "<p>While Paybook does not process ACH transactions (which is what is required to send money between accounts), we can help to instantly authenticate accounts for ACH. Instead of requiring an account and routing number followed by micro-deposits that typically take days to post, Paybook only needs a user's online banking credentials to authenticate an account so that you can begin transferring money immediately. You can read more about our Auth product on our site.</p>",
			},
			{
				title: "Does Paybook support Multi-Factor Authentication (MFA)?",
				body: "<p>Our API supports the MFA processes at all supported institutions. Feel free to read about how MFA is handled in our documentation.</p>",
			},
			{
				title: "Does Paybook support business bank accounts?",
				body: "<p>Paybook supports both consumer and business bank accounts.</p>",
			},
			{
				title: "Does Paybook pull investment/loan/brokerage data?",
				body: "<p>Paybook can pull high-level asset information as relevant to the overall financial picture of a user. However, we currently do not pull detailed account holding information, but hope to do so in the near future! If this is something you're interested in, please drop us a note at signups@Paybook.com with specifics on your data needs and use cases. We're always looking to hear from companies about their data needs.</p>",
			},
			{
				title: "Does Paybook support international bank accounts?",
				body: "<p>We currently support US and Canadian institutions only. We do hope to expand coverage to international banks at some point in the future, but we have no concrete timeline for that yet.</p>",
			},
			{
				title: "How do I integrate with Paybook?",
				body: "<p>Paybook Link is a quick and secure way to integrate with the Paybook API. Link is a drop-in module that handles credential validation, multi-factor authentication, and error handling for each institution that we support – all while keeping credentials from ever hitting your server. Head over to the Link documentation to get started right away. Otherwise, clients are also welcome to integrate directly with our API for onboarding!</p><p>If you have additional questions, feel free to reach out to our team at info@Paybook.com!</p>",
			},
		];
	})
	/*
	███████╗██╗███╗   ██╗
	██╔════╝██║████╗  ██║
	█████╗  ██║██╔██╗ ██║
	██╔══╝  ██║██║╚██╗██║
	██║     ██║██║ ╚████║
	╚═╝     ╚═╝╚═╝  ╚═══╝
	*/
	.controller('FinController',function($scope,$routeParams){
		$(document).off();
		$scope.init=function(){
			var languageCode=window.location.pathname.slice(1,3);
			if(languageCode=="en"){
				$scope.language={
					code: "/en",
					name: "English"
				};
				$scope.info=$scope.infoEn;
			}
			else{
				if(languageCode=="es"){
					$scope.language={
						code: "/es",
						name: "Español"
					};
					$scope.info=$scope.infoEs;
				}
			}
		};
		/*_______ .__   __. 
		|   ____||  \ |  |
		|  |__   |   \|  |
		|   __|  |  . `  |
		|  |____ |  |\   |
		|_______||__| \__|*/
		$scope.infoEn={
			title: "Fin",
		};
		/*_______    _______.
		|   ____|   /       |
		|  |__     |   (----`
		|   __|     \   \    
		|  |____.----)   |   
		|_______|_______/ */
		$scope.infoEs={
			title: "Fin",
		};
	})
	/*
	██╗  ██╗ ██████╗ ███╗   ███╗███████╗
	██║  ██║██╔═══██╗████╗ ████║██╔════╝
	███████║██║   ██║██╔████╔██║█████╗
	██╔══██║██║   ██║██║╚██╔╝██║██╔══╝
	██║  ██║╚██████╔╝██║ ╚═╝ ██║███████╗
	╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝
	*/
	.controller('HomeController',function($scope,$routeParams){
		$(document).off();
		$scope.init=function(){
			var languageCode=window.location.pathname.slice(1,3);
			if(languageCode=="en"){
				$scope.language={
					code: "/en",
					name: "English"
				};
				$scope.info=$scope.infoEn;
			}
			else{
				if(languageCode=="es"){
					$scope.language={
						code: "/es",
						name: "Español"
					};
					$scope.info=$scope.infoEs;
				}
			}
		};
		/*_______ .__   __. 
		|   ____||  \ |  |
		|  |__   |   \|  |
		|   __|  |  . `  |
		|  |____ |  |\   |
		|_______||__| \__|*/
		$scope.infoEn={
			title: "Power your vision for financial services",
		};
		/*_______    _______.
		|   ____|   /       |
		|  |__     |   (----`
		|   __|     \   \    
		|  |____.----)   |   
		|_______|_______/ */
		$scope.infoEs={
			title: "Power your vision for financial services",
		};
	})
	/*
	██╗     ███████╗ ██████╗  █████╗ ██╗
	██║     ██╔════╝██╔════╝ ██╔══██╗██║
	██║     █████╗  ██║  ███╗███████║██║
	██║     ██╔══╝  ██║   ██║██╔══██║██║
	███████╗███████╗╚██████╔╝██║  ██║███████╗
	╚══════╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝
	*/
	.controller('LegalController',function($scope,$routeParams){
		$(document).off();
		$scope.init=function(){
			var languageCode=window.location.pathname.slice(1,3);
			if(languageCode=="en"){
				$scope.language={
					code: "/en",
					name: "English"
				};
				$scope.info=$scope.infoEn;
			}
			else{
				if(languageCode=="es"){
					$scope.language={
						code: "/es",
						name: "Español"
					};
					$scope.info=$scope.infoEs;
				}
			}
		};
		/*_______ .__   __. 
		|   ____||  \ |  |
		|  |__   |   \|  |
		|   __|  |  . `  |
		|  |____ |  |\   |
		|_______||__| \__|*/
		$scope.infoEn={
			title: "Legal",
		};
		/*_______    _______.
		|   ____|   /       |
		|  |__     |   (----`
		|   __|     \   \    
		|  |____.----)   |   
		|_______|_______/ */
		$scope.infoEs={
			title: "Legal",
		};
	})
	/*
	██████╗ ██████╗  ██████╗ ██████╗ ██╗   ██╗ ██████╗████████╗███████╗
	██╔══██╗██╔══██╗██╔═══██╗██╔══██╗██║   ██║██╔════╝╚══██╔══╝██╔════╝
	██████╔╝██████╔╝██║   ██║██║  ██║██║   ██║██║        ██║   ███████╗
	██╔═══╝ ██╔══██╗██║   ██║██║  ██║██║   ██║██║        ██║   ╚════██║
	██║     ██║  ██║╚██████╔╝██████╔╝╚██████╔╝╚██████╗   ██║   ███████║
	╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═════╝  ╚═════╝  ╚═════╝   ╚═╝   ╚══════╝
	*/
	.controller('ProductsController',function($scope,$routeParams){
		$(document).off();
		$scope.init=function(){
			var languageCode=window.location.pathname.slice(1,3);
			if(languageCode=="en"){
				$scope.language={
					code: "/en",
					name: "English"
				};
				$scope.info=$scope.infoEn;
			}
			else{
				if(languageCode=="es"){
					$scope.language={
						code: "/es",
						name: "Español"
					};
					$scope.info=$scope.infoEs;
				}
			}
		};
		/*_______ .__   __. 
		|   ____||  \ |  |
		|  |__   |   \|  |
		|   __|  |  . `  |
		|  |____ |  |\   |
		|_______||__| \__|*/
		$scope.infoEn={
			subtitle: "Use Paybook’s financial data technologies to create solutions that suit your business",
			title: "Products",
		};
		/*_______    _______.
		|   ____|   /       |
		|  |__     |   (----`
		|   __|     \   \    
		|  |____.----)   |   
		|_______|_______/ */
		$scope.infoEs={
			subtitle: "Use Paybook’s financial data technologies to create solutions that suit your business",
			title: "Productos",
		};
	})
	/*
	 ██████╗ ██╗   ██╗██╗ ██████╗██╗  ██╗███████╗████████╗ █████╗ ██████╗ ████████╗
	██╔═══██╗██║   ██║██║██╔════╝██║ ██╔╝██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚══██╔══╝
	██║   ██║██║   ██║██║██║     █████╔╝ ███████╗   ██║   ███████║██████╔╝   ██║
	██║▄▄ ██║██║   ██║██║██║     ██╔═██╗ ╚════██║   ██║   ██╔══██║██╔══██╗   ██║
	╚██████╔╝╚██████╔╝██║╚██████╗██║  ██╗███████║   ██║   ██║  ██║██║  ██║   ██║
	 ╚══▀▀═╝  ╚═════╝ ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝
	*/
	.controller('QuickstartController',function($scope,$routeParams){
		$scope.actualTopic=0;
		$scope.selectedLibrary={title: "Ruby",img: "ruby.png"};
		$scope.libraries=[
			{title: "Ruby",img: "ruby.png"},
			{title: "PHP",img: "php.png"},
			{title: "Java",img: "java.png"},
			{title: ".NET",img: "dotnet.png"},
			{title: "Node.js",img: "nodejs.png"},
			{title: "Python",img: "python.png"}
		];
		$scope.api_key="your_api_key";
		$scope.ciec="some_ciec";
		$scope.id_site="some_id_site";
		$scope.id_user="id_user_value";
		$scope.name="some_name";
		$scope.rfc="some_rfc";
		$scope.token="your_token";
		$(document).off();
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
		$scope.init=function(){
			var languageCode=window.location.pathname.slice(1,3);
			if(languageCode=="en"){
				$scope.language={
					code: "/en",
					name: "English"
				};
				$scope.info=$scope.infoEn;
			}
			else{
				if(languageCode=="es"){
					$scope.language={
						code: "/es",
						name: "Español"
					};
					$scope.info=$scope.infoEs;
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
		$scope.inputController=function(i,j){
			//console.log(i,j);
			//api_key
			if(j==1&&(i==4||(i==5||(i==6||i==10)))){
				$scope.api_key=$scope.info[i].body[j][1];
				//changeInputs
				$scope.info[4].body[1][1]=$scope.api_key;
				$scope.info[5].body[1][1]=$scope.api_key;
				$scope.info[6].body[1][1]=$scope.api_key;
				$scope.info[10].body[1][1]=$scope.api_key;
				//changeCode
				$scope.info[4].body[3]='<p><b>OUTPUT:</b> id_user</p><div class="Code Console">curl -X POST -H "Content-type:application/json" -d \'{"api_key":"'+$scope.api_key+'","name":"'+$scope.name+'"}\' https://sync.paybook.com/v1/users</div><p>Con esto se habrá creado un nuevo usuario "name" ligado a tu <b>API_KEY</b>, la respuesta de <a target="_blank" href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a> debe ser la siguiente:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":{"id_user":"573a91a90b212a0e3e8b4596","id_external":null,"name":"curlhugo1","dt_create":1463456169,"dt_modify":null}}</div><p><b>Importante:</b> no olvides remplazar el valor de los parámetros en todos los comandos.</p>';
				$scope.info[5].body[2]='<p><b>OUTPUT:</b> id_user</p><div class="Code Console">curl -X GET -H "Content-type:application/json" -d \'{"api_key":"'+$scope.api_key+'"}\' http://sync.paybook.com/v1/users</div><p>Para efectos de este tutorial la ejecución de este comando te debe regresar el usuario registrado anteriormente:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":[{"id_user":"573a91a90b212a0e3e8b4596","id_external":null,"name":"curlhugo1","dt_create":1463518052,"dt_modify":null}]}</div>';
				$scope.info[6].body[3]='<p><b>OUTPUT:</b> token</p><div class="Code Console">curl -X POST -H "Content-type:application/json" -d \'{"api_key":"'+$scope.api_key+'","id_user":"'+$scope.id_user+'"}\' https://sync.paybook.cm/v1/sessions</div><p>Este comando nos regresará un token e.g. 701c899236ea141d25f63c88d9f09230 como se muestra a continuación:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":{"token":"701c899236ea141d25f63c88d9f09230"}}</div><p><b>Importante:</b> El token tiene un periodo de expiración de 5 minutos después de su creación.</p>';
				$scope.info[10].body[3]='<p><b>OUTPUT:</b> credentials_retrieved</p><div class="Code Console">curl \'https://sync.paybook.com/v1/credentials?api_key='+$scope.api_key+'&id_user='+$scope.id_user+'\'</div><p>Y obtendremos un resultado parecido:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":[{"id_credential":"573b88f90b212a033e8b4582","id_site":"56cf5728784806f72b8b456f","id_site_organization":"56cf4ff5784806152c8b4568","id_site_organization_type":"56cf4f5b784806cf028b4569","username":"O***********9","dt_refresh":1463465010}]}</div>'
			}
			//name
			if(i==4&&j==2){
				$scope.name=$scope.info[i].body[j][1];
				//changeCode
				$scope.info[4].body[3]='<p><b>OUTPUT:</b> id_user</p><div class="Code Console">curl -X POST -H "Content-type:application/json" -d \'{"api_key":"'+$scope.api_key+'","name":"'+$scope.name+'"}\' https://sync.paybook.com/v1/users</div><p>Con esto se habrá creado un nuevo usuario "name" ligado a tu <b>API_KEY</b>, la respuesta de <a target="_blank" href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a> debe ser la siguiente:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":{"id_user":"573a91a90b212a0e3e8b4596","id_external":null,"name":"curlhugo1","dt_create":1463456169,"dt_modify":null}}</div><p><b>Importante:</b> no olvides remplazar el valor de los parámetros en todos los comandos.</p>';
			}
			//id_user
			if(j==2&&(i==6||i==10)){
				$scope.id_user=$scope.info[i].body[j][1];
				//changeInputs
				$scope.info[6].body[2][1]=$scope.id_user;
				$scope.info[10].body[2][1]=$scope.id_user;
				//changeCode
				$scope.info[6].body[3]='<p><b>OUTPUT:</b> token</p><div class="Code Console">curl -X POST -H "Content-type:application/json" -d \'{"api_key":"'+$scope.api_key+'","id_user":"'+$scope.id_user+'"}\' https://sync.paybook.cm/v1/sessions</div><p>Este comando nos regresará un token e.g. 701c899236ea141d25f63c88d9f09230 como se muestra a continuación:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":{"token":"701c899236ea141d25f63c88d9f09230"}}</div><p><b>Importante:</b> El token tiene un periodo de expiración de 5 minutos después de su creación.</p>';
				$scope.info[10].body[3]='<p><b>OUTPUT:</b> credentials_retrieved</p><div class="Code Console">curl \'https://sync.paybook.com/v1/credentials?api_key='+$scope.api_key+'&id_user='+$scope.id_user+'\'</div><p>Y obtendremos un resultado parecido:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":[{"id_credential":"573b88f90b212a033e8b4582","id_site":"56cf5728784806f72b8b456f","id_site_organization":"56cf4ff5784806152c8b4568","id_site_organization_type":"56cf4f5b784806cf028b4569","username":"O***********9","dt_refresh":1463465010}]}</div>'
			}
			//token
			if((i==12&&j==4)||(j==1&&(i==7||(i==8||(i==9||(i==11||i==12)))))){
				$scope.token=$scope.info[i].body[j][1];
				//changeInputs
				$scope.info[7].body[1][1]=$scope.token;
				$scope.info[8].body[1][1]=$scope.token;
				$scope.info[9].body[1][1]=$scope.token;
				$scope.info[11].body[1][1]=$scope.token;
				$scope.info[12].body[1][1]=$scope.token;
				$scope.info[12].body[4][1]=$scope.token;
				//changeCode
				$scope.info[7].body[2]='<p><b>OUTPUT:</b> code 200 o code 401</p><div class="Code Console">curl \'https://sync.paybook.com/v1/sessions/'+$scope.token+'/verify\'</div><p>Si la sesión es valida nos regresará lo siguiente:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":null}</div><p>Si la sesión ya no es valida tendremos un código 401 <b>Unauthorized</b></p><div class="Code Console">{"code":401,"status":false,"message":"Unauthorized","response":null}</div>';
				$scope.info[8].body[2]='<p><b>OUTPUT:</b> catalogues</p><div class="Code Console">curl \'https://sync.paybook.com/v1/catalogues/sites?token='+$scope.token+'\'</div>';
				$scope.info[9].body[5]='<p><b>OUTPUT:</b> url_status</p><div class="Code Console">curl -X POST -H "Content-type:application/json" -d \'{"token":"'+$scope.token+'","id_site":"'+$scope.id_site+'","credentials":{"rfc" : "'+$scope.rfc+'","password" : "'+$scope.ciec+'"}}\' https://sync.paybook.com/v1/credentials</div><p>Si las credenciales fueron registradas correctamente obtendremos un resultado como el siguiente:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":{"id_credential":"573b88f90b212a033e8b4582","username":"O***********9","ws":"wss:\/\/sync.paybook.com\/v1\/status\/573b88f90b212af83d8b457f","status":"https:\/\/sync.paybook.com\/v1\/jobs\/573b88f90b212af83d8b457f\/status","twofa":"https:\/\/sync.paybook.com\/v1\/jobs\/573b88f90b212af83d8b457f\/twofa"}}</div><p><b>Importante:</b> guardar el valor del campo de <b>status</b> -- es una url -- ya que se utilizará más adelante.</p>';
				$scope.info[11].body[2]='<p><b>OUTPUT:</b> status</p><div class="Code Console">curl \'https://sync.paybook.com/v1/jobs/573b88f90b212af83d8b457f/status?token='+$scope.token+'\'</div><p>Al ejecutar el comando anterior obtendremos el siguiente resultado:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":[{"code":100},{"code":101},{"code":102},{"code":200}]}</div><p>Estos son una serie de códigos que indican el estatus de sincronización de la cuenta del SAT que el usuario registró. La descripción de los códigos se muestra a continuación:</p><table><thead><tr><th>Código</th><th>Descripción</th></tr></thead><tbody><tr><td>100</td><td>Se registró un nuevo Job en el API</td></tr><tr><td>101</td><td>Se obtuvo el Job registrado y empezará a trabajar</td></tr><tr><td>102</td><td>El login fue exitóso y la información está siendo sincronizada</td></tr><tr><td>200</td><td>Los datos han sido procesados exitosamente</td></tr><tr><td>201</td><td>Los datos han sido procesados exitosamente, se continuará con la descarga</td></tr><tr><td>202</td><td>No se encontraron transacciones</td></tr></tbody></table>';
				$scope.info[12].body[3]='<p><b>OUTPUT:</b> transactions_count</p><div class="Code Console">curl \'https://sync.paybook.com/v1/transactions/count?token='+$scope.token+'&id_site='+$scope.id_site+'\'</div><p>Y esto nos regresará una respuesta con el número de transacciones sincronizadas:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":{"count":121}}</div><p>Si queremos consultar las transacciones directamente ejecutamos:</p><p><b>INPUT:</b></p>';
				$scope.info[12].body[6]='<p><b>OUTPUT:</b> transactions</p><div class="Code Console">curl \'https://sync.paybook.com/v1/transactions?token='+$scope.token+'&id_site='+$scope.id_site+'\'</div><p>Y nos regresará un arreglo de transacciones como la siguiente:</p><div class="Code Console">{"id_transaction":"573b8922234283ad738b45da","id_user":"573a91a90b212a0e3e8b4596","id_external":null,"id_site":"56cf5728784806f72b8b456f","id_site_organization":"56cf4ff5784806152c8b4568","id_site_organization_type":"56cf4f5b784806cf028b4569","id_account":"573b8921234283ad738b4567","id_account_type":"546d4904df527d1844a2e18d","is_disable":0,"description":"CREACIONES DE TECNOLOGIA AVANZADA DE MEXICO SA DE CV","amount":6834.93,"dt_transaction":1461960603,"dt_refresh":1463519574}</div>';
			}
			//id_site
			if((i==12&&j==5)||(j==2&&(i==9||i==12))){
				$scope.id_site=$scope.info[i].body[j][1];
				//changeInputs
				$scope.info[9].body[2][1]=$scope.id_site;
				$scope.info[12].body[2][1]=$scope.id_site;
				$scope.info[12].body[5][1]=$scope.id_site;
				//changeCode
				$scope.info[9].body[5]='<p><b>OUTPUT:</b> url_status</p><div class="Code Console">curl -X POST -H "Content-type:application/json" -d \'{"token":"'+$scope.token+'","id_site":"'+$scope.id_site+'","credentials":{"rfc" : "'+$scope.rfc+'","password" : "'+$scope.ciec+'"}}\' https://sync.paybook.com/v1/credentials</div><p>Si las credenciales fueron registradas correctamente obtendremos un resultado como el siguiente:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":{"id_credential":"573b88f90b212a033e8b4582","username":"O***********9","ws":"wss:\/\/sync.paybook.com\/v1\/status\/573b88f90b212af83d8b457f","status":"https:\/\/sync.paybook.com\/v1\/jobs\/573b88f90b212af83d8b457f\/status","twofa":"https:\/\/sync.paybook.com\/v1\/jobs\/573b88f90b212af83d8b457f\/twofa"}}</div><p><b>Importante:</b> guardar el valor del campo de <b>status</b> -- es una url -- ya que se utilizará más adelante.</p>';
				$scope.info[12].body[3]='<p><b>OUTPUT:</b> transactions_count</p><div class="Code Console">curl \'https://sync.paybook.com/v1/transactions/count?token='+$scope.token+'&id_site='+$scope.id_site+'\'</div><p>Y esto nos regresará una respuesta con el número de transacciones sincronizadas:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":{"count":121}}</div><p>Si queremos consultar las transacciones directamente ejecutamos:</p><p><b>INPUT:</b></p>';
				$scope.info[12].body[6]='<p><b>OUTPUT:</b> transactions</p><div class="Code Console">curl \'https://sync.paybook.com/v1/transactions?token='+$scope.token+'&id_site='+$scope.id_site+'\'</div><p>Y nos regresará un arreglo de transacciones como la siguiente:</p><div class="Code Console">{"id_transaction":"573b8922234283ad738b45da","id_user":"573a91a90b212a0e3e8b4596","id_external":null,"id_site":"56cf5728784806f72b8b456f","id_site_organization":"56cf4ff5784806152c8b4568","id_site_organization_type":"56cf4f5b784806cf028b4569","id_account":"573b8921234283ad738b4567","id_account_type":"546d4904df527d1844a2e18d","is_disable":0,"description":"CREACIONES DE TECNOLOGIA AVANZADA DE MEXICO SA DE CV","amount":6834.93,"dt_transaction":1461960603,"dt_refresh":1463519574}</div>';
			}
			//rfc
			if(i==9&&j==3){
				$scope.rfc=$scope.info[i].body[j][1];
				//changeCode
				$scope.info[9].body[5]='<p><b>OUTPUT:</b> url_status</p><div class="Code Console">curl -X POST -H "Content-type:application/json" -d \'{"token":"'+$scope.token+'","id_site":"'+$scope.id_site+'","credentials":{"rfc" : "'+$scope.rfc+'","password" : "'+$scope.ciec+'"}}\' https://sync.paybook.com/v1/credentials</div><p>Si las credenciales fueron registradas correctamente obtendremos un resultado como el siguiente:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":{"id_credential":"573b88f90b212a033e8b4582","username":"O***********9","ws":"wss:\/\/sync.paybook.com\/v1\/status\/573b88f90b212af83d8b457f","status":"https:\/\/sync.paybook.com\/v1\/jobs\/573b88f90b212af83d8b457f\/status","twofa":"https:\/\/sync.paybook.com\/v1\/jobs\/573b88f90b212af83d8b457f\/twofa"}}</div><p><b>Importante:</b> guardar el valor del campo de <b>status</b> -- es una url -- ya que se utilizará más adelante.</p>';
			}
			//ciec
			if(i==9&&j==4){
				$scope.ciec=$scope.info[i].body[j][1];
				//changeCode
				$scope.info[9].body[5]='<p><b>OUTPUT:</b> url_status</p><div class="Code Console">curl -X POST -H "Content-type:application/json" -d \'{"token":"'+$scope.token+'","id_site":"'+$scope.id_site+'","credentials":{"rfc" : "'+$scope.rfc+'","password" : "'+$scope.ciec+'"}}\' https://sync.paybook.com/v1/credentials</div><p>Si las credenciales fueron registradas correctamente obtendremos un resultado como el siguiente:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":{"id_credential":"573b88f90b212a033e8b4582","username":"O***********9","ws":"wss:\/\/sync.paybook.com\/v1\/status\/573b88f90b212af83d8b457f","status":"https:\/\/sync.paybook.com\/v1\/jobs\/573b88f90b212af83d8b457f\/status","twofa":"https:\/\/sync.paybook.com\/v1\/jobs\/573b88f90b212af83d8b457f\/twofa"}}</div><p><b>Importante:</b> guardar el valor del campo de <b>status</b> -- es una url -- ya que se utilizará más adelante.</p>';
			}
			//console.log($scope.info[i].body[j][1]);
		}
		$scope.scrollToTopic=function(topic){
			$('html, body').animate({
	        	scrollTop: $("#Topic"+topic).offset().top+1
		    }, 1000);
		};
		$scope.selectLibrary=function(pos){
			$scope.selectedLibrary=$scope.libraries[pos];
			//aquí hago los cambios
		};
		$scope.showLibraries=function(event){
			event.stopPropagation();
			$(".Libraries").addClass("LibrariesVisible");
		};
		/*_______ .__   __. 
		|   ____||  \ |  |
		|  |__   |   \|  |
		|   __|  |  . `  |
		|  |____ |  |\   |
		|_______||__| \__|*/
		$scope.infoEn=[
			{
				title: "Requerimientos",
				body: [
					'<ul><li>Manejo básico de línea de comandos</li><li>Tener el comando <a target="_blank" href="https://curl.haxx.se/docs/manpage.html">cURL</a> instalado en línea de comandos</li><li>Un <b>API_KEY</b> de <a target="_blank" href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a></li></ul>'
				]
			},
			{
				title: "Gestión de Usuarios",
				body: [
					'<p>Lo primero que tienes que hacer para sincronizar una institución por medio de <a target="_blank" href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a> es la gestión de usuarios. La estructura en Sync es la siguiente:</p><img src="../img/quickstart1.png"><p>Es decir tú podrás registrar muchos usuarios por medio de tu <b>API_KEY</b> y, a su vez, cada uno de estos usuarios registrará cuentas de las instituciones que desea sincronizar. Al final todas las cuentas sincronizadas de cada una de las instituciones que un usuario dio de alta estarán ligadas a tu <b>API_KEY</b>.</p>'
				]
			},
			{
				title: "Conexión con Sync API",
				body: [
					'<p>En este tutorial implementaremos <a target="_blank" href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a> por medio de la interfaz <a target="_blank" href="https://curl.haxx.se/docs/manpage.html">cURL</a> desde la línea de comandos. La interacción entre tu terminal y el API se muestra a continuación:</p><img src="../img/quickstart2.png"><p>En resumen, estaremos consumiendo los enpoints GET/POST/PUT/DELETE de <a target="_blank" href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a> a través de nuestra línea de comandos.</p>'
				]
			},
			{
				title: "Flujo del Tutorial",
				body: [
					'<p>En este tutorial haremos lo siguiente:</p><ol><li>Crearemos un usuario nuevo que ligaremos a nuestra <b>API_KEY</b></li><li>Consultaremos los usuarios que están ligados a nuestra <b>API_KEY</b></li><li>Iniciaremos sesión con el usuario creado en el paso 1</li><li>Verificaremos la sesión creada en el paso 3.</li></ol><p>A partir de aquí ya tendremos una sesión iniciada (sesión del usuario creada en el paso 1) por lo que las siguientes acciones estarán ligadas a dicho usuario:</p><ol><li>Consultaremos los catálogos de las instituciones que el usuario puede sincronizar con <a target="_blank" href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a>.</li><li>Registraremos las credenciales del usuario en una institución (SAT).</li><li>Revisaremos el estatus de sincronización para las credenciales registradas.</li><li>Consultaremos las transacciones sincronizadas.</li></ol><p>Esperemos lo disfrutes ¡Aquí vamos!</p>'
				]
			},
			{
				title: "1. Creación de Usuario",
				body: [
					'<p>Crear un usuario por medio de <a target="_blank" href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a> es muy sencillo, para esto únicamente requieres tu <b>API_KEY</b> y un nombre de usuario para el usuario que deseas crear.</p><p><b>INPUT:</b></p>',
					["api_key",$scope.api_key,"api_key: "],
					["name",$scope.name,"name: "],
					'<p><b>OUTPUT:</b> id_user</p><div class="Code Console">curl -X POST -H "Content-type:application/json" -d \'{"api_key":"your_api_key","name":"some_name"}\' https://sync.paybook.com/v1/users</div><p>Con esto se habrá creado un nuevo usuario "name" ligado a tu <b>API_KEY</b>, la respuesta de <a target="_blank" href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a> debe ser la siguiente:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":{"id_user":"573a91a90b212a0e3e8b4596","id_external":null,"name":"curlhugo1","dt_create":1463456169,"dt_modify":null}}</div><p><b>Importante:</b> no olvides remplazar el valor de los parámetros en todos los comandos.</p>'
				]
			},
			{
				title: "2. Consulta de Usuarios",
				body: [
					'<p>Para verificar los usuarios que están ligados a tu <b>API_KEY</b>, es decir, a tu cuenta de <a target="_blank" href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a>, ejecuta el siguiente comando:</p><p><b>INPUT:</b></p>',
					["api_key",$scope.api_key,"api_key: "],
					'<p><b>OUTPUT:</b> id_user</p><div class="Code Console">curl -X GET -H "Content-type:application/json" -d \'{"api_key":"your_api_key"}\' http://sync.paybook.com/v1/users</div><p>Para efectos de este tutorial la ejecución de este comando te debe regresar el usuario registrado anteriormente:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":[{"id_user":"573a91a90b212a0e3e8b4596","id_external":null,"name":"curlhugo1","dt_create":1463518052,"dt_modify":null}]}</div>'
				]
			},
			{
				title: "3. Inicio de Sesión",
				body: [
					'<p>Para poder sincronizar una cuenta de alguna institución lo primero que tenemos que hacer es iniciar sesión con el usuario que deseamos sincronizar. Para esto es necesario tener el id del usuario i.e. id_user y ejecutar:</p><p><b>INPUT:</b></p>',
					["api_key",$scope.api_key,"api_key: "],
					["id_user",$scope.id_user,"id_user: "],
					'<p><b>OUTPUT:</b> token</p><div class="Code Console">curl -X POST -H "Content-type:application/json" -d \'{"api_key":"your_api_key","id_user":"id_user_value"}\' https://sync.paybook.cm/v1/sessions</div><p>Este comando nos regresará un token e.g. 701c899236ea141d25f63c88d9f09230 como se muestra a continuación:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":{"token":"701c899236ea141d25f63c88d9f09230"}}</div><p><b>Importante:</b> El token tiene un periodo de expiración de 5 minutos después de su creación.</p>'
				]
			},
			{
				title: "4. Verificación de la Sesión",
				body: [
					'<p>No está demás verificar la validez de la sesión i.e. del token, para esto ejecutar el siguiente comando:</p><p><b>INPUT:</b></p>',
					["token",$scope.token,"token: "],
					'<p><b>OUTPUT:</b> code 200 o code 401</p><div class="Code Console">curl \'https://sync.paybook.com/v1/sessions/your_token/verify\'</div><p>Si la sesión es valida nos regresará lo siguiente:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":null}</div><p>Si la sesión ya no es valida tendremos un código 401 <b>Unauthorized</b></p><div class="Code Console">{"code":401,"status":false,"message":"Unauthorized","response":null}</div>'
				]
			},
			{
				title: "5. Consulta de Catálogos de Instituciones",
				body: [
					'<p>Una vez que hemos iniciado sesión tenemos que consultar el catálogo de instituciones que <a target="_blank" href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a> tiene para nosotros de tal manera que podamos elegir la institución que queremos sincronizar para este usuario.</p><p><b>INPUT:</b></p>',
					["token",$scope.token,"token: "],
					'<p><b>OUTPUT:</b> catalogues</p><div class="Code Console">curl \'https://sync.paybook.com/v1/catalogues/sites?token=your_token\'</div>'
				]
			},
			{
				title: "6. Sincronizar una Institución",
				body: [
					'<p>El siguiente paso consiste en seleccionar una institución del catálogo para sincronizarla, para efectos de este tutorial seleccionaremos el SAT, para esto obtenemos el id del sitio del SAT analizando el catálogo, se debe obtener el siguiente valor:</p><div class="Code Console">id_site = \'56cf5728784806f72b8b456f\'</div><p>Una vez que hemos seleccionado la institución hay que dar de alta las credenciales de nuestro usuario en esa institución, en el caso particular del SAT las credenciales deben ser el <b>RFC</b> así como su Clave de Identificación Electrónica Confidencial, o mejor conocida como <b>CIEC</b>:</p><p><b>INPUT:</b></p>',
					["token",$scope.token,"token: "],
					["id_site",$scope.id_site,"id_site: "],
					["rfc",$scope.rfc,"rfc: "],
					["ciec",$scope.ciec,"ciec: "],
					'<p><b>OUTPUT:</b> url_status</p><div class="Code Console">curl -X POST -H "Content-type:application/json" -d \'{"token":"your_token","id_site":"some_id_site","credentials":{"rfc" : "some_rfc","password" : "some_ciec"}}\' https://sync.paybook.com/v1/credentials</div><p>Si las credenciales fueron registradas correctamente obtendremos un resultado como el siguiente:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":{"id_credential":"573b88f90b212a033e8b4582","username":"O***********9","ws":"wss:\/\/sync.paybook.com\/v1\/status\/573b88f90b212af83d8b457f","status":"https:\/\/sync.paybook.com\/v1\/jobs\/573b88f90b212af83d8b457f\/status","twofa":"https:\/\/sync.paybook.com\/v1\/jobs\/573b88f90b212af83d8b457f\/twofa"}}</div><p><b>Importante:</b> guardar el valor del campo de <b>status</b> -- es una url -- ya que se utilizará más adelante.</p>'
				]
			},
			{
				title: "7. Verificar creación de Credenciales",
				body: [
					'<p>Como un paso de verificación podemos revisar las credenciales registradas para un usuario:</p><p><b>INPUT:</b></p>',
					["api_key",$scope.api_key,"api_key: "],
					["id_user",$scope.id_user,"id_user: "],
					'<p><b>OUTPUT:</b> credentials_retrieved</p><div class="Code Console">curl \'https://sync.paybook.com/v1/credentials?api_key=your_api_key&id_user=id_user_value\'</div><p>Y obtendremos un resultado parecido:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":[{"id_credential":"573b88f90b212a033e8b4582","id_site":"56cf5728784806f72b8b456f","id_site_organization":"56cf4ff5784806152c8b4568","id_site_organization_type":"56cf4f5b784806cf028b4569","username":"O***********9","dt_refresh":1463465010}]}</div>'
				]
			},
			{
				title: "8. Revisar el Estatus de Sincronización",
				body: [
					'<p>Una vez que hemos registrado una credencial y hemos verificado que ésta se haya guardado correctamente, el siguiente paso consiste en checar el estatus de sincronización para este contribuyente. Para esto haremos uso del valor que guardamos de <b>url_status</b> que obtuvimos anteriormente al crear credenciales, únicamente hay que agregar el valor de nuestro token de sesión:</p><div class="Code Console">curl &ltvalor_status&gt; + ? + token=&ltsome_token&gt;</span></div><p>Un ejemplo sería el siguiente:</p><p><b>INPUT:</b></p>',
					["token",$scope.token,"token: "],
					'<p><b>OUTPUT:</b> status</p><div class="Code Console">curl \'https://sync.paybook.com/v1/jobs/573b88f90b212af83d8b457f/status?token=your_token\'</div><p>Al ejecutar el comando anterior obtendremos el siguiente resultado:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":[{"code":100},{"code":101},{"code":102},{"code":200}]}</div><p>Estos son una serie de códigos que indican el estatus de sincronización de la cuenta del SAT que el usuario registró. La descripción de los códigos se muestra a continuación:</p><table><thead><tr><th>Código</th><th>Descripción</th></tr></thead><tbody><tr><td>100</td><td>Se registró un nuevo Job en el API</td></tr><tr><td>101</td><td>Se obtuvo el Job registrado y empezará a trabajar</td></tr><tr><td>102</td><td>El login fue exitóso y la información está siendo sincronizada</td></tr><tr><td>200</td><td>Los datos han sido procesados exitosamente</td></tr><tr><td>201</td><td>Los datos han sido procesados exitosamente, se continuará con la descarga</td></tr><tr><td>202</td><td>No se encontraron transacciones</td></tr></tbody></table>'
				]
			},
			{
				title: "9. Consultar Transacciones",
				body: [
					'<p>Una vez que se registraron las credenciales, en caso de tener en el estatus un código 200, 201 o 202 podemos consultar las transacciones sincronizadas. Para esto ejecutamos el siguiente comando:</p><p><b>INPUT:</b></p>',
					["token",$scope.token,"token: "],
					["id_site",$scope.id_site,"id_site: "],
					'<p><b>OUTPUT:</b> transactions_count</p><div class="Code Console">curl \'https://sync.paybook.com/v1/transactions/count?token=your_token&id_site=some_id_site\'</div><p>Y esto nos regresará una respuesta con el número de transacciones sincronizadas:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":{"count":121}}</div><p>Si queremos consultar las transacciones directamente ejecutamos:</p><p><b>INPUT:</b></p>',
					["token",$scope.token,"token: "],
					["id_site",$scope.id_site,"id_site: "],
					'<p><b>OUTPUT:</b> transactions</p><div class="Code Console">curl \'https://sync.paybook.com/v1/transactions?token=your_token&id_site=some_id_site\'</div><p>Y nos regresará un arreglo de transacciones como la siguiente:</p><div class="Code Console">{"id_transaction":"573b8922234283ad738b45da","id_user":"573a91a90b212a0e3e8b4596","id_external":null,"id_site":"56cf5728784806f72b8b456f","id_site_organization":"56cf4ff5784806152c8b4568","id_site_organization_type":"56cf4f5b784806cf028b4569","id_account":"573b8921234283ad738b4567","id_account_type":"546d4904df527d1844a2e18d","is_disable":0,"description":"CREACIONES DE TECNOLOGIA AVANZADA DE MEXICO SA DE CV","amount":6834.93,"dt_transaction":1461960603,"dt_refresh":1463519574}</div>'
				]
			}
		];
		/*_______    _______.
		|   ____|   /       |
		|  |__     |   (----`
		|   __|     \   \    
		|  |____.----)   |   
		|_______|_______/ */
		$scope.infoEs=[
			{
				title: "Requerimientos",
				body: [
					'<ul><li>Manejo básico de línea de comandos</li><li>Tener el comando <a target="_blank" href="https://curl.haxx.se/docs/manpage.html">cURL</a> instalado en línea de comandos</li><li>Un <b>API_KEY</b> de <a target="_blank" href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a></li></ul>'
				]
			},
			{
				title: "Gestión de Usuarios",
				body: [
					'<p>Lo primero que tienes que hacer para sincronizar una institución por medio de <a target="_blank" href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a> es la gestión de usuarios. La estructura en Sync es la siguiente:</p><img src="../img/quickstart1.png"><p>Es decir tú podrás registrar muchos usuarios por medio de tu <b>API_KEY</b> y, a su vez, cada uno de estos usuarios registrará cuentas de las instituciones que desea sincronizar. Al final todas las cuentas sincronizadas de cada una de las instituciones que un usuario dio de alta estarán ligadas a tu <b>API_KEY</b>.</p>'
				]
			},
			{
				title: "Conexión con Sync API",
				body: [
					'<p>En este tutorial implementaremos <a target="_blank" href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a> por medio de la interfaz <a target="_blank" href="https://curl.haxx.se/docs/manpage.html">cURL</a> desde la línea de comandos. La interacción entre tu terminal y el API se muestra a continuación:</p><img src="../img/quickstart2.png"><p>En resumen, estaremos consumiendo los enpoints GET/POST/PUT/DELETE de <a target="_blank" href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a> a través de nuestra línea de comandos.</p>'
				]
			},
			{
				title: "Flujo del Tutorial",
				body: [
					'<p>En este tutorial haremos lo siguiente:</p><ol><li>Crearemos un usuario nuevo que ligaremos a nuestra <b>API_KEY</b></li><li>Consultaremos los usuarios que están ligados a nuestra <b>API_KEY</b></li><li>Iniciaremos sesión con el usuario creado en el paso 1</li><li>Verificaremos la sesión creada en el paso 3.</li></ol><p>A partir de aquí ya tendremos una sesión iniciada (sesión del usuario creada en el paso 1) por lo que las siguientes acciones estarán ligadas a dicho usuario:</p><ol><li>Consultaremos los catálogos de las instituciones que el usuario puede sincronizar con <a target="_blank" href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a>.</li><li>Registraremos las credenciales del usuario en una institución (SAT).</li><li>Revisaremos el estatus de sincronización para las credenciales registradas.</li><li>Consultaremos las transacciones sincronizadas.</li></ol><p>Esperemos lo disfrutes ¡Aquí vamos!</p>'
				]
			},
			{
				title: "1. Creación de Usuario",
				body: [
					'<p>Crear un usuario por medio de <a target="_blank" href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a> es muy sencillo, para esto únicamente requieres tu <b>API_KEY</b> y un nombre de usuario para el usuario que deseas crear.</p><p><b>INPUT:</b></p>',
					["api_key",$scope.api_key,"api_key: "],
					["name",$scope.name,"name: "],
					'<p><b>OUTPUT:</b> id_user</p><div class="Code Console">curl -X POST -H "Content-type:application/json" -d \'{"api_key":"your_api_key","name":"some_name"}\' https://sync.paybook.com/v1/users</div><p>Con esto se habrá creado un nuevo usuario "name" ligado a tu <b>API_KEY</b>, la respuesta de <a target="_blank" href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a> debe ser la siguiente:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":{"id_user":"573a91a90b212a0e3e8b4596","id_external":null,"name":"curlhugo1","dt_create":1463456169,"dt_modify":null}}</div><p><b>Importante:</b> no olvides remplazar el valor de los parámetros en todos los comandos.</p>'
				]
			},
			{
				title: "2. Consulta de Usuarios",
				body: [
					'<p>Para verificar los usuarios que están ligados a tu <b>API_KEY</b>, es decir, a tu cuenta de <a target="_blank" href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a>, ejecuta el siguiente comando:</p><p><b>INPUT:</b></p>',
					["api_key",$scope.api_key,"api_key: "],
					'<p><b>OUTPUT:</b> id_user</p><div class="Code Console">curl -X GET -H "Content-type:application/json" -d \'{"api_key":"your_api_key"}\' http://sync.paybook.com/v1/users</div><p>Para efectos de este tutorial la ejecución de este comando te debe regresar el usuario registrado anteriormente:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":[{"id_user":"573a91a90b212a0e3e8b4596","id_external":null,"name":"curlhugo1","dt_create":1463518052,"dt_modify":null}]}</div>'
				]
			},
			{
				title: "3. Inicio de Sesión",
				body: [
					'<p>Para poder sincronizar una cuenta de alguna institución lo primero que tenemos que hacer es iniciar sesión con el usuario que deseamos sincronizar. Para esto es necesario tener el id del usuario i.e. id_user y ejecutar:</p><p><b>INPUT:</b></p>',
					["api_key",$scope.api_key,"api_key: "],
					["id_user",$scope.id_user,"id_user: "],
					'<p><b>OUTPUT:</b> token</p><div class="Code Console">curl -X POST -H "Content-type:application/json" -d \'{"api_key":"your_api_key","id_user":"id_user_value"}\' https://sync.paybook.cm/v1/sessions</div><p>Este comando nos regresará un token e.g. 701c899236ea141d25f63c88d9f09230 como se muestra a continuación:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":{"token":"701c899236ea141d25f63c88d9f09230"}}</div><p><b>Importante:</b> El token tiene un periodo de expiración de 5 minutos después de su creación.</p>'
				]
			},
			{
				title: "4. Verificación de la Sesión",
				body: [
					'<p>No está demás verificar la validez de la sesión i.e. del token, para esto ejecutar el siguiente comando:</p><p><b>INPUT:</b></p>',
					["token",$scope.token,"token: "],
					'<p><b>OUTPUT:</b> code 200 o code 401</p><div class="Code Console">curl \'https://sync.paybook.com/v1/sessions/your_token/verify\'</div><p>Si la sesión es valida nos regresará lo siguiente:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":null}</div><p>Si la sesión ya no es valida tendremos un código 401 <b>Unauthorized</b></p><div class="Code Console">{"code":401,"status":false,"message":"Unauthorized","response":null}</div>'
				]
			},
			{
				title: "5. Consulta de Catálogos de Instituciones",
				body: [
					'<p>Una vez que hemos iniciado sesión tenemos que consultar el catálogo de instituciones que <a target="_blank" href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a> tiene para nosotros de tal manera que podamos elegir la institución que queremos sincronizar para este usuario.</p><p><b>INPUT:</b></p>',
					["token",$scope.token,"token: "],
					'<p><b>OUTPUT:</b> catalogues</p><div class="Code Console">curl \'https://sync.paybook.com/v1/catalogues/sites?token=your_token\'</div>'
				]
			},
			{
				title: "6. Sincronizar una Institución",
				body: [
					'<p>El siguiente paso consiste en seleccionar una institución del catálogo para sincronizarla, para efectos de este tutorial seleccionaremos el SAT, para esto obtenemos el id del sitio del SAT analizando el catálogo, se debe obtener el siguiente valor:</p><div class="Code Console">id_site = \'56cf5728784806f72b8b456f\'</div><p>Una vez que hemos seleccionado la institución hay que dar de alta las credenciales de nuestro usuario en esa institución, en el caso particular del SAT las credenciales deben ser el <b>RFC</b> así como su Clave de Identificación Electrónica Confidencial, o mejor conocida como <b>CIEC</b>:</p><p><b>INPUT:</b></p>',
					["token",$scope.token,"token: "],
					["id_site",$scope.id_site,"id_site: "],
					["rfc",$scope.rfc,"rfc: "],
					["ciec",$scope.ciec,"ciec: "],
					'<p><b>OUTPUT:</b> url_status</p><div class="Code Console">curl -X POST -H "Content-type:application/json" -d \'{"token":"your_token","id_site":"some_id_site","credentials":{"rfc" : "some_rfc","password" : "some_ciec"}}\' https://sync.paybook.com/v1/credentials</div><p>Si las credenciales fueron registradas correctamente obtendremos un resultado como el siguiente:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":{"id_credential":"573b88f90b212a033e8b4582","username":"O***********9","ws":"wss:\/\/sync.paybook.com\/v1\/status\/573b88f90b212af83d8b457f","status":"https:\/\/sync.paybook.com\/v1\/jobs\/573b88f90b212af83d8b457f\/status","twofa":"https:\/\/sync.paybook.com\/v1\/jobs\/573b88f90b212af83d8b457f\/twofa"}}</div><p><b>Importante:</b> guardar el valor del campo de <b>status</b> -- es una url -- ya que se utilizará más adelante.</p>'
				]
			},
			{
				title: "7. Verificar creación de Credenciales",
				body: [
					'<p>Como un paso de verificación podemos revisar las credenciales registradas para un usuario:</p><p><b>INPUT:</b></p>',
					["api_key",$scope.api_key,"api_key: "],
					["id_user",$scope.id_user,"id_user: "],
					'<p><b>OUTPUT:</b> credentials_retrieved</p><div class="Code Console">curl \'https://sync.paybook.com/v1/credentials?api_key=your_api_key&id_user=id_user_value\'</div><p>Y obtendremos un resultado parecido:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":[{"id_credential":"573b88f90b212a033e8b4582","id_site":"56cf5728784806f72b8b456f","id_site_organization":"56cf4ff5784806152c8b4568","id_site_organization_type":"56cf4f5b784806cf028b4569","username":"O***********9","dt_refresh":1463465010}]}</div>'
				]
			},
			{
				title: "8. Revisar el Estatus de Sincronización",
				body: [
					'<p>Una vez que hemos registrado una credencial y hemos verificado que ésta se haya guardado correctamente, el siguiente paso consiste en checar el estatus de sincronización para este contribuyente. Para esto haremos uso del valor que guardamos de <b>url_status</b> que obtuvimos anteriormente al crear credenciales, únicamente hay que agregar el valor de nuestro token de sesión:</p><div class="Code Console">curl &ltvalor_status&gt; + ? + token=&ltsome_token&gt;</span></div><p>Un ejemplo sería el siguiente:</p><p><b>INPUT:</b></p>',
					["token",$scope.token,"token: "],
					'<p><b>OUTPUT:</b> status</p><div class="Code Console">curl \'https://sync.paybook.com/v1/jobs/573b88f90b212af83d8b457f/status?token=your_token\'</div><p>Al ejecutar el comando anterior obtendremos el siguiente resultado:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":[{"code":100},{"code":101},{"code":102},{"code":200}]}</div><p>Estos son una serie de códigos que indican el estatus de sincronización de la cuenta del SAT que el usuario registró. La descripción de los códigos se muestra a continuación:</p><table><thead><tr><th>Código</th><th>Descripción</th></tr></thead><tbody><tr><td>100</td><td>Se registró un nuevo Job en el API</td></tr><tr><td>101</td><td>Se obtuvo el Job registrado y empezará a trabajar</td></tr><tr><td>102</td><td>El login fue exitóso y la información está siendo sincronizada</td></tr><tr><td>200</td><td>Los datos han sido procesados exitosamente</td></tr><tr><td>201</td><td>Los datos han sido procesados exitosamente, se continuará con la descarga</td></tr><tr><td>202</td><td>No se encontraron transacciones</td></tr></tbody></table>'
				]
			},
			{
				title: "9. Consultar Transacciones",
				body: [
					'<p>Una vez que se registraron las credenciales, en caso de tener en el estatus un código 200, 201 o 202 podemos consultar las transacciones sincronizadas. Para esto ejecutamos el siguiente comando:</p><p><b>INPUT:</b></p>',
					["token",$scope.token,"token: "],
					["id_site",$scope.id_site,"id_site: "],
					'<p><b>OUTPUT:</b> transactions_count</p><div class="Code Console">curl \'https://sync.paybook.com/v1/transactions/count?token=your_token&id_site=some_id_site\'</div><p>Y esto nos regresará una respuesta con el número de transacciones sincronizadas:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":{"count":121}}</div><p>Si queremos consultar las transacciones directamente ejecutamos:</p><p><b>INPUT:</b></p>',
					["token",$scope.token,"token: "],
					["id_site",$scope.id_site,"id_site: "],
					'<p><b>OUTPUT:</b> transactions</p><div class="Code Console">curl \'https://sync.paybook.com/v1/transactions?token=your_token&id_site=some_id_site\'</div><p>Y nos regresará un arreglo de transacciones como la siguiente:</p><div class="Code Console">{"id_transaction":"573b8922234283ad738b45da","id_user":"573a91a90b212a0e3e8b4596","id_external":null,"id_site":"56cf5728784806f72b8b456f","id_site_organization":"56cf4ff5784806152c8b4568","id_site_organization_type":"56cf4f5b784806cf028b4569","id_account":"573b8921234283ad738b4567","id_account_type":"546d4904df527d1844a2e18d","is_disable":0,"description":"CREACIONES DE TECNOLOGIA AVANZADA DE MEXICO SA DE CV","amount":6834.93,"dt_transaction":1461960603,"dt_refresh":1463519574}</div>'
				]
			}
		];
	})
	/*
	██████╗ ███████╗███████╗ ██████╗ ██╗   ██╗██████╗  ██████╗███████╗███████╗
	██╔══██╗██╔════╝██╔════╝██╔═══██╗██║   ██║██╔══██╗██╔════╝██╔════╝██╔════╝
	██████╔╝█████╗  ███████╗██║   ██║██║   ██║██████╔╝██║     █████╗  ███████╗
	██╔══██╗██╔══╝  ╚════██║██║   ██║██║   ██║██╔══██╗██║     ██╔══╝  ╚════██║
	██║  ██║███████╗███████║╚██████╔╝╚██████╔╝██║  ██║╚██████╗███████╗███████║
	╚═╝  ╚═╝╚══════╝╚══════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝ ╚═════╝╚══════╝╚══════╝
	*/
	.controller('ResourcesController',function($scope,$routeParams){
		$scope.actualTopic=0;
		$(document).off();
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
		$scope.init=function(){
			var languageCode=window.location.pathname.slice(1,3);
			if(languageCode=="en"){
				$scope.language={
					code: "/en",
					name: "English"
				};
				$scope.info=$scope.infoEn;
			}
			else{
				if(languageCode=="es"){
					$scope.language={
						code: "/es",
						name: "Español"
					};
					$scope.info=$scope.infoEs;
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
		$scope.scrollToTopic=function(topic){
			$('html, body').animate({
	        	scrollTop: $("#Topic"+topic).offset().top+1
		    }, 1000);
		};
		$scope.showSmallSubviews=function(event){
			event.stopPropagation();
			$(".Subnavigation ul").addClass("SubnaviationShowUl");
		};
		/*_______ .__   __. 
		|   ____||  \ |  |
		|  |__   |   \|  |
		|   __|  |  . `  |
		|  |____ |  |\   |
		|_______||__| \__|*/
		$scope.infoEn=[
			{
				title: "Introduction",
				body: "<p>All libraries for Paybook are listed below. If you've built anything that you'd be willing to share, please let us know and we'll link to it here (and send you a t-shirt)!</p>",
			},
			{
				title: "Official libraries",
				body: '<a href="https://github.com/Paybook/Lite.JS" class="ResourcesCard"><img src="../img/node.svg"><div><h3>Node</h3><p>paybook-node</p></div><div class="fa fa-chevron-right"></div></a><a href="https://github.com/Paybook/Lite.GO" class="ResourcesCard"><img src="../img/go.svg"><div><h3>Go</h3><p>paybook-go</p></div><div class="fa fa-chevron-right"></div></a><a href="https://github.com/Paybook/Lite.Py" class="ResourcesCard"><img src="../img/python.svg"><div><h3>Python</h3><p>paybook-python</p></div><div class="fa fa-chevron-right"></div></a>',
			},
			{
				title: "Community libraries",
				body: '<a href="https://github.com/Paybook/Lite.GO" class="ResourcesCard"><img src="../img/ruby.svg"><div><h3>Ruby</h3><p>paybook-ruby</p></div><div class="fa fa-chevron-right"></div></a><a href="https://github.com/Paybook/Lite.GO" class="ResourcesCard"><img src="../img/java.svg"><div><h3>Java</h3><p>paybook-java</p></div><div class="fa fa-chevron-right"></div></a><a href="https://github.com/Paybook/Lite.GO" class="ResourcesCard"><img src="../img/php.svg"><div><h3>PHP</h3><p>paybook-php</p></div><div class="fa fa-chevron-right"></div></a><a href="https://github.com/Paybook/Lite.GO" class="ResourcesCard"><img src="../img/swift.svg"><div><h3>Swift</h3><p>paybook-swift</p></div><div class="fa fa-chevron-right"></div></a>',
			},
			{
				title: "Community Resources",
				body: "<p>Ember component, by @jasonkriss</p><p>Example Angular/Ionic app, by @pbernasconi</p><p>Angular component, by @csbarnes</p>",
			},
		];
		/*_______    _______.
		|   ____|   /       |
		|  |__     |   (----`
		|   __|     \   \    
		|  |____.----)   |   
		|_______|_______/ */
		$scope.infoEs=[
			{
				title: "Introduction",
				body: "<p>All libraries for Paybook are listed below. If you've built anything that you'd be willing to share, please let us know and we'll link to it here (and send you a t-shirt)!</p>",
			},
			{
				title: "Official libraries",
				body: '<a href="https://github.com/Paybook/Lite.JS" class="ResourcesCard"><img src="../img/node.svg"><div><h3>Node</h3><p>paybook-node</p></div><div class="fa fa-chevron-right"></div></a><a href="https://github.com/Paybook/Lite.GO" class="ResourcesCard"><img src="../img/go.svg"><div><h3>Go</h3><p>paybook-go</p></div><div class="fa fa-chevron-right"></div></a><a href="https://github.com/Paybook/Lite.Py" class="ResourcesCard"><img src="../img/python.svg"><div><h3>Python</h3><p>paybook-python</p></div><div class="fa fa-chevron-right"></div></a>',
			},
			{
				title: "Community libraries",
				body: '<a href="https://github.com/Paybook/Lite.GO" class="ResourcesCard"><img src="../img/ruby.svg"><div><h3>Ruby</h3><p>paybook-ruby</p></div><div class="fa fa-chevron-right"></div></a><a href="https://github.com/Paybook/Lite.GO" class="ResourcesCard"><img src="../img/java.svg"><div><h3>Java</h3><p>paybook-java</p></div><div class="fa fa-chevron-right"></div></a><a href="https://github.com/Paybook/Lite.GO" class="ResourcesCard"><img src="../img/php.svg"><div><h3>PHP</h3><p>paybook-php</p></div><div class="fa fa-chevron-right"></div></a><a href="https://github.com/Paybook/Lite.GO" class="ResourcesCard"><img src="../img/swift.svg"><div><h3>Swift</h3><p>paybook-swift</p></div><div class="fa fa-chevron-right"></div></a>',
			},
			{
				title: "Community Resources",
				body: "<p>Ember component, by @jasonkriss</p><p>Example Angular/Ionic app, by @pbernasconi</p><p>Angular component, by @csbarnes</p>",
			},
		];
	})
	/*
	███████╗███████╗ ██████╗██╗   ██╗██████╗ ██╗████████╗██╗   ██╗
	██╔════╝██╔════╝██╔════╝██║   ██║██╔══██╗██║╚══██╔══╝╚██╗ ██╔╝
	███████╗█████╗  ██║     ██║   ██║██████╔╝██║   ██║    ╚████╔╝
	╚════██║██╔══╝  ██║     ██║   ██║██╔══██╗██║   ██║     ╚██╔╝
	███████║███████╗╚██████╗╚██████╔╝██║  ██║██║   ██║      ██║
	╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝   ╚═╝      ╚═╝
	*/
	.controller('SecurityController',function($scope,$routeParams){
		$(document).off();
		$scope.init=function(){
			var languageCode=window.location.pathname.slice(1,3);
			if(languageCode=="en"){
				$scope.language={
					code: "/en",
					name: "English"
				};
				$scope.info=$scope.infoEn;
			}
			else{
				if(languageCode=="es"){
					$scope.language={
						code: "/es",
						name: "Español"
					};
					$scope.info=$scope.infoEs;
				}
			}
		};
		/*_______ .__   __. 
		|   ____||  \ |  |
		|  |__   |   \|  |
		|   __|  |  . `  |
		|  |____ |  |\   |
		|_______||__| \__|*/
		$scope.infoEn={
			subtitle: "Security is essential to everything we do. If you have specific questions or concerns, contact us at security@paybook.com",
			title: "Security",
		};
		/*_______    _______.
		|   ____|   /       |
		|  |__     |   (----`
		|   __|     \   \    
		|  |____.----)   |   
		|_______|_______/ */
		$scope.infoEs={
			subtitle: "Security is essential to everything we do. If you have specific questions or concerns, contact us at security@paybook.com",
			title: "Seguridad",
		};
	})
	/*
	███████╗ ██████╗ ██╗     ██╗   ██╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
	██╔════╝██╔═══██╗██║     ██║   ██║╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
	███████╗██║   ██║██║     ██║   ██║   ██║   ██║██║   ██║██╔██╗ ██║███████╗
	╚════██║██║   ██║██║     ██║   ██║   ██║   ██║██║   ██║██║╚██╗██║╚════██║
	███████║╚██████╔╝███████╗╚██████╔╝   ██║   ██║╚██████╔╝██║ ╚████║███████║
	╚══════╝ ╚═════╝ ╚══════╝ ╚═════╝    ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
	*/
	.controller('SolutionsController',function($scope,$routeParams){
		$(document).off();
		$scope.init=function(){
			var languageCode=window.location.pathname.slice(1,3);
			if(languageCode=="en"){
				$scope.language={
					code: "/en",
					name: "English"
				};
				$scope.info=$scope.infoEn;
			}
			else{
				if(languageCode=="es"){
					$scope.language={
						code: "/es",
						name: "Español"
					};
					$scope.info=$scope.infoEs;
				}
			}
		};
		/*_______ .__   __. 
		|   ____||  \ |  |
		|  |__   |   \|  |
		|   __|  |  . `  |
		|  |____ |  |\   |
		|_______||__| \__|*/
		$scope.infoEn={
			subtitle: "Mitigate risk, reduce fraud, and boost conversions with Paybook",
			title: "Solutions",
		};
		/*_______    _______.
		|   ____|   /       |
		|  |__     |   (----`
		|   __|     \   \    
		|  |____.----)   |   
		|_______|_______/ */
		$scope.infoEs={
			subtitle: "Mitigate risk, reduce fraud, and boost conversions with Paybook",
			title: "Soluciones",
		};
	})
	/*
	███████╗████████╗ █████╗ ████████╗██╗   ██╗███████╗
	██╔════╝╚══██╔══╝██╔══██╗╚══██╔══╝██║   ██║██╔════╝
	███████╗   ██║   ███████║   ██║   ██║   ██║███████╗
	╚════██║   ██║   ██╔══██║   ██║   ██║   ██║╚════██║
	███████║   ██║   ██║  ██║   ██║   ╚██████╔╝███████║
	╚══════╝   ╚═╝   ╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚══════╝
	*/
	.controller('StatusController',function($scope,$routeParams){
		$(document).off();
		$scope.init=function(){
			var languageCode=window.location.pathname.slice(1,3);
			if(languageCode=="en"){
				$scope.language={
					code: "/en",
					name: "English"
				};
				$scope.info=$scope.infoEn;
			}
			else{
				if(languageCode=="es"){
					$scope.language={
						code: "/es",
						name: "Español"
					};
					$scope.info=$scope.infoEs;
				}
			}
		};
		/*_______ .__   __. 
		|   ____||  \ |  |
		|  |__   |   \|  |
		|   __|  |  . `  |
		|  |____ |  |\   |
		|_______||__| \__|*/
		$scope.infoEn={
			title: "Status",
		};
		/*_______    _______.
		|   ____|   /       |
		|  |__     |   (----`
		|   __|     \   \    
		|  |____.----)   |   
		|_______|_______/ */
		$scope.infoEs={
			title: "Status",
		};
	})
	/*
	██████╗  ██████╗ ██╗   ██╗████████╗███████╗███████╗
	██╔══██╗██╔═══██╗██║   ██║╚══██╔══╝██╔════╝██╔════╝
	██████╔╝██║   ██║██║   ██║   ██║   █████╗  ███████╗
	██╔══██╗██║   ██║██║   ██║   ██║   ██╔══╝  ╚════██║
	██║  ██║╚██████╔╝╚██████╔╝   ██║   ███████╗███████║
	╚═╝  ╚═╝ ╚═════╝  ╚═════╝    ╚═╝   ╚══════╝╚══════╝*/
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
		.when('/en', {
			templateUrl: 'pages/home.html',
			controller: 'HomeController'
		})
		.when('/en/', {
			templateUrl: 'pages/home.html',
			controller: 'HomeController'
		})
		.when('/es', {
			templateUrl: 'pages/home.html',
			controller: 'HomeController'
		})
		.when('/es/', {
			templateUrl: 'pages/home.html',
			controller: 'HomeController'
		})
		.when('/en/blog', {
			templateUrl: 'pages/blog.html',
			controller: 'BlogController'
		})
		.when('/en/blog/', {
			templateUrl: 'pages/blog.html',
			controller: 'BlogController'
		})
		.when('/es/blog', {
			templateUrl: 'pages/blog.html',
			controller: 'BlogController'
		})
		.when('/es/blog/', {
			templateUrl: 'pages/blog.html',
			controller: 'BlogController'
		})
		.when('/en/company', {
			templateUrl: 'pages/company.html',
			controller: 'CompanyController'
		})
		.when('/en/company/', {
			templateUrl: 'pages/company.html',
			controller: 'CompanyController'
		})
		.when('/es/company', {
			templateUrl: 'pages/company.html',
			controller: 'CompanyController'
		})
		.when('/es/company/', {
			templateUrl: 'pages/company.html',
			controller: 'CompanyController'
		})
		.when('/en/contact', {
			templateUrl: 'pages/contact.html',
			controller: 'ContactController'
		})
		.when('/en/contact/', {
			templateUrl: 'pages/contact.html',
			controller: 'ContactController'
		})
		.when('/es/contact', {
			templateUrl: 'pages/contact.html',
			controller: 'ContactController'
		})
		.when('/es/contact/', {
			templateUrl: 'pages/contact.html',
			controller: 'ContactController'
		})
		.when('/en/docs', {
			templateUrl: 'pages/docs.html',
			controller: 'DocsController'
		})
		.when('/en/docs/', {
			templateUrl: 'pages/docs.html',
			controller: 'DocsController'
		})
		.when('/es/docs', {
			templateUrl: 'pages/docs.html',
			controller: 'DocsController'
		})
		.when('/es/docs/', {
			templateUrl: 'pages/docs.html',
			controller: 'DocsController'
		})
		.when('/en/docs/documentation', {
			templateUrl: 'pages/documentation.html',
			controller: 'DocumentationController'
		})
		.when('/en/docs/documentation/', {
			templateUrl: 'pages/documentation.html',
			controller: 'DocumentationController'
		})
		.when('/es/docs/documentation', {
			templateUrl: 'pages/documentation.html',
			controller: 'DocumentationController'
		})
		.when('/es/docs/documentation/', {
			templateUrl: 'pages/documentation.html',
			controller: 'DocumentationController'
		})
		.when('/en/docs/faq', {
			templateUrl: 'pages/faq.html',
			controller: 'FAQController'
		})
		.when('/en/docs/faq/', {
			templateUrl: 'pages/faq.html',
			controller: 'FAQController'
		})
		.when('/es/docs/faq', {
			templateUrl: 'pages/faq.html',
			controller: 'FAQController'
		})
		.when('/es/docs/faq/', {
			templateUrl: 'pages/faq.html',
			controller: 'FAQController'
		})
		.when('/en/docs/quickstart', {
			templateUrl: 'pages/quickstart.html',
			controller: 'QuickstartController'
		})
		.when('/en/docs/quickstart/', {
			templateUrl: 'pages/quickstart.html',
			controller: 'QuickstartController'
		})
		.when('/es/docs/quickstart', {
			templateUrl: 'pages/quickstart.html',
			controller: 'QuickstartController'
		})
		.when('/es/docs/quickstart/', {
			templateUrl: 'pages/quickstart.html',
			controller: 'QuickstartController'
		})
		.when('/en/docs/resources', {
			templateUrl: 'pages/resources.html',
			controller: 'ResourcesController'
		})
		.when('/en/docs/resources/', {
			templateUrl: 'pages/resources.html',
			controller: 'ResourcesController'
		})
		.when('/es/docs/resources', {
			templateUrl: 'pages/resources.html',
			controller: 'ResourcesController'
		})
		.when('/es/docs/resources/', {
			templateUrl: 'pages/resources.html',
			controller: 'ResourcesController'
		})
		.when('/en/fin', {
			templateUrl: 'pages/fin.html',
			controller: 'FinController'
		})
		.when('/en/fin/', {
			templateUrl: 'pages/fin.html',
			controller: 'FinController'
		})
		.when('/es/fin', {
			templateUrl: 'pages/fin.html',
			controller: 'FinController'
		})
		.when('/es/fin/', {
			templateUrl: 'pages/fin.html',
			controller: 'FinController'
		})
		.when('/en/legal', {
			templateUrl: 'pages/legal.html',
			controller: 'LegalController'
		})
		.when('/en/legal/', {
			templateUrl: 'pages/legal.html',
			controller: 'LegalController'
		})
		.when('/es/legal', {
			templateUrl: 'pages/legal.html',
			controller: 'LegalController'
		})
		.when('/es/legal/', {
			templateUrl: 'pages/legal.html',
			controller: 'LegalController'
		})
		.when('/en/products', {
			templateUrl: 'pages/products.html',
			controller: 'ProductsController'
		})
		.when('/en/products/', {
			templateUrl: 'pages/products.html',
			controller: 'ProductsController'
		})
		.when('/es/products', {
			templateUrl: 'pages/products.html',
			controller: 'ProductsController'
		})
		.when('/es/products/', {
			templateUrl: 'pages/products.html',
			controller: 'ProductsController'
		})
		.when('/en/security', {
			templateUrl: 'pages/security.html',
			controller: 'SecurityController'
		})
		.when('/en/security/', {
			templateUrl: 'pages/security.html',
			controller: 'SecurityController'
		})
		.when('/es/security', {
			templateUrl: 'pages/security.html',
			controller: 'SecurityController'
		})
		.when('/es/security/', {
			templateUrl: 'pages/security.html',
			controller: 'SecurityController'
		})
		.when('/en/solutions', {
			templateUrl: 'pages/solutions.html',
			controller: 'SolutionsController'
		})
		.when('/en/solutions/', {
			templateUrl: 'pages/solutions.html',
			controller: 'SolutionsController'
		})
		.when('/es/solutions', {
			templateUrl: 'pages/solutions.html',
			controller: 'SolutionsController'
		})
		.when('/es/solutions/', {
			templateUrl: 'pages/solutions.html',
			controller: 'SolutionsController'
		})
		.when('/en/status', {
			templateUrl: 'pages/status.html',
			controller: 'StatusController'
		})
		.when('/en/status/', {
			templateUrl: 'pages/status.html',
			controller: 'StatusController'
		})
		.when('/es/status', {
			templateUrl: 'pages/status.html',
			controller: 'StatusController'
		})
		.when('/es/status/', {
			templateUrl: 'pages/status.html',
			controller: 'StatusController'
		})
		// configure html5 to get links working on jsfiddle
		$locationProvider.html5Mode(true);
	});
})(window.angular);