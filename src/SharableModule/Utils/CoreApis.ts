const BASE_URL = 'https://jsonplaceholder.typicode.com';

const get = async (urlPaths: string) => {
    return fetch(`${BASE_URL}/${urlPaths}`).then(result => result.json());
};
export default get;