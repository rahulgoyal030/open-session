    		$(document).ready(function(){

    			var userid =  $("#userid").text();

    			console.log( "  userid " +userid);

    			setCookie("userid",userid,10);

     
        	$.ajax({url: "/home", success: function(result){
    	// 		var row = $('<tr></tr>').addClass('bar').text(obj1.topic);
    	// 		table.append(row);
    	var length = result.length;
    mytable = $('<table></table>').attr({ id: "basicTable" });
    mytable.attr({class: "table"});
	var rows = new Number(length);
	var tr = [];
	$('#profile').attr("href","/users/"+userid);
    for (var i = 0; i < rows; i++) {
		var row = $('<tr></tr>').attr({ class: ["success"].join(' ') }).appendTo(mytable);
        $('<td></td>').append($('<a></a>').text(result[i].topic).attr("href", "/r/"+result[i].id)).appendTo(row);
			$('<td></td>').text(result[i].type).appendTo(row);
			$('<td></td>').text(result[i].time).appendTo(row);
			$('<td></td>').append($('<button></button>').text("Register").attr( {class : ["btn btn-success"].join(' ') , 'onClick':'stopMoving()' } ) ).appendTo(row); 
		var row = $('<tr></tr>').attr({ class: ["success"].join(' ') }).appendTo(mytable);
			
		 		 
	}
	mytable.appendTo("#div1");	   
		$('#div1').append(table);
        	}});

  });

function stopMoving(e)
{
   // e.preventDefault();
    console.log("here ");
    alert(" you are Registered for event");
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires   +  ";path=/; ";
    console.log(" cookie created");
}  

  
// this function is to get cookie value

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}
	