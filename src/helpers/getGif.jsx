
const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=UmuRogpNHqn8nDbWDcptG6hV72y2qQ1l&q=${category}&limit=10`
    const resp = await fetch(url);

    const {data} = await resp.json();

    const objGifs = data.map((value) => ({
        id: value.id,
        title: value.title,
        image: value.images.downsized_medium.url
    }))

    return objGifs;
        
}

export default getGifs;