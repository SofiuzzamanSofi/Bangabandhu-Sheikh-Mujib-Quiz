const allTypeApi = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/quiz');
    const data = await res.json();



    const questionsLoaders = async (id) => {
        const res2 = await fetch(`https://openapi.programming-hero.com/api/quiz/${id}`);
        const data2 = await res2.json();
        // console.log(data2);
        return data2;
    }

    return { data, questionsLoaders };
};



const questionsLoaders = async (id) => {
    const questionId = id.params.id;
    const res2 = await fetch(`https://openapi.programming-hero.com/api/quiz/${questionId}`);
    const data2 = await res2.json();
    console.log(data2);
    return data2;
}

export { allTypeApi, questionsLoaders };