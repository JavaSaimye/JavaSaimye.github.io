

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
  new Creator('Nasircrazy🦋', 'img/nasircrazy.PNG', ' https://instagram.com/antisocial.saimye?igshid=x2ummzof6yj9', 'https://www.youtube.com/channel/UCj6xb5we-yemmWV-89o-V8A', 'www.tiktok.com/@nasircrazy', 'https://www.snapchat.com/add/butterball1-1',"rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)" ),
  new Creator('The ABGM Follower Count for Instagram🤩', 'img/countig.PNG', 'https://socialblade.com/instagram/user/kkidsofficial', '', '', '',"rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)"),
  new Creator('The ABGM Follower Count for Youtube 😌 ', 'img/countyt.PNG', '', 'https://socialblade.com/youtube/channel/UCj6xb5we-yemmWV-89o-V8A/realtime', '', '',"rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)"),
  new Creator('The ABGM Follower Count for Tiktok 🥶', 'img/counttiktok.PNG', '', '', 'tiktok', '',"rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)"),
  new Creator('Content Every Friday!!!!!!! GO LIKE, COMMENT, AND SHARE LOVE - ABGM 🖤  ', 'img/friday.PNG', '', '', '', '',"rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)")
]
creatorCounter = -1;

function nextNasircrazy(next) {
  if (next) {
    creatorCounter++;
    if (creatorCounter >= creators.length) {
      creatorCounter = 0;
    }
  } else {
    creatorCounter--;
    if (creatorCounter < 0) {
      creatorCounter = creators.length - 1;
    }
  }
  document.getElementById("Nasircrazylist").innerHTML = `<h2>${creators[creatorCounter].name}</h2>`
  document.getElementById("Nasircrazylist").innerHTML += `<img id="NasircrazyImage" src="${creators[creatorCounter].img}" onclick="location.href='${creators[creatorCounter].instagram}'">`
  let pBox = document.createElement('div');
  pBox.id = 'platformBox';
  if (creators[creatorCounter].backgroundColor) document.getElementById("content").style.backgroundColor = creators[creatorCounter].backgroundColor;
  pBox.innerHTML += `Social Media📲 <br>`
  if (creators[creatorCounter].instagram) pBox.innerHTML += `<img class="platformLogo" src="img/instagram.png" onclick="location.href='${creators[creatorCounter].instagram}'">`;
  if (creators[creatorCounter].youtube) pBox.innerHTML += `<img class="platformLogo" src="img/youtube.png" onclick="location.href='${creators[creatorCounter].youtube}'">`;
  if (creators[creatorCounter].tiktok) pBox.innerHTML += `<img class="platformLogo" src="img/tik-tok-logo.png" onclick="location.href='${creators[creatorCounter].tiktok}'">`;
  if (creators[creatorCounter].snapchat) pBox.innerHTML += `<img class="platformLogo" src="img/snapchat.png" onclick="location.href='${creators[creatorCounter].snapchat}'">`;
  if (creators[creatorCounter].merch) pBox.innerHTML += `<img class="platformLogo" src="img/merch.png" onclick="location.href='${creators[creatorCounter].merch}'">`;

  document.getElementById("Nasircrazylist").appendChild(pBox)
}

  nextNasircrazy(true);
