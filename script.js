document.querySelector(".menuburguer").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("show-menu");});


document.querySelector("#amount").addEventListener("change", refreshPrice)
document.querySelector("#js").addEventListener("change", refreshPrice)
document.querySelector("#layout-yes").addEventListener("change", refreshPrice)
document.querySelector("#layout-no").addEventListener("change", refreshPrice)
document.querySelector("#deadline").addEventListener("change", function () {
  const deadline = document.querySelector("#deadline").value
  document.querySelector("Label[for=deadline]").innerHTML = `Deadline: ${deadline} weeks`
  refreshPrice()
})

function refreshPrice (){
  const amount = document.querySelector("#amount").value
  const needJS = document.querySelector ("#js").checked 
  const includeLayout = document.querySelector("#layout-yes").checked
  const deadline = document.querySelector("#deadline").value

  let price = amount * 100;
  if (needJS) price *= 1.1
  if (includeLayout) price += 500
  let urgencyRate = 1 - deadline*0.1;
    price *= 1 + (urgencyRate)
  document.querySelector("#price").innerHTML = `R$ ${price.toFixed (2)}`
}