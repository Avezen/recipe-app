import React, {ChangeEvent, createRef, useState} from "react";
import {SearchRecipeForm} from "./SearchRecipeForm";
import {useScroll} from "../../hooks/useScroll";

interface SearchRecipeFormContainerProps {
    fetchData: any;
}

let prevScrollY: any = 0;

const SearchRecipeFormContainer = ({fetchData}: SearchRecipeFormContainerProps) => {
    const [inputItems, setInputItems] = useState(['']);
    const scroll = useScroll();
    const input= createRef<HTMLInputElement>();

    let closedForm = false;
    if(scroll.scrollY > prevScrollY){
        closedForm = true;
    }
    prevScrollY = scroll.scrollY;

    const updateInputItems = (e: ChangeEvent<HTMLInputElement>) => {
        let inputItems = e.target.value.replace(/\s/g, '').split(',');

        setInputItems(inputItems);
    };

    const validateAndFocusInput = (data: string) => {
        if(data.length === 0 && input.current){
            input.current.focus();
            return false;
        }

        return true;
    };

    const onEnterOrOnClick = (data: string) => (e: any) => {
        if(validateAndFocusInput(data)){
            switch (e.type) {
                case 'keydown':
                    if (e.key === 'Enter') {
                        fetchData(data);
                    }
                    break;
                case 'click':
                    fetchData(data);
                    break;
            }
        }
    };

    const fetchDataAndClearInput = (data: string[]) => {
        fetchData(data);
        setInputItems(inputItems.filter((item: string) => item !== ''));
    };

    return (
        <SearchRecipeForm
            inputItems={inputItems}
            setInputItems={setInputItems}
            updateInputItems={updateInputItems}
            fetchData={onEnterOrOnClick}
            closedForm={closedForm}
        />
    )
};


export default SearchRecipeFormContainer;
