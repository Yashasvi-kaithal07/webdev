//-------------------Practice 1------------------------------
async function github() {

        
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    // console.log(data);

    const parent = document.getElementById('first')

    for(let user of data ){
      const element = document.createElement('div');
      element.classList.add("user");

      const image = document.createElement('img');
      image.src = user.avatar_url;

      const userName = document.createElement('h2');
      userName.textContent = user.login;

      const anchor = document.createElement('a');
      anchor.href = user.html_url;
      anchor.textContent = "Visiting Profile"

      element.append(image,userName,anchor);
      parent.append(element); 
    }

}

github();


//--------------practice 2--------------------------------------------

// async function usersData() {

//     try{

    
//     const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users");

//         if(!response.ok){
//             throw new Error("Data is not present");
            
//         }

//     const data = await response.json();

//     const parent = document.getElementById("first");

//     for (let user of data) {

//         const element = document.createElement("div");
//         element.classList.add("user");

//         const userName = document.createElement("h2");
//         userName.textContent = user.name;

//         const email = document.createElement("p");
//         email.textContent = user.email;

//         const anchor = document.createElement("a");
//         anchor.href = `https://${user.website}`;
//         anchor.textContent = "Visit Website";
//         anchor.target = "_blank";

//         element.append(userName, email, anchor);
//         parent.append(element);
//     }
// }
//     catch(error){
//     console.log(error);
//     }

// }

// usersData();
