
//
//
// document.querySelector('button).addEventListener('click', quote)
//
// function quote(e){
//   e.preventDefault()
//   fetch(`http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=5pGthQNO7IW0NrRNLayKtTRI75Zfw0C3&limit=5`)
//
//     .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
//     .then(response => {
//         console.log(response)
//         document.querySelector('h1').innerText=response.quote;
//
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//         alert("Error")
//     });
// }
document.querySelector('form').addEventListener('submit', bored)
//create funtion that will return pokemon name
function bored(e){
  e.preventDefault()
  let budget = document.querySelector('input').value
//grab api source
  fetch(`http://www.boredapi.com/api/activity?price=${budget}`)
  .then(res => res.json()) //parse response as JSON
//clarify data grab from response
  .then(response => {
    console.log(response);
    document.querySelector('p').textContent = response.activity;
  })
  .catch(err => {
    console.log(`error ${err}`)
    alert('Error')
  })
}
