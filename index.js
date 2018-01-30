const getAndPlayAudio = (rapper, instant = false, end=false) => {
	const rapperNoise = document.querySelector(`audio#${rapper}`)

	if (end){
		rapperNoise.pause()
		return
	}
	setTimeout(() => rapperNoise.play(), (instant ? 0 : 1750))

	document.getElementById('car1').className = 'car_go'

	document.getElementById('car2').className = 'car_2_go'

}

document.addEventListener("DOMContentLoaded", (event) => {
	function respondToClick(rapper) {
		const rapperDiv = document.getElementById(rapper)
		const rapperDivImg = document.querySelectorAll(`#${rapper} img`)[1]

		rapperDiv.addEventListener('click', () => {
			getAndPlayAudio('sputtering', true)
			getAndPlayAudio(rapper)
			setTimeout(() => getAndPlayAudio('sputtering', true, true), 2000)

		})

	}
	respondToClick('dmx')
	respondToClick('kendrick')
})
