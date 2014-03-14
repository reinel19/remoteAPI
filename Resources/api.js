

var remoteResponse = function() {
    Ti.API.debug(this.responseText);
    var json = JSON.parse(this.responseText);
    
    for(i=0; i < 20; i++){
    	var ups = json.data.children[i].data.ups;
    	var downs = json.data.children[i].data.downs;
    	var created = json.data.children[i].data.created;
    	var score = json.data.children[i].data.score;
    	var id = json.data.children[i].data.id;
    	var domain = json.data.children[i].data.domain;
    	var subreddit = json.data.children[i].data.subreddit;
    	var author = json.data.children[i].data.author;
    	var name = json.data.children[i].data.name;
    	var num_comments = json.data.children[i].data.num_comments;
    	
    	var dataView = Ti.UI.createView({
			backgroundColor: "#999",
			top: 45,
			width: 250,
			height: 400,
			layout: "vertical"
});
    	var label = Ti.UI.createLabel({
    		text: ups,
    		top: 15,
    		color: "#333"
    	});
    	
    	var label2 = Ti.UI.createLabel({
    		text: downs,
    		top: 15,
    		color: "#333"
    	});
    	
    	var label3 = Ti.UI.createLabel({
    		text: created,
    		top: 15,
    		color: "#333"
    	});
    	
        var label4 = Ti.UI.createLabel({
    		text: score,
    		top: 15,
    		color: "#333"
    	});

  		var label5 = Ti.UI.createLabel({
    		text: id,
    		top: 15,
    		color: "#333"
    	});
    	
    		var label6 = Ti.UI.createLabel({
    		text: domain,
    		top: 15,
    		color: "#333"
    	});
    	
    		var label7 = Ti.UI.createLabel({
    		text: subreddit,
    		top: 15,
    		color: "#333"
    	});
    	
    		var label8 = Ti.UI.createLabel({
    		text: author,
    		top: 15,
    		color: "#333"
    	});
    	    	
    		var label10 = Ti.UI.createLabel({
    		text: name,
    		top: 15,
    		color: "#333"
    	});
    	
    		var label11 = Ti.UI.createLabel({
    		text: num_comments,
    		top: 15,
    		color: "#333"
    	});


    	dataView.add(label);
    	dataView.add(label2);
    	dataView.add(label3);
    	dataView.add(label4);
    	dataView.add(label5);
    	dataView.add(label6);
    	dataView.add(label7);
    	dataView.add(label8);
    	dataView.add(label10);
    	dataView.add(label11);
    	scroll.add(dataView);
    	//scroll.add(label);
    }
    
};

var remoteError = function(e) {
    Ti.API.debug("Status: " + this.status);
    Ti.API.debug("Text: " + this.responseText);
    Ti.API.debug("Error: " + e.error);
    alert("There's a problem pulling remote data");
};

var xhr = Ti.Network.createHTTPClient({
    onload: remoteResponse,
    onerror: remoteError,
    timeout:3000
});

xhr.open("GET", "http://api.reddit.com/");
xhr.send();


//exports.dataView = dataView;
//win.add(dataView);
