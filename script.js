

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
  new Creator('ABGM 🖤', 'img/abgm.PNG', 'INSTA', 'https://www.youtube.com/channel/UCj6xb5we-yemmWV-89o-V8A', 'https://vm.tiktok.com/TTPd2jmsy6/', 'SNAP',"rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)"),
  new Creator('Nasircrazy🦋', 'img/nasircrazy.PNG', ' https://instagram.com/antisocial.saimye?igshid=x2ummzof6yj9', 'https://www.youtube.com/channel/UC6nsy6Qk9W1ffOuZqRVGUpg', 'www.tiktok.com/@nasircrazy', 'https://www.snapchat.com/add/butterball1-1',"rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)" ),
  new Creator('Worm 🇩🇴', 'img/worm.PNG', 'https://instagram.com/antisocialworm?igshid=x3adopxlprnl', 'https://www.youtube.com/channel/UCpM0hNNFlhUYxX8BCvE0L5g', 'https://vm.tiktok.com/ZMeBqJHW2/', 'https://www.snapchat.com/add/jjstackz9',"rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)"),
  new Creator('Swervo🏋🏽‍♂️', 'img/swervo.PNG', 'https://instagram.com/antisocial.swervo?igshid=17j8dz3kwfls', 'https://www.youtube.com/channel/UCpWpfHnYYR7VbqstUSJ5PJA', 'https://vm.tiktok.com/ZMeA7vHL3/', 'https://www.snapchat.com/add/yrnsebastian',"rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)"),
  new Creator('Jeff🗽', 'img/jeff.PNG', 'https://instagram.com/abgm.jeff?utm_medium=copy_link', 'https://www.youtube.com/channel/UCpM0hNNFlhUYxX8BCvE0L5g', 'https://vm.tiktok.com/TTPd2j68Kf/', 'https://www.snapchat.com/add/ny.val?share_id=NDEzN0Ux&locale=en_US',"rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)"),
  new Creator('Angel⚾️', 'img/angel.PNG', 'https://instagram.com/abgm.boogz?utm_medium=copy_link', 'https://www.youtube.com/channel/UCpM0hNNFlhUYxX8BCvE0L5g', 'https://vm.tiktok.com/TTPd2jx18Q/', 'https://www.snapchat.com/add/sportskidd23',"rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)"),
  new Creator('The ABGM Follower Count for Instagram🤩', 'img/countig.PNG', 'https://socialblade.com/instagram/user/kkidsofficial', '', '', '',"rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)"),
  new Creator('The ABGM Follower Count for Youtube 😌 ', 'img/countyt.PNG', '', 'https://socialblade.com/youtube/channel/UCj6xb5we-yemmWV-89o-V8A/realtime', '', '',"rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)"),
  new Creator('The ABGM Follower Count for Tiktok 🥶', 'img/counttiktok.PNG', '', '', 'tiktok', '',"rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)"),
  new Creator('Content Every Friday!!!!!!! GO LIKE, COMMENT, AND SHARE LOVE - ABGM 🖤  ', 'img/friday.PNG', '', '', '', '',"rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.1)",'W'),
]



creatorCounter = -1;


function nextAbgm(next) {
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
  document.getElementById("abgmlist").innerHTML = `<h2>${creators[creatorCounter].name}</h2>`
  document.getElementById("abgmlist").innerHTML += `<img id="abgmImage" src="${creators[creatorCounter].img}" onclick="location.href='${creators[creatorCounter].instagram}'">`
  let pBox = document.createElement('div');
  pBox.id = 'platformBox';
  //if (creators[creatorCounter].backgroundColor) document.getElementById("kkidslist").style.backgroundColor = creators[creatorCounter].backgroundColor;
  if (creators[creatorCounter].backgroundColor) document.getElementById("content").style.backgroundColor = creators[creatorCounter].backgroundColor;
  pBox.innerHTML += `Social Media📲 <br>`
  if (creators[creatorCounter].instagram) pBox.innerHTML += `<img class="platformLogo" src="img/instagram.png" onclick="location.href='${creators[creatorCounter].instagram}'">`;
  if (creators[creatorCounter].youtube) pBox.innerHTML += `<img class="platformLogo" src="img/youtube.png" onclick="location.href='${creators[creatorCounter].youtube}'">`;
  if (creators[creatorCounter].tiktok) pBox.innerHTML += `<img class="platformLogo" src="img/tik-tok-logo.png" onclick="location.href='${creators[creatorCounter].tiktok}'">`;
  if (creators[creatorCounter].snapchat) pBox.innerHTML += `<img class="platformLogo" src="img/snapchat.png" onclick="location.href='${creators[creatorCounter].snapchat}'">`;
  if (creators[creatorCounter].merch) pBox.innerHTML += `<img class="platformLogo" src="img/merch.png" onclick="location.href='${creators[creatorCounter].merch}'">`;

  document.getElementById("abgmlist").appendChild(pBox)
}

  nextAbgm(true);
