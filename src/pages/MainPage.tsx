import React from 'react';
import {withHelmet} from "../HOCs/withHelmet";
import SearchRecipeForm from "../components/SearchRecipe/SearchRecipeFormContainer";
import {withData, WithDataProps} from "../HOCs/withData";
import {fetchRecipes} from "../services/RecipeService";
import {SearchRecipeList} from "../components/SearchRecipe/SearchRecipeList";
import {MainLayout} from "../layouts/MainLayout";
import {DefaultFetchRenderer} from "../components/DefaultFetchRenderer";

const MainPageBase = ({data, fetchData}: WithDataProps) => (
    <React.Fragment>
        <MainLayout
            form={
                <SearchRecipeForm
                    fetchData={fetchData}
                />
            }
            content={
                <DefaultFetchRenderer
                    data={data}
                    component={
                        <SearchRecipeList
                            fetchData={fetchData}
                            data={data.fetchedData}
                        />
                    }
                />
            }
        />
    </React.Fragment>
);


export const MainPageWithHelmet = withHelmet(MainPageBase);
export const MainPage = withData(MainPageWithHelmet, fetchRecipes);

