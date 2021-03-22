// document.getElementById("Nasircrazysbutton").onclick = function () {
//        location.href = "https://instagram.com/kkidsofficial?igshid=9uzq7qmv9m6g";
//    };


class Creator {
  constructor(name, img, instagram, youtube, tiktok, snapchat, bgcolor) {
    this.name = name;
    this.img = img;
    this.instagram = instagram;
    this.youtube = youtube;
    this.tiktok = tiktok;
    this.snapchat = snapchat;
    if (bgcolor) this.backgroundColor = bgcolor;
  }

  name = '';
  instagram = '';
  youtube = '';
  img = '';
  tiktok = '';
  snapchat = '';
  backgroundColor = '#333333';
}
let creators = [
  new Creator('The K Kids', 'img/KOOLKIDS.PNG', 'https://instagram.com/kkidsofficial?igshid=9uzq7qmv9m6g', 'http://www.youtube.com', 'https://vm.tiktok.com/ZMeBVtDNu/', 'https://www.snapchat.com/add/officialkkids',"#000000"),
  new Creator('CEO Kent', 'img/KKidceokent.PNG', 'https://www.instagram.com/kent_the_1_/', 'https://www.youtube.com/channel/UCnULInpXyWyf-UVFgmeGanw', 'https://vm.tiktok.com/ZMeBqeRwj/', 'https://www.snapchat.com/add/kent_the1',"#0000FF"),
  new Creator('KKid Nasircrazy', 'img/kkidnasir.PNG', ' https://instagram.com/antisocial.saimye?igshid=x2ummzof6yj9', 'https://www.youtube.com/channel/UCj6xb5we-yemmWV-89o-V8A', 'www.tiktok.com/@nasircrazy', 'https://www.snapchat.com/add/butterball1-1',"#66B2FF"),
//  new Creator('KKid Kay', 'img/Kkidkay.PNG', 'https://instagram.com/ssupremediior?igshid=fcn40son7pn0', '', '', '',"#0000FF"),
  new Creator('KKid Worm', 'img/KKidworm.PNG', 'https://instagram.com/antisocialworm?igshid=x3adopxlprnl', 'https://www.youtube.com/channel/UCpM0hNNFlhUYxX8BCvE0L5g', 'https://vm.tiktok.com/ZMeBqJHW2/', 'https://www.snapchat.com/add/jjstackz9',"#000000"),
//  new Creator('KKid Brii', 'img/KKiddiamond.PNG', 'https://instagram.com/_bri_baby_2?igshid=8cl673ywz9b2', '', '', '',"#0000FF"),
//  new Creator('KKid Tatii', 'img/KKidTatii.PNG', 'https://instagram.com/prettyluh.tatii_?igshid=9t5tncyrpco6', '', 'www.tiktok.com/@wh0.tati', 'https://www.snapchat.com/add/tati_lookgood',"#0000FF"),
  new Creator('KKid Ant', 'img/KKidantt.PNG', ' https://instagram.com/antisocial.anttt?igshid=qr0l7uek0upa', 'https://youtube.com/channel/UC0702IdOtuuKRz1qzdplHxw', 'https://vm.tiktok.com/ZMeBudcdF/', 'https://www.snapchat.com/add/lonely.ant',"#009900"),
  new Creator('KKid Swervo', 'img/KKidswervo.PNG', 'https://instagram.com/antisocial.swervo?igshid=17j8dz3kwfls', 'https://www.youtube.com/channel/UCpWpfHnYYR7VbqstUSJ5PJA', 'https://vm.tiktok.com/ZMeA7vHL3/', 'https://www.snapchat.com/add/yrnsebastian',"#994C00"),
  new Creator('KKid Jaay', 'img/KKidjournei.PNG', 'https://instagram.com/positivejournei?igshid=24wvhruz7fey', '', '', '',"#000000"),
  new Creator('KKid Dink', 'img/KKiddink.PNG', 'https://instagram.com/bigdinks03?igshid=16j66u1aiq5bp', 'https://youtu.be/OzrS98x5bZk', 'https://vm.tiktok.com/ZMeSRofrg/', 'https://www.snapchat.com/add/daiyonj22',"#000000"),
//  new Creator('KKid Shayy', 'img/KKidshayy.PNG', 'https://instagram.com/picsofshayy?igshid=122l52d7et84w', '', '', '',"#0000FF"),
  new Creator('KKid Qutez', 'img/KKidqutez.PNG', 'https://instagram.com/qutez_4ever?igshid=1boro16tk6lzs', 'https://youtube.com/channel/UCJp2CGKZqVxy5FuR0TAGptw', 'https://vm.tiktok.com/ZMeSN1Wn3/', 'https://www.snapchat.com/add/moonlightbaetez',"#CC6600"),
  new Creator('KKid Mar', 'img/KKidmar.PNG', 'https://instagram.com/prettyyluhh_mar?igshid=ajnmkq252fhc', '', '', '',"#808080"),
  new Creator('KKid Riek', 'img/KKidriek.PNG', 'https://instagram.com/2official.riek?igshid=1j32s9ltnl669', '', '', '',"#000000"),
  new Creator('KKid Vaeh', 'img/KKidvaeh.PNG', 'https://instagram.com/cheerupnevaeh?igshid=10xeik7y055i0', '', 'https://vm.tiktok.com/ZMeSNUGdj/', '',"#03a5fc"),
  new Creator('The KKids Follower Count for Instagram🤩', 'img/Followercount.PNG', 'https://socialblade.com/instagram/user/kkidsofficial', '', '', '',"#FF007F"),
  new Creator('The KKids Follower Count for Youtube 😌 ', 'img/Followercountyt.PNG', '', 'https://socialblade.com/youtube/realtimekids', '', '',"#FF0000"),
  new Creator('The KKids Follower Count for Tiktok 🥶', 'img/Followercounttiktok.PNG', '', '', 'https://socialblade.com/tiktok/user/official_kkids', '',"#660033"),
  new Creator('Content Every Saturday!!!!!!! GO LIKE, COMMENT, AND SHARE LOVE - KKIDS 💜  ', 'img/saturday.PNG', '', '', '', '',"#7ca8c4"),

]

creatorCounter = -1;


function nextKid(next) {
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
  document.getElementById("kkidslist").innerHTML = `<h2>${creators[creatorCounter].name}</h2>`
  document.getElementById("kkidslist").innerHTML += `<img id="kkImage" src="${creators[creatorCounter].img}" onclick="location.href='${creators[creatorCounter].instagram}'">`
  let pBox = document.createElement('div');
  pBox.id = 'platformBox';
  //if (creators[creatorCounter].backgroundColor) document.getElementById("kkidslist").style.backgroundColor = creators[creatorCounter].backgroundColor;
  if (creators[creatorCounter].backgroundColor) document.getElementById("content").style.backgroundColor = creators[creatorCounter].backgroundColor;
  if (creators[creatorCounter].instagram) pBox.innerHTML += `<img class="platformLogo" src="img/instagram.png" onclick="location.href='${creators[creatorCounter].instagram}'">`;
  if (creators[creatorCounter].youtube) pBox.innerHTML += `<img class="platformLogo" src="img/youtube.png" onclick="location.href='${creators[creatorCounter].youtube}'">`;
  if (creators[creatorCounter].tiktok) pBox.innerHTML += `<img class="platformLogo" src="img/tik-tok-logo.png" onclick="location.href='${creators[creatorCounter].tiktok}'">`;
  if (creators[creatorCounter].snapchat) pBox.innerHTML += `<img class="platformLogo" src="img/snapchat.png" onclick="location.href='${creators[creatorCounter].snapchat}'">`;

  document.getElementById("kkidslist").appendChild(pBox)
}
//  function newKid()
//<select id="cars">
  //<option value="volvo">Volvo</option>
  //<option value="saab">Saab</option>
  //<option value="opel">Opel</option>
  //<option value="audi">Audi</option>
//</select>

nextKid(true);

// creators.forEach((kkid, i) => {
// document.getElementById("kkidslist").innerHTML += `<h2>${kkid.name}</h2><img src="${kkid.img}" onclick="location.href='${kkid.ig}'"><button onclick="location.href='${kkid.yt}'">${kkid.name}\'s Youtube`;
// });
