var Paybook=angular.module('Paybook',["ngSanitize"]);
Paybook.controller("main",function main($scope,$http){
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
});