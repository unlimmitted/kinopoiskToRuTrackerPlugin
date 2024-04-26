function addRefButton() {
	const container = document.getElementsByClassName("style_item__coMvy")[0]
	let filmTitle = document
		.querySelectorAll('h1[class^="styles_title__"], h1[class*=" styles_title__"]')[0].textContent
	let trackerUrl = `https://rutracker.net/forum/tracker.php?nm=${filmTitle}`
	createRefBtn(trackerUrl, container)
}

function createRefBtn(url, container) {
	let refContainer = document.createElement("a")
	refContainer.setAttribute("class", "styles_root__b5Uwf styles_rootLight__5uLlo")
	refContainer.setAttribute("id", "refContainer")
	refContainer.setAttribute("href", url)
	refContainer.setAttribute("target", "_blank")
	refContainer.style.marginLeft = "10px"

	let spanLogo = document.createElement("span")
	spanLogo.setAttribute("class", "styles_logo__SNt5e")

	let logo = document.createElement("img")
	logo.setAttribute("src", "https://i.imgur.com/6rjNwvJ.jpeg")
	logo.style.width = "32px"
	logo.style.height = "32px"

	let text = document.createElement("span")
	text.setAttribute("class", "styles_title__434hO")
	text.textContent = "RuTracker"

	spanLogo.appendChild(logo)
	refContainer.appendChild(spanLogo)
	refContainer.appendChild(text)

	container.appendChild(refContainer)
}

addRefButton()