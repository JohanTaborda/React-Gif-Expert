import {useState, useEffect} from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {

    const [category, setCategory] = useState(["Dragon Ball"]);

    const onAddCategory = (newValue) => {

        if(category.includes(newValue)){
            alert("Ese valor ya existe en la lista");
            return;
        }

        setCategory([newValue, ...category])
    } 

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onAddCategory={onAddCategory}  />

            {category.map((value) => (
                <GifGrid key={value} category={value} />
            ))}

        </>
    )
}

export default GifExpertApp;



/*

import {useState, useEffect} from "react";
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {

    const [category, setCategory] = useState(["One Punch", "Dragon Ball"]);

    const onAddCategory = () => {
        setCategory([newValue, ...category])
    }


    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategory={setCategory}  />
            <ol>
                {category.map((value, index) => (
                    <li key={index}>
                        {value}
                    </li>
                ))}
            </ol>
        </>
    )
}

export default GifExpertApp;


*/