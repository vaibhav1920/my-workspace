import React, { JSX } from 'react';
//import { LayoutRouteProps,PathRouteProps,IndexRouteProps } from 'react-router-dom';
import WaterParkPage from './ui-waterpark';
//const WaterParkPage = React.lazy(() => import('./ui-waterpark'));

// export const waterParkRoutesProps = () => {
//     const props : (PathRouteProps | LayoutRouteProps | IndexRouteProps)[] = [
//         { path : '/ui-waterpark', element: (
//                 <React.Suspense fallback={<div>Loading...</div>}>
//                     <WaterParkPage />
//                 </React.Suspense>
//             )},
//     ];
//     return props;
// };

export const waterParkRoutesProps: Array<{ path: string; element: JSX.Element }> = [
  {
    path: "/ui-waterpark",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <WaterParkPage />
      </React.Suspense>
    ),
  }
];