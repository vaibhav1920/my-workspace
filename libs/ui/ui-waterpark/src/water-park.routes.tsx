import { Route } from 'react-router-dom';
import { waterParkRoutesProps } from './lib/Client-List/client-list.routes';

// Combine all route arrays from modules
const allRoutes = [
  ...waterParkRoutesProps,
  // ...add more module routes here
];

// Map to <Route> components
export const getWaterParkRoutes = allRoutes.map(({ path, element }) => (
  <Route key={path} path={path} element={element}></Route>
));
console.log("uiLibraryRoutes:", getWaterParkRoutes);

// export const getWaterParkRoutes = () => {
//     const routerProps = [...waterParkRoutesProps()];
//     return routerProps.map((props,index) => 
//         <Route
//             {...props}
//             key={index}
//         ></Route>
//     );
// };