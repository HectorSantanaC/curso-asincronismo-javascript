import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

const anotherFn = async (urlApi) => {
    try {
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

        function* iterate(urlApi) {
            yield console.log(products);
            yield console.log(product.title);
            yield console.log(category.name);
        }

        const iterateFetchData = iterate(API);
        iterateFetchData.next();
        iterateFetchData.next();
        iterateFetchData.next();

    } catch (error) {
        console.error(error);
    }
}

anotherFn(API);