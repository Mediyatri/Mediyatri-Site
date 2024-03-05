import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
const Design404ErrorPage = React.lazy(() => import("pages/Design404ErrorPage"));
const DesignSignUp = React.lazy(() => import("pages/DesignSignUp"));
const DesignLogin = React.lazy(() => import("pages/DesignLogin"));
const DesignGetInTouch = React.lazy(() => import("pages/DesignGetInTouch"));
const DesignPricing = React.lazy(() => import("pages/DesignPricing"));
const DesignServices = React.lazy(() => import("pages/DesignServices"));
const DesignHomepage = React.lazy(() => import("pages/DesignHomepage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<DesignHomepage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/services" element={<DesignServices />} />
          <Route path="/pricing" element={<DesignPricing />} />
          <Route path="/getintouch" element={<DesignGetInTouch />} />
          <Route path="/designlogin" element={<DesignLogin />} />
          <Route path="/designsignup" element={<DesignSignUp />} />
          <Route path="/design404errorpage" element={<Design404ErrorPage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
