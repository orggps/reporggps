sap.ui.jsview("shell_project.Main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf shell_project.Main
	*/ 
	getControllerName : function() {
		return "shell_project.Main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf shell_project.Main
	*/ 
	createContent : function(oController) {
 		
		var oShell = new sap.ui.ux3.Shell("demoShell", {
			
			appTitle : "Shell Demo Application with Routing",
			appIcon	 : "images/SAPLogo.gif",
			appIconTooltip : "SAP logo",
			showLogoutButton : true,
			showSearchTool : true,
			showInspectorTool : true,
			showFeederTool : true,
			
			worksetItems : [
			               new sap.ui.ux3.NavigationItem("wi_home", {key : "wi_home", text : "Home"}),
			               new sap.ui.ux3.NavigationItem("wi_1", {key : "wi_1", text : "Sub Items", subItems : [
			                   new sap.ui.ux3.NavigationItem("wi_1_1", {key : "wi_1_1", text : "One"}),
			                   new sap.ui.ux3.NavigationItem("wi_1_2", {key : "wi_1_2", text : "Two"}),
			                   new sap.ui.ux3.NavigationItem("wi_1_3", {key : "wi_1_3", text : "Three"})
			               ]}),
		                   new sap.ui.ux3.NavigationItem("wi_exmpls", {key : "wi_exmpls", text : "Examples"}),
			],
			
			paneBarItems : [
			               new sap.ui.core.Item("pi_date", {key : "pi_date", text : new Date().toLocaleString()}),
			               new sap.ui.core.Item("pi_browser", {key : "pi_browser", text : navigator.userAgent})
			],
			
		});
	}

});