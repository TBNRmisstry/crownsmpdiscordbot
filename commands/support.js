	client.on('message', message => {
	    if (message.content === '/support') {
	        message.author.createDM().then(dmChannel => {
	            dmChannel.send('Please describe your issue for support.');
	        });
	    }
	});