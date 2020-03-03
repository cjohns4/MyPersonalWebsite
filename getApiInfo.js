fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=sports%20gaints&api-key=N7uPbkN3L09efSvI8RnSJbhkwsyEEkB0')
.then(response => {
  return response.json()
})
.then(data => {
  console.log(data.response.docs[2].headline.main)
  console.log(data.response.docs[2].snippet)
})
.catch(err => {
  //Do something here if it errors out
})
