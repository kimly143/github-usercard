/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

axios.get('https://api.github.com/users/kimly143')
.then((response) => {
  console.log(response.data);
  //const kimObj = response.data;
  const k143 = createCard(response.data);
  document.querySelector('.cards').appendChild(k143);

})
.catch((error) => {
  console.error(error);
})

//create card
const createCard = (d) => {
  const eCard = document.createElement('div');
  eCard.classList.add('card');

  const gitImg = document.createElement('img');
  gitImg.src = d.avatar_url;
  eCard.appendChild(gitImg);

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  eCard.appendChild(cardInfo);

  const name = document.createElement('h3');
  cardInfo.classList.add('name');
  name.textContent = d.name;
  cardInfo.appendChild(name);

  const location = document.createElement('p');
  location.classList.add('name');
  location.textContent = d.login;
  cardInfo.appendChild(location);

  const userName = document.createElement('p');
  userName.classList.add('name');
  userName.textContent = `Location ${d.location}`;
  cardInfo.appendChild(userName);

  

  const profile = document.createElement('p');
  const profileText = document.createTextNode('Profile: ');
  profile.appendChild(profileText);

  const anchor = document.createElement('a');
  anchor.href = d.url;
  anchor.textContent = d.url;
  profile.appendChild(anchor);
  cardInfo.appendChild(profile);

  const follower = document.createElement('p');
  follower.textContent = `Followers: ${d.followers}`;
  cardInfo.appendChild(follower);

  const following = document.createElement('p');
  following.textContent = `Following : ${d.following}`;
  cardInfo.appendChild(following);

  const userBio = document.createElement('p');
  userBio.textContent = `Bio: ${d.bio}`;
  cardInfo.appendChild(userBio);

  return eCard;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/