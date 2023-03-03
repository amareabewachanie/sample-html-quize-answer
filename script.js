document.getElementById('search-input').addEventListener('keyup', async (e) => {
    // Search comments
    // Use this API: https://jsonplaceholder.typicode.com/comments?postId=3
    // Display the results in the UI

    // Things to look out for
    // ---
    // Use es6


    await fetch('http://localhost:8000/')
      .then(response => response.json())
      .then(comments => {

        result = ``
        const filteredComments = comments.filter(comment => comment.name.toLowerCase().includes(e.target.value.toLowerCase()));

        filteredComments.map(comment => {
          result = result + `<div class='comments'> <b> Comment Name: </b> ${comment.name} <br> <b> Comment Email: </b> ${comment.email} <br> <b> Comment Body: </b> ${comment.body} </div>`
        });

        document.getElementById('results').innerHTML = result
      });
})

