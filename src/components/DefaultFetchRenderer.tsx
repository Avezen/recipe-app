import React from "react";
import loader from "../assets/images/loader.svg";
import {FormattedMessage} from "react-intl";

export const DefaultFetchRenderer = ({data, component}: any) => (
    <React.Fragment>
        {
            !data.fetchedData ? (
                <React.Fragment/>
            ) : data.isLoading ? (
                <div
                    className={'fetch-info'}
                >
                    <img
                        src={loader}
                        alt={'loader'}
                        width={30}
                    />
                </div>
            ) : data.error ? (
                <div
                    className={'fetch-info'}
                >
                    <FormattedMessage id="mainPage.fetchingError"/>
                </div>
            ) : data.fetchedData.length > 0 ? (
                component
            ) : (
                <div
                    className={'fetch-info'}
                >
                    <FormattedMessage id="mainPage.notFound"/>
                </div>
            )
        }
    </React.Fragment>
);