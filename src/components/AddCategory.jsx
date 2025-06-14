import {useState, useEffect} from "react"

const AddCategory = ({onAddCategory}) => { 

    const [inputValue, setInputValue] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length <= 1) return;

        onAddCategory(inputValue)

        setInputValue("")
    }

    return(
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Buscar Gifs" 
                value={inputValue} 
                onChange={e => setInputValue(e.target.value)}
            />
        </form>
    )
}

export default AddCategory;

/*


import {useState, useEffect} from "react"

const AddCategory = ({setCategory}) => { 

    const [inputValue, setInputValue] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length <= 1) return;

        setCategory(categories => [inputValue, ...categories]);

        setInputValue("")
    }

    return(
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Buscar Gifs" 
                value={inputValue} 
                onChange={e => setInputValue(e.target.value)}
            />
        </form>
    )
}

export default AddCategory;
*/