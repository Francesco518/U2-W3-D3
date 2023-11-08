window.onload = () =>
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json())
    .then((books) => {
      books.forEach((char) => {
        if (char.img) {
          const row = document.getElementById("books");

          const col = document.createElement("div");
          col.className =
            " col-md-6 col-lg-4 col-xl-3 col-xxl-3 position-relative mb-2 margin";

          const img = document.createElement("img");
          img.className = " w-100 object-fit-cover rounded shadow-sm imgMed";
          img.style.height = "col-sm-img ";
          img.src = char.img;

          const title = document.createElement("h3");
          title.className = "   fs-2 fw-bolder text-black";
          title.innerText = char.title;

          const price = document.createElement("h5");
          price.className = "fs-3 fw-bolder text-black";
          price.innerText = char.price;

          const button = document.createElement("button");
          button.innerText = "Delete";
          button.className =
            "text-black fw-bold fs-3 p-2 w-50 rounded position-absolute top-100";
          button.addEventListener("click", function () {
            img.remove();
            title.remove();
            price.remove();
            button.remove();
          });

          col.appendChild(img);
          col.appendChild(title);
          col.appendChild(price);
          col.appendChild(button);
          row.appendChild(col);
        }
      });
    });
