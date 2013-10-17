function Inbox2Controller($scope,  $http, $routeParams) {
	
 var oTable = $('.dataTable').dataTable({
 	"sDom": "<'row-fluid tablePars'<'span10'f><'span2 right'l>r>t<'row-fluid'<'span3'i><'span9 right'p>>",
			"sPaginationType": "bootstrap",
			"sAjaxSource" :"src/table.json",
			"oLanguage": {
			"sLengthMenu": "Cantidad de _MENU_ "
			},
		"bProcessing" : true,
		"sAjaxSource" :"src/table.json",
		"sAjaxDataProp" : "",
		"aoColumns" : [{
			"mData" : "legajo"
		}, {
			"mData" : "TipoDeProcedimiento"
		}, {
			"mData" : "anio"
		}, {
			"mData" : "tarea"
		}, {
			"mData" : "objeto"
		},
		{
			"mData" : "fecha"
		},
		{
			"mData" : "estado"
		}, {
			"mData" : function (oObj)                              
                  {
                      // call Modal
                      var a = "<div class='btn-group'><button class='btn glow'>Accion</button> <button data-toggle='dropdown' class='btn glow dropdown-toggle'><span class='caret'></span></button><ul class='dropdown-menu'><li><i class='halflings-icon eye-open-open'></i> Ver</li><li><a data-toggle='modal' href='#myModal'><i class='halflings-icon ok'></i> Liberar</a></li></ul></div>";                            
                      return a;
                  }
                  }
		]
		 
	});
	
	
	$('.datepicker').datepicker();
		/* ---------- Uniform ---------- */
	$("input:checkbox, input:radio, input:file").not('[data-no-uniform="true"],#uniform-is-ajax').uniform();

	/* ---------- Choosen ---------- */
	$('[data-rel="chosen"],[rel="chosen"]').chosen();

	 
}


										