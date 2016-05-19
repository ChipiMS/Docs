var Plaid=angular.module('Plaid',["ngSanitize"]);
Plaid.controller("main",function main($scope,$http){
	$scope.actualTopic;
	$scope.actualSubtopic;
	$scope.selectedLibrary={title: "Ruby",img: "ruby.png"};
	$scope.libraries=[
		{title: "Ruby",img: "ruby.png"},
		{title: "PHP",img: "php.png"},
		{title: "Java",img: "java.png"},
		{title: ".NET",img: "dotnet.png"},
		{title: "Node.js",img: "nodejs.png"},
		{title: "Python",img: "python.png"}
	]
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
		$(".Libraries").removeClass("LibrariesVisible");
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
	$scope.selectLibrary=function(pos){
		$scope.selectedLibrary=$scope.libraries[pos];
		//aquí hago los cambios
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
	$scope.showSmallSubviews=function(event){
		event.stopPropagation();
		$(".Subnavigation ul").addClass("SubnaviationShowUl");
	};
	$scope.info=[
		{
			title: "Requerimientos",
			body: ['<ul><li>Manejo básico de linea de comandos</li><li>Tener el comando <a href="https://curl.haxx.se/docs/manpage.html">cURL</a> instalado en linea de comandos</li><li>Un API KEY de <a href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a></li></ul>'],
			subtopics: []
		},
		{
			title: "Gestión de Usuarios",
			body: ['<p>Lo primero que tienes que hacer para sincronizar una institución por medio de Sync API es la gestión de usuarios. La estructura en Sync es la siguiente:</p><img src="../img/quickstart1.png"><p>Es decir tu podrás registrar muchos usuarios por medio de tu <b>API_KEY</b> y, a su vez, cada uno de estos usuarios registrará cuentas de las instituciones que desea sincronizar. Al final todas las cuentas sincronizadas de cada una de las instituciones que un usuario dio de alta estarán ligadas a tu <b>API_KEY</b>.</p>'],
			subtopics: []
		},
		{
			title: "Conexión con Sync API",
			body: ['<p>En este tutorial implementaremos <a href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a> por medio de la interfaz <a href="https://curl.haxx.se/docs/manpage.html">cURL</a> desde la línea de comandos. La interacción entre tu terminal y el API se muestra a continuación:</p><img src="../img/quickstart2.png"><p>En resumen, estaremos consumiendo los enpoints GET/POST/PUT/DELETE de <a href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a> a través de nuestra línea de comandos.</p>'],
			subtopics: []
		},
		{
			title: "Flujo del Tutorial",
			body: ['<p>En este tutorial haremos lo siguiente:</p><ol><li>Crearemos un usuario nuevo que ligaremos a nuestra <b>API_KEY</b></li><li>Consultaremos los usuarios que están ligados a nuestra <b>API_KEY</b></li><li>Iniciaremos sesión con el usuario creado en el paso 1</li><li>Verificaremos la sesión creada en el paso 3.</li></ol><p>A partir de aquí ya tendremos una sesión iniciada (sesión del usuario creada en el paso 1) por lo que las siguientes acciones estarán ligadas a dicho usuario:</p><ol><li>Consultaremos los catálogos de las instituciones que el usuario puede sincronzar con <a href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a>.</li><li>Registraremos las credenciales del usuario en una institución (SAT).</li><li>Revisaremos el estatus de sincronización para las credenciales registradas.</li><li>Consultaremos las transacciones sincronizadas.</li></ol><p>Esperemos lo disfrutes ¡Aquí vamos!</p>'],
			subtopics: []
		},
		{
			title: "1. Creación de Usuario",
			body: ['<p>Crear un usuario por medio de <a href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a> es muy sencillo, para esto únicamente requieres tu <b>API_KEY</b> y un nombre de usuaario para el usuario que deseas crear.</p><p><b>INPUT:</b> api_key y name</p><p><b>OUTPUT:</b> id_user</p><div class="Code Console">curl -X POST -H "Content-type:application/json" -d \'{"api_key":"your_api_key","name":"some_name"}\' https://sync.paybook.com/v1/users</div><p>Con esto se habrá creado un nuevo usuario "name" ligado a tu <b>API_KEY</b>, la respuesta de <a href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a> debe ser la siguiente:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":{"id_user":"573a91a90b212a0e3e8b4596","id_external":null,"name":"curlhugo1","dt_create":1463456169,"dt_modify":null}}</div><p><b>Importante:</b> no olvides remplazar el valor de los parámetros en todos los comandos.</p>'],
			subtopics: []
		},
		{
			title: "2. Consulta de Usuarios",
			body: ['<p>Para verificar los usuarios que están ligados a tu <b>API_KEY</b>, es decir, a tu cuenta de <a href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a>, ejecuta el siguiente comando:</p><p><b>INPUT:</b> api_key </p><p><b>OUTPUT:</b> id_user</p><div class="Code Console">curl -X GET -H "Content-type:application/json" -d \'{"api_key":"your_api_key"}\' http://sync.paybook.com/v1/users</div><p>Para efectos de este tutorial la ejecución de este comando te debe regresar el usuario registrado anteriormente:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":[{"id_user":"573a91a90b212a0e3e8b4596","id_external":null,"name":"curlhugo1","dt_create":1463518052,"dt_modify":null}]}</div>'],
			subtopics: []
		},
		{
			title: "3. Inicio de Sesión",
			body: ['<p>Para poder sincronizar una cuenta de alguna institución lo primero que tenemos que hacer es iniciar sesión con el usuario que deseamos sincronizar. Para esto es necesario tener el id del usuario i.e. id_user y ejecutar:</p><p><b>INPUT:</b> api_key y id_user </p><p><b>OUTPUT:</b> token</p><div class="Code Console">curl -X POST -H "Content-type:application/json" -d \'{"api_key":"your_api_key","id_user":"id_user_value"}\' https://sync.paybook.cm/v1/sessions</div><p>Este comando nos regresará un token e.g. 701c899236ea141d25f63c88d9f09230 como se muestra a continuación:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":{"token":"701c899236ea141d25f63c88d9f09230"}}</div><p><b>Importante:</b> El token tiene un periodo de expiración de 5 minutos después de su creación.</p>'],
			subtopics: []
		},
		{
			title: "4. Verificación de la Sesión",
			body: ['<p>No está demás verificar la validez de la sesión i.e. del token, para esto ejecutar el siguiente comando:</p><p><b>INPUT:</b> token </p><p><b>OUTPUT:</b> code 200 o code 401</p><div class="Code Console">curl \'https://sync.paybook.com/v1/sessions/701c899236ea141d25f63c88d9f09230/verify\'</div><p>Si la sesión es valida nos regresará lo siguiente:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":null}</div><p>Si la sesión ya no es valida tendremos un código 401 <b>Unauthoraized</b></p><div class="Code Console">{"code":401,"status":false,"message":"Unauthorized","response":null}</div>'],
			subtopics: []
		},
		{
			title: "5. Consulta de Catálogos de Instituciones",
			body: ['<p>Una vez que hemos iniciado sesión tenemos que consultar el catálogo de instituciones que <a href="https://www.paybook.com/syncdocs#api-Overview-Overview">Sync API</a> tiene para nosotros de tal manera que podamos elegir la institución que queremos sincronizar para este usuario.</p><p><b>INPUT:</b> token</p><p><b>OUTPUT:</b> catalogues</p><div class="Code Console">curl \'https://sync.paybook.com/v1/catalogues/sites?token=your_token\'</div>'],
			subtopics: []
		},
		{
			title: "6. Sincronizar una Institución",
			body: ['<p>El siguiente paso consiste en seleccionar una institución del catálogo para sincronizarla, para efectos de este tutorial seleccionaremos el SAT, para esto obtenemos el id del sitio del SAT analizando el catálogo, se debe obtener el siguiente valor:</p><div class="Code Console">id_site = \'56cf5728784806f72b8b456f\'</div><p>Una vez que hemos seleccionado la institución hay que dar de alta las credenciales de nuestro usuario en esa institución, en el caso particular del SAT las credenciales deben ser el <b>RFC</b> así como su Clave de Identificación Electrónica Confidencial, o mejor conocida como <b>CIEC</b>:</p><p><b>INPUT:</b> token, id_site, some_rfc y some_ciec</p><p><b>OUTPUT:</b> url_status</p><div class="Code Console">curl -X POST -H "Content-type:application/json" -d \'{"token":"your_token","id_site":"id_site","credentials":{"rfc" : "some_rfc","password" : "some_ciec"}}\' https://sync.paybook.com/v1/credentials</div><p>Si las credenciales fueron registradas corréctamente obtendremos un resultado como el siguiente:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":{"id_credential":"573b88f90b212a033e8b4582","username":"O***********9","ws":"wss:\/\/sync.paybook.com\/v1\/status\/573b88f90b212af83d8b457f","status":"https:\/\/sync.paybook.com\/v1\/jobs\/573b88f90b212af83d8b457f\/status","twofa":"https:\/\/sync.paybook.com\/v1\/jobs\/573b88f90b212af83d8b457f\/twofa"}}</div><p><b>Importante:</b> guardar el valor del campo de <b>status</b> -- es una url -- ya que se utilizará más adelante.</p>'],
			subtopics: []
		},
		{
			title: "7. Verificar creación de Credenciales",
			body: ['<p>Como un paso de verificación podemos revisar las credenciales registradas para un usuario:</p><p><b>INPUT:</b> api_key y id_user </p><p><b>OUTPUT:</b> credentials_retrieved</p><div class="Code Console">curl \'https://sync.paybook.com/v1/credentials?api_key=b7e57daf2b782bee22f05e38a1823c3a&id_user=573a91a90b212a0e3e8b4596\'</div><p>Y obtendremos un resultado parecido:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":[{"id_credential":"573b88f90b212a033e8b4582","id_site":"56cf5728784806f72b8b456f","id_site_organization":"56cf4ff5784806152c8b4568","id_site_organization_type":"56cf4f5b784806cf028b4569","username":"O***********9","dt_refresh":1463465010}]}</div>'],
			subtopics: []
		},
		{
			title: "8. Revisar el Estatus de Sincronización",
			body: ['<p>Una vez que hemos registrado una credencial y hemos verificado que ésta se haya guardado corréctamente, el siguiente paso consiste en checar el estatus de sincronización para este contribuyente. Para esto haremos uso del valor que guardamos de <b>url_status</b> que obtuvimos anteriormente al crear credenciales, únicamente hay que agregar el valor de nuestro token de sesión:</p><div class="Code Console">curl &ltvalor_status&gt; + ? + token=&ltsome_token&gt;</span></div><p>Un ejemplo sería el siguiente:</p><p><b>INPUT:</b> token </p><p><b>OUTPUT:</b> status</p><div class="Code Console">curl \'https://sync.paybook.com/v1/jobs/573b88f90b212af83d8b457f/status?token=68f00287cde168ddbb851d90f5be3341\'</div><p>Al ejecutar el comando anterior obtendremos el siguiente resultado:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":[{"code":100},{"code":101},{"code":102},{"code":200}]}</div><p>Estos son una serie de códigos que indican el estatus de sincronización de la cuenta del SAT que el usuario registró. La descripción de los códigos se muestra a continuación:</p><table><thead><tr><th>Código</th><th>Descripción</th></tr></thead><tbody><tr><td>100</td><td>Se registró un nuevo Job en el API</td></tr><tr><td>101</td><td>Se obtuvo el Job registrado y empezará a trabajar</td></tr><tr><td>102</td><td>El login fue exitóso y la información está siendo sincronizada</td></tr><tr><td>200</td><td>Los datos han sido procesados exitósamente</td></tr><tr><td>201</td><td>Los fatos han sido procesados exitósamente, se continuará con la descarga</td></tr><tr><td>202</td><td>No se encontraron transacciones</td></tr></tbody></table>'],
			subtopics: []
		},
		{
			title: "9. Consultar Transacciones",
			body: ['<p>Una vez que se registraron las credenciales En caso de tener en el estatus un código 200, 201 o 202 podemos consultar las transacciones sincronizadas. Para esto ejecutamos el siguiente comando:</p><p><b>INPUT:</b> token y id_site</p><p><b>OUTPUT:</b> transactions_count</p><div class="Code Console">curl \'https://sync.paybook.com/v1/transactions/count?token=your_token&id_site=some_id_site\'</div><p>Y esto nos regresará una respuesta con el número de transacciones sincronizadas:</p><div class="Code Console">{"code":200,"status":true,"message":null,"response":{"count":121}}</div><p>Si queremos consultar las transacciones directamente ejecutamos:</p><p><b>INPUT:</b> token y id_site </p><p><b>OUTPUT:</b> transactions</p><div class="Code Console">curl \'https://sync.paybook.com/v1/transactions?token=your_token&id_site=some_id_site\'</div><p>Y nos regresará un arreglo de transacciones como la siguiente:</p><div class="Code Console">{"id_transaction":"573b8922234283ad738b45da","id_user":"573a91a90b212a0e3e8b4596","id_external":null,"id_site":"56cf5728784806f72b8b456f","id_site_organization":"56cf4ff5784806152c8b4568","id_site_organization_type":"56cf4f5b784806cf028b4569","id_account":"573b8921234283ad738b4567","id_account_type":"546d4904df527d1844a2e18d","is_disable":0,"description":"CREACIONES DE TECNOLOGIA AVANZADA DE MEXICO SA DE CV","amount":6834.93,"dt_transaction":1461960603,"dt_refresh":1463519574}</div>'],
			subtopics: []
		}
	];
});