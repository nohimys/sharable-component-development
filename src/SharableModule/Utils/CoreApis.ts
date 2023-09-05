const BASE_URL = 'https://jsonplaceholder.typicode.com';

const get = (urlPaths: string) => {
    return fetch(`${BASE_URL}/${urlPaths}`);
};
export default get;