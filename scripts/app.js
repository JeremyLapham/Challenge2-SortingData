const displayNames = document.getElementById('displayNames');


let names;

async function getData() {
    const response = await fetch('../data/data.json');
    const data = await response.json();
    names = data.People;
    console.log(names);
    displayAllNames()
}

function displayAllNames() {
    names.map(name => {
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


getData()