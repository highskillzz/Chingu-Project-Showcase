//contains all the helper functions for use

function getContributorsArray(contributors){
	let contributorsArray = [];
		for (var i = 0; i < contributors.length; i++) {
			contributorsArray.push(contributors[i].username);
		}
		return contributorsArray;
}

function getDetails(npm,build,chat,contributors){
	let details = [
			{
				name: "npm",
				content: npm
			},
			{
				name: "build",
				content: build
			},
			{
				name: "chat",
				content: chat
			},
			{
				name: "contributors",
				content: contributors
			}
		];
	return details;
}

function getOverviews(version,license,issues,repo,contributorsArray){
	let overviews = [
			{
				name: "Version",
				content: version
			},
			{
				name: "License",
				content: "MIT"
			},
			{
				name: "Open Issues",
				content: "4"
			},
			{
				name: "Repository",
				content: "Github"
			},
			{
				name: "Collabrators",
				content: contributorsArray.join()
			}
		];
		return overviews;
}

function getBrowserSupport(browserSupport){
	let BrowserSupportList = [
			{
				browserName: "Chrome",
				support: browserSupport[0]
			},
			{
				browserName: "Firefox",
				support: browserSupport[1]
			},
			{
				browserName: "InternetExplorer",
				support: browserSupport[2]
			},
			{
				browserName: "Opera",
				support: browserSupport[3]
			},
			{
				browserName: "Edge",
				support: browserSupport[4]
			}
		];
		return BrowserSupportList;
}

export {getContributorsArray,getOverviews,getDetails,getBrowserSupport};