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
			title: "Accounts",
			body: '',
			blue: '',
			subtopics: [
				{
					title: "Request accounts for a specific user",
					body: '<p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_account</code> (opcional)</td><td>String</td><td>Account ID.</td></tr><tr><td><code>id_credential</code> (opcional)</td><td>String</td><td>Credentials ID.</td></tr><tr><td><code>id_site</code> (opcional)</td><td>String</td><td>Site ID.</td></tr><tr><td><code>id_site_organization</code> (opcional)</td><td>String</td><td>Site Organization ID.</td></tr><tr><td><code>id_site_organization_type</code> (opcional)</td><td>String</td><td>Site Organization Type ID.</td></tr><tr><td><code>fields</code> (opcional)</td><td>String</td><td>Select fields to be returned.</td></tr><tr><td><code>limit</code> (opcional)</td><td>Number</td><td>Limit the number of rows to be returned.</td></tr><tr><td><code>skip</code> (opcional)</td><td>Number</td><td>Skip rows to be returned.</td></tr><tr><td><code>order</code> (opcional)</td><td>String</td><td>Order the rows to be returned.</td></tr><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_account</code></td><td>String</td><td>Account ID.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>id_external</code></td><td>String</td><td>External ID.</td></tr><tr><td><code>id_credential</code></td><td>String</td><td>Credentials ID.</td></tr><tr><td><code>id_site</code></td><td>String</td><td>Site ID.</td></tr><tr><td><code>id_site_organization</code></td><td>String</td><td>Site Organization ID.</td></tr><tr><td><code>name</code></td><td>String</td><td>Account name.</td></tr><tr><td><code>number</code></td><td>Number</td><td>Account number.</td></tr><tr><td><code>balance</code></td><td>Number</td><td>Account balance.</td></tr><tr><td><code>site</code></td><td>Collection</td><td>[id_site: Site ID, name: Site name, avatar: Site avatar, cover: Site cover, small_cover: Site small cover].</td></tr><tr><td><code>dt_refresh</code></td><td>Timestamp</td><td>Date when account was last updated</td></tr></tbody></table>',
					blue: '<p><b>Get</b></p><div class="Code Console GET">https://sync.paybook.com/v1/accounts</div><p><b>Success-Response:</b></p><div class="Code JS"><div>HTTP/<span class="LightBlue">1.1 200</span> OK</div><div>[</div><div class="Identation"><div> id_account: <span class="Green">"3406d3750b215b9a7f8b4523"</span>,</div><div>id_user: <span class="Green">"15f98da7784606ef028b4598"</span>,</div><div>id_external: <span class="Green">"37f98da4584806ef028b4567"</span>,</div><div>id_credential: <span class="Green">"4806d33c0b234af8028b478b"</span>,</div><div>id_site: <span class="Green">"98cf5728784839f72b8b449f"</span>,</div><div>id_site_organization: <span class="Green">"29cf4ff5784806152c8b4548"</span>,</div><div>name: <span class="Green">"My Bank Account"</span>,</div><div>number: <span class="Yellow">null</span>,</div><div>balance: <span class="LightBlue">1200</span>,</div><div>site: [</div><div class="Identation"><div>id_site: <span class="Green">"12cf5728784883f72b8b495f"</span>,</div><div>name: <span class="Green">"The Bank"</span>,</div><div>avatar: <span class="Green">"/images/8574c68f0b212a194a8c1819/avatar"</span>,</div><div>cover: <span class="Green">"/images/5944c68f0b212a194a8c3949/cover"</span>,</div><div>small_cover: <span class="Green">"/images/59454c68f0b212a194a8c5719/small_cover"</span></div></div><div>],</div><div>dt_refresh: <span class="LightBlue">1460816581</span></div></div><div>]</div></div>',
				}
			]
		},
		{
			title: "",
			body: '',
			blue: '',
			subtopics: [
				{	
					title: "",
					body: '',
					blue: '',
				}
			]
		},
		{
			title: "",
			body: '',
			blue: '',
			subtopics: [
				{	
					title: "",
					body: '',
					blue: '',
				}
			]
		},
		{
			title: "",
			body: '',
			blue: '',
			subtopics: [
				{	
					title: "",
					body: '',
					blue: '',
				}
			]
		},
		{
			title: "",
			body: '',
			blue: '',
			subtopics: [
				{	
					title: "",
					body: '',
					blue: '',
				}
			]
		},
		{
			title: "",
			body: '',
			blue: '',
			subtopics: [
				{	
					title: "",
					body: '',
					blue: '',
				}
			]
		},
		{
			title: "",
			body: '',
			blue: '',
			subtopics: [
				{	
					title: "",
					body: '',
					blue: '',
				}
			]
		},
		{
			title: "",
			body: '',
			blue: '',
			subtopics: [
				{	
					title: "",
					body: '',
					blue: '',
				}
			]
		},
		{
			title: "",
			body: '',
			blue: '',
			subtopics: [
				{	
					title: "",
					body: '',
					blue: '',
				}
			]
		}
	];
});