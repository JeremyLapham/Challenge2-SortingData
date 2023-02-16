function displayTitle() {
    let row = document.createElement('div');
    row.className = 'row';

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

    let h1 = document.createElement('h4');
    h1.textContent = 'Id';
    let h2 = document.createElement('h4');
    h2.textContent = 'First Name';
    let h3 = document.createElement('h4');
    h3.textContent = 'Last Name';
    let h4 = document.createElement('h4');
    h4.textContent = 'Email';
    let h5 = document.createElement('h4');
    h5.textContent = 'Height';
    let h6 = document.createElement('h4');
    h6.textContent = 'Age';
    
    col1.appendChild(h1);
    col2.appendChild(h2);
    col3.appendChild(h3);
    col4.appendChild(h4);
    col5.appendChild(h5);
    col6.appendChild(h6);
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    row.appendChild(col5);
    row.appendChild(col6);
    displayNames.appendChild(row);
}
export { displayTitle }