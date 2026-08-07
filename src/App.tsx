import LandingPage from "./pages/LandingPage";

import { useEffect, useState, useLayoutEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import GetStartedAboutGlobalDesignSystemCollapsed from "./pages/GetStartedAboutGlobalDesignSystemCollapsed";
import ButtonOverview from "./pages/ButtonOverview";
import InputFieldOverview from "./pages/InputFieldOverview";
import Color from "./pages/ColorMain";
import ColorProductStrongBlue from "./pages/ColorProductStrongBlue";
import ColorProductTealBlue from "./pages/ColorProductTealBlue";
import ColorProductGrayBlue from "./pages/ColorProductGrayBlue";
import ColorProductDarkBlue from "./pages/ColorProductDarkBlue";
import TypographyOverview from "./pages/TypographyOverview";
import SpacingPage from "./pages/SpacingPages";
import ProductIconPage from "./pages/ProductIcon";
import CheckboxPage from "./pages/Checkbox";
import SignIn from "./pages/SignIn";
import Ourvision from "./pages/OurVision";
import OurDesignPhilosophy from "./pages/OurDesignPhilosophy";
import Design from "./pages/Desing";
import Development from "./pages/Development";
import SplashScreen from "./pages/SplashScreen";
import ToastMessagePage from "./pages/ToastMessage";
import IconLibrary from "./pages/IconLibrary";
import InnovationLab from "./pages/InnovationLab";
import Products from "./pages/Products";
import ConnectWithUs from "./pages/ConnectWithUs";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "HBK Experience Hub";
        metaDescription = "";
        break;
      case "/about-global-design-system":
        title = "HBK Experience Hub - About Global Design System";
        metaDescription = "";
        break;
      case "/innovation-lab":
        title = "HBK Experience Hub - Innovation Lab";
        metaDescription = "";
        break;
      case "/products":
        title = "HBK Experience Hub - Products";
        metaDescription = "";
        break;
      case "/connect-with-us":
        title = "HBK Experience Hub - Connect with Us";
        metaDescription = "";
        break;
      case "/vision":
        title = "HBK Experience Hub - Vision";
        metaDescription = "";
        break;
      case "/design-philosophy":
        title = "HBK Experience Hub - Design Philosophy";
        metaDescription = "";
        break;
      case "/design":
        title = "HBK Experience Hub - Design";
        metaDescription = "";
        break;
      case "/development":
        title = "HBK Experience Hub - Development";
        metaDescription = "";
        break;
      case "/button":
        title = "HBK Experience Hub - Button";
        metaDescription = "";
        break;
      case "/input-field":
        title = "HBK Experience Hub - Input Field";
        metaDescription = "";
        break;
      case "/color-product-strong-blue":
        title = "HBK Experience Hub - Product Strong Blue";
        metaDescription = ""; 
        break;
      case "/color":
        title = "HBK Experience Hub - Color";
        metaDescription = "";
        break;
      case "/color-product-teal-blue":
        title = "HBK Experience Hub - Product Teal Blue";
        metaDescription = "";
        break;
      case "/color-product-grey-blue":
        title = "HBK Experience Hub - Product Grey Blue";
        metaDescription = "";
        break;
      case "/color-product-dark-blue":
        title = "HBK Experience Hub - Product Dark Blue";
        metaDescription = "";
        break;
      case "/typography":
        title = "HBK Experience Hub - Typography";
        metaDescription = "";
        break;
      case "/spacing":
        title = "HBK Experience Hub - Spacing";
        metaDescription = "";
        break;
      case "/product-icon":
        title = "HBK Experience Hub - Product Icon";
        metaDescription = "";
        break;
      case "/checkbox":
        title = "HBK Experience Hub - Checkbox";
        metaDescription = "";
        break;
      case "/sign-in":
        title = "HBK Experience Hub - Sign In";
        metaDescription = "";
        break;
      case "/splash-screen":
        title = "HBK Experience Hub - Splash Screen";
        metaDescription = "";
        break;
      case "/toast-message":
        title = "HBK Experience Hub - Toast Message";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about-global-design-system" element={<GetStartedAboutGlobalDesignSystemCollapsed />}/>
      <Route path="/vision" element={<Ourvision />} />
      <Route path="/design-philosophy" element={<OurDesignPhilosophy />} />
      <Route path="/design" element={<Design />} />
      <Route path="/development" element={<Development />} />
      <Route path="/color" element={<Color />} />
      <Route path="/color-product-strong-blue" element={<ColorProductStrongBlue />} />
      <Route path="/color-product-teal-blue" element={<ColorProductTealBlue />} />
      <Route path="/color-product-grey-blue" element={<ColorProductGrayBlue />} />
      <Route path="/color-product-dark-blue" element={<ColorProductDarkBlue />} />
      <Route path="/typography" element={<TypographyOverview />} />
      <Route path="/spacing" element={<SpacingPage />} />
      <Route path="/icon-library" element={<IconLibrary />} />
      <Route path="/product-icon" element={<ProductIconPage />} />
      <Route path="/button" element={<ButtonOverview />} />
      <Route path="/input-field" element={<InputFieldOverview />} />
      <Route path="/checkbox" element={<CheckboxPage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/splash-screen" element={<SplashScreen />} />
      <Route path="/toast-message" element={<ToastMessagePage />} />
      <Route path="/innovation-lab" element={<InnovationLab />} />
      <Route path="/products" element={<Products />} />
      <Route path="/connect-with-us" element={<ConnectWithUs />} />
    </Routes>
  );
}
export default App;
