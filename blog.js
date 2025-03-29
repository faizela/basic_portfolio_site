/*
1) get posts data by another method not using fetch
2) convert json data to js object
3) find element to put posts make a variable
4) loop over posts and
create article element with inner html
consisting of h2 and place post title there
a paragraph and post data in it
and  add another paragragh to hold post content
add horizontol line to look clean
and finally add it to the posts element
catch all error by using error and console log error with
 friendly msg
 */

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            try {
                let data = JSON.parse(this.responseText);
                let blog_posts = document.getElementById("blog_posts");

                data.forEach(post => { // ✅ Loop over posts
                    let article = document.createElement("article"); // ✅ Create new article per post

                    article.innerHTML = `
                        <h2>${post.title}</h2>
                        <p><em>${post.date}</em></p>
                        <p>${post.content}</p>
                        <hr>
                    `;

                    blog_posts.appendChild(article); // ✅ Add to blog_posts
                });
            } catch (error) {
                console.error("Error parsing JSON:", error); // ✅ Handle JSON errors
            }
        }
    };

    xhttp.open("GET", "posts.json", true);
    xhttp.send();
}

loadDoc();
