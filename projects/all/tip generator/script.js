const sentences = [
    "We cannot change what have we done, we can only leave.",
    "When enemy is near spike, don't peek, wait for him to start defusing",
    "Just remember, if the world didn't suck, we'd all fall off.",
    "To be or not to be, that is the question.",
    "Did you know that there was Spider13 team (S13) before Team RedFox?",
    "Best tactic is 2a 2b 1mid, or 2a 1b 2c",
    "Full team can go mid, and then split",
    "Tip: never make you German teammates angry",
    "Every team should include one healer (sage or skye)",
    "Don't shoot with vandal trough smokes, if you don't know where is your enemy. Because vandal have really visible bullets trough smoke, so you can get killed easily.",
    "TRF = Team RedFox",
    "Rawr",
    "Don't be odin / ares npc!",
    "If you want to be radiant, think like radiant",
    "Don't walk with knife where enemy can be nearby, or you will die",
    "Ignore your teammates when they are toxic.",
    "If someone is toxic, don't be idiot like them, just mute them and report.",
    "This website took 9 months to create without bugs. It was creating only one person, now we have more devs in team.",
    "The old man sat alone in the park, staring at the empty bench beside him where his wife used to sit.",
    "print(''Hello World'')",
    "Always hold an angle as you are pushing an area. If you're looking straight on, you're going to get killed.",
    "Use the Practice Range, if you want to get better, or play some deathmatches",
    "Never make Pilot2254 mad in valorant game, or you will get killed profesionally",
    "Don't shift walk around common spots",
    "When holding a spot with the operator, don't stay scoped in so that you can't see what's around you. You should be scoping in and out.",
    "Change Positions After Killshots with operator or marshall",
    "Try to Switch Your Defending Position Every Round",
    "Don't Use the Operator on the Same Site Twice in A Row",
    "Use the Sheriff or Vandal if You've Got Great Aim, if not, try to practice on the valorant range.",
    "A Good Headset is Necessary",
    "If you're playing with randoms in competitive (or unrated) mode, be as nice as possible (don't be toxic)",
    "If you want to kill someone, stop and kill him. Otherwise he will kill you",
    "Pay Attention to Your Teammates At the Start of a Round",
    "Finding the Right Mouse Sensitivity Is Key. I recommend you 0.375",
    "Always Plant the Spike, Even if You Won't Win the Round, you can get bonus credits",
    "You can Use Abilities Through The Teleporter on Bind. This is for sova and neon players.",
    "Don't Peak a Corner Twice",
    "Please use small crosshairs for better accuracy. Not windmill crosshair",
    "The Bomb Carrier Should Not Be the First Person Into a Site",
    "Did you know that Reloading Your Gun Also Makes Noise",
    "Record a few of your games and watch them back. You can find a lot of your own mistakes by simply watching your gameplay to see what you were doing wrong/could've done differently.",
    "Grab The Orb If It's On the Way to The Site You're Rotating To",
    "Find inspiration in pro players, like TenZ, etc. Don't find inspiration in iron noobs",
    "If you are lesbian, and boy loves you but he don't know youre lesbian and after some months of playing games when you tell him you are lesbian, you broke his heart.",
  ];
  
  function generateSentence() {
    const index = Math.floor(Math.random() * sentences.length);
    const sentenceElement = document.getElementById("sentence");
    sentenceElement.textContent = sentences[index];
  }
