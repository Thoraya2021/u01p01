let novels = [
  {
    name: "Nineteen Eighty-Four",
    description:
      "AuthorGeorge Orwell Number of pages328 First publishedJun 08, 1949 Preceded byAnimal Farm",
    img: "https://th.bing.com/th/id/OIP.wdWqG4bLEBFIKAB3CsTPFgHaK5?pid=ImgDet&rs=1",
  },

  {
    name: "The Hobbit",
    description:
      "AuthorJ. R. R. Tolkien number of pages310 First published1937",
    img: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_640/https://www.almrsal.com/wp-content/uploads/2017/08/%D8%A7%D9%84%D9%87%D9%88%D8%A8%D9%8A%D8%AA.jpg",
  },

  {
    name: "To kill Mockingbird",
    description:
      "AuthorHarper Lee ATOS reading level5.60 First publishedJul 11, 1960 AdaptationsTo Kill a Mockingbird (1962)·",
    img: "https://th.bing.com/th/id/OIP.FlCDOhM6yGlghOeaDZnn_gHaLj?pid=ImgDet&rs=1",
  },
];

const render = () => {
  novels.forEach((item, i) => {
    $(".cards").append(` <div onclick='seeMor(${i})' class="parts"> 
 <img src='${item.img}'/>
    <h1>${item.name}</h1>
    <p>${item.description}</p>
    <button>${item,"Read"} </button>
    
    </div>`);
  });
}


render();


// $("button").click(() => {         

//  renderList();
//   });


function seeMor(i){
    console.log( novels[i]);
    $(".cards").hide()
   $(".oneItem").append(` <img src='${novels[i].img}'/>
   <h1>${novels[i].name}</h1>
   <p>${novels[i].description}</p>`)
  

}

//let readnovel= [{read:" Part One It was a bright cold day in April, and the clocks were striking thirteen. Winston Smith, his chin nuzzled into his breast in an effort to escape the vile wind, slipped quickly through the glass doors of Victory Mansions, though not quickly enough to prevent a swirl of gritty dust from entering along with him. The hallway smelt of boiled cabbage and old rag mats. At one end of it a coloured poster, too large for indoor display, had been tacked to the wall. It depicted simply an enormous face, more than a metre wide: the face of a man of about forty-five, with a heavy black moustache and ruggedly handsome features. Winston made for the stairs. It was no use trying the lift. Even at the best of times it was seldom working, and at present the electric current was cut off during daylight hours. It was part of the economy drive in preparation for Hate Week. The flat was seven flights up, and Winston, who was thirty-nine and had a varicose ulcer above his right ankle, went slowly, resting several times on the way. On each landing,opposite the lift-shaft, the poster with the enormous face gazed from the wall. It was one of those pictures which are so contrived that the eyes follow you about when you move. BIG BROTHER IS WATCHING YOU, the caption beneath it ran."}];
//(".readnov").click(seeMor(i) )
//readnovel.forEach((item, i) => {
//$(".readnov").append(`<p>${readnovel[i].read}</p>`
//});

 

   $('#searchbar').on(function() {
    let value=$(this).val().toLowerCase();
    $(".header").each(function(){
    let search=$(this).text().toLowerCase();
   if(search.indexof(value)>-1){
    $(this).show();
    }
      else {
       $(this).hide();
    }
    });
    });
   