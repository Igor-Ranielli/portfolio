var loading;
  
  function myFunction() {
    loading = setTimeout(showPage, 3000);
  }
  
  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "";
  }

document.querySelector(".menuburguer").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("show-menu");});


document.querySelector("#amount").addEventListener("change", refreshPrice)
document.querySelector("#js").addEventListener("change", refreshPrice)
document.querySelector("#layout-yes").addEventListener("change", refreshPrice)
document.querySelector("#layout-no").addEventListener("change", refreshPrice)
document.querySelector("#deadline").addEventListener("change", function () {
  const deadline = document.querySelector("#deadline").value
  document.querySelector("Label[for=deadline]").innerHTML = `Deadline: ${deadline} week(s)`
  refreshPrice()

})

function refreshPrice (){
  const amount = document.querySelector("#amount").value
  const needJS = document.querySelector ("#js").checked 
  const includeLayout = document.querySelector("#layout-yes").checked
  const deadline = document.querySelector("#deadline").value

  let price = amount * 100;
  if (needJS) price *= 1.5
  if (includeLayout) price += 500
  let urgencyRate = 1 - deadline/4;
    price *= 2 + (urgencyRate)
  document.querySelector("#price").innerHTML = `R$ ${price.toFixed (2)}`
}