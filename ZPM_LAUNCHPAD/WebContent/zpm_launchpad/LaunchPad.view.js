sap.ui.jsview("zpm_launchpad.LaunchPad", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zpm_launchpad.LaunchPad
	*/ 
	getControllerName : function() {
		return "zpm_launchpad.LaunchPad";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zpm_launchpad.LaunchPad
	*/ 
	createContent : function(oController) {
		var header = new sap.ui.commons.ApplicationHeader({
			displayLogoff : true, 
			logoSrc : 'images/logo.png',
			userName : 'Kathy Jackson', 
			displayWelcome : true 
		});		
		var container = new sap.m.TileContainer({
			width : "100%", // sap.ui.core.CSSSize
			height : "100%", // sap.ui.core.CSSSize
			tiles : [
			        new sap.m.StandardTile({
						title : 'Work Orders',
						icon : 'sap-icon://complete', 
						number : 17, 
						press: function(){					
							window.open('http://localhost:64331/ZPM_WORK_ORDER/index.html', '_parent');
					},
						
					}),
			        new sap.m.StandardTile({
						title : 'Assign Orders',
						icon : 'sap-icon://duplicate', 
						number : 200, 
						press: function(){					
							window.open('http://localhost:64331/ZPM_WORK_ORDER/index.html', '_parent');
					},
					}),
			        new sap.m.StandardTile({
						title : 'Work Requests',
						icon : 'sap-icon://activity-individual', 
						number : 18, 
						press: function(){					
							window.open('http://localhost:57959/ZPM_WORK_REQUESTS/index.html', '_parent');
					},	
					}),
			        new sap.m.StandardTile({
						title : 'Report Problem',
						icon : 'sap-icon://create', 
						press: function(){					
							window.open('http://localhost:57884/ZPM_CREATE_WR/index.html', '_parent');
					},	
					}),					
			], // sap.ui.core.Control
		})
		
		return [header,container ];
	}

});