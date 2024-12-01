document.addEventListener("DOMContentLoaded", () => {
  const billingData = {};

  document.querySelectorAll(".plus, .minus").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".card");
      const name = card.querySelector(".milktea-title").innerText;
      billingData[name] = (billingData[name] || 0) + (btn.classList.contains("plus") ? 1 : -1);
      if (billingData[name] < 1) delete billingData[name];
      updateGraph();
    });
  });

  const updateGraph = () => {
    const tbody = document.querySelector("#billing-graph tbody");
    tbody.innerHTML = Object.entries(billingData)
      .map(([name, qty]) => `<tr><td>${name}</td><td>${qty}</td></tr>`)
      .join("");
  };
});