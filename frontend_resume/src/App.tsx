import { useContext, lazy, Suspense } from "react";
import { ThemeContext } from "./context/theme.context";
import Navbar from "./components/navbar/Navbar.component";
import { Routes, Route } from "react-router-dom";
import CustomLinearProgress from "./components/custom-linear-progress/CustomLinearProgress.component";

// Lazy yüklenen bileşenler için tanımlamalar
const Home = lazy(() => import("./pages/home/Home.page"));
const Companies = lazy(() => import("./pages/companies/Companies.page"));
const AddCompany = lazy(() => import("./pages/companies/AddCompany.page"));
const Jobs = lazy(() => import("./pages/jobs/Jobs.page"));
const AddJob = lazy(() => import("./pages/jobs/AddJob.page"));
const Candidates = lazy(() => import("./pages/candidates/Candidates.page"));
const AddCandidate = lazy(() => import("./pages/candidates/AddCandidate.page"));


const App = () => {
  const { darkMode } = useContext(ThemeContext);

  const appStyles = darkMode ? "app dark" : "app";

  return (
    <div className={appStyles}>
      <Navbar />
      <div className="wrapper">
        <Suspense fallback={<CustomLinearProgress />}>
          {" "}
          {/* Suspense bileşenini bu seviyede kullanıyoruz */}
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/companies">
              <Route index element={<Companies />} />
              <Route path="add" element={<AddCompany />} />
            </Route>

            <Route path="/jobs">
              <Route index element={<Jobs></Jobs>}></Route>
              <Route path="add" element={<AddJob />} />
            </Route>

            <Route path="/candidates">
              <Route index element={<Candidates></Candidates>}></Route>
              <Route path="add" element={<AddCandidate />} />
            </Route>

          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
