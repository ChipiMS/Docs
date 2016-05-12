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
			body: '<p>Sync API is architected around REST, using standard HTTP verbs to communicate and HTTP response codes to indicate status and errors. All responses come in standard JSON. It is served over HTTPS to ensure data privacy; HTTP is not supported.</p><div class="Code Console">https://sync.paybook.com/v1/</div>',
			subtopics: []
		},
		{
			title: "Request",
			body: '',
			subtopics: [
				{	
					title: "Parameters",
					body: '<p>Parameters can be send on via the query string or encoded in the payload body of the request. They are not enforce to use on a particular way of sending it, but if the parameter is absent it can trigger a status 400 response. When sending parameters via the payload body the request content type must be set to the following:</p><p><b>application/json :</b></p><p>when sending a JSON structure, the JSON key must match the parameter name in order to make them match, example: POST /some-path HTTP/1.1</p><div class="Code Console">Content-Type: application/json [ "token" : "56280b1578480664048b456b", "id_user" : "56280b2178480661048b4569" ]</div><p><b>multipart/form-data or application/x-www-form-urlencoded :</b></p><p>when sending form data</p><div class="Code Console">POST /some-path HTTP/1.1 Content-Type: application/x-www-form-urlencoded token=5620b1578480664048b456b&id_user=56280b2178480661048b4569</div><div class="Code Console">https://sync.paybook.com/v1/</div>',
				},
				{	
					title: "Authentication",
					body: '<p>Some resources can be authenticated in two ways:</p><ul><li>api_key and id_user : Developer key and User ID</li><li>token : Session token</li></ul><p>On more specific developer endpoints only the api_key will be required.</p><div class="Code Console">https://sync.paybook.com/v1/</div>',
				}
			]
		},
		{
			title: "Response",
			body: '<p>Almost every response body returns a JSON structure (unless specified). There are four main keys:</p><ul><li><b>code</b>: This is the same as the HTTP Response code. Expect any of the following codes:<ul><li>200: <b>Success</b> (request finished correctly)</li><li>400: <b>Bad Request</b> Invalid parameter (missing a parameter or invalid value for a parameter)</li><li>401: <b>Unauthorized</b> (invalid API Key or Session Token)</li><li>402: <b>Payment Required</b> (the API Key has a pending payment)</li><li>403: <b>Forbidden</b> (the authorization parameters are invalid for that specific endpoint)</li><li>404: <b>Not Found</b> (end point was not found)</li><li>500: <b>Internal Server Error</b> (server error)</li><li>503: <b>Service Unavailable</b> (schedule maintenance)</li></ul></li><li><b>status</b>: Boolean value that indicates if the request finished correctly or not:<ul><li>true : if response code is 200 and the request finish correctly</li><li>false :<ul><li>if response code is 400, 401, 402, 403, 404, 500, 503 expect this value to be false</li><li>if response code is 200, and the current operation didn\'t finish correctly, Example: trying to delete an invalid id of a given resource</li></ul></li></ul></li><li><b>message</b>: String error message for that specific request. Expect this to be null if no error was thrown.</li><li><b>response</b>: This is the response of the request, the default value is null, but it can also be an array or scalar variable depending on the end point.</li></ul><div class="Code Console">https://sync.paybook.com/v1/</div>',
			subtopics: []
		},
		{
			title: "Quickstart",
			body: '<p>The first thing you will need is to manager your users, you can do this by interacting with the /users endpoints</p><p>Create user</p><div class="Code Console">/v1/users?_method=post&api_key=[api_key]&name=Test</div><p>View users</p><div class="Code Console">/v1/users?api_key=[api_key]</div><p>Delete a user</p><div class="Code Console">/v1/users/[id_user]?api_key=[api_key]</div><p>It is a best practice to create session for your users with the /sessions endpoints (this is recommended in order to not make your api_key public)</p><p>Create session</p><div class="Code Console">/v1/session?_method=post&api_key=[api_key]&id_user=[id_user]</div><p>Check if a session is valid</p><div class="Code Console">/v1/session/[token]/verify</div><p>Delete a session</p><div class="Code Console">/v1/session/[token]?_method=delete</div><p>Next you will need to get or display the site catalogue with the /catalogues endpoints (accept a user session (token) or the api_key)</p><p>View sites group by organizations</p><div class="Code Console">/v1/catalogues/organizations/sites?api_key=[api_key]</div><p>View sites (ungrouped)</p><div class="Code Console">/v1/catalogues/sites?token=[token]</div><p>Next you will need to manage the user credentials with the /credentials endpoints (accept a user session (token) or the api_key)</p><p>Create credentials</p><div class="Code Console">/v1/credentials?_method=post&api_key=[api_key]&id_user=[id_user]&id_site=[id_site]&credentials%5Busername%5D=[value]&credentials%5Bpassword%5D=[value]</div><p>Note: you will need to reference the "credentials" field for each site in order to create the credentials array in the example</p><p>View credentials</p><div class="Code Console">/v1/credentials?api_key=[api_key]&id_user=[id_user]</div><p>Delete credentials</p><div class="Code Console">/v1/credentials/[id_credential]?api_key=[api_key]&id_user=[id_user]</div><p>Note: this will remove all data like transactions, attachments and accounts</p><p>Check the socket to know the current job status</p><ul><li>1xx - Job Information<ul><li><b>100 - Register</b> API register a new job (via a REST request)</li><li><b>101 - Starting</b> Sync got job information to start working</li><li><b>102 - Running</b> Sync is running (login successful)</li></ul></li><li>2xx - Success<ul><li><b>200 - Finish</b> Data was processed correctly</li><li><b>201 - Pending</b> Data was processed correctly, pending data will continue to download in the background</li><li><b>202 - NoTransactions</b> Job finish correctly, but there where no transactions found</li></ul></li><li>4xx - User Errors<ul><li><b>401 - Unauthorized</b> Invalid credentials (user and password are not valid)</li><li><b>405 - Locked</b> Account is locked</li><li><b>406 - Conflict</b> User is already logged</li><li><b>410 - Waiting</b> Waiting for two-fa</li><li><b>411 - TwofaTimeout</b> Timeout for user input on two-fa</li></ul></li><li>5xx - System Errors<ul><li><b>500 - Error</b> Bank requires attention (Sync error)</li><li><b>501 - Unavailable</b> Bank temporarily unavailable (timeout)</li><li><b>504 - ScriptTimeout</b> Sync timeout</li><li><b>505 - ScriptNotFound</b> Script not found</li></ul></li></ul><p>Retrieve credentials generated data with the /transactions, /accounts and /attachments endpoints</p><p>View accounts</p><div class="Code Console">/v1/accounts?api_key=[api_key]&id_user=[id_user]</div><p>View attachments</p><div class="Code Console">/v1/attachments?api_key=[api_key]&id_user=[id_user]</div><p>Count attachments</p><div class="Code Console">/v1/attachments/count?api_key=[api_key]&id_user=[id_user]</div><p>Download an attachment</p><div class="Code Console">/v1/attachments/[id_attachment]?api_key=[api_key]&id_user=[id_user]</div><p>Get extracted data from attachment</p><div class="Code Console">/v1/attachments/[id_attachment]/extra?api_key=[api_key]&id_user=[id_user]</div><p>View transactions</p><div class="Code Console">/v1/transactions/[id_transaction]?api_key=[api_key]&id_user=[id_user]</div><p>Count transactions</p><div class="Code Console">/v1/transactions/[id_transaction]/count?api_key=[api_key]&id_user=[id_user]</div><div class="Code Console">https://sync.paybook.com/v1/</div>',
			subtopics: []
		},
		{
			title: "Accounts",
			body: '',
			subtopics: [
				{	
					title: "Request accounts for a specific user",
					body: '<div class="Code Console GET">https://sync.paybook.com/v1/</div><p><b>Parámetro</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_account</code> (opcional)</td><td>String</td><td>Account ID.</td></tr><tr><td><code>id_credential</code> (opcional)</td><td>String</td><td>Credentials ID.</td></tr><tr><td><code>id_site</code> (opcional)</td><td>String</td><td>Site ID.</td></tr><tr><td><code>id_site_organization</code> (opcional)</td><td>String</td><td>Site Organization ID.</td></tr><tr><td><code>id_site_organization_type</code> (opcional)</td><td>String</td><td>Site Organization Type ID.</td></tr><tr><td><code>fields</code> (opcional)</td><td>String</td><td>Select fields to be returned.</td></tr><tr><td><code>limit</code> (opcional)</td><td>Number</td><td>Limit the number of rows to be returned.</td></tr><tr><td><code>skip</code> (opcional)</td><td>Number</td><td>Skip rows to be returned.</td></tr><tr><td><code>order</code> (opcional)</td><td>String</td><td>Order the rows to be returned.</td></tr><tr><td><code>api_key</code></td><td>String</td><td>Developer key.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>token</code></td><td>String</td><td>Session Token.</td></tr></tbody></table><p><b>Success 200</b></p><table><thead><tr><th>Campo</th><th>Tipo</th><th>Descripción</th></tr></thead><tbody><tr><td><code>id_account</code></td><td>String</td><td>Account ID.</td></tr><tr><td><code>id_user</code></td><td>String</td><td>User ID.</td></tr><tr><td><code>id_external</code></td><td>String</td><td>External ID.</td></tr><tr><td><code>id_credential</code></td><td>String</td><td>Credentials ID.</td></tr><tr><td><code>id_site</code></td><td>String</td><td>Site ID.</td></tr><tr><td><code>id_site_organization</code></td><td>String</td><td>Site Organization ID.</td></tr><tr><td><code>name</code></td><td>String</td><td>Account name.</td></tr><tr><td><code>number</code></td><td>Number</td><td>Account number.</td></tr><tr><td><code>balance</code></td><td>Number</td><td>Account balance.</td></tr><tr><td><code>site</code></td><td>Collection</td><td>[id_site: Site ID, name: Site name, avatar: Site avatar, cover: Site cover, small_cover: Site small cover].</td></tr><tr><td><code>dt_refresh</code></td><td>Timestamp</td><td>Date when account was last updated</td></tr></tbody></table><p><b>Success-Response:</b></p><div class="Code JS"><div>HTTP/<span class="LightBlue">1.1 200</span> OK</div><div>[</div><div class="Identation"><div> id_account: <span class="Green">"3406d3750b215b9a7f8b4523"</span>,</div><div>id_user: <span class="Green">"15f98da7784606ef028b4598"</span>,</div><div>id_external: <span class="Green">"37f98da4584806ef028b4567"</span>,</div><div>id_credential: <span class="Green">"4806d33c0b234af8028b478b"</span>,</div><div>id_site: <span class="Green">"98cf5728784839f72b8b449f"</span>,</div><div>id_site_organization: <span class="Green">"29cf4ff5784806152c8b4548"</span>,</div><div>name: <span class="Green">"My Bank Account"</span>,</div><div>number: <span class="Yellow">null</span>,</div><div>balance: <span class="LightBlue">1200</span>,</div><div>site: [</div><div class="Identation"><div>id_site: <span class="Green">"12cf5728784883f72b8b495f"</span>,</div><div>name: <span class="Green">"The Bank"</span>,</div><div>avatar: <span class="Green">"/images/8574c68f0b212a194a8c1819/avatar"</span>,</div><div>cover: <span class="Green">"/images/5944c68f0b212a194a8c3949/cover"</span>,</div><div>small_cover: <span class="Green">"/images/59454c68f0b212a194a8c5719/small_cover"</span></div></div><div>],</div><div>dt_refresh: <span class="LightBlue">1460816581</span></div></div><div>]</div></div>',
				}
			]
		},
		{
			title: "",
			body: '<p></p>',
			subtopics: [
				{	
					title: "",
					body: '<p></p>',
				}
			]
		},
		{
			title: "",
			body: '<p></p>',
			subtopics: [
				{	
					title: "",
					body: '<p></p>',
				}
			]
		},
		{
			title: "",
			body: '<p></p>',
			subtopics: [
				{	
					title: "",
					body: '<p></p>',
				}
			]
		},
		{
			title: "",
			body: '<p></p>',
			subtopics: [
				{	
					title: "",
					body: '<p></p>',
				}
			]
		},
		{
			title: "",
			body: '<p></p>',
			subtopics: [
				{	
					title: "",
					body: '<p></p>',
				}
			]
		},
		{
			title: "",
			body: '<p></p>',
			subtopics: [
				{	
					title: "",
					body: '<p></p>',
				}
			]
		},
		{
			title: "",
			body: '<p></p>',
			subtopics: [
				{	
					title: "",
					body: '<p></p>',
				}
			]
		},
		{
			title: "",
			body: '<p></p>',
			subtopics: [
				{	
					title: "",
					body: '<p></p>',
				}
			]
		},
		{
			title: "",
			body: '<p></p>',
			subtopics: [
				{	
					title: "",
					body: '<p></p>',
				}
			]
		},
		{
			title: "",
			body: '<p></p>',
			subtopics: [
				{	
					title: "",
					body: '<p></p>',
				}
			]
		},
	];
});