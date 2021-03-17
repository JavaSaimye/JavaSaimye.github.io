// document.getElementById("Nasircrazysbutton").onclick = function () {
//        location.href = "https://instagram.com/kkidsofficial?igshid=9uzq7qmv9m6g";
//    };


class Creator {
  constructor(name, img, instagram, youtube, tiktok, snapchat) {
    this.name = name;
    this.img = img;
    this.instagram = instagram;
    this.youtube = youtube;
    this.tiktok = tiktok;
    this.snapchat = snapchat;
  }

  name = '';
  instagram = '';
  youtube = '';
  img = '';
  tiktok = '';
  snapchat = '';
}
let creators = [
  new Creator('The K Kids', 'img/KOOLKIDS.PNG', 'https://instagram.com/kkidsofficial?igshid=9uzq7qmv9m6g', 'http://www.youtube.com', 'https://vm.tiktok.com/ZMeBVtDNu/', 'https://www.snapchat.com/add/officialkkids'),
  new Creator('CEO Kent', 'img/KKidceokent.PNG', 'https://www.instagram.com/kent_the_1_/', 'https://www.youtube.com/channel/UCnULInpXyWyf-UVFgmeGanw', 'https://vm.tiktok.com/ZMeBqeRwj/', 'https://www.snapchat.com/add/kent_the1'),
  new Creator('KKid Nasircrazy', 'img/kkidnasir.PNG', ' https://instagram.com/antisocial.saimye?igshid=x2ummzof6yj9', 'https://www.youtube.com/channel/UCj6xb5we-yemmWV-89o-V8A', 'www.tiktok.com/@nasircrazy', 'https://www.snapchat.com/add/butterball1-1'),
  new Creator('KKid Kay', 'img/Kkidkay.PNG', 'https://instagram.com/ssupremediior?igshid=fcn40son7pn0', '', '',''),
  new Creator('KKid Worm', 'img/KKidworm.PNG', 'https://instagram.com/antisocialworm?igshid=x3adopxlprnl', 'https://www.youtube.com/channel/UCpM0hNNFlhUYxX8BCvE0L5g', 'https://vm.tiktok.com/ZMeBqJHW2/','https://www.snapchat.com/add/jjstackz9'),
  new Creator('KKid Myasia', 'img/KKidMyasia.PNG', 'https://instagram.com/iiam_.myasia?igshid=r5qx8jga6yf3', '', '',''),
  new Creator('KKid Brii', 'img/KKiddiamond.PNG', 'https://instagram.com/_bri_baby_2?igshid=8cl673ywz9b2', '', '',''),
  new Creator('KKid Tatii', 'img/KKidTatii.PNG', 'https://instagram.com/prettyluh.tatii_?igshid=9t5tncyrpco6', '', 'www.tiktok.com/@wh0.tati','https://www.snapchat.com/add/tati_lookgood'),
  new Creator('KKid Ant', 'img/KKidantt.PNG', ' https://instagram.com/antisocial.anttt?igshid=qr0l7uek0upa', 'https://youtube.com/channel/UC0702IdOtuuKRz1qzdplHxw', 'https://vm.tiktok.com/ZMeBudcdF/','https://www.snapchat.com/add/lonely.ant'),
  new Creator('KKid Ibxp', 'img/KKidibxp.PNG', 'https://instagram.com/ibxp__?igshid=apd0qvi73gcl', 'https://soundcloud.com/naim-allison', 'https://vm.tiktok.com/ZMeBqjg5g/',''),
  new Creator('KKid Jaay', 'img/KKidjournei.PNG', 'https://instagram.com/positivejournei?igshid=24wvhruz7fey', '', '',''),
  new Creator('KKid Dink', 'img/KKiddink.PNG', 'https://instagram.com/bigdinks03?igshid=16j66u1aiq5bp', 'https://youtu.be/OzrS98x5bZk', 'https://vm.tiktok.com/ZMeSRofrg/','https://www.snapchat.com/add/daiyonj22'),
  new Creator('KKid Shayy', 'img/KKidshayy.PNG', 'https://instagram.com/picsofshayy?igshid=122l52d7et84w', '', '',''),
  new Creator('KKid Qutez', 'img/KKidqutez.PNG', 'https://instagram.com/qutez_4ever?igshid=1boro16tk6lzs', 'https://youtube.com/channel/UCJp2CGKZqVxy5FuR0TAGptw', 'https://vm.tiktok.com/ZMeSN1Wn3/','https://www.snapchat.com/add/moonlightbaetez'),
  new Creator('KKid Mar', 'img/KKidmar.PNG', 'https://instagram.com/prettyyluhh_mar?igshid=ajnmkq252fhc', '', '',''),
  new Creator('KKid Riek', 'img/KKidriek.PNG', 'https://instagram.com/2official.riek?igshid=1j32s9ltnl669', '', '',''),
  new Creator('KKid Vaeh', 'img/KKidveah.PNG', 'https://instagram.com/cheerupnevaeh?igshid=10xeik7y055i0', '', 'https://vm.tiktok.com/ZMeSNUGdj/','')


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
  if (creators[creatorCounter].instagram) pBox.innerHTML += `<img class="platformLogo" src="img/instagram.png" onclick="location.href='${creators[creatorCounter].instagram}'">`;
  if (creators[creatorCounter].youtube) pBox.innerHTML += `<img class="platformLogo" src="img/youtube.png" onclick="location.href='${creators[creatorCounter].youtube}'">`;
  if (creators[creatorCounter].tiktok) pBox.innerHTML += `<img class="platformLogo" src="img/tik-tok-logo.png" onclick="location.href='${creators[creatorCounter].tiktok}'">`;
    if (creators[creatorCounter].snapchat) pBox.innerHTML += `<img class="platformLogo" src="img/snapchat.png" onclick="location.href='${creators[creatorCounter].snapchat}'">`;
  document.getElementById("kkidslist").appendChild(pBox)
}



nextKid(true);

// creators.forEach((kkid, i) => {
// document.getElementById("kkidslist").innerHTML += `<h2>${kkid.name}</h2><img src="${kkid.img}" onclick="location.href='${kkid.ig}'"><button onclick="location.href='${kkid.yt}'">${kkid.name}\'s Youtube`;
// });
