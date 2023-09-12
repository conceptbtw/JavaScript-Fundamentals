const countryDropdown = document.getElementById("country");
const citiesDropdown = document.getElementById("cities");
const infoParagraph = document.getElementById("selectedCountryAndCity");
const citiesByCountry = {
    Germany: ["Berlin", "Munich", "Hamburg", "Essen"],
    USA: ["New York", "Washington", "Chicago", "Boston"],
    Ukraine: ["Kyiv", "Lviv", "Odessa", "Kharkiv"]
};
function updateInfo() {
    const selectedCountry = countryDropdown.value;
    const selectedCity = citiesDropdown.value;
    infoParagraph.textContent = "Country: " + selectedCountry + "; City: " + selectedCity;
}
countryDropdown.addEventListener("change", function () {
    citiesDropdown.innerHTML = "";
    const selectedCountry = countryDropdown.value;
    const cities = citiesByCountry[selectedCountry];
    cities.forEach(function (city) {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        citiesDropdown.appendChild(option);
    });
    updateInfo();
});
citiesDropdown.addEventListener("change", updateInfo);
countryDropdown.dispatchEvent(new Event("change"));
