import { Routes, Route } from "react-router-dom"
import CoasterDetailsPage from "../pages/CoasterDetailsPage/CoasterDetailsPage"
import CoastersListPage from "../pages/CoastersListPage/CoastersListPage"
import NewCoasterPage from "../pages/NewCoasterPage/NewCoasterPage"


const AppRoutes = ({ setToastMessage, setShowToast }) => {

    return (
        <Routes>
            <Route path="/" element={<p>INICIO</p>} />
            <Route path="/galeria" element={<CoastersListPage setShowToast={setShowToast} setToastMessage={setToastMessage} />} />
            <Route path="/detalles/:coaster_id" element={<CoasterDetailsPage />} />
            <Route path="/crear" element={<NewCoasterPage />} />
            <Route path="/registro" element={<p>registro</p>} />
            <Route path="/iniciar-sesion" element={<p>iniciar</p>} />
            <Route path="/perfil" element={<p>perfil</p>} />
            <Route path="/*" element={<p>404</p>} />
        </Routes>
    )
}

export default AppRoutes