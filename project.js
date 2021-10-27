let novels = JSON.parse(localStorage.getItem("novels")) || [
  {
    name: "Nineteen Eighty-Four",
    description:
      "AuthorGeorge Orwell Number of pages328 First publishedJun 08, 1949 Preceded byAnimal Farm",
    img: "https://th.bing.com/th/id/OIP.wdWqG4bLEBFIKAB3CsTPFgHaK5?pid=ImgDet&rs=1",
    text:"Part One It was a bright cold day in April, and the clocks were striking thirteen. Winston Smith, his chin nuzzled into his breast in an effort to escape the vile wind, slipped quickly through the glass doors of Victory Mansions, though not quickly enough to prevent a swirl of gritty dust from entering along with him.The hallway smelt of boiled cabbage and old rag mats. At one end of it a coloured poster, too large for indoor display, had been tacked to the wall. It depicted simply an enormous face, more than a metre wide: the face of a man of about forty-five, with a heavy black moustache and ruggedly handsome features. Winston made for the stairs. It was no use trying the lift. Even at the best of times it was seldom working, and at present the electric current was cut off during daylight hours.",
    favotite: false,
  },

  {
    name: "The Hobbit",
    description:
      "AuthorJ. R. R. Tolkien number of pages310 First published1937",
    img: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_640/https://www.almrsal.com/wp-content/uploads/2017/08/%D8%A7%D9%84%D9%87%D9%88%D8%A8%D9%8A%D8%AA.jpg",
    text: "",
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
    $(".searchR").append(`<div> ${item.name}
         
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
