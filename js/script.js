/* -=> Darsga Topshiriq

1) Inputni to'ldirgandan so'ng va "Tasdiqlash" tugmachasini bosgandan so'ng -
ro'yxatga yangi yangilik qo'shilish kerak. Sahifa qayta yuklanmasligi kerak.
Yangi yangilik news massivga qo'shilishi kerak.
Input qiymatini olish uchun biz uni input.value dan foydalanamiz;
P.S. Muammoni hal qilish uchun bir nechta variantlar mavjud, faqat ishlidgoni kerak

2) Agar yangilikni nomi 21 belgidan ko'p bo'lsa - uni kesib oling va uchta nuqta qo'shing

3) Axlat qutisini bosganingizda - yangilik ro'yxatdan o'chirilishi kerak (qiyin)

4) Agarda inputda checkboxda beligisi belgilangan bo'lsa "Is it favourite?" 
consolega "sevimli yangilik qo'shilmoqda"

5) Filmlar alfavit bo'yicha tartiblangan bo'lishi kerak*/

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.style.opacity = "0";
    loader.style.display = "none";
  }, 3000);

  const btnNews = document.querySelector(".btn-news"),
    newGenre = document.querySelector(".promo__genre"),
    bg = document.querySelector(".promo__bg"),
    listNews = document.querySelector(".promo__interactive-list"),
    addForm = document.querySelector(".add"),
    addInput = document.querySelector(".adding__input"),
    checkbox = addForm.querySelector("[type='checkbox']");
  const news = [
    "FOOTBALL",
    "BASKETBALL",
    "UFC",
    "BOX",
    "AMERICAN FOOTBAL IN EU...",
  ];
  const render = function (arr, parent) {
    news.sort();
    parent.innerHTML = "";
    arr.forEach((el, i) => {
      parent.insertAdjacentHTML(
        "beforeend",
        `<li class="promo__interactive-item">
                ${i + 1 + ". " + el}
                <div class="delete"></div>
              </li>`
      );
    });
    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        news.splice(i, 1);
        render(arr, parent);
      });
    });
  };
  render(news, listNews);
  addForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let newFilm = addInput.value;
    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 21)}...`;
        console.log(newFilm);
      }
    }
    news.push(newFilm.toUpperCase());
    news.sort();
    addInput.value = "";
    render(news, listNews);
  });

  //   const sortArr = (arr) => {
  //     arr.sort();
  //   };

  //   addForm.addEventListener("submit", (event) => {
  //     event.preventDefault();

  //     let newFilm = addInput.value;
  //     const favourite = checkbox.checked;
  //     console.log(favourite);

  //     if (newFilm) {
  //       if (newFilm.length > 21) {
  //         newFilm = `${newFilm.substring(0, 21)}...`;
  //       }
  //       if (favourite) {
  //         console.log("sevimli yangilik qo'shilmoqda");
  //       }
  //       news.push(newFilm);
  //       sortArr(news);
  //       createNewsList(news, listNews);
  //     }

  //     addInput.value = "";
  //   });

  //   btnNews.remove();

  //   newGenre.textContent = "uznews";
  //   newGenre.style.color = "crimson";

  //   bg.style.backgroundImage = "url(img/2.jpg)";

  //   function createNewsList(newsList, parent) {
  //     parent.innerHTML = "";
  //     sortArr(news);

  //     newsList.forEach((itemNews, index) => {
  //       parent.innerHTML += `
  //       <li class="promo__interactive-item">
  //         ${index + 1} ${itemNews}
  //         <div class="delete"></div>
  //       </li>
  //     `;
  //     });

  //     document.querySelectorAll(".delete").forEach((btn, i) => {
  //       btn.addEventListener("click", () => {
  //         btn.parentElement.remove();
  //         news.splice(i, 1);

  //         createNewsList(newsList, parent);
  //       });
  //     });
  //   }

  //   createNewsList(news, listNews);
});
