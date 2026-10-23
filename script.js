const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container3");
const container4 = document.querySelector(".container4");

const song1lyrics = document.querySelector(".song1lyrics");
const song2lyrics = document.querySelector(".song2lyrics");
const song3lyrics = document.querySelector(".song3lyrics");
const song4lyrics = document.querySelector(".song4lyrics");

const imgtitle1 = document.querySelector(".imgtitle1");
const imgtitle2 = document.querySelector(".imgtitle2");
const imgtitle3 = document.querySelector(".imgtitle3");
const imgtitle4 = document.querySelector(".imgtitle4");

const bgVideo1 = document.getElementById("bgVideo1");
const bgVideo2 = document.getElementById("bgVideo2");
const bgVideo3 = document.getElementById("bgVideo3");
const bgVideo4 = document.getElementById("bgVideo4");

const pause = document.getElementsByClassName("pause");
const pause1 = pause[0];
const pause2 = pause[1];
const pause3 = pause[2];
const pause4 = pause[3];

const range = document.querySelectorAll(".range");
const range1 = range[0];
const range2 = range[1];
const range3 = range[2];
const range4 = range[3];

let click1 = true;
let click2 = true;
let click3 = true;
let click4 = true;

let isSongOpened = false;
let activeVideo = null;

const lyrics1 = [
  { time: 0 },
  { time: 21, text: "You've been my muse for a long time" },
  { time: 26, text: "You get me through every dark night" },
  { time: 31, text: "I'm always gone, out on the go" },
  { time: 33.5, text: "I'm on the run and you're home alone" },
  { time: 36, text: "I'm too consumed with my own life" },

  { time: 42.5, text: "Are we too young for this?" },
  { time: 47.5, text: "Feels like I can't move" },

  { time: 50, text: "Sharing my heart" },
  { time: 52, text: "It's tearing me apart" },
  { time: 54, text: "But I know I'd miss you, baby, if I left right now" },
  { time: 60.5, text: "Doing what I can, tryna be a man" },
  { time: 64, text: "And every time I kiss you, baby" },
  { time: 65.8, text: "I can hear the sound of breaking down" },

  { time: 82, text: "I've been confused as of late (Yeah)" },
  { time: 87.4, text: "Watching my youth slip away (Yeah)" },
  { time: 92, text: "You're like the sun, you wake me up" },
  { time: 94.3, text: "But you drain me out if I get too much" },
  { time: 97.5, text: "I might need room or I'll break" },

  { time: 104, text: "Are we too young for this?" },
  { time: 108.5, text: "Feels like I can't move" },

  { time: 111.5, text: "Sharing my heart" },
  { time: 113.5, text: "It's tearing me apart" },
  { time: 115.5, text: "But I know I'd miss you, baby, if I left right now" },
  { time: 122, text: "Doing what I can, tryna be a man" },
  { time: 125.7, text: "And every time I kiss you, baby" },
  { time: 127.5, text: "I can hear the sound of breaking down" },

  { time: 131.5, text: "Breaking down, breaking down, breaking down" },
  { time: 135.5, text: "Breaking down, breaking down, breaking down" },
  { time: 143, text: "I don't want to play this part" },
  { time: 147.5, text: "But I do, all for you" },
  { time: 153, text: "I don't want to make this hard" },
  { time: 157.5, text: "But I will 'cause I'm still" },

  { time: 162.8, text: "Sharing my heart" },
  { time: 164.5, text: "It's tearing me apart" },
  {
    time: 166.5,
    text: "But I know I'd miss you, baby, if I left right now (I know I would)",
  },
  { time: 173, text: "Doing what I can, tryna be a man\n(Be your man)" },
  { time: 176.5, text: "And every time I kiss you, baby" },
  { time: 178.5, text: "I can hear the sound of breaking down" },

  { time: 185, text: "Sharing my bed, uh" },
  { time: 187.5, text: "Sharing my bread, yeah" },
  { time: 190, text: "Sharing my bread" },
  { time: 192.7, text: "Sharing my head" },
  { time: 194, text: "(I'm breaking down)" },
  { time: 195.5, text: "Sharing my heart" },
  { time: 197.5, text: "Sharing my, suddenly I'm" },
  { time: 199, text: "(Breaking down)" },
  { time: 200.5, text: "Sharing, I'm done" },
  { time: 202.5, text: "Sharing my life" },
];

const lyrics2 = [
  { time: 0 },
  { time: 19.7, text: "She was always dealing with the devil" },
  { time: 22, text: "She was always into taking those chances, yeah" },
  {
    time: 25,
    text: "She said she met a couple other women who were into going late night",
  },
  { time: 28, text: "dancing, yeah" },
  {
    time: 30,
    text: "Then she fell in love with a pill that could take away all her pain, yuh",
  },
  {
    time: 35,
    text: "Then she fell in love with a whole new drug that could fill her veins",
  },
  { time: 38.7, text: "And then" },

  { time: 40.3, text: "She's high (High)" },
  { time: 42, text: "She lives in the sky" },
  { time: 43.6, text: "Tonight, she's satisfied (Satisfied)" },
  { time: 46.8, text: "Rolling back her eyes" },
  { time: 48.7, text: "But then she starts to cry (To cry)" },
  { time: 51.5, text: "Everything is turning to black" },
  { time: 54.5, text: "All in one night (One night)" },
  { time: 56.7, text: "She just went to heaven and back (Back)" },

  { time: 68.5, text: "Boiling water" },
  { time: 70, text: "Dying in an empty corner" },
  { time: 72.5, text: "Tied to aluminium borders" },
  { time: 75, text: "She tried, but the obsidian caught her, yeah, uh" },
  { time: 78.5, text: "And it might seem like she's crazy" },
  { time: 80.7, text: "By the things that she might say, but" },
  {
    time: 83.5,
    text: "While you're talking, she shoots diamorphine right into her veins",
  },
  { time: 88.4, text: "And then" },

  { time: 89.7, text: "She's high (High)" },
  { time: 91.3, text: "She lives in the sky" },
  { time: 93, text: "Tonight, she's satisfied (Satisfied)" },
  { time: 96.4, text: "Rolling back her eyes" },
  { time: 98, text: "But then, she starts to cry (To cry)" },
  { time: 101.3, text: "Everything is turning to black" },
  { time: 104, text: "All in one night (One night)" },
  { time: 106, text: "She just went to heaven and back (She went)" },
  { time: 109, text: "Yeah, ooh yeah (Oh yeah)" },
  { time: 111.3, text: "She went to heaven and back, ooh yeah, uh" },
  { time: 116.5, text: "She went to heaven and back\n(Yuh, yuh)" },
  { time: 120.7, text: "Now everything is turning to black" },
  { time: 124, text: "All in one night (One night)" },
  { time: 126, text: "She just went to heaven and back" },
  { time: 132.3, text: "Heaven and back" },
  { time: 137.1, text: "Heaven and back" },
  { time: 142.3, text: "Heaven and back" },

  { time: 148, text: "Well, you lied" },
  { time: 150.7, text: "You said you were fine" },
  { time: 152.7, text: "But now you're terrified" },
  { time: 155.5, text: "'Cause you don't wanna die (Die)" },
  { time: 157.8, text: "Then you start to cry" },
  { time: 160.5, text: "You wish that you could take it all back" },
  { time: 165.5, text: "'Cause you just went to heaven and back" },

  { time: 188.5, text: "She's high (High)" },
  { time: 190.3, text: "She lives in the sky" },
  { time: 192.3, text: "Tonight, she's satisfied (Satisfied)" },
  { time: 195.2, text: "Rolling back her eyes" },
  { time: 197, text: "But then, she starts to cry (To cry)" },
  { time: 200, text: "Everything is turning to black" },
  { time: 203, text: "All in one night (One night)" },
  { time: 205, text: "She just went to heaven and back" },
  { time: 208, text: "Yeah, ooh yeah (Oh yeah)" },
  { time: 210.5, text: "She went to heaven and back, ooh yeah, uh" },
  { time: 215.4, text: "She went to heaven and back" },
  { time: 219.5, text: "Now everything is turning to black" },
  { time: 222.5, text: "All in one night (One night)" },
  { time: 225, text: "She just went to heaven and back" },
];

const lyrics3 = [
  { time: 0 },
  {
    time: 20,
    text: "There's another side that you don't know, you don't know",
  },
  { time: 25.5, text: "I can't wait to get you all alone, all alone" },
  { time: 31.2, text: "Once I'm in, there ain't no letting go, letting go" },
  { time: 37, text: "Watch me turn your mind into my home" },

  { time: 42.5, text: "Ooh, ooh, ooh" },
  { time: 51, text: "Mind-mind games until you lose control" },
  { time: 54.7, text: "Ooh, ooh, ooh" },
  { time: 62.3, text: "Mind-mind games, mind games, mind games" },

  { time: 65, text: "Now that I'm in, there's no letting go" },
  { time: 67.5, text: "And your emptiness begins" },
  { time: 70.5, text: "Once I grip onto your mind and soul" },
  { time: 73, text: "Your brightness starts to dim" },
  { time: 76.5, text: "Sin after sin you won't feel no more" },
  { time: 79, text: "And you've lost your trust again" },
  { time: 82, text: "I know you wish you could let me know" },
  { time: 84.5, text: "That you're praying for an end" },

  { time: 87, text: "I can lie to you and tell you" },
  { time: 89.7, text: '"You can get me out your head"' },
  {
    time: 92.5,
    text: "But I'm lovin' all the pain I'm causing you too much instead, baby",
  },

  {
    time: 99,
    text: "There's another side that you don't know, you don't know",
  },
  { time: 104.5, text: "I can't wait to get you all alone, all alone" },
  { time: 110.2, text: "Once I'm in, there ain't no letting go, letting go" },
  { time: 116, text: "Watch me turn your mind into my home" },

  { time: 121.5, text: "Ooh, ooh, ooh" },
  { time: 130, text: "Mind-mind games until you lose control" },
  { time: 133.7, text: "Ooh, ooh, ooh" },
  { time: 141.5, text: "Mind-mind games until you lose control" },

  { time: 144.7, text: "Bitch, you think you know me" },
  { time: 145.8, text: "Holdin' back the dark force so long, call me Kenobi" },
  {
    time: 148.7,
    text: "Thinkin' I just gotta force this song when I get lonely",
  },
  {
    time: 151.5,
    text: "Take advantage, say you'll hold me close but never show me",
  },
  { time: 154.5, text: "Someone told me you can only disguise and be pretend" },
  { time: 157.5, text: "The tears manifest sometimes my only friend" },
  { time: 160, text: "You'll never see them again, they hide behind a mask" },
  {
    time: 163,
    text: "Thinkin' you're winnin' with all of your grinning but I got the last laugh",
  },

  { time: 166, text: "I can lie to you and tell you" },
  { time: 168.6, text: `"I can't get you out my head"` },
  {
    time: 171.5,
    text: "But I'm lovin' watching you think you're controlling me instead, singin'",
  },

  {
    time: 178,
    text: "There's another side that you don't know, you don't know",
  },
  { time: 183.5, text: "I can't wait to get you all alone, all alone" },
  { time: 189.5, text: "Once I'm in, there ain't no letting go, letting go" },
  { time: 195, text: "Watch me turn your mind into my home" },

  { time: 200.5, text: "Ooh, ooh, ooh" },
  { time: 209, text: "Mind-mind games until you lose control" },
  { time: 213, text: "Ooh, ooh, ooh" },
  { time: 220.5, text: "Mind-mind games until you lose control" },
];

const lyrics4 = [
  { time: 0 },
  { time: 14, text: "Oh, she could be up" },
  { time: 15.5, text: "Oh, she could be down" },
  { time: 17.5, text: "But I'm not around to see her (Hey)" },
  { time: 21, text: "Oh, she could be up" },
  { time: 23, text: "Oh, she could be down" },
  { time: 24.7, text: "But I'm not around to see my baby" },

  { time: 29, text: "To see my baby, to see my baby" },
  { time: 32.5, text: "I need my lady, she thinks I'm crazy" },
  { time: 36.5, text: "To see my baby, to see my baby" },
  { time: 39.8, text: "I need my lady, she thinks I'm crazy" },

  { time: 44.5, text: "I know she wanna ride with my niggas" },
  { time: 48.5, text: "But she can go get high, but not with us (Woo)" },
  { time: 51.5, text: "I'm gonna take that ass aside, then fuck with her" },
  {
    time: 55.3,
    text: "I'm gonna get you in your thighs in that window, in the kitchen",
  },
  { time: 60.3, text: "How could you forgive me, baby?" },
  { time: 62.2, text: "How could you forgive me?" },
  { time: 63.7, text: "I'll keep you right here and with me" },
  { time: 65.5, text: "I can get you wet instantly" },
  { time: 67.5, text: "Know you can't forget it" },
  { time: 69.5, text: "Babygirl, been waiting for a minute" },
  { time: 71.6, text: "Throw the kitty on me" },
  { time: 74, text: "And I'm lonely" },
  { time: 75, text: "Babygirl, you got it for me" },
  { time: 76.8, text: "Babygirl, you know you know me" },
  { time: 78.7, text: "Better than I know my homies" },
  { time: 80.9, text: "'Cause you kept it real with a nigga" },
  { time: 84.5, text: "And I ain't tryna chill with these bitches" },

  { time: 87.5, text: "And I don't ever wanna kick it with no other bitches" },
  { time: 91, text: "Only my girl, my girl" },
  { time: 95.6, text: "And I really wanna kick it, I'm gon' miss you" },
  { time: 98.5, text: "But you're mine, girl, so bye" },

  { time: 101.5, text: "Oh, she could be up" },
  { time: 103.5, text: "Oh, she could be down" },
  { time: 105.2, text: "But I'm not around to see my baby" },
  { time: 109, text: "Oh, she could be up" },
  { time: 110.7, text: "Oh, she could be down" },
  { time: 112.7, text: "But I'm not around to see my baby" },

  { time: 116.7, text: "To see my baby, to see my baby" },
  { time: 120.5, text: "I need my lady, she thinks I'm crazy" },
  { time: 124, text: "To see my baby, to see my baby" },
  { time: 127.7, text: "I need my lady, she thinks I'm crazy" },

  { time: 137.7, text: "(Oh, oh, yeah)" },
  { time: 140.5, text: "(Aah-aah, oh-woah, oh-woah)" },
  { time: 146.6, text: "(Aah)" },
];

function hoverPlay(songNum) {
  if (isSongOpened) return;

  if (songNum === 1) {
    activeVideo = bgVideo1;
  } else if (songNum === 2) {
    activeVideo = bgVideo2;
  } else if (songNum === 3) {
    activeVideo = bgVideo3;
  } else if (songNum === 4) {
    activeVideo = bgVideo4;
  }

  activeVideo.style.display = "block";
  activeVideo.play().catch(() => {});
}

// Function para alamin kung mobile / touch device
function isMobileDevice() {
  return !window.matchMedia("(hover: hover)").matches;
}

function hoverPlay(songNum) {
  // BAGO: Kung mobile phone, huwag patakbuhin ang hover video preview
  if (isMobileDevice()) return;

  if (isSongOpened) return;

  if (songNum === 1) {
    activeVideo = bgVideo1;
  } else if (songNum === 2) {
    activeVideo = bgVideo2;
  } else if (songNum === 3) {
    activeVideo = bgVideo3;
  } else if (songNum === 4) {
    activeVideo = bgVideo4;
  }

  activeVideo.style.display = "block";
  activeVideo.play().catch(() => {});
}

function hoverStop(songNum) {
  if (isSongOpened) return;

  let targetVideo;
  if (songNum === 1) {
    targetVideo = bgVideo1;
  } else if (songNum === 2) {
    targetVideo = bgVideo2;
  } else if (songNum === 3) {
    targetVideo = bgVideo3;
  } else {
    targetVideo = bgVideo4;
  }

  targetVideo.pause();
  targetVideo.currentTime = 0;
  targetVideo.style.display = "none";
  activeVideo = null;
}

// Helper function para malaman kung mobile (kung wala pa nito sa taas)
function isMobileDevice() {
  return !window.matchMedia("(hover: hover)").matches;
}

function hoverStop(songNum) {
  // BAGO: Kung mobile phone, huwag patakbuhin ang hover stop
  if (isMobileDevice()) return;

  if (isSongOpened) return;

  let targetVideo;
  if (songNum === 1) {
    targetVideo = bgVideo1;
  } else if (songNum === 2) {
    targetVideo = bgVideo2;
  } else if (songNum === 3) {
    targetVideo = bgVideo3;
  } else {
    targetVideo = bgVideo4;
  }

  targetVideo.pause();
  targetVideo.currentTime = 0;
  targetVideo.style.display = "none";
  activeVideo = null;
}

function song1(event) {
  if (event.target.classList.contains("backbtn")) return;
  if (isSongOpened) return;
  isSongOpened = true;
  document.body.classList.add("playing");
  activeVideo = bgVideo1;
  activeVideo.style.display = "block";
  activeVideo.play();

  container1.style.display = "flex";
  container1.style.flexDirection = "column";
  container2.style.display = "none";
  container3.style.display = "none";
  container4.style.display = "none";

  container1.querySelector(".backbtn").style.display = "block";

  container1.style.height = "500px";
  container1.style.width = "400px";
  song1lyrics.style.display = "flex";
  imgtitle1.style.marginRight = "140px";
  range1.style.display = "flex";

  container1.querySelector(".controls").style.display = "flex";

  // 1. I-render ang lyrics sa HTML container habang naglo-load
  function loadLyrics1() {
    song1lyrics.innerHTML = ""; // 1. Laging i-clear ang DOM element, hindi ang array

    for (let i in lyrics1) {
      const item = lyrics1[i]; // 2. Kunin ang bawat item gamit ang index [i]

      const p = document.createElement("p");
      p.className = "lyric-line";
      p.textContent = item.text;
      p.setAttribute("data-time", item.time);
      song1lyrics.appendChild(p);
    }
  }

  loadLyrics1();

  const lyricLines = document.querySelectorAll(".lyric-line");

  // 2. Makinig sa bawat paggalaw ng oras ng audio
  bgVideo1.addEventListener("timeupdate", () => {
    const currentTime = bgVideo1.currentTime;

    // Hanapin kung aling linya ang angkop sa kasalukuyang segundo
    let activeIndex = -1;
    for (let i = 0; i < lyrics1.length; i++) {
      if (currentTime >= lyrics1[i].time) {
        activeIndex = i;
      } else {
        break;
      }
    }

    // I-update ang hitsura at i-auto-scroll kung may nahanap na aktibong linya
    if (activeIndex !== -1) {
      lyricLines.forEach((line, index) => {
        if (index === activeIndex) {
          if (!line.classList.contains("active")) {
            line.classList.add("active");

            // Auto-scroll papunta sa linyang aktibo
            song1lyrics.scrollTo({
              top:
                line.offsetTop -
                song1lyrics.offsetTop -
                song1lyrics.clientHeight / 50 +
                line.clientHeight / 50,
              behavior: "smooth",
            });
            line.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        } else {
          line.classList.remove("active");
        }
      });
    }
  });
}

function song2(event) {
  if (event.target.classList.contains("backbtn")) return;
  if (isSongOpened) return;
  document.body.classList.add("playing");
  isSongOpened = true;
  activeVideo = bgVideo2;
  activeVideo.style.display = "block";
  activeVideo.play();

  container1.style.display = "none";
  container2.style.display = "flex";
  container2.style.flexDirection = "column";
  container3.style.display = "none";
  container4.style.display = "none";

  container2.querySelector(".backbtn").style.display = "block";

  container2.style.height = "500px";
  container2.style.width = "400px";
  song2lyrics.style.display = "flex";
  imgtitle2.style.marginRight = "90px";
  range2.style.display = "flex";

  container2.querySelector(".controls").style.display = "flex";

  function loadLyrics2() {
    song2lyrics.innerHTML = "";

    for (let i in lyrics2) {
      const item = lyrics2[i];

      const p = document.createElement("p");
      p.className = "lyric-line2";
      p.textContent = item.text;
      p.setAttribute("data-time", item.time);
      song2lyrics.appendChild(p);
    }
  }

  loadLyrics2();

  const lyricLines = document.querySelectorAll(".lyric-line2");

  bgVideo2.addEventListener("timeupdate", () => {
    const currentTime = bgVideo2.currentTime;

    let activeIndex = -1;
    for (let i = 0; i < lyrics2.length; i++) {
      if (currentTime >= lyrics2[i].time) {
        activeIndex = i;
      } else {
        break;
      }
    }

    if (activeIndex !== -1) {
      lyricLines.forEach((line, index) => {
        if (index === activeIndex) {
          if (!line.classList.contains("active")) {
            line.classList.add("active");

            song2lyrics.scrollTo({
              top:
                line.offsetTop -
                song2lyrics.offsetTop -
                song2lyrics.clientHeight / 50 +
                line.clientHeight / 50,
              behavior: "smooth",
            });
            line.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        } else {
          line.classList.remove("active");
        }
      });
    }
  });
}

function song3(event) {
  if (event.target.classList.contains("backbtn")) return;
  if (isSongOpened) return;
  isSongOpened = true;
  document.body.classList.add("playing");
  activeVideo = bgVideo3;
  activeVideo.style.display = "block";
  activeVideo.play();

  container1.style.display = "none";
  container2.style.display = "none";
  container3.style.display = "flex";
  container3.style.flexDirection = "column";
  container4.style.display = "none";

  container3.querySelector(".backbtn").style.display = "block";

  container3.style.height = "500px";
  container3.style.width = "400px";
  song3lyrics.style.display = "flex";
  imgtitle3.style.marginRight = "130px";
  range3.style.display = "flex";

  container3.querySelector(".controls").style.display = "flex";

  function loadLyrics3() {
    song3lyrics.innerHTML = "";

    for (let i in lyrics3) {
      const item = lyrics3[i];

      const p = document.createElement("p");
      p.className = "lyric-line3";
      p.textContent = item.text;
      p.setAttribute("data-time", item.time);
      song3lyrics.appendChild(p);
    }
  }

  loadLyrics3();

  const lyricLines = document.querySelectorAll(".lyric-line3");

  bgVideo3.addEventListener("timeupdate", () => {
    const currentTime = bgVideo3.currentTime;

    let activeIndex = -1;
    for (let i = 0; i < lyrics3.length; i++) {
      if (currentTime >= lyrics3[i].time) {
        activeIndex = i;
      } else {
        break;
      }
    }

    if (activeIndex !== -1) {
      lyricLines.forEach((line, index) => {
        if (index === activeIndex) {
          if (!line.classList.contains("active")) {
            line.classList.add("active");

            song3lyrics.scrollTo({
              top:
                line.offsetTop -
                song3lyrics.offsetTop -
                song3lyrics.clientHeight / 50 +
                line.clientHeight / 50,
              behavior: "smooth",
            });
            line.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        } else {
          line.classList.remove("active");
        }
      });
    }
  });
}

function song4(event) {
  if (event.target.classList.contains("backbtn")) return;
  if (isSongOpened) return;
  document.body.classList.add("playing");
  isSongOpened = true;
  activeVideo = bgVideo4;
  activeVideo.style.display = "block";
  activeVideo.play();

  container1.style.display = "none";
  container2.style.display = "none";
  container3.style.display = "none";
  container4.style.display = "flex";
  container4.style.flexDirection = "column";

  container4.querySelector(".backbtn").style.display = "block";

  container4.style.height = "500px";
  container4.style.width = "400px";
  song4lyrics.style.display = "flex";
  imgtitle4.style.marginRight = "170px";
  range4.style.display = "flex";

  container4.querySelector(".controls").style.display = "flex";

  function loadLyrics4() {
    song4lyrics.innerHTML = "";

    for (let i in lyrics4) {
      const item = lyrics4[i];

      const p = document.createElement("p");
      p.className = "lyric-line4";
      p.textContent = item.text;
      p.setAttribute("data-time", item.time);
      song4lyrics.appendChild(p);
    }
  }

  loadLyrics4();

  const lyricLines = document.querySelectorAll(".lyric-line4");

  bgVideo4.addEventListener("timeupdate", () => {
    const currentTime = bgVideo4.currentTime;

    let activeIndex = -1;
    for (let i = 0; i < lyrics4.length; i++) {
      if (currentTime >= lyrics4[i].time) {
        activeIndex = i;
      } else {
        break;
      }
    }

    if (activeIndex !== -1) {
      lyricLines.forEach((line, index) => {
        if (index === activeIndex) {
          if (!line.classList.contains("active")) {
            line.classList.add("active");

            song4lyrics.scrollTo({
              top:
                line.offsetTop -
                song4lyrics.offsetTop -
                song4lyrics.clientHeight / 50 +
                line.clientHeight / 50,
              behavior: "smooth",
            });
            line.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        } else {
          line.classList.remove("active");
        }
      });
    }
  });
}

function back(event, songNum) {
  event.stopPropagation();
  document.body.classList.remove("playing");
  isSongOpened = false;

  if (activeVideo) {
    activeVideo.pause();
    activeVideo.currentTime = 0;
    activeVideo.style.display = "none";
    activeVideo = null;
  }

  container1.style.display = "flex";
  container2.style.display = "flex";
  container3.style.display = "flex";
  container4.style.display = "flex";

  container1.style.flexDirection = "";
  container2.style.flexDirection = "";
  container3.style.flexDirection = "";
  container4.style.flexDirection = "";

  imgtitle1.style.marginRight = "0";
  imgtitle2.style.marginRight = "0";
  imgtitle3.style.marginRight = "0";
  imgtitle4.style.marginRight = "0";

  document
    .querySelectorAll(".backbtn")
    .forEach((btn) => (btn.style.display = "none"));
  document
    .querySelectorAll(".controls")
    .forEach((btn) => (btn.style.display = "none"));
  document
    .querySelectorAll(".range")
    .forEach((btn) => (btn.style.display = "none"));
  click1 = true;
  click2 = true;
  click3 = true;
  click4 = true;
  [pause1, pause2, pause3, pause4].forEach(
    (btn) => (btn.innerHTML = "&#9208;"),
  );

  song1lyrics.style.display = "none";
  song2lyrics.style.display = "none";
  song3lyrics.style.display = "none";
  song4lyrics.style.display = "none";

  container1.style.height = "100px";
  container2.style.height = "100px";
  container3.style.height = "100px";
  container4.style.height = "100px";

  container1.style.width = "300px";
  container2.style.width = "300px";
  container3.style.width = "300px";
  container4.style.width = "300px";
}

function pausebtn1() {
  if (click1) {
    pause1.innerHTML = "&#9654;";
    click1 = false;
    bgVideo1.pause();
  } else {
    pause1.innerHTML = "&#9208;";
    click1 = true;
    bgVideo1.play();
  }
}

function pausebtn2() {
  if (click2) {
    pause2.innerHTML = "&#9654;";
    click2 = false;
    bgVideo2.pause();
  } else {
    pause2.innerHTML = "&#9208;";
    click2 = true;
    bgVideo2.play();
  }
}

function pausebtn3() {
  if (click3) {
    pause3.innerHTML = "&#9654;";
    click3 = false;
    bgVideo3.pause();
  } else {
    pause3.innerHTML = "&#9208;";
    click3 = true;
    bgVideo3.play();
  }
}

function pausebtn4() {
  if (click4) {
    pause4.innerHTML = "&#9654;";
    click4 = false;
    bgVideo4.pause();
  } else {
    pause4.innerHTML = "&#9208;";
    click4 = true;
    bgVideo4.play();
  }
}

const songActions = [
  { id: 1, func: song1 },
  { id: 2, func: song2 },
  { id: 3, func: song3 },
  { id: 4, func: song4 },
];

function nextSong(currentNum) {
  event.stopPropagation();
  let nextIndex = currentNum; // Dahil 1-based ang index, ang index para sa kasunod ay equal sa currentNum (kasi 0-based ang array)
  if (nextIndex >= songActions.length) {
    nextIndex = 0; // Bumalik sa umpisa kung nasa dulo na
  }

  // I-reset muna ang kasalukuyang kanta bago lumipat
  if (activeVideo) {
    activeVideo.pause();
    activeVideo.currentTime = 0;
    activeVideo.style.display = "none";
  }
  isSongOpened = false;
  document.body.classList.remove("playing");
  click1 = true;
  click2 = true;
  click3 = true;
  click4 = true;
  [pause1, pause2, pause3, pause4].forEach(
    (btn) => (btn.innerHTML = "&#9208;"),
  );

  // Tawagin ang function ng kasunod na kanta
  songActions[nextIndex].func({
    target: { classList: { contains: () => false } },
  });
}

function previousSong(currentNum) {
  event.stopPropagation();
  let prevIndex = currentNum - 2; // Ibaba ng 2 para makuha ang previous index sa 0-based array
  if (prevIndex < 0) {
    prevIndex = songActions.length - 1; // Pumunta sa dulo kung nasa umpisa na
  }

  if (activeVideo) {
    activeVideo.pause();
    activeVideo.currentTime = 0;
    activeVideo.style.display = "none";
  }
  isSongOpened = false;
  document.body.classList.remove("playing");
  click1 = true;
  click2 = true;
  click3 = true;
  click4 = true;
  [pause1, pause2, pause3, pause4].forEach(
    (btn) => (btn.innerHTML = "&#9208;"),
  );

  songActions[prevIndex].func({
    target: { classList: { contains: () => false } },
  });
}

bgVideo1.addEventListener("timeupdate", function () {
  if (!isNaN(bgVideo1.duration)) {
    // Kunin ang porsyento ng takbo ng video
    let progress = (bgVideo1.currentTime / bgVideo1.duration) * 100;
    range1.value = progress;
    range1.addEventListener("input", function () {
      // Siguraduhing may duration na ang video para hindi mag-error
      if (!isNaN(bgVideo1.duration)) {
        // Kunin ang porsyento ng slider (0 hanggang 100) at i-multiply sa buong haba ng video
        let seekTime = (range1.value / 100) * bgVideo1.duration;

        // Ilipat ang kasalukuyang oras ng video sa tinapatan ng slider
        bgVideo1.currentTime = seekTime;
      }
    });
  }
});

bgVideo2.addEventListener("timeupdate", function () {
  if (!isNaN(bgVideo2.duration)) {
    let progress = (bgVideo2.currentTime / bgVideo2.duration) * 100;
    range2.value = progress;
    range2.addEventListener("input", function () {
      if (!isNaN(bgVideo2.duration)) {
        let seekTime = (range2.value / 100) * bgVideo2.duration;

        bgVideo2.currentTime = seekTime;
      }
    });
  }
});

bgVideo3.addEventListener("timeupdate", function () {
  if (!isNaN(bgVideo3.duration)) {
    let progress = (bgVideo3.currentTime / bgVideo3.duration) * 100;
    range3.value = progress;
    range3.addEventListener("input", function () {
      if (!isNaN(bgVideo3.duration)) {
        let seekTime = (range3.value / 100) * bgVideo3.duration;

        bgVideo3.currentTime = seekTime;
      }
    });
  }
});

bgVideo4.addEventListener("timeupdate", function () {
  if (!isNaN(bgVideo4.duration)) {
    let progress = (bgVideo4.currentTime / bgVideo4.duration) * 100;
    range4.value = progress;
    range4.addEventListener("input", function () {
      if (!isNaN(bgVideo4.duration)) {
        let seekTime = (range4.value / 100) * bgVideo4.duration;

        bgVideo4.currentTime = seekTime;
      }
    });
  }
});
