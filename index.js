var postagem = [5];
var comentario = [5];

function postagens() {
    var j = 1;
    for (var i = 0; i < 5; i++) {
        fetch('https://jsonplaceholder.typicode.com/posts/' + j)
            .then(response => response.json())
            .then(json => {
                const userId = json.userId;
                const id = json.id;
                const title = json.title;
                const body = json.body;

                postagem[i] = { userId, id, title, body }

                alert(" Usuario id: " + postagem[i].userId + ", \n Postagem Id: " + postagem[i].id + ", \n Titulo: " + postagem[i].title + ", \n Postagem: " + postagem[i].body)

                //document.getElementById("printTitle").innerHTML = title;
                //document.getElementById("printBody").innerHTML = body;
            })

            j++;
    }
}

function comentarios() {
    var j = 1;
    for (var i = 0; i < 5; i++) {
        fetch('https://jsonplaceholder.typicode.com/posts/' + j)
            .then(response => response.json())
            .then(json => {
                const postId = json.postId;
                const id = json.id;
                const name = json.name;
                const email = json.email;
                const body = json.body;

                comentario[i] = { postId, id, name, email, body }

                alert(" Post id: " + comentario[i].postId + ", \n Id: " + comentario[i].id + ", \n Nome: " + comentario[i].name + ", \n Email: " + comentario[i].email + ", \n Comentario: " + comentario[i].body)

                //document.getElementById("printTitle").innerHTML = title;
                //document.getElementById("printBody").innerHTML = body;
            })

            j++;
    }
}