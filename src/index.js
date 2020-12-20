import Tooltip from './libraryUI/tooltip';
import Dropdown from './libraryUI/dropdown';
import Tabs from './libraryUI/tab';
import Snackbar from './libraryUI/snickersbar';


//TOOLTIP
const tooltip = new Tooltip(document.querySelector('.tooltip'));

tooltip.init();

//DROPDOWNS
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
})

//TABS
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();


//SNACKBAR
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');
button.addEventListener('click', () => {
    snackbar.show('YOU CLICKED ME!');
})
