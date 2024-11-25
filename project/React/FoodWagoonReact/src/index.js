import React from "react";
import { createRoot } from "react-dom/client";
import AOS from 'aos';
import 'aos/dist/aos.css';  // If you're using CSS as well
import App from "./App.jsx";
import { useEffect } from 'react';

    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
const container = document.getElementById("root");
const root = createRoot(container);
// root.render(React.createElement("h2", {}, "We are learning React"));
root.render(React.createElement(App));