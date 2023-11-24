import Header from "./components/header.jsx";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home/home-page.jsx";
import AboutPage from "./pages/about/about-page.jsx";
import ServicesPage from "./pages/services/services-page.jsx";
import ReviewsPage from "./pages/reviews/reviews-page.jsx";
import NoPage from "./pages/no-page/no-page.jsx";
import ContactPage from "./pages/contact/contact-page.jsx";
import SignUpPage from "./pages/authentication/sign-up-page.jsx";
import SignInPage from "./pages/authentication/sign-in-page.jsx";
import ServicesExpertsPage from "./pages/services/services-experts-page.jsx";
import ServicesOfferDetails from "./pages/services/services-offer-details.jsx";
import BookingDetailsPage from "./pages/booking/booking-details-page.jsx";
import SettingsPage from "./pages/settings/settings-page.jsx";
import SettingsAddressPage from "./pages/settings/settings-address-page.jsx";
import SettingsBookings from "./pages/settings/settings-bookings.jsx";
import {useState} from "react";
import {getBookings, getUsers} from "./utils/utils.jsx";

const App = () => {

    const [bookings, setBookings] = useState(getBookings());
    const [users, setUsers] = useState(getUsers);
    const [user, setUser] = useState({});

    const handleBookings = (bookingData) => {
        const currentUser = user;
        const tempUsers = users;
        const bookingDatas = [...bookings, bookingData];
        currentUser.bookings = bookingDatas;
        setBookings(bookingDatas);
        for(const user of tempUsers) {
            if(user.uuid === currentUser.uuid) {
                user.bookings = bookingDatas;
                localStorage.setItem("loggedIn", JSON.stringify(currentUser));
                break;
            }
        }
        setUser(currentUser);
        setUsers(tempUsers);
        localStorage.setItem("users", JSON.stringify(tempUsers));
    }

    const handleCancel = (index) => {
        const tempUsers = users;
        const remainingBookings = bookings.filter((booking, i) => i !== index);
        const currentUser = user;
        currentUser.bookings = remainingBookings;
        setUser(currentUser);
        setBookings(remainingBookings);
        for(const user of tempUsers) {
            if(user.uuid === currentUser.uuid) {
                user.bookings = bookingDatas;
                localStorage.setItem("loggedIn", JSON.stringify(currentUser));
                break;
            }
        }
        localStorage.setItem("users", JSON.stringify(tempUsers));
    }

    const handleLogin = (userData) => {
        setUser(userData);
        setBookings(userData.bookings);
        localStorage.setItem("loggedIn", JSON.stringify(userData));
    }

    const handleEditUser = (userData) => {
        const tempUsers = users;
        for(const user of tempUsers) {
            if(user.uuid === userData.uuid) {
                for(let key in userData) {
                    if(userData[key]){
                        user[key] = userData[key];
                    }
                }
                localStorage.setItem("loggedIn", JSON.stringify(user));
                break;
            }
        }
        setUsers(tempUsers);
        localStorage.setItem("users", JSON.stringify(tempUsers));
    }

    const handleAddUser = (userData) => {
        const userDatas = [...users, userData];
        setUsers(userDatas);
        localStorage.setItem("users", JSON.stringify(userDatas));
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/services" element={<ServicesPage/>}/>
                <Route path="/services/experts" element={<ServicesExpertsPage/>}/>
                <Route path="/services/offer-details" element={<ServicesOfferDetails/>}/>
                <Route path="/reviews" element={<ReviewsPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/booking/booking-details" element={<BookingDetailsPage handleBookings={handleBookings}/>}/>
                <Route path="/signin" element={<SignInPage users={users} handleLogin={handleLogin}/>}/>
                <Route path="/signup" element={<SignUpPage handleAddUser={handleAddUser}/>}/>
                <Route path="/settings/personal-information" element={<SettingsPage handleEditUser={handleEditUser}/>}/>
                <Route path="/settings/address" element={<SettingsAddressPage/>}/>
                <Route path="/settings/bookings" element={<SettingsBookings bookings={bookings} handleCancel={handleCancel}/>}/>
                <Route path="*" element={<NoPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;