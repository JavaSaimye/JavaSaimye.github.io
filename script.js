// document.getElementById("Nasircrazysbutton").onclick = function () {
//        location.href = "https://instagram.com/kkidsofficial?igshid=9uzq7qmv9m6g";
//    };


class Creator {
  constructor(name, img, ig, yt, tiktok) {
    this.name = name;
    this.img = img;
    this.ig = ig;
    this.yt = yt;
    this.tiktok = tiktok;
  }
  name = '';
  ig = '';
  yt = '';
  img = '';
}
let creators = [
  new Creator('The K Kids', 'img/KOOLKIDS.PNG', '', '', ''),
  new Creator('CEO Kentin', 'img/KKidceokent.PNG', '', '', ''),
  new Creator('Nasircrazy', 'img/kkidnasir.png', 'https://instagram.com/kkidsofficial?igshid=9uzq7qmv9m6g', 'http://www.youtube.com',''),
  new Creator('Kay', 'img/KKidkay.PNG', '', '', ''),
  new Creator('Worm', 'img/KKidworm.PNG', '', '', ''),
  new Creator('Myasia', 'img/KKidmyasia.PNG', '', '', ''),
  new Creator('Diamond', 'img/KKiddiamond.PNG', '', '', ''),
  new Creator('Tatii', 'img/KKidtatii.PNG', '', '', ''),
  new Creator('Anthony', 'img/KKidant.PNG', '', '', ''),
  new Creator('Ibxp', 'img/KKidibxp.PNG', '', '', ''),
  new Creator('Journei', 'img/KKidjournei.PNG', '', '', '')

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
  document.getElementById("kkidslist").innerHTML += `<img src="${creators[creatorCounter].img}" onclick="location.href='${creators[creatorCounter].ig}'">`
  document.getElementById("kkidslist").innerHTML += `<button onclick="location.href='${creators[creatorCounter].yt}'">${creators[creatorCounter].name}\'s Youtube</button>`;
  document.getElementById("kkidslist").innerHTML += `<button onclick="location.href='${creators[creatorCounter].tiktok}'">${creators[creatorCounter].name}\'s TikTok</button>`;

}

nextKid(true);

// creators.forEach((kkid, i) => {
  // document.getElementById("kkidslist").innerHTML += `<h2>${kkid.name}</h2><img src="${kkid.img}" onclick="location.href='${kkid.ig}'"><button onclick="location.href='${kkid.yt}'">${kkid.name}\'s Youtube`;
// });
