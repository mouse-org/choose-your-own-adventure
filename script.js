var pages = [
  {
    pageName: "beginning",
    pageStory: "Bubbles the jackalope goes to a coffee shop.",
    pageChoices: [
      {
        choiceText: "he orders an iced latte",
        destinationName: "latte"
      },
      {
        choiceText: "he orders a cup of herbal tea",
        destinationName: "tea"
      }
    ]  
  },
  
  {
    pageName: "tea",
    pageStory: "The tea was full of sticks and leaves and it was gross and disgusting",
    pageChoices: [
      {
        choiceText: "he throws it away and gets a latte",
        destinationName: "latte"
      }
    ]    
  }, 

  {
    pageName: "latte",
    pageStory: "What a delicious choice!",
    pageChoices: [
      {
        choiceText: "it would be great with a cookie.",
        destinationName: "cookie"
      }
    ]    
  }, 

  {
    pageName: "cookie",
    pageStory: "The cookie is warm and full of chocolate. <br>Which would typically be great, but Bubbles",
    pageChoices: [
      {
        choiceText: "is allergic to chocolate.",
        destinationName: "sick"
      }
    ]    
  }, 

  {
    pageName: "sick",
    pageStory: "Bubbles' face turns green.",
    pageChoices: [
      {
        choiceText: "Go to the hospital",
        destinationName: "hospital"
      },
      {
        choiceText: "Wish the sick away",
        destinationName: "wish"
      }
    ]    
  }, 

  {
    pageName: "hospital",
    pageStory: "The hospital is pretty far away.",
    pageChoices: [
      {
        choiceText: "Take a Cab",
        destinationName: "cab"
      },
      {
        choiceText: "Take the subway",
        destinationName: "subway"
      }
    ]    
  }, 

  {
    pageName: "wish",
    pageStory: "Bubbles sits at his table and wishes and wishes for the sickness to go away. <br> A fairy appears and grants his wish",
    pageChoices: [
      {
        choiceText: "say thank you",
        destinationName: "thanks"
      },
      {
        choiceText: "ask for another wish",
        destinationName: "wish2"
      }
    ]    
  }, 

  {
    pageName: "wish2",
    pageStory: "The fairy says 'oh heck no. I am insulted beyond repair.' <br> She makes you sick again.",
    pageChoices: [
      {
        choiceText: "Go to the hospital",
        destinationName: "hospital"
      }
    ]    
  }, 

  {
    pageName: "thanks",
    pageStory: "Fairies love gratitude. She offers Bubbles a 2nd Wish",
    pageChoices: [
      {
        choiceText: "Ask for a pony",
        destinationName: "pony"
      },
      {
        choiceText: "Ask for a infinite wishes",
        destinationName: "wish2"
      }
    ]    
  }, 

  {
    pageName: "pony",
    pageStory: "A pony appears and is so confused and disoriented that it kicks you in the head, pretty hard.",
    pageChoices: [
      {
        choiceText: "Go to the hospital",
        destinationName: "hospital"
      }
    ]    
  }, 

  {
    pageName: "cab",
    pageStory: "The cab is accidentally a clown cab, full of clowns",
    pageChoices: [
      {
        choiceText: "leave immediately",
        destinationName: "noclowns"
      },
      {
        choiceText: "ask if any of them are doctors",
        destinationName: "drclown"
      }
    ]    
  }, 

  {
    pageName: "subway",
    pageStory: "The subway is filled with bees.",
    pageChoices: [
      {
        choiceText: "take a cab",
        destinationName: "cab"
      }
    ]    
  }, 

  {
    pageName: "noclowns",
    pageStory: "Back on the street, Bubbles decides that maybe a nice walk would help him feel better.",
    pageChoices: [
      {
        choiceText: "head north through the forest",
        destinationName: "forest"
      },
      {
        choiceText: "walk west to the sea",
        destinationName: "sea"
      }
    ]    
  }, 

  {
    pageName: "drclown",
    pageStory: "Why yes, the clown with the red nose happens to be Patch Adams (a doctor).  He fixes you up and you leave the cab.",
    pageChoices: [
      {
        choiceText: "head north through the forest",
        destinationName: "forest"
      },
      {
        choiceText: "walk west to the sea",
        destinationName: "sea"
      }
    ]    
  }, 

  {
    pageName: "forest",
    pageStory: "In the forest, Bubbles makes friends with an owl and some tiny frogs. ",
    pageChoices: [
      {
        choiceText: "Follow them up the tree",
        destinationName: "climb"
      }
    ]    
  }, 

  {
    pageName: "sea",
    pageStory: "Bubbles takes some sweet Instagrams of the sunset. But he can't swim",
    pageChoices: [
      {
        choiceText: "so maybe he should head to the forest",
        destinationName: "forest"
      }
    ]    
  }, 

  {
    pageName: "climb",
    pageStory: "At the top of the tree, Bubbles sees literal bubbles floating up from a clearing only a few miles away.",
    pageChoices: [
      {
        choiceText: "Follow the bubbles",
        destinationName: "bubbles"
      },
      {
        choiceText: "Tweet about the bubbles",
        destinationName: "tweet"
      }
    ]    
  }, 

  {
    pageName: "bubbles",
    pageStory: "Bubbles follows the bubbles for 23 days and 23 nights, through many lands, into outerspace and back.",
    pageChoices: [
      {
        choiceText: "Boy is he thirsty",
        destinationName: "beginning"
      }
    ]    
  }, 

  {
    pageName: "tweet",
    pageStory: "What hashtag should Bubbles use?",
    pageChoices: [
      {
        choiceText: "#Bubblesbebubblin",
        destinationName: "bubblin"
      },
      {
        choiceText: "#Bubbletrouble",
        destinationName: "trouble"
      }
    ]    
  }, 

  {
    pageName: "bubblin",
    pageStory: "No one retweeted Bubbles' tweet.",
    pageChoices: [
      {
        choiceText: "Try #Bubbletrouble next",
        destinationName: "trouble"
      }
    ]    
  }, 

  {
    pageName: "trouble",
    pageStory: "Bubbles' hashtag goes mega-viral.  Bubbles is suddenly quite thirsty.",
    pageChoices: [
      {
        choiceText: "Drop by a coffee shop",
        destinationName: "beginning"
      }
    ]    
  }
]


function goTo(pageName, goType) {
  if (goType === "click") {
    previousPageName.unshift(pageName);
  }
  if (goType === "back") {
    previousPageName.shift();
  }
  // Clear out current page:
  $( "#story" ).html("");
  $( "#choices" ).html("");
  $( "#back" ).html("");
  
  // Find new page in list of pages:
  var currentPage;
  for (var i in pages) {
    var page = pages[i]
    if (page.pageName === pageName) {
      currentPage = page;
    }
  }

  // Display new page story and choices:
  $( "#story" ).append("<p>" + currentPage.pageStory + "</p>");
  for (var i in currentPage.pageChoices) {
    var choice = currentPage.pageChoices[i];
    $( "<li>" ).click(function(){ goTo(choice.destinationName, "click") }).text(choice.choiceText).appendTo( "#choices" );
  }
  
  // Display back button:
  if (previousPageName[1]) {
    $( "<span id='back-button'>" ).click(function(){ goTo(previousPageName[1], "back") }).text("< back").appendTo( "#back" );
  }

}

var previousPageName = [];
goTo("beginning", "click");