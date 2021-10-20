function usersLastCommit (username){
	fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': githubKey}})
		.then(response => response.json())
		.then(responseObj => console.log(responseObj[0].created_at))
}

usersLastCommit('BoschLeith')
