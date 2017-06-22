pimcore.registerNS("pimcore.plugin.pimconnect");

pimcore.plugin.pimconnect = Class.create(pimcore.plugin.admin, {
    getClassName: function() {
        return "pimcore.plugin.pimconnect";
    },

    initialize: function() {
        pimcore.plugin.broker.registerPlugin(this);
       
    },
 
    pimcoreReady: function (params,broker){
        // alert("Pimconnect Plugin Ready!");
    },
    
    postOpenObject : function(obj){
        console.log(obj);
    	var objectId =  obj.id;
        var sourceParentId = obj.data.data.SourceParentId;
    	var MappingRecordpath = obj.data.data.MappingRecordpath;
    	var activeTabId = obj.tabPanel.activeTab.id;
    	
    	Ext.Ajax.request({
            url: '/plugin/Pimconnect/index/index',
            async:false,
            params: {object_id: objectId,
                     sourceParentId:sourceParentId
                    },
            method: 'POST',
            success: function(data) {
               
            	var decodedStringStatus = Ext.decode(data.responseText);
                if(decodedStringStatus.status==true && (decodedStringStatus.className=='bridgeConnection' || decodedStringStatus.className=='bridge')){
                if(decodedStringStatus.bridgeId == objectId || obj.data.data.ProposedDataSetType == 'productsimages' || obj.data.data.ProposedDataSetType == 'categories' ){
                        obj.toolbar.insert(8, { //This number is the position of the button
                            text: 'Execute Job',
                            itemId: 'execute_job',
                            scale: 'medium',
                            iconCls: 'pimcore_icon_box',
                            handler: function() {
                            Ext.Msg.confirm("Confirmation", "Are you sure want to execute?", function(confirm){
                                if(confirm == "yes"){
                                   Ext.Ajax.request({
                                    url: '/plugin/Pimconnect/index/authanticate-job',
                                    async:false,  
                                    params: {
                                        object_id: objectId,
                                        MappingRecordpath:MappingRecordpath
                                    },
                                    method: 'POST',  
                                    success: function(returnData) {
                                           var decodedString = Ext.decode(returnData.responseText); 
                                           if(decodedString.status == true){
                                            Ext.MessageBox.show({
                                            title: 'Confirmation',
                                            msg: 'You have unfinished jobs. Do you want to resume?',
                                            width: 400,
                                            height: 200,
                                            closable: false,
                                            buttonText : 
                                            {
                                                yes : 'Resume Anyway',
                                                no : 'Start from Beginning',
                                                cancel : 'Discard'
                                            },
                                            multiline : false,
                                            fn : function(buttonValue){
                                                 if(buttonValue == "yes"){  
                                                  Ext.Ajax.request({
                                                  url: '/plugin/Pimconnect/index/execute-job',
                                                  async:false,
                                                  params: {flag: 1,
                                                           object_id: objectId,
                                                           sourceParentId:sourceParentId,
                                                          },
                                                  method: 'POST',
                                                  success: function(succData){
                                                   var newString = Ext.decode(succData.responseText); 
                                                   if(newString.status==true){
                                                       Ext.MessageBox.alert(newString.msg); 
                                                    }else if(newString.status==false || newString.status=='false'){
                                                       Ext.MessageBox.alert(newString.msg); 
                                                    }
                                                   },
                                                  }); 
                                                 }else if(buttonValue == "no"){
                                                  Ext.Ajax.request({
                                                  url: '/plugin/Pimconnect/index/execute-job',
                                                  async:false,
                                                  params: {flag: 2,
                                                           object_id: objectId,
                                                           sourceParentId:sourceParentId,
                                                          },
                                                  method: 'POST',
                                                  success: function(succData){
                                                   var newString = Ext.decode(succData.responseText); 
                                                   if(newString.status==true || newString.status=='true'){
                                                       Ext.MessageBox.alert(newString.msg); 
                                                    }else if(newString.status==false || newString.status=='false'){
                                                       Ext.MessageBox.alert(newString.msg); 
                                                    }
                                                   },
                                                  }); 
                                                 }  
                                            },
                                            icon : Ext.Msg.QUESTION
                                       }); 
                                           }else if(decodedString.status == false && decodedString.valid == 1){
                                                Ext.Ajax.request({
                                                  url: '/plugin/Pimconnect/index/execute-job',
                                                  async:false,
                                                  params: { object_id: objectId,
                                                            sourceParentId:sourceParentId,
                                                          },
                                                  method: 'POST',
                                                  success: function(succData){
                                                   var newString = Ext.decode(succData.responseText); 
                                                   if(newString.status==true || newString.status=='true'){
                                                       Ext.MessageBox.alert(newString.msg); 
                                                    }else if(newString.status==false || newString.status=='false'){
                                                       Ext.MessageBox.alert(newString.msg); 
                                                    }
                                                   },
                                                  });
                                           }else if(decodedString.status == false && decodedString.msg != undefined){
                                                Ext.MessageBox.alert('Error',decodedString.msg);
                                           }
                                        },
                                   });  
                             }
                                
                            },this)
                        	
                  	
                        }.bind(obj)
                    })
                   }
                
                
                if(decodedStringStatus.status==true && decodedStringStatus.className=='bridge'){
                  
                            obj.toolbar.insert(8, { //This number is the position of the button
                            text: 'Execute Job',
                            itemId: 'execute_job',
                            scale: 'medium',
                            iconCls: 'pimcore_icon_box',
                            handler: function() {
                                Ext.Msg.confirm("Confirmation", "Are you sure want to execute?", function(confirm){
                                if(confirm == "yes"){
                                 Ext.Ajax.request({
                                    url: '/plugin/Pimconnect/index/authanticate-job',
                                    async:false,  
                                    params: {
                                    object_id: objectId,
                                    bridgeRootId:objectId,
                                    MappingRecordpath:MappingRecordpath
                                    },
                                    method: 'POST',  
                                    success: function(returnData) {
                                           var decodedString = Ext.decode(returnData.responseText); 
                                           if(decodedString.status == true){
                                            Ext.MessageBox.show({
                                            title: 'Confirmation',
                                            msg: 'You have unfinished jobs. Do you want to resume?',
                                            width: 400,
                                            height: 200,
                                            closable: false,
                                            buttonText : 
                                            {
                                                yes : 'Resume Anyway',
                                                no : 'Start from Beginning',
                                                cancel : 'Discard'
                                            },
                                            multiline : false,
                                            fn : function(buttonValue){
                                                 if(buttonValue == "yes"){  
                                                  Ext.Ajax.request({
                                                  url: '/plugin/Pimconnect/index/execute-job',
                                                  async:false,
                                                  params: {flag: 1,
                                                           object_id: objectId,
                                                           bridgeRootId:objectId,
                                                           sourceParentId:sourceParentId
                                                          },
                                                  method: 'POST',
                                                  success: function(succData){
                                                   var newString = Ext.decode(succData.responseText); 
                                                   if(newString.status==true){
                                                       Ext.MessageBox.alert(newString.msg); 
                                                    }else if(newString.status==false || newString.status=='false'){
                                                       Ext.MessageBox.alert(newString.msg); 
                                                    }
                                                   },
                                                  }); 
                                                 }else if(buttonValue == "no"){
                                                  Ext.Ajax.request({
                                                  url: '/plugin/Pimconnect/index/execute-job',
                                                  async:false,
                                                  params: {flag: 2,
                                                           object_id: objectId,
                                                           bridgeRootId:objectId,
                                                           sourceParentId:sourceParentId,
                                                          },
                                                  method: 'POST',
                                                  success: function(succData){
                                                   var newString = Ext.decode(succData.responseText); 
                                                   if(newString.status==true || newString.status=='true'){
                                                       Ext.MessageBox.alert(newString.msg); 
                                                    }else if(newString.status==false || newString.status=='false'){
                                                       Ext.MessageBox.alert(newString.msg); 
                                                    }
                                                   },
                                                  }); 
                                                 }  
                                            },
                                            icon : Ext.Msg.QUESTION
                                       }); 
                                           }else if(decodedString.status == false && decodedString.msg == undefined && decodedString.valid == 1){
                                                Ext.Ajax.request({
                                                  url: '/plugin/Pimconnect/index/execute-job',
                                                  async:false,
                                                  params: { object_id: objectId,
                                                             bridgeRootId:objectId,
                                                             sourceParentId:sourceParentId,
                                                          },
                                                  method: 'POST',
                                                  success: function(succData){
                                                   var newString = Ext.decode(succData.responseText); 
                                                   if(newString.status==true || newString.status=='true'){
                                                       Ext.MessageBox.alert(newString.msg); 
                                                    }else if(newString.status==false || newString.status=='false'){
                                                       Ext.MessageBox.alert(newString.msg); 
                                                    }
                                                   },
                                                  });
                                           }else if(decodedString.status == false && decodedString.msg != undefined){
                                                  Ext.MessageBox.alert('Error',decodedString.msg);
                                           }
                                        },
                                   });  
                             }
                                
                            },this)
                            
                          }.bind(obj)
                        })
                       }
                    
                   
                  // alert($("input[name=ProposedDataSetType]").val());
                   if(obj.data.data.ProposedDataSetType=='products'){
                    	 obj.toolbar.insert(9, { //This number is the position of the button
                             text: 'Import Attr. Set',
                             itemId: 'execute_import_job',
                             scale: 'medium',
                             iconCls: 'pimcore_icon_box',
                             handler: function() {
                             	Ext.Ajax.request({
                                     url: '/plugin/Pimconnect/index/import-magento-data',
                                     async:false,
                                     params: {object_id: objectId},
                                     method: 'POST',
                                     success: function(returnData) {
                                     	var decodedString = Ext.decode(returnData.responseText);
                                     	if(decodedString.status==false || decodedString.status=='false') {
                                     		Ext.MessageBox.alert(decodedString.msg);
                                     	}
                                     	if(decodedString.status==true || decodedString.status=='true') {
                                     		Ext.MessageBox.alert(decodedString.msg);
                                                $("#object_toolbar_"+objectId+"-targetEl").children("a").children("span").find(".pimcore_icon_reload").click();
                                     	} 
                                     },	
                                     });
                       	
                             }.bind(obj)
                         })
                        $("#"+activeTabId+" input[name=ObjectParentID]").closest('.object_field').hide();
                    	 
                  } else if (obj.data.data.ProposedDataSetType=='categories'){                    
                	   $("#"+activeTabId+" input[name=AttributeSetId]").closest('.object_field').hide();
                	   $("#"+activeTabId+" textarea").last().closest('.object_field').hide()
                  } else {
                	  $("#"+activeTabId+" textarea").last().closest('.object_field').show();
                  }
                     pimcore.layout.refresh();
                } 
                
               // myFormPanel.query('.component, .button').forEach(function(c){c.setDisabled(false);});


                
            },
      	});
    	
    }
});




var pimconnectPlugin = new pimcore.plugin.pimconnect();

