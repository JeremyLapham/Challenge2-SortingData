import { displayAllNames, getData } from "./display.js";
const show10 = document.getElementById('show10');
const show20 = document.getElementById('show20');
const show30 = document.getElementById('show30');
const show40 = document.getElementById('show40');
const show50 = document.getElementById('show50');

const sortBy = document.getElementById('sortBy');

show10.addEventListener('click', function() {
    displayAllNames(1,10);
    sortBy.value = 'none';
    sortBy.addEventListener('change', function() {
        if(sortBy.value === 'id') {
            displayAllNames(1,10,'Id')
        } else if (sortBy.value === 'firstName') {
            displayAllNames(1,10,'FirstName')
        } else if (sortBy.value === 'lastName') {
            displayAllNames(1,10,'LastName')
        } else if (sortBy.value === 'email') {
            displayAllNames(1,10,'Email')
        } else if (sortBy.value === 'height') {
            displayAllNames(1,10,'Height')
        } else if (sortBy.value === 'age') {
            displayAllNames(1,10,'Age')
        }
    });
});
show20.addEventListener('click', function() {
    displayAllNames(1,20);
    sortBy.value = 'none';
    sortBy.addEventListener('change', function() {
        if(sortBy.value === 'id') {
            displayAllNames(1,20,'Id')
        } else if (sortBy.value === 'firstName') {
            displayAllNames(1,20,'FirstName')
        } else if (sortBy.value === 'lastName') {
            displayAllNames(1,20,'LastName')
        } else if (sortBy.value === 'email') {
            displayAllNames(1,20,'Email')
        } else if (sortBy.value === 'height') {
            displayAllNames(1,20,'Height')
        } else if (sortBy.value === 'age') {
            displayAllNames(1,20,'Age')
        }
    });
});
show30.addEventListener('click', function() {
    displayAllNames(1,30);
    sortBy.value = 'none';
    sortBy.addEventListener('change', function() {
        if(sortBy.value === 'id') {
            displayAllNames(1,30,'Id')
        } else if (sortBy.value === 'firstName') {
            displayAllNames(1,30,'FirstName')
        } else if (sortBy.value === 'lastName') {
            displayAllNames(1,30,'LastName')
        } else if (sortBy.value === 'email') {
            displayAllNames(1,30,'Email')
        } else if (sortBy.value === 'height') {
            displayAllNames(1,30,'Height')
        } else if (sortBy.value === 'age') {
            displayAllNames(1,30,'Age')
        }
    });
});
show40.addEventListener('click', function() {
    displayAllNames(1,40);
    sortBy.value = 'none';
    sortBy.addEventListener('change', function() {
        if(sortBy.value === 'id') {
            displayAllNames(1,40,'Id')
        } else if (sortBy.value === 'firstName') {
            displayAllNames(1,40,'FirstName')
        } else if (sortBy.value === 'lastName') {
            displayAllNames(1,40,'LastName')
        } else if (sortBy.value === 'email') {
            displayAllNames(1,40,'Email')
        } else if (sortBy.value === 'height') {
            displayAllNames(1,40,'Height')
        } else if (sortBy.value === 'age') {
            displayAllNames(1,40,'Age')
        }
    });
});
show50.addEventListener('click', function() {
    displayAllNames(1,50);
    sortBy.value = 'none';
    sortBy.addEventListener('change', function() {
        if(sortBy.value === 'id') {
            displayAllNames(1,50,'Id')
        } else if (sortBy.value === 'firstName') {
            displayAllNames(1,50,'FirstName')
        } else if (sortBy.value === 'lastName') {
            displayAllNames(1,50,'LastName')
        } else if (sortBy.value === 'email') {
            displayAllNames(1,50,'Email')
        } else if (sortBy.value === 'height') {
            displayAllNames(1,50,'Height')
        } else if (sortBy.value === 'age') {
            displayAllNames(1,50,'Age')
        }
    });
});

sortBy.addEventListener('change', function() {
    if(sortBy.value === 'id') {
        displayAllNames(1,10,'Id')
    } else if (sortBy.value === 'firstName') {
        displayAllNames(1,10,'FirstName')
    } else if (sortBy.value === 'lastName') {
        displayAllNames(1,10,'LastName')
    } else if (sortBy.value === 'email') {
        displayAllNames(1,10,'Email')
    } else if (sortBy.value === 'height') {
        displayAllNames(1,10,'Height')
    } else if (sortBy.value === 'age') {
        displayAllNames(1,10,'Age')
    }
});

getData()