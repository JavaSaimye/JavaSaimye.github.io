
class Creator {
  constructor(name, img, instagram, youtube, tiktok, snapchat, bgcolor, pbcolor, merch) {
    this.name = name;
    this.img = img;
    this.instagram = instagram;
    this.youtube = youtube;
    this.tiktok = tiktok;
    this.snapchat = snapchat;
    if (bgcolor) this.backgroundColor = bgcolor;
    if (pbcolor) this.platformBox = pbcolor;
    this.merch = merch;
  }

  name = '';
  instagram = '';
  youtube = '';
  img = '';
  tiktok = '';
  snapchat = '';
  backgroundColor = '#333333';
  platformBox = '#333333';
  merch = '';
}
let creators = [

  new Creator('Nasircrazy💰', 'img/nasircrazy.PNG', ' https://instagram.com/antisocial.saimye?igshid=x2ummzof6yj9', 'https://www.youtube.com/channel/UCj6xb5we-yemmWV-89o-V8A', 'www.tiktok.com/@nasircrazy', 'https://www.snapchat.com/add/butterball1-1',"#66B2FF","#66B2FF" ),
  new Creator('KKid Worm🛸', 'img/KKidworm.PNG', 'https://instagram.com/antisocialworm?igshid=x3adopxlprnl', 'https://www.youtube.com/channel/UCpM0hNNFlhUYxX8BCvE0L5g', 'https://vm.tiktok.com/ZMeBqJHW2/', 'https://www.snapchat.com/add/jjstackz9',"#000000","#000000"),

]

socialmediaCounter = -1;


function nextLink(next) {
  if (next) {
    socialmediaCounter++;
    if (socialmediaCounter >= creators.length) {
      socialmediaCounter = 0;
    }
  } else {
    socialmediaCounter--;
    if (socialmediaCounter < 0) {
      socialmediaCounter = creators.length - 1;
    }
  }
  document.getElementById("nextmediaoutlet").innerHTML = `<h2>${creators[socialmediaCounter].name}</h2>`
  document.getElementById("nextmediaoutlet").innerHTML += `<img id="nasircrazyImage" src="${creators[socialmediaCounter].img}" onclick="location.href='${creators[socialmediaCounter].instagram}'">`
  let pBox = document.createElement('div');
  pBox.id = 'platformBox';
  if (creators[socialmediaCounter].backgroundColor) document.getElementById("content").style.backgroundColor = creators[socialmediaCounter].backgroundColor;
  pBox.innerHTML += `Social Media📲 <br>`
  if (creators[socialmediaCounter].instagram) pBox.innerHTML += `<img class="platformLogo" src="img/instagram.png" onclick="location.href='${creators[socialmediaCounter].instagram}'">`;
  if (creators[socialmediaCounter].youtube) pBox.innerHTML += `<img class="platformLogo" src="img/youtube.png" onclick="location.href='${creators[socialmediaCounter].youtube}'">`;
  if (creators[socialmediaCounter].tiktok) pBox.innerHTML += `<img class="platformLogo" src="img/tik-tok-logo.png" onclick="location.href='${creators[socialmediaCounter].tiktok}'">`;
  if (creators[socialmediaCounter].snapchat) pBox.innerHTML += `<img class="platformLogo" src="img/snapchat.png" onclick="location.href='${creators[socialmediaCounter].snapchat}'">`;

  document.getElementById("nextmediaoutlet").appendChild(pBox);
  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
}

nextLink(true);
