import React from "react"
import Dropdown from "../Dropdown/DropdownContainer";
import {FormattedMessage, useIntl} from "react-intl";

interface SearchRecipeFormProps {
    inputItems: string[];
    setInputItems: any;
    updateInputItems: any;
    fetchData: any;
    closedForm: any;
    inputRef: any;
}

export const SearchRecipeForm = ({inputItems, setInputItems, updateInputItems, fetchData, closedForm, inputRef}: SearchRecipeFormProps) => {
    const intl = useIntl();

    return (
        <div
            className={`search-recipe-form ${closedForm ? 'closed' : ''}`}
        >
            <input
                ref={inputRef}
                type={'text'}
                className={'search-recipe-form__input'}
                placeholder = {intl.formatMessage({ id: 'mainPage.inputPlaceholder' })}
                value={inputItems}
                onKeyDown={fetchData(inputItems.filter((item: string) => item !== ''))}
                onChange={updateInputItems}
            />
            <div
                className={'search-recipe-form__buttons-container'}
            >
                <Dropdown
                    inputItems={inputItems}
                    setInputItems={setInputItems}
                    closedForm={closedForm}
                />
                <button
                    className={'main-button search-recipe-form__button'}
                    onClick={fetchData(inputItems.filter((item: string) => item !== ''))}
                >
                    <FormattedMessage id="mainPage.search"/>
                </button>
            </div>
        </div>
    );
};