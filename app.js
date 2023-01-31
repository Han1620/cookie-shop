function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

function CookieStore(name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.custPerHour = [];
  this.cookiesPerHour = [];
}

CookieStore.prototype.calcCustPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let numCust = randomNum(this.minCust, this.maxCust);
    this.custPerHour.push(numCust);
  }
};

CookieStore.prototype.calcCookiesPerHour = function () {
  for (let i = 0; i < this.custPerHour.length; i++) {
    let numCookies = Math.floor(this.custPerHour[i] * this.avgCookie);
    this.cookiesPerHour.push(numCookies);
  }
};

CookieStore.prototype.render = function () {
  this.calcCustPerHour();
  this.calcCookiesPerHour();

  const tableElem = document.getElementById("myTable");
  const rowElem = document.createElement("tr");
  tableElem.appendChild(rowElem);

  let dataElem = document.createElement("td");
  dataElem.textContent = this.name;
  rowElem.appendChild(dataElem);

  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    dataElem = document.createElement("td");
    dataElem.textContent = this.cookiesPerHour[i];
    rowElem.appendChild(dataElem);
  }
};

function makeHeaderRow() {
  const tableElem = document.getElementById("myTable");
  const rowElem = document.createElement("tr");
  tableElem.appendChild(rowElem);

  let headerElem = document.createElement("th");
  rowElem.appendChild(headerElem);

  for (let i = 0; i < hours.length; i++) {
    headerElem = document.createElement("th");
    headerElem.textContent = hours[i];
    rowElem.appendChild(headerElem);
  }
}

makeHeaderRow();

const seattle = new CookieStore("Seattle", 23, 65, 6.3);
const tokyo = new CookieStore("Tokyo", 3, 24, 1.2);
const dubai = new CookieStore("Dubai", 5, 45, 3.3);
const paris = new CookieStore("Paris", 20, 38, 2.3);
const lima = new CookieStore("Lima", 2, 16, 4.6);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

//code for intro in index.html
CookieStore.prototype.intro = function () {
  const artElem = document.getElementById("restIntro");
  const headingElem = document.createElement("h2");
  headingElem.textContent = this.name;
  artElem.appendChild(headingElem);

  const paraElem = document.createElement("p");
  paraElem.textContent = this.name + " is a tasty place to eat!";
  artElem.appendChild(paraElem);
};

// }

// // stores[i].render()

//TABLES:

//create table element/tag
// const tableEl = document.createElement('table');

// //array of stores, linked to above
// const stores = [seattle, tokyo, dubai, paris, lima];

//for loop
//create a row element/tag
//create currentStore refers to everything in the stores array
// for(let i = 0; i < stores.length; i++){
//   const rowEl = document.createElement('tr');
//   const currentStore  = stores[i];

//   let el = document.createElement('th');
//   el.textContent = currentStore.name;
//   rowEl.appendChild(el);

//   el = document.createElement('td');
//   el.textContent = currentStore.minCust;
//   rowEl.appendChild(el);

//   el = document.createElement('td');
//   el.textContent = currentStore.maxCust;
//   rowEl.appendChild(el);

//   el = document.createElement('td');
//   el.textContent = currentStore.avgCookie;
//   rowEl.appendChild(el);
//   tableEl.appendChild(rowEl);
// }

// document.body.appendChild(tableEl);
