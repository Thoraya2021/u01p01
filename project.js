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
    $(".cards").append(` <div class="parts">   
    <img src='${item.img}'  />
    <h1>${item.name}</h1>
    <p>${item.description}</p>
    <button>${item,"Read"} </button>
    </div>`);
  });
}

render();

