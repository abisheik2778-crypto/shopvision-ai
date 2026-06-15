function addRow(){
    let items = document.getElementById("items");
    let firstRow = document.querySelector(".bill-row");

    if(firstRow){
        let newRow = firstRow.cloneNode(true);
        newRow.querySelector("input").value = 1;
        items.appendChild(newRow);
    }
}

window.onload = function(){

    let barCanvas = document.getElementById("salesBarChart");

    if(barCanvas){
        let labels = JSON.parse(barCanvas.dataset.labels);
        let values = JSON.parse(barCanvas.dataset.values);

        new Chart(barCanvas, {
            type: "bar",
            data: {
                labels: labels,
                datasets: [{
                    label: "Units Sold",
                    data: values,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true
            }
        });
    }

    let donutCanvas = document.getElementById("salesDonutChart");

    if(donutCanvas){
        let labels = JSON.parse(donutCanvas.dataset.labels);
        let values = JSON.parse(donutCanvas.dataset.values);

        new Chart(donutCanvas, {
            type: "doughnut",
            data: {
                labels: labels,
                datasets: [{
                    label: "Sales Share",
                    data: values
                }]
            },
            options: {
                responsive: true
            }
        });
    }
  
};document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";

        setTimeout(() => {
            card.style.transition = "0.5s";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 100);
    });

});
