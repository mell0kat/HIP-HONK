const getAndPlayAudio = (rapper, instant = false, end=false) => {
	const rapperNoise = document.querySelector(`audio#${rapper}`)

	if (end){
		rapperNoise.pause()
		return
	}

	const car1 = document.getElementById('car1')
	const car2 = document.getElementById('car2')
	setTimeout(() => rapperNoise.play(), (instant ? 0 : 1500))
	if (!instant && !end) {
		setTimeout(() => {
			console.log('resetting')
			car1.classList.remove('car_go')
			car2.classList.remove('car_2_go')
		}, (instant ? 0 : 4000))
	}
	car1.className = 'car_go'

	car2.className = 'car_2_go'

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
