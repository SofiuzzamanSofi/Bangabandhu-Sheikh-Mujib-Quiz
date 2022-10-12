const allTypeApi = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/quiz');
    const data = await res.json();

    return data;
};

export default allTypeApi;