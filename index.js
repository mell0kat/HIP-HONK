const getAndPlayAudio = (rapper, rapperDivImg) => {
	const rapperNoise = document.querySelector(`audio#${rapper}`)
	setTimeout(() => rapperNoise.play(), 4000)

	rapperDivImg.className = 'sliding'
	document.getElementById('car').className = 'car_go'

}

document.addEventListener("DOMContentLoaded", (event) => {
	function respondToClick(rapper) {
		const rapperDiv = document.getElementById(rapper)
		const rapperDivImg = document.querySelectorAll(`#${rapper} img`)[1]
		console.log(rapperDivImg)
		rapperDiv.addEventListener('click', () => getAndPlayAudio(rapper, rapperDivImg))

	}
	respondToClick('dmx')
	respondToClick('kendrick')
})
