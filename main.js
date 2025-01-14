function getUser(){
    return new Promise((resolve, reject) => {
        axios.get('https://jsonplaceholder.typicode.com/Users')
        .then((response)=>{
            let users = response.data
            document.getElementById("container_left").innerHTML =""
            for(user of users){
                const content = `
                    <div class="user" onclick="userClicked(${user.id}, this)">
                    <h3>${user.name}</h3>
                    <h4>${user.email}</h4>
                </div>
                `
                document.getElementById("container_left").innerHTML += content
            }
            resolve()
}).catch(error => {
    alert(error)
    reject()
})

    })
}





function getPost(userId){
    axios.get('https://jsonplaceholder.typicode.com/posts?userId='+userId)
    .then((response) => {
        let posts = response.data
        document.getElementById("container_right").innerHTML =""
        for(post of posts){
            const content = `
            <div class="post">
                <h3>${post.title}</h3>
                <hr>
                <h4>${post.body}</h4>
            </div>
            `
            document.getElementById("container_right").innerHTML += content
        }
    }).catch(error => {
        alert(error)
    })

}


//To Call getUser then getPost

getUser()
.then(() => {
    getPost(1)
})



function userClicked(id, el){
    getPost(id)
    let selected_ele = document.getElementsByClassName("selected")
    for(ele of selected_ele){
        ele.classList.remove("selected")
    }
    el.classList.add("selected")
}