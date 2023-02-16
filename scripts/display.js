import { displayTitle } from "./titledisplay.js";
const displayNames = document.getElementById('displayNames');

let names;

async function getData() {
    const response = await fetch('../data/data.json');
    const data = await response.json();
    names = data.People;
    displayAllNames()
}

function displayAllNames(page = 1, itemsPerPage = 10, sortKey = 'Id') {
    names.sort((a, b) => {
        if (sortKey === 'Id') {
            return a.Id - b.Id;
        } else if (sortKey === 'FirstName') {
            return a.FirstName.localeCompare(b.FirstName);
        } else if (sortKey === 'LastName') {
            return a.LastName.localeCompare(b.LastName);
        } else if (sortKey === 'Email') {
            return a.Email.localeCompare(b.Email);
        } else if (sortKey === 'Height') {
            return a.Height.localeCompare(b.Height);
        } else if (sortKey === 'Age') {
            return Number(a.Age) - Number(b.Age);
        }
    });

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageItems = names.slice(startIndex, endIndex);

    displayNames.innerHTML = '';

    const numPages = Math.ceil(names.length / itemsPerPage);
    for (let i = 1; i <= numPages; i++) {
        const button = document.createElement('button');
        button.className = 'btn btn-dark'
        button.textContent = i;
        if (i === page) {
            button.disabled = true;
        }
        button.addEventListener('click', () => {
            displayAllNames(i, itemsPerPage, sortKey);
        });
        displayNames.appendChild(button);
    }
    displayTitle()
    currentPageItems.forEach(name => {
        let row = document.createElement('div');
        row.className = 'row';
        row.style.border = '2px solid';

        let col1 = document.createElement('div');
        col1.className = 'col';

        let col2 = document.createElement('div');
        col2.className = 'col';

        let col3 = document.createElement('div');
        col3.className = 'col';

        let col4 = document.createElement('div');
        col4.className = 'col';

        let col5 = document.createElement('div');
        col5.className = 'col';

        let col6 = document.createElement('div');
        col6.className = 'col';

        let p1 = document.createElement('p');
        p1.textContent = name.Id;

        let p2 = document.createElement('p');
        p2.textContent = name.FirstName;

        let p3 = document.createElement('p');
        p3.textContent = name.LastName;

        let p4 = document.createElement('p');
        p4.textContent = name.Email;

        let p5 = document.createElement('p');
        p5.textContent = name.Height;

        let p6 = document.createElement('p');
        p6.textContent = name.Age;

        col1.appendChild(p1);
        col2.appendChild(p2);
        col3.appendChild(p3);
        col4.appendChild(p4);
        col5.appendChild(p5);
        col6.appendChild(p6);

        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
        row.appendChild(col5);
        row.appendChild(col6);

        displayNames.appendChild(row);
    });
}

export { displayAllNames, getData }