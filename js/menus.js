import menuData from "./homedata.js";
import holidayDates from "./holidays.js";

function createMenuBoxes(menuData) {
    const container = document.getElementById("mainContainer");
    
    menuData.forEach((item) => {
        let box = document.createElement("div");
        box.className = "boxes";
        box.innerHTML = `<div class = "section1"> <h3> ${item.header}</h3> </div> <div class = "section2"> <a href = "${item.link}"> <img src = "${item.img}" id = "img"> </a></div> <div class = "section3"><h3><i>${item.description}</i></h3> </div> `;
        container.appendChild(box);
    });
}

function createHolidayTable(){
    const holidayTable = document.querySelector(".holidaytable");
    let table = document.createElement("table");
    table.innerHTML = `
        <thead>
        <tr>
            <th>Holiday:</th>
            <th>Dates:</th>
            <th>Hours:</th>
        </tr>
        </thead>`;
    holidayTable.appendChild(table);

    holidayDates.forEach((holiday) => {
        let holidayData = document.createElement("tr");
        holidayData.innerHTML = `
        <tbody>
            <tr>
                <td>${holiday.holiday}</td>
                <td>${holiday.dates}</td>
                <td>${holiday.hours}</td>
            </tr>
        </tbody>`;
        table.appendChild(holidayData);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    createMenuBoxes(menuData);
    createHolidayTable();
  });











 