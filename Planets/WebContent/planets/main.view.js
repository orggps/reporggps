sap.ui.jsview("planets.main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf planets.main
	*/ 
	getControllerName : function() {
		return "planets.main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf planets.main
	*/ 
	createContent : function(oController) {
				
		var aGalaxy = [	
		               	{"Planet" : "Mercury","Diameter":"5,100","Gravity":0.40},
		               	{"Planet" : "Venus","Diameter":"12,600","Gravity":0.90},
		               	{"Planet" : "Earth","Diameter":"12,800","Gravity" : 1.00},
		               	{"Planet" : "Mars","Diameter":"6,900","Gravity" : 0.40},
		               	{"Planet" : "Jupiter","Diameter":"143,600","Gravity":2.70},
		               	{"Planet" : "Saturn","Diameter":"120,600","Gravity" : 1.20},
		               	{"Planet" : "Uranus","Diameter":"53,400","Gravity" : 1.00},
		               	{"Planet" : "Pluto","Diameter" : "12,700","Gravity" : 1.40}
		              ];
		var oModel = new sap.ui.model.json.JSONModel({values : aGalaxy});
		var oTable = new sap.ui.table.Table({
						title : "Características físicas dos Planetas",
						visibleRowCount : 8,
						firstVisibleRow : 0,
						width : "500px"
					});
		
		//First column "Planet"
		oTable.addColumn(new sap.ui.table.Column({
				label : new sap.ui.commons.Label({
						text : "Planet"
				}),
				template : new sap.ui.commons.TextView().bindProperty("text", "Planet"),
				width: "60px"
		}));
		
		//Second column "Diameter"
		oTable.addColumn(new sap.ui.table.Column({
				label : new sap.ui.commons.Label({
						text : "Diameter(KM)"
				}),
				template : new sap.ui.commons.TextView({"text" : "{Diameter}"}),
				width: "60px"
		}));
		
		//Third column "Gravity"
		oTable.addColumn(new sap.ui.table.Column({
				label : new sap.ui.commons.Label({
						text : "Gravity(Earth Ratio)"
				}),
				template : new sap.ui.commons.TextView({"text" : {path : "Gravity"}}),
				width: "60px"
		}));
		
		oTable.setModel(oModel);
		oTable.bindRows("/values");
		oTable.placeAt("content");
	}

});