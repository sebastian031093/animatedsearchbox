
//Seleccionar desde el DOM elementos a utilizar.

const searchBtn = document.querySelector('.search-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const searchBox = document.querySelector('.search-box');
const searchInput = document.querySelector('.search-input')
const searchData = document.querySelector('.search-data')

searchBtn.addEventListener('click', (evento) => {
    searchBox.classList.add("active");
    searchInput.classList.add("active");
    searchBtn.classList.add("active");
    cancelBtn.classList.add("active");
    //console.log(searchInput.value)
    if (searchInput.value != "") {
        let values = searchInput.value
        searchData.classList.remove("active");
        searchData.innerHTML = "You just typed " + "<span>" + values + "</span>";
    } else {
        searchData.innerHTML = "";
    }
});

cancelBtn.addEventListener('click', (evento) => {
    searchBox.classList.remove("active");
    searchInput.classList.remove("active");
    searchBtn.classList.remove("active");
    cancelBtn.classList.remove("active");
    searchData.classList.add("active");
    searchInput.value = "";
})