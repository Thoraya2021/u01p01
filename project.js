let novels = [
  {
    name: "Nineteen Eighty-Four",
    description:
      "AuthorGeorge Orwell Number of pages328 First publishedJun 08, 1949 Preceded byAnimal Farm",
    img: "https://th.bing.com/th/id/OIP.wdWqG4bLEBFIKAB3CsTPFgHaK5?pid=ImgDet&rs=1",
    text:"Part One It was a bright cold day in April, and the clocks were striking thirteen. Winston Smith, his chin nuzzled into his breast in an effort to escape the vile wind, slipped quickly through the glass doors of Victory Mansions, though not quickly enough to prevent a swirl of gritty dust from entering along with him.The hallway smelt of boiled cabbage and old rag mats. At one end of it a coloured poster, too large for indoor display, had been tacked to the wall. It depicted simply an enormous face, more than a metre wide: the face of a man of about forty-five, with a heavy black moustache and ruggedly handsome features. Winston made for the stairs. It was no use trying the lift. Even at the best of times it was seldom working, and at present the electric current was cut off during daylight hours.Inside the flat a fruity voice was reading out a list of figures which had something to do with the production of pig-iron. The voice came from an oblong metal plaque like a dulled mirror which formed part of the surface of the right-hand wall. Winston turned a switch and the voice sank somewhat, though the words were still distinguishable. The instrument (the telescreen, it was called) could be dimmed, but there was no way of shutting it off completely. He moved over to the window: a smallish, frail figure, the meagreness of his body merely emphasized by the blue overalls which were the uniform of the party. His hair was very fair, his face naturally sanguine, his skin roughened by coarse soap and blunt razor blades and the cold of the winter that had just ended."
,
    favotite: false,
  },

  {
    name: "The Hobbit",
    description:
      "AuthorJ. R. R. Tolkien number of pages310 First published1937",
    img: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_640/https://www.almrsal.com/wp-content/uploads/2017/08/%D8%A7%D9%84%D9%87%D9%88%D8%A8%D9%8A%D8%AA.jpg",
    text: "Chapter 1 An Unexpected Party : In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.It had a perfectly round door like a porthole, painted green, with a shiny yellow brass knob in the exact middle. The door opened on to a tube-shaped hall like a tunnel: a very comfortable tunnel without smoke, with panelled walls, and floors tiled and carpeted, provided with polished chairs, and lots and lots of pegs for hats and coats - the hobbit was fond of visitors. The tunnel wound on and on, going fairly but not quite straight into the side of the hill - The Hill, as all the people for many miles round called it - and many little round doors opened out of it, first on one side and then on another. No going upstairs for the hobbit: bedrooms, bathrooms, cellars, pantries (lots of these), wardrobes (he had whole rooms devoted to clothes), kitchens, dining-rooms, all were on the same floor, and indeed on the same passage. The best rooms were all on the left-hand side (going in), for these were the only ones to have windows, deep-set round windows looking over his garden and meadows beyond, sloping down to the river.This hobbit was a very well-to-do hobbit, and his name was Baggins. The Bagginses had lived in the neighbourhood of The Hill for time out of mind, and people considered them very respectable, not only because most of them were rich, but also because they never had any adventures or did anything unexpected: you could tell what a Baggins would say on any question without the bother of asking him.",
    favotite: false,
  },

  {
    name: "To kill Mockingbird",
    description:
      "AuthorHarper Lee ATOS reading level5.60 First publishedJul 11, 1960 AdaptationsTo Kill a Mockingbird (1962)·",
    img: "https://th.bing.com/th/id/OIP.FlCDOhM6yGlghOeaDZnn_gHaLj?pid=ImgDet&rs=1",
    text: "",
    favotite: false,
  },

  {
    name: "The Grapes of Wrath",
    description:
      "Author:John Steinbeck  ATOS reading level 4.90 First publishedApr 14, 1939 AdaptationsThe Grapes of Wrath (1940) · The Grapes of Wrath (1988)",
    img: "https://th.bing.com/th/id/R.7ab14ea91f756f1a5ac276132c512a32?rik=wk1yPQx%2bMAUP9g&riu=http%3a%2f%2fww1.prweb.com%2fprfiles%2f2014%2f05%2f15%2f11858905%2fthe-grapes-of-wrath-original-dustjacket.jpg&ehk=34ja2%2fAVAMx4h7SNDm4Si1D9uzenVu0VarztVkPorw0%3d&risl=&pid=ImgRaw&r=0",
    text: "",
    favotite: false,
  },
];
localStorage.setItem("novels", JSON.stringify(novels));




const render = () => {
  $(".cards").html("");
  novels.forEach((item, i) => {
    $(".cards").append(` <div onclick='seeMor(${i})' class="parts"> 
     <div><img src='${item.img}'/></div>
    <h1>${item.name}</h1>
    <p>${item.description}</p>
    <button class='seeMor'>${(item, "Read")} </button>
    <button class='add'>${(item, "Add favorite")} </button>
    
    </div>`);
  });
};

render();

function seeMor(i) {
  $(".cards").hide();
  $(".oneItem")
    .append(`<div><img class='itemIMGOne' src='${novels[i].img}'/></div> 
   <div><h1>${novels[i].name}</h1>
   <p>${novels[i].description}</p>
   <p>${novels[i].text}</p>
   </div>`);
}

//search bar
$("#searchbar").change(() => {
  const searchArr = novels.filter((item) => {
    return item.name
      .toLocaleLowerCase()
      .includes($("#searchbar").val().toLocaleLowerCase());
  });
  console.log(searchArr);

  $(".cards").hide();
  $(".oneItem").hide();
  $(".readnov").hide();
  $(".parts").hide();
  $(".footer").hide();
  searchArr.forEach((item,i)=>{
    $(".searchR").append(`<div> 
    <img class='searchimg' src='${item.img}'/></div> 
    <div><h1>${item.name}</h1>
    <p>${item.description}</p>
    <p>${item.text}</p>


    </div>`);
  })
  
});

//new novels page
let news = [
  {
    name: "And Then There Were none",
    description: "Author: Agatha Christie First publishedNov 06, 1939        ",
    img: "https://th.bing.com/th/id/R.1ddfceb46d50ec413925d150b31d735c?rik=qiptUaLx33O9GQ&riu=http%3a%2f%2ffilmmusicreporter.com%2fwp-content%2fuploads%2f2016%2f03%2fand-then-there-were-none.jpg&ehk=%2fbquRV%2fHv4HAQM8J8bEuYQWXnQs81WHpNdKTeM0b0UI%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "One Hundred Years Solitude ",
    description:
      "Author: Gabriel García Márquez  Genre: Magic realism Adaptations: 100 Years of Solitude (1981)",
    img: "https://cdn2.penguin.com.au/covers/original/9780241968581.jpg",
  },
];

const newnovel = () => {
  news.forEach((item, i) => {
    $(".news").append(` <div onclick='seeMor(${i})' class="newimg"> 
      <div class='newsDivImg'>  <img src='${item.img}'/> </div>
          <h1>${item.name}</h1>
          <p>${item.description}</p>
          <button>${(item, "Read")} </button>
          
          </div>`);
  });
};

newnovel();

//send button
$(document).ready(function () {
  $(".send").click(function () {
    $("input[type='submit'], button").val();
  });
});

//favorite page
