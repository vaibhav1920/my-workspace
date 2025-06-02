import React from 'react';
import { LayoutRouteProps,PathRouteProps,IndexRouteProps } from 'react-router-dom';

const WaterParkPage = React.lazy(() => import('./waterpark-Client'));
const CreateNewClient = React.lazy(() => import('./create-new-client/create-new-client'));

export const waterParkRoutesProps = () => {
    const props : (PathRouteProps | LayoutRouteProps | IndexRouteProps)[] = [
        { path : '/waterparkClient', element: <WaterParkPage />},
        { path : '/createnewclient', element: <CreateNewClient />},
    ];
    return props;
};