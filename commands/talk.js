	const talking = new Set();
	
	client.on('message', message => {
	    if (message.content === '/talk on') {
	        talking.add(message.author.id);
	        message.channel.send('You are now talking with the bot. Type /talk off to stop.');
	    } else if (message.content === '/talk off') {
	        talking.delete(message.author.id);
	        message.channel.send('You stopped talking with the bot. Type /talk on to start again.');
	    } else if (message.content === '/talk' && talking.has(message.author.id)) {
	        // Bot response logic when user talks
	    }
	});