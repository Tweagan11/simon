// class User {
//     constructor(name) {
//         this.username = name;
//         this.prevScore = 0;
//     }
// }

// const user1 = new User(Tweag);

// const users = [user1]



// const userCheck = new Promise((resolve, reject) => {(name) {
//         if(users.find(({username}) => username === name)) {
            
//         }
//         }
//     }
// })

function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "play.html";
  }