const ruTrackerLogoUrl = "https://i.imgur.com/9fWeWZk.png"

function getContentTitle() {
	return document
		.querySelectorAll('h1[class^="styles_title__"], h1[class*=" styles_title__"]')[0].textContent
}

function ruTrackerLink(hrefUrl, container) {
	let linkDiv = document.createElement("div")
	linkDiv.setAttribute("class", "style_root__eFFBv")
	linkDiv.setAttribute("id", "RuTrackerLink")

	let linkBtn = document.createElement("a")
	linkBtn.setAttribute("href", hrefUrl)
	linkBtn.setAttribute("class", "style_button__PNtXT style_buttonSize52__b5OBe style_buttonPrimary__ndPAb style_buttonDark__beFpy style_withIconLeft___Myt9 style_onlyIcon__H_eUb")
	linkBtn.setAttribute("target", "_blank")

	let iconSpan = document.createElement("span")
	iconSpan.setAttribute("class", "style_iconLeft__Kq1ig")

	let icon = document.createElement("img")
	icon.setAttribute("src", ruTrackerLogoUrl)
	icon.style.width = "25px"
	icon.style.height = "25px"

	iconSpan.appendChild(icon)
	linkBtn.appendChild(iconSpan)
	linkDiv.appendChild(linkBtn)

	container.appendChild(linkDiv)
}

let intervalId;

async function asyncOperation(container) {
	let contentTitle = getContentTitle()
	let trackerUrl = `https://rutracker.net/forum/tracker.php?nm=${contentTitle}`
	if (!document.getElementById("RuTrackerLink")){
		ruTrackerLink(trackerUrl, container)
	}
	await new Promise(resolve => setTimeout(resolve, 2000));
}

function startAsyncLoop() {
	intervalId = setInterval(async () => {
		const container = document.querySelectorAll(
			'div[class^="styles_buttonsContainer__"], div[class*=" styles_buttonsContainer__"]')[0]
		if (container) {
			await asyncOperation(container);
		}
	}, 1000)
}

startAsyncLoop()