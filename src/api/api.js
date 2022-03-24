
let url = 'https://covid19.mathdro.id/api';
// https://covid19.mathdro.id/api/countries
export const fetchcountry = async () => {
    const respone = await fetch(`${url}/countries`);
    const data = await respone.json();
    var countriestemp = [];
    for (var i in data) {
        countriestemp.push(data[i]);
    }
    const countries = countriestemp[0];
    console.log(countries);
    return countries.map((country) => country.name);
}
export const fetchInfoEachcountry = async (country) => {
    let respone = url;
    if (country) {
        respone = `${url}/countries/${country}`;
    }
    const value = await fetch(respone);
    const data = value.json();
    // const { data: { confirmed } } = data;
    // return countries.map((item) => item.name);
    return data;

}
