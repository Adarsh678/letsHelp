onEvent("button1", "click", function( ) {
  
  setScreen("screen2");
});

onEvent("button4", "click", function( ) {
  
  setScreen("screen3");
  
  onEvent("button5", "click", function( ) {
    if(getChecked("radio_button2")){
      createRecord("Donater_User_info", 
                    {email:getText("text_input2"),
                      name:getText("text_input1"),
                      password:getText("text_input3")}, function(record) {
        
      });
      setScreen("screen2");
    }
    if(getChecked("radio_button1")){
      createRecord("NGO_User_info", 
                    {email:getText("text_input2"),
                      name:getText("text_input1"),
                      password:getText("text_input3")}, function(record) {
        
      });
      setScreen("screen2");
    }
  });
      
});

onEvent("button2", "click", function( ) {
  
  setScreen("screen4");
  onEvent("button6", "click", function( ) {
    hideElement("label12");
    readRecords("NGO_User_info", {}, function(records) {
        for (var i =0; i < records.length; i++) {
          
          if(records[i].email == getText("text_input5")
            && records[i].password == getText("text_input6") ){
          
          console.log(records[i].email + ' : ' + records[i].password);
          setScreen("screen11");   //set screen after NGO logs in
        }
        else if(i == records.length-1){
          console.log("invalid user");
          showElement("label12");
        }
        console.log(i);
        console.log(records.length);
      }
    });  
  });
});


onEvent("button3", "click", function( ) {
  
  setScreen("screen4");
  onEvent("button6", "click", function( ) {
    hideElement("label12");
    readRecords("Donater_User_info", {}, function(records) {
        for (var i =0; i < records.length; i++) {
          
          if(records[i].email == getText("text_input5")
            && records[i].password == getText("text_input6") ){
          
          console.log(records[i].email + ' : ' + records[i].password);
          setScreen("screen5");   
        }
        else if(i == records.length-1){
          console.log("invalid user");
          showElement("label12");
        }
        console.log(i);
        console.log(records.length);
      }
    });  
  });
});


onEvent("button7", "click", function( ) {
  
  setScreen("screen6");
  
  onEvent("button13", "click", function( ) {
    console.log("class = "+getProperty("dropdown2","value"));
    console.log("type = "+getProperty("dropdown3","value"));
    console.log("image = "+getImageURL("photo_select1"));
    
    createRecord("BookInfo", 
                    {name:getText("text_input9"),
                      class:getProperty("dropdown2","value"),
                      type:getProperty("dropdown3","value"),
                      image:getImageURL("photo_select1")
                    }, function(record) {
        
      });
      
  setScreen("screen16");  
  
  });
});

onEvent("button17", "click", function( ) {
  
  setScreen("screen12");
  
  var i = 0;
  console.log("valueofi="+i);
  
    readRecords("BookInfo", {}, function(records) {
        for ( i =0; i < records.length; i++) {
          
          image("booksImg"+i, records[i].image);
          setPosition("booksImg"+i, 20, 80*(i+1),80,60);
            
          textLabel("booksName"+i, records[i].name);
          setPosition("booksName"+i, 120, 80*(i+1),80,40);
          
          textLabel("booksClass"+i, records[i].class);
          setPosition("booksClass"+i, 220, 80*(i+1), 80, 40);
          
          // textLabel("booksType"+i, records[i].type);
          // setPosition("booksType"+i, 280, 80*(i+1), 60, 40);
        
      }
    });  
});




onEvent("button10", "click", function( ) {
  
  setScreen("screen10");
  
  onEvent("button16", "click", function( ) {
    console.log("name = "+getText("textInput14"));
    console.log("game = "+getProperty("dropdown4","value"));
    console.log("image = "+getImageURL("photo_select3"));
    
    createRecord("GameInfo", 
                    {name:getText("text_input14"),
                      type:getProperty("dropdown","value"),
                      image:getImageURL("photo_select3")
                    }, function(record) {
        
      });
    setScreen("screen16"); 
  });
});


onEvent("button19", "click", function( ) {
  
  setScreen("screen13");
  var i = 0;
  console.log("valueofi="+i);
  
    readRecords("GameInfo", {}, function(records) {
        for ( i =0; i < records.length; i++) {
          
          image("GameImg"+i, records[i].image);
          setPosition("GameImg"+i, 20, 80*(i+1),80,60);
            
          textLabel("GameName"+i, records[i].name);
          setPosition("GameName"+i, 120, 80*(i+1),80,40);
          
          textLabel("Gamegame"+i, records[i].class);
          setPosition("Gamegame"+i, 220, 80*(i+1), 80, 40);
         
        
      }
    });  
});



onEvent("button8", "click", function( ) {
  
  setScreen("screen9");
  
  onEvent("button15", "click", function( ) {
    console.log("type = "+getProperty("dropdown5","value"));
    console.log("gender = "+getProperty("dropdown7","value"));
    console.log("size = "+getProperty("dropdown8","value"));
    console.log("age = "+getProperty("dropdown6","value"));
    console.log("photo = "+getImageURL("photo_select2"));
    
    createRecord("ClothesInfo", 
                    {type:getProperty("dropdown5","value"),
                     gender:getProperty("dropdown7","value"),
                     size:getProperty("dropdown8","value"),
                     age:getProperty("dropdown6","value"),
                     photo:getImageURL("photo_select2")
                    }, function(record) {
        
      });
     setScreen("screen16");
  });
});


onEvent("button18", "click", function( ) {
  
  setScreen("screen7");
  
    readRecords("ClothesInfo", {}, function(records) {
        for (var i =0; i < records.length; i++) {
          
          image("ClothesImg"+i, records[i].photo);
          setPosition("ClothesImg"+i, 20, 80*(i+1),80,60);
            
          textLabel("ClothesType"+i, records[i].type);
          setPosition("ClothesType"+i, 120, 80*(i+1),80,40);
          
          textLabel("ClothesGender"+i, records[i].gender);
          setPosition("ClothesGender"+i, 220, 80*(i+1), 80, 40);
          
          textLabel("ClothesSize"+i, records[i].size);
          setPosition("ClothesSize"+i, 320, 80*(i+1),80,40);
          
          textLabel("ClothesAge"+i, records[i].age);
          setPosition("ClothesAge"+i, 420, 80*(i+1), 80, 40);
        
      }
    });  
});

onEvent("button9", "click", function( ) {
  
  setScreen("screen8");
  
  onEvent("button14", "click", function( ) {
    console.log("name = "+getText("text_input11"));
    console.log("image = "+getImageURL("photo_select4"));
    
    createRecord("OtherInfo", 
                    {name:getText("text_input11"),
                      image:getImageURL("photo_select4")
                    }, function(record) {
        
      });
  setScreen("screen16");   
  });
});

onEvent("button12", "click", function( ) {
  
  setScreen("screen15");
  var i = 0;
  console.log("valueofi="+i);
  
    readRecords("OtherInfo", {}, function(records) {
        for ( i =0; i < records.length; i++) {
          
          image("OtherImg"+i, records[i].image);
          setPosition("OtherImg"+i, 20, 80*(i+1),80,60);
            
          textLabel("OtherName"+i, records[i].name);
          setPosition("OtherName"+i, 120, 80*(i+1),80,40);
          
         
      }
    });  
});



onEvent("Back1", "click", function( ) {
  setScreen("screen2");
});
onEvent("Back2", "click", function( ) {
  setScreen("screen2");
});

onEvent("Back4", "click", function( ) {
  setScreen("screen5");
});
onEvent("Back5", "click", function( ) {
  setScreen("screen5");
});
onEvent("Back6", "click", function( ) {
  setScreen("screen5");
});

onEvent("Back8", "click", function( ) {
setScreen("screen11");
    
});

onEvent("back_Scr7", "click", function( ) {
setScreen("screen11");
    
});

onEvent("Scr11_logout", "click", function( ) {
  setScreen("screen2");
});

onEvent("Scr5_logout", "click", function( ) {
setScreen("screen2");
    
});

onEvent("button11", "click", function( ) {
setScreen("screen11");
    
});

onEvent("button11", "click", function( ) {
setScreen("screen11");
    
});

onEvent("button22", "click", function( ) {
setScreen("screen11");
    
});

onEvent("button23", "click", function( ) {
setScreen("screen5");
    
});