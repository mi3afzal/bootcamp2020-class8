import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
	const [repos, setRepos] = useState([{}]);

	useEffect(() => {

		async function fetchGitRepos() {
			const apiRes = await fetch("https://api.github.com/users/mi3afzal/repos");
			const data = await apiRes.json();
			  console.log(data);
			  setRepos(data)
		}

		fetchGitRepos();

	}, []);

	

	return (
		<div className="App">
			<h1>All repos of <a href="https://github.com/mi3afzal/" target="blank">mi3afzal</a></h1>
			<ol>
				{repos.map((repoObj, index) => {
					return (<li key={index}>
						<span className="repo-name"> <a href={repoObj.html_url} target="blank">{repoObj.name}</a> </span> 
						{ repoObj.description && 
							<span className="repo-desc"> (${repoObj.description}) </span>
						}
					</li>)
				})}
			</ol>
		</div>
	);
}

export default App;
