import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Component/Home";
import User from "./Component/User";
import Form from "./Component/Form";
import Demo from "./Examples/Auth_routes";
import Holder from "./Examples/Holder";

// let routing = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     children: [
//       {
//         path: "/Form",
//         element: <Form  />,
//       },
//       {
//         path: "/User",

//         element: <User  />,
//       },
//     ],
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//       <RouterProvider router={routing} />
//   );

// const temp = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route element={<Home />}>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<LoginPage />} />
//       </Route>

//       <Route path="/dashboard" element={<ProtectedLayout />}>
//         <Route path="profile" element={<ProfilePage />} />
//         <Route path="settings" element={<SettingsPage />} />
//       </Route>
//     </>
//   )
// );

let Auth_routing = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/Auth",
        element: <Demo />,
      },
      {
        path: "/User",
        element: <User />,
      },
      {
        path: "/Form",
        element: (
          <Holder>
            <Form />
          </Holder>
        ),
      },
      // {
      //   Holder: "/protected",
      //   element: <Holder />,
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Auth_routing} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
