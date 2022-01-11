let shape = document.querySelector(".shape");
let topinp = document.querySelector(".top")
let rightinp = document.querySelector(".right")
let bottominp = document.querySelector(".bottom")
let leftinp = document.querySelector(".left")
let codecont = document.querySelector(".code-value")
// select all inputs
let rangeinps = document.querySelectorAll(".range")

rangeinps.forEach((inp) => {
	inp.addEventListener("change", () => {
		codecont.innerHTML = `${topinp.value}px ${rightinp.value}px ${bottominp.value}px ${leftinp.value}px`

		shape.style.borderRadius = `${topinp.value}px ${rightinp.value}px ${bottominp.value}px ${leftinp.value}px`
	})
})