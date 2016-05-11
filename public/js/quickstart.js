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
					body: '<p>Include the following markup (the form and script tags) in your site or web application:</p><div class="Code HTML"><div class="Comment">A hidden input named public_token will be appended to this form once the user has completed the Link flow. Link will then submit the form, sending the public_token to your server.</div><div class="Tag"><span class="Type">form</span><span class="Property"><span class="PropertyName">id</span><span class="PropertyValue">some-id</span></span><span class="Property"><span class="PropertyName">method</span><span class="PropertyValue">POST</span></span><span class="Property"><span class="PropertyName">action</span><span class="PropertyValue">/authenticate</span></span><span class="Content"></span><span class="Type">form</span></div><div class="Comment">To use Link with longtail institutions on Connect, set thedata-longtail attribute to \'true\'. See the Parameter Reference foradditional documentation.</div><div class="Tag"><span class="Type">script</span><span class="Property"><span class="PropertyName">src</span><span class="PropertyValue">https://cdn.plaid.com/link/stable/link-initialize.js</span></span><span class="Property"><span class="PropertyName">data-client-name</span><span class="PropertyValue">Client Name</span></span><span class="Property"><span class="PropertyName">data-form-id</span><span class="PropertyValue">some-id</span></span><span class="Property"><span class="PropertyName">data-key</span><span class="PropertyValue">test-key</span></span><span class="Property"><span class="PropertyName">data-product</span><span class="PropertyValue">auth</span></span><span class="Property"><span class="PropertyName">data-env</span><span class="PropertyValue">tartan</span></span><span class="Content"></span><span class="Type">script</span></div></div><p>See the parameter reference for complete documentation on possible configurations and instructions for enabling longtail institutions on Connect.</p><p>The injected "Link your Bank Account" button has the ID plaid-link-button and can be styled with CSS:</p><div class="Code CSS"><div class="Structure"><div class="Selector">#plaid-link-button</div><div class="Property"><span class="PropertyName">border</span><span class="PropertyValue">10px solid pink</span></div></div></div>',
				},
				{	
					title: "Step 3: Custom integration",
					body: '<p>The custom integration allows you to decide, with a few lines of client-side Javascript, when the module is triggered. You can trigger the "Institution Select" view or trigger a particular institution\'s credentials form. See below:</p><div class="Code HTML"><div class="Tag"><span class="Type">button</span><span class="Property"><span class="PropertyName">id</span><span class="PropertyValue">linkButton</span></span><span class="Content">Open Link - Institution Select</span><span class="Type">button</span></div><div class="Tag"><span class="Type">button</span><span class="Property"><span class="PropertyName">id</span><span class="PropertyValue">bofaButton</span></span><span class="Content">Open Link - Bank of America</span><span class="Type">button</span></div><div class="Tag"><span class="Type">script</span><span class="Property"><span class="PropertyName">src</span><span class="PropertyValue">https://cdn.plaid.com/link/stable/link-initialize.js</span></span><span class="Content"></span><span class="Type">script</span></div><div class="Tag"><span class="Type">script</span><span class="Content"><div class="JS"><div class="Identation"><div><span class="LightBlue">var </span>linkHandler = Plaid.<span class="Yellow">create</span>({</div><div class="Identation"><div>env: "tartan",</div><div>clientName: "Client Name",</div><div>key: "test_key",</div><div>product: "auth",</div><div class="Comment">To use Link with longtail institutions on Connect, set the</div><div class="Comment">\'longtail\' option to true:</div><div class="Comment">longtail: true,</div><div>onLoad: <span class="LightBlue">function</span>() {</div><div class="Identation Comment">The Link module finished loading.</div><div>},</div><div>onSuccess: <span class="LightBlue">function</span>(public_token, metadata) {</div><div class="Identation"><div class="Comment">Send the public_token to your app server here.</div><div class="Comment">The metadata object contains info about the institution the</div><div class="Comment">user selected and the account ID, if selectAccount is enabled.</div></div><div>},</div><div>onExit: <span class="LightBlue">function</span>() {</div><div class="Identation Comment">The user exited the Link flow.</div><div>}</div></div><div>});</div><div class="Comment">Trigger the BofA login view</div><div>document.<span class="Yellow">getElementById</span>("bofaButton").onclick = <span class="LightBlue">function</span>() {</div><div class="Identation">linkHandler.<span class="Yellow">open</span>("bofa");</div><div>};</div><div class="Comment">Trigger the standard institution select view</div><div>document.<span class="Yellow">getElementById</span>("linkButton").onclick = <span class="LightBlue">function</span>() {</div><div class="Identation">linkHandler.<span class="Yellow">open</span>();</div><div>};</div></div></div></span><span class="Type">script</span></div></div><p>See the parameter reference for complete documentation on possible configurations and instructions for enabling longtail institutions on Connect.</p><p>Plaid.create accepts one argument, a configuration Object, and returns an Object with one function, open, and one property, institutions. open accepts either no arguments or an optional institution type. If no argument is provided, the "Institution Select" view is opened. If a valid institution type is provided, the login form for that particular institution is opened. The exposed institutions property is an Array of Objects in the form:</p><div class="Code JS"><div>[{</div><div class="Identation"><div>name: \'Bank of America\',</div><div>type: \'bofa\',</div><div>auth: <span class="Purple">true</span>,</div><div>connect: <span class="Purple">true</span></div></div><div>},</div><div>...]</div></div><p>The institutions property will be populated with all supported institutions for a given product. That is, the list of institutions will be different for auth and connect. Use the institutions property to dynamically generate a list of supported institutions for your Link integration - by doing so, your app will support new institutions and products automatically.</p>',
				},
				{	
					title: "Step 4: Write server-side handler",
					body: '<p>The Link module handles the entire onboarding flow securely and quickly but does not actually retrieve account or transaction data for a user. Instead, the Link module returns a public_token that is safe to expose in the browser.</p><p>This public_token must be exchanged for a Plaid access_token using the /exchange_token API endpoint. To do so, you must add a server side handler. A sample node.js server-side handler is provided below - full application samples can be found in the /examples directory of this repository.</p><p>With the simple integration, the public_token will be appended to the form specified by data-form-id as a hidden input. This form will be automatically submitted once a user has completed onboarding.</p><p>With the custom integration, the callback you specified in Plaid.create will be called with one argument, the public_token. It is your responsibility to send it to your app server.</p><p>In the example above, the form some-id had action="/authenticate". So we\'ll add a /authenticate route to our server side code that expects a POST request with a field named public_token in the request body. We\'ll then use that public_token along with our private client_id and secret to retrieve a Plaid access_token (via the /exchange_token endpoint). This access_token should be saved in a database and used to retrieve account and transaction data. Below is a sample server-side handler using Express and the plaid-node library:</p><div class="Code JS"><div><span class="LightBlue">var</span> express = <span class="Yellow">require</span>("express");</div><div><span class="LightBlue">var</span> plaid = <span class="Yellow">require</span>("plaid");</div><div><span class="LightBlue">var</span> app = <span class="Yellow">express</span>();</div><div><span class="LightBlue">var</span> plaidClient = <span class="LightBlue">new</span> plaid.Client(process.env.PLAID_CLIENT_ID,process.env.PLAID_SECRET,plaid.environments.tartan);</div><div>app.<span class="Yellow">post</span>("/authenticate", <span class="LightBlue">function</span>(req, res) {</div><div class="Identation"><div><span class="LightBlue">var</span> public_token = req.body.public_token;</div><div class="Comment">Exchange a public_token for a Plaid access_token</div><div>plaidClient.<span class="Yellow">exchangeToken</span>(public_token, <span class="LightBlue">function</span>(err, res) {</div><div class="Identation"><div><span class="LightBlue">if</span> (err != <span class="LightBlue">null</span>) {</div><div class="Identation Comment">Handle error!</div><div>} <span class="LightBlue">else</span> {</div><div class="Identation"><div class="Comment">This is your Plaid access token - store somewhere persistent</div><div class="Comment">The access_token can be used to make Plaid API calls to</div><div class="Comment">retrieve accounts and transactions</div><div><span class="LightBlue">var</span> access_token = res.access_token;</div><div>plaidClient.<span class="Yellow">getAuthUser</span>(access_token, <span class="LightBlue">function</span>(err, res) {</div><div class="Identation"><div><span class="LightBlue">if</span> (err != <span class="LightBlue">null</span>) {</div><div class="Identation Comment">Handle error!</div><div>} <span class="LightBlue">else</span> {</div><div class="Identation"><div class="Comment">An array of accounts for this user, containing account</div><div class="Comment">names, balances, and account and routing numbers.</div><div><span class="LightBlue">var</span> accounts = res.accounts;</div><div class="Comment">Return account data</div><div>res.<span class="Yellow">json</span>({accounts: accounts});</div></div><div>}</div></div>});<div></div></div><div>}</div></div><div>});</div></div><div>});</div></div>',
				},
				{	
					title: "Step 5: Test with sandbox credentials",
					body: '<p>The Link module has a sandbox mode that works with the Plaid API sandbox. To enable the sandbox, set data-key or key to test_key (for simple and custom integrations, respectively). This lets you see the flow for each individual institution Plaid supports, including the multi-factor authentication process when applicable.</p><p>For simple integrations:</p><div class="Code HTML"><div class="Comment">A hidden input named public_token will be appended to this form once the user has completed the Link flow. Link will then submit the form, sending the public_token to your server.</div><div class="Tag"><span class="Type">form</span><span class="Property"><span class="PropertyName">id</span><span class="PropertyValue">some-id</span></span><span class="Property"><span class="PropertyName">method</span><span class="PropertyValue">POST</span></span><span class="Property"><span class="PropertyName">action</span><span class="PropertyValue">/authenticate</span></span><span class="Content"></span><span class="Type">form</span></div><div class="Tag"><span class="Type">script</span><span class="Property"><span class="PropertyName">src</span><span class="PropertyValue">https://cdn.plaid.com/link/stable/link-initialize.js</span></span><span class="Property"><span class="PropertyName">data-client-name</span><span class="PropertyValue">Client Name</span></span><span class="Property"><span class="PropertyName">data-form-id</span><span class="PropertyValue">some-id</span></span><span class="Property"><span class="PropertyName">data-key</span><span class="PropertyValue">test-key</span></span><span class="Property"><span class="PropertyName">data-product</span><span class="PropertyValue">auth</span></span><span class="Property"><span class="PropertyName">data-env</span><span class="PropertyValue">tartan</span></span><span class="Content"></span><span class="Type">script</span></div></div><p>For custom integrations:</p><div class="Code HTML"><div class="Tag"><span class="Type">button</span><span class="Property"><span class="PropertyName">id</span><span class="PropertyValue">plaidLinkButton</span></span><span class="Content">Open Plaid Link</span><span class="Type">button</span></div><div class="Tag"><span class="Type">script</span><span class="Property"><span class="PropertyName">src</span><span class="PropertyValue">https://cdn.plaid.com/link/stable/link-initialize.js</span></span><span class="Content"></span><span class="Type">script</span></div><div class="Tag"><span class="Type">script</span><span class="Content"><div class="JS"><div><span class="LightBlue">var</span> sandboxHandler = Plaid.<span class="Yellow">create</span>({</div><div class="Identation"><div>env: "tartan",</div><div>clientName: "Client Name",</div><div>key: "test_key",</div><div>product: "auth",</div><div>onSuccess: <span class="LightBlue">function</span>(public_token, metadata) {</div><div class="Identation">console.<span class="Yellow">log</span>(public_token, metadata);</div><div>},</div></div><div>});</div><div>document.<span class="Yellow">getElementById</span>("plaidLinkButton").onclick = <span class="LightBlue">function</span>() {</div><div class="Identation"><div class="Comment">Trigger the "Institution Select" view</div><div>sandboxHandler.<span class="Yellow">open</span>();</div></div><div>};</div></div></span><span class="Type">script</span></div></div><p>If you are having trouble using the module in sandbox mode, check the developer console in your browser for error messages.</p>',
				},
			]
		},
		{
			title: "Updating existing accounts",
			body: '<p>When a user changes their username, password, or MFA credentials with a financial institution or is locked out of their account, they must update their credentials with Plaid as well.</p><p>Link\'s update mode makes this process secure and painless and is available in both the simple and custom integrations. To use update mode, initialize Link with the public_token for the user you wish to update.</p><p>For the simple integration add the data-token attribute as follows:</p><div class="Code HTML"><div class="Comment">A hidden input named public_token will be appended to this form once the user has completed the Link flow. Link will then submit the form, sending the public_token to your server.</div><div class="Tag"><span class="Type">form</span><span class="Property"><span class="PropertyName">id</span><span class="PropertyValue">some-id</span></span><span class="Property"><span class="PropertyName">method</span><span class="PropertyValue">POST</span></span><span class="Property"><span class="PropertyName">action</span><span class="PropertyValue">/authenticate</span></span><span class="Content"></span><span class="Type">form</span></div><div class="Tag"><span class="Type">script</span><span class="Property"><span class="PropertyName">src</span><span class="PropertyValue">https://cdn.plaid.com/link/stable/link-initialize.js</span></span><span class="Property"><span class="PropertyName">data-client-name</span><span class="PropertyValue">Client Name</span></span><span class="Property"><span class="PropertyName">data-form-id</span><span class="PropertyValue">some-id</span></span><span class="Property"><span class="PropertyName">data-key</span><span class="PropertyValue">test-key</span></span><span class="Property"><span class="PropertyName">data-product</span><span class="PropertyValue">auth</span></span><span class="Property"><span class="PropertyName">data-env</span><span class="PropertyValue">tartan</span></span><span class="Property"><span class="PropertyName">data-token</span><span class="PropertyValue">test,chase,connected</span></span><span class="Content"></span><span class="Type">script</span></div></div><p>The custom initializer takes a similarly-named token added to the parameter hash:</p><div class="Code HTML"><div class="Tag"><span class="Type">script</span><span class="Property"><span class="PropertyName">src</span><span class="PropertyValue">https://cdn.plaid.com/link/stable/link-initialize.js</span></span><span class="Content"></span><span class="Type">script</span></div><div class="Tag"><span class="Type">script</span><span class="Content"><div class="JS"><div><span class="LightBlue">var</span> linkHandler = Plaid.<span class="Yellow">create</span>({</div><div class="Identation"><div>env: "tartan",</div><div>clientName: "Client Name",</div><div>key: "test_key",</div><div>product: "auth",</div><div>token: "test,chase,connected",  <span class="Comment"><- token to patch</span></div><div>onLoad: <span class="LightBlue">function</span>() {</div><div class="Identation Comment">The Link module finished loading.</div><div>},</div><div>onSuccess: <span class="LightBlue">function</span>(public_token, metadata) {</div><div class="Identation"><div class="Comment">Send the public_token to your app server here.</div><div class="Comment">The metadata object contains info about the institution the</div><div class="Comment">user selected and the account ID, if selectAccount is enabled.</div></div><div>},</div><div>onExit: <span class="LightBlue">function</span>() {</div><div class="Identation Comment">The user exited the Link flow.</div><div>},</div></div><div>});</div><div class="Comment">Trigger the authentication view</div><div>document.<span class="Yellow">getElementById</span>("linkButton").onclick = <span class="LightBlue">function</span>() {</div><div class="Identation">linkHandler.<span class="Yellow">open</span>();</div><div>};</div></div></span><span class="Type">script</span></div></div><p>Link will jump directly to the login view for the appropriate institution when in update mode. Note that for custom integrations calling Link with an institution will not work as usual:</p><div class="Code JS">linkHandler.<span class="Yellow">open</span>("chase");</div><p>Instead it will function identically to:</p><div class="Code JS">linkHandler.<span class="Yellow">open</span>();</div><p>This is because the user\'s public token is associated with a particular institution and it does not make sense to open another institution\'s authentication.</p>',
			subtopics: [
				{	
					title: "Test update mode with sandbox tokens",
					body: '<p>For update mode a suitable sandbox public token can be generated by inserting the desired institution type into the string test,{institution_type},connected.</p><p>For example:</p><div class="Code JS"><div>test,chase,connected</div><div>test,usaa,connected</div><div>test,wells,connected</div></div>',
				}
			]
		},
		{
			title: "Reference",
			body: '',
			subtopics: [
				{
					title: "/exchange_token Endpoint",
					body: '<p>The /exchange_token endpoint is available in both the tartan (https://tartan.plaid.com) and production (https://api.plaid.com) environments.</p><table><thead><tr><th>METHOD</th><th>ENDPOINT</th><th>REQUIRED PARAMETERS</th><th>OPTIONAL PARAMETERS</th></tr></thead><tbody><tr><td>POST</td><td><code>/exchange_token</code></td><td><code>client_id, secret, public_token</code></td><td><code>account_id</code></td></tr></tbody></table><p>The /exchange_token endpoint has already been integrated into the plaid-node, plaid-go, plaid-ruby, and plaid-python client libraries. Support for plaid-java is coming soon.</p><p>If you are working with a library that does not yet support the /exchange_token endpoint you can simply make a standard HTTP request:</p><div class="Code Console"><div>$ curl -X POST https://tartan.plaid.com/exchange_token \</div><div>>   -d client_id="$plaid_client_id" \</div><div>>   -d secret="$plaid_secret" \</div><div>>   -d public_token="$public_token_from_plaid_link_module"</div></div>',
				},
				{
					title: "Simple integration",
					body: '<p></p>',
				},
				{
					title: "Custom integration",
					body: '<p></p>',
				},
				{
					title: "onSuccess Metadata",
					body: '<p></p>',
				},
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