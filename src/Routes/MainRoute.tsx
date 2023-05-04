import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = lazy(() => import('../components/Navebar/NavBar'))
const Homepage = lazy(()=> import('../pages/home-page'))

function MainRoute() {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <Router>
            <Suspense fallback={
                <div className="loading flex-col">
                    <PuffLoader
                        color={"#4aa4f8"}
                        size={100}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>}>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Homepage/>}/>
                </Routes>
            </Suspense>
        </Router>
    );
}

export default MainRoute;