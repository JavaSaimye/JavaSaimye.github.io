// document.getElementById("Nasircrazysbutton").onclick = function () {
//        location.href = "https://instagram.com/kkidsofficial?igshid=9uzq7qmv9m6g";
//    };


class Creator {
  constructor(name, img, instagram, youtube, tiktok) {
    this.name = name;
    this.img = img;
    this.instagram = instagram;
    this.youtube = youtube;
    this.tiktok = tiktok;
  }
  name = '';
  instagram = '';
  youtube = '';
  img = '';
  tiktok ='';
}
let creators = [
  new Creator('The K Kids', 'img/KOOLKIDS.PNG', 'https://instagram.com/kkidsofficial?igshid=9uzq7qmv9m6g', 'http://www.youtube.com', 'https://vm.tiktok.com/ZMeBVtDNu/'),
  new Creator('CEO Kent', 'img/KKidceokent.PNG', 'https://www.instagram.com/kent_the_1_/', 'https://www.youtube.com/channel/UCnULInpXyWyf-UVFgmeGanw', 'https://vm.tiktok.com/ZMeBqeRwj/'),
  new Creator('KKid Nasircrazy','img/kkidnasir.PNG', ' https://instagram.com/antisocial.saimye?igshid=x2ummzof6yj9', 'https://www.youtube.com/channel/UCj6xb5we-yemmWV-89o-V8A', 'www.tiktok.com/@nasircrazy'),
  new Creator('KKid Kay', 'img/Kkidkay.PNG', 'https://instagram.com/ssupremediior?igshid=fcn40son7pn0', '', ''),
  new Creator('KKid Worm', 'img/KKidworm.PNG', 'https://instagram.com/antisocialworm?igshid=x3adopxlprnl', 'https://www.youtube.com/channel/UCpM0hNNFlhUYxX8BCvE0L5g', 'https://vm.tiktok.com/ZMeBqJHW2/'),
  new Creator('KKid Myasia', 'img/KKidMyasia.PNG', 'https://instagram.com/iiam_.myasia?igshid=r5qx8jga6yf3', '', ''),
  new Creator('KKid Brii', 'img/KKiddiamond.PNG', 'https://instagram.com/_bri_baby_2?igshid=8cl673ywz9b2', '', ''),
  new Creator('KKid Tatii', 'img/KKidTatii.PNG', 'https://instagram.com/prettyluh.tatii_?igshid=9t5tncyrpco6', '', ''),
  new Creator('KKid Ant', 'img/KKidantt.PNG', ' https://instagram.com/antisocial.anttt?igshid=qr0l7uek0upa', 'https://youtube.com/channel/UC0702IdOtuuKRz1qzdplHxw', 'https://vm.tiktok.com/ZMeBudcdF/'),
  new Creator('KKid Ibxp', 'img/KKidibxp.PNG', 'https://instagram.com/ibxp__?igshid=apd0qvi73gcl', 'https://soundcloud.com/naim-allison', 'https://vm.tiktok.com/ZMeBqjg5g/'),
  new Creator('KKid Jaay', 'img/KKidjournei.PNG', 'https://instagram.com/positivejournei?igshid=24wvhruz7fey', '', ''),
  new Creator('KKid Dink', 'img/KKiddink.PNG', 'https://instagram.com/bigdinks03?igshid=16j66u1aiq5bp', '', ''),
  new Creator('KKid Shayy', 'img/KKidshayy.PNG', 'https://instagram.com/picsofshayy?igshid=122l52d7et84w', '', ''),
  new Creator('KKid Qutez', 'img/KKidqutez.PNG', 'https://instagram.com/qutez_4ever?igshid=1boro16tk6lzs', '', ''),
  new Creator('KKid Mar', 'img/KKidmar.PNG', 'https://instagram.com/prettyyluhh_mar?igshid=ajnmkq252fhc', '', ''),
  new Creator('KKid Riek', 'img/KKidriek.PNG', 'https://instagram.com/2official.riek?igshid=1j32s9ltnl669', '', ''),
  new Creator('KKid Veah', 'img/KKidveah.PNG', 'https://instagram.com/cheerupnevaeh?igshid=10xeik7y055i0', '', '')


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
//  document.getElementById("kkidslist").innerHTML += `<img src="${creators[creatorCounter].img}"
  document.getElementById("kkidslist").innerHTML += `<button onclick="location.href='${creators[creatorCounter].instagram}'">${creators[creatorCounter].name}\'s Instagram</button>`;
  document.getElementById("kkidslist").innerHTML += `<button onclick="location.href='${creators[creatorCounter].youtube}'">${creators[creatorCounter].name}\'s Youtube</button>`;
  document.getElementById("kkidslist").innerHTML += `<button onclick="location.href='${creators[creatorCounter].tiktok}'">${creators[creatorCounter].name}\'s TikTok</button>`;
}

function instagram (){
  document.getElementById("exampleImage").src = "instagram.jpg";
}
function youtube (){
  document.getElementById("exampleImage").src = "youtube.png";
}
function tiktok (){
  document.getElementById("exampleImage").src = "tik-tok-logo.png";
}

nextKid(true);

// creators.forEach((kkid, i) => {
// document.getElementById("kkidslist").innerHTML += `<h2>${kkid.name}</h2><img src="${kkid.img}" onclick="location.href='${kkid.ig}'"><button onclick="location.href='${kkid.yt}'">${kkid.name}\'s Youtube`;
// });
