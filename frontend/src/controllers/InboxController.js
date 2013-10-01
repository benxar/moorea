function InboxController($scope, $http) {
	var oTable = $('.dataTable').dataTable({
		 "sDom": "<'row-fluid tablePars'<'span10'f><'span2 right'l>r>t<'row-fluid'<'span3'i><'span9 right'p>>",
			"sPaginationType": "bootstrap",
			"oLanguage": {
			"sLengthMenu": "Cantidad de _MENU_ "
			}
	});
}
