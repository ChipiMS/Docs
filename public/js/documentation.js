var Plaid=angular.module('Plaid',["ngSanitize"]);
Plaid.controller("main",function main($scope,$http){
	$scope.actualTopic=0;
	$scope.actualSubtopic=-1;
	$(document).scroll(function(){
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
	$scope.closeAll=function(){
		$(".NavigationMoreList").removeClass("NavigationMoreListVisible");
		$(".NavigationBlocker").css("display","");
		$(".NavigationCenter").removeClass("NavigationCenterSmall");
		$(".Subnavigation ul").removeClass("SubnaviationShowUl");
	};
	$scope.init=function(){
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
});