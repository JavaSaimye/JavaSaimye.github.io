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
  new Creator('The K Kids', 'img/KOOLKIDS.PNG', 'https://instagram.com/kkidsofficial?igshid=9uzq7qmv9m6g', 'http://www.youtube.com', ''),
  new Creator('CEO Kent', 'img/KKidceokent.PNG', 'https://www.instagram.com/kent_the_1_/', 'https://www.youtube.com/channel/UCnULInpXyWyf-UVFgmeGanw', ''),
  new Creator('KKid Nasircrazy','img/kkidnasir.PNG', '', 'https://www.youtube.com/channel/UCj6xb5we-yemmWV-89o-V8A', ''),
  new Creator('KKid Kay', 'img/Kkidkay.PNG', '', '', ''),
  new Creator('KKid Worm', 'img/KKidworm.PNG', '', 'https://www.youtube.com/channel/UCpM0hNNFlhUYxX8BCvE0L5g', ''),
  new Creator('KKid Myasia', 'img/KKidMyasia.PNG', '', '', ''),
  new Creator('KKid Brii', 'img/KKiddiamond.PNG', '', '', ''),
  new Creator('KKid Tatii', 'img/KKidTatii.PNG', '', '', ''),
  new Creator('KKid Ant', 'img/KKidant.PNG', '', '', ''),
  new Creator(' KKid Ibxp', 'img/KKidibxp.PNG', '', '', ''),
  new Creator(' KKid Jaay', 'img/KKidjournei.PNG', '', '', '')

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
