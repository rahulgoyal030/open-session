   		$(document).ready(function(){

    
     
        	$.ajax({url: "/myEvents", success: function(result){
    	// 		var row = $('<tr></tr>').addClass('bar').text(obj1.topic);
    	// 		table.append(row);
    	console.log(result);
    	var length = result.length;
   var mytable = $('<table></table>').attr({ id: "basicTable" });
    mytable.attr({class: "table"});
	var rows = new Number(length);
	var tr = [];
	for (var i = 0; i < rows; i++) {
		var row = $('<tr></tr>').attr({ class: ["success"].join(' ') }).appendTo(mytable);
			$('<td></td>').append($('<a></a>').text(result[i].topic).attr("href", "/r/"+result[i].id)).appendTo(row);
			$('<td></td>').text(result[i].type).appendTo(row);
			$('<td></td>').text("   						").appendTo(row); 
			$('<td></td>').append($('<p></p>').text("Successfully Registered").attr( {class : ["text-success"].join(' ') } ) ).appendTo(row); 
		var row = $('<tr></tr>').attr({ class: ["success"].join(' ') }).appendTo(mytable);
			
		 		 
	}
	mytable.appendTo("#registered");	   
	
        	}});

  });