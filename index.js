fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    const barContainer = document.querySelector(".bars-container");

    const date = new Date();
    const day = date.getDay();
    data.forEach((element, i) => {
      const html = `<div class="bar flex flex-col justify-end text-center">

<p
  class="bg-[#382314] text-[#FFFAF5] hidden font-bold text-sm py-2 rounded-md mb-1"
>
  $${element.amount}
</p>
<div
  class="bar-column ${element.day} h-[${element.amount}%] ${
        i === day - 1 ? "bg-[#76B5BC]" : "bg-[#F3A596]"
      } w-[80%] mx-auto  rounded-md mb-1"
></div>
<p class="text-[#93867B] text-base">${element.day}</p>
</div>`;
      barContainer.insertAdjacentHTML("beforeend", html);
    });
    const bars = document.querySelectorAll(".bar-column");
    bars.forEach((bar) => {
      bar.addEventListener("mouseover", function (e) {
        bar.previousElementSibling.classList.remove("hidden");
      });
      bar.addEventListener("mouseout", function (e) {
        bar.previousElementSibling.classList.add("hidden");
      });
    });
  });
