var Paybook=angular.module('Paybook',["ngSanitize"]);
Paybook.controller("main",function main($scope,$http){
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
	$scope.closeAll=function(){
		$(".Languages").removeClass("LanguagesVisible");
		$(".Libraries").removeClass("LibrariesVisible");
		$(".NavigationMoreList").removeClass("NavigationMoreListVisible");
		$(".NavigationBlocker").css("display","");
		$(".NavigationCenter").removeClass("NavigationCenterSmall");
		$(".Subnavigation ul").removeClass("SubnaviationShowUl");
	};
	$scope.init=function(){
		var languageCode=document.documentElement.lang;
		if(languageCode=="en"){
			$scope.language={
				code: "en",
				name: "English"
			};
			$scope.info=$scope.infoEn;
			$scope.allPages=$scope.allPagesEn;
		}
		else{
			if(languageCode=="es"){
				$scope.language={
					code: "es",
					name: "Español"
				};
				$scope.info=$scope.infoEs;
				$scope.allPages=$scope.allPagesEs;
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
	$scope.navbarShowMore=function(event){
		event.stopPropagation();
		$(".NavigationMoreList").addClass("NavigationMoreListVisible");
	};
	$scope.scrollToTopic=function(topic){
		$('html, body').animate({
        	scrollTop: $("#Topic"+topic).offset().top+1
	    }, 1000);
	};
	$scope.selectLibrary=function(pos){
		$scope.selectedLibrary=$scope.libraries[pos];
		//aquí hago los cambios
	};
	$scope.showLanguages=function(event){
		event.stopPropagation();
		$(".Languages").addClass("LanguagesVisible");
	};
	$scope.showLibraries=function(event){
		event.stopPropagation();
		$(".Libraries").addClass("LibrariesVisible");
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
		Documentation: "Documentation",
		FAQ: "FAQ",
		Fin: "Fin",
		Library: "Server library",
		More: "More",
		Objetive1: "El objetivo de este tutorial es implementar ",
		Objetive2: ". Entender cómo funciona el sistema y las interacciones que se establecen entre tu aplicación y el API.",
		Products: "Products",
		Questions: "Questions or comments?",
		Quickstart: "Quickstart",
		Resources: "Resources",
		Security: "Security",
		Solutions: "Solutions",
		Support: "Contact support",
		Status: "Status",
		TermsAndPrivacy: "Terms and Privacy",
	}
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
				'<p>Lo primero que tienes que hacer para sincronizar una institución por medio de <a target="_blank" href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a> es la gestión de usuarios. La estructura en Sync es la siguiente:</p><img src="img/quickstart1.png"><p>Es decir tú podrás registrar muchos usuarios por medio de tu <b>API_KEY</b> y, a su vez, cada uno de estos usuarios registrará cuentas de las instituciones que desea sincronizar. Al final todas las cuentas sincronizadas de cada una de las instituciones que un usuario dio de alta estarán ligadas a tu <b>API_KEY</b>.</p>'
			]
		},
		{
			title: "Conexión con Sync API",
			body: [
				'<p>En este tutorial implementaremos <a target="_blank" href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a> por medio de la interfaz <a target="_blank" href="https://curl.haxx.se/docs/manpage.html">cURL</a> desde la línea de comandos. La interacción entre tu terminal y el API se muestra a continuación:</p><img src="img/quickstart2.png"><p>En resumen, estaremos consumiendo los enpoints GET/POST/PUT/DELETE de <a target="_blank" href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a> a través de nuestra línea de comandos.</p>'
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
		Documentation: "Documentación",
		FAQ: "FAQ",
		Fin: "Fin",
		Library: "Librería servidor",
		More: "Más",
		Objetive1: "El objetivo de este tutorial es implementar ",
		Objetive2: ". Entender cómo funciona el sistema y las interacciones que se establecen entre tu aplicación y el API.",
		Products: "Productos",
		Questions: "¿Preguntas o comentarios?",
		Quickstart: "Quickstart",
		Resources: "Recursos",
		Security: "Seguridad",
		Solutions: "Soluciones",
		Support: "Contactar a soporte",
		Status: "Status",
		TermsAndPrivacy: "Términos y Privacidad",
	}
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
				'<p>Lo primero que tienes que hacer para sincronizar una institución por medio de <a target="_blank" href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a> es la gestión de usuarios. La estructura en Sync es la siguiente:</p><img src="img/quickstart1.png"><p>Es decir tú podrás registrar muchos usuarios por medio de tu <b>API_KEY</b> y, a su vez, cada uno de estos usuarios registrará cuentas de las instituciones que desea sincronizar. Al final todas las cuentas sincronizadas de cada una de las instituciones que un usuario dio de alta estarán ligadas a tu <b>API_KEY</b>.</p>'
			]
		},
		{
			title: "Conexión con Sync API",
			body: [
				'<p>En este tutorial implementaremos <a target="_blank" href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a> por medio de la interfaz <a target="_blank" href="https://curl.haxx.se/docs/manpage.html">cURL</a> desde la línea de comandos. La interacción entre tu terminal y el API se muestra a continuación:</p><img src="img/quickstart2.png"><p>En resumen, estaremos consumiendo los enpoints GET/POST/PUT/DELETE de <a target="_blank" href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a> a través de nuestra línea de comandos.</p>'
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
});