import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SITE_URL } from './utils/const';
import './App.scss';
import PageNotFound from './pages/404/404';
import AlertSite from './features/alert/alert';
import Achievements from './pages/Achievements/achievements';
import ProfileSettings from './pages/profile-settings/proflie-settings';
import ViewHistory from './pages/viewHistory/view-history';
import Finance from './pages/finance/finance';
import CatalogWarface from './pages/catalog-warface/catalog-warface';
import Reviews from './pages/reviews/reviews';
import RefSystems from './pages/ref-systems/ref-systems';
import PopularCases from './pages/popular-cases/popular-cases';
import Guarantees from './pages/guarantees/guarantees';
import RandomItem from './pages/random-item/random-item';
import Bookmarks from './pages/bookmarks/bookmarks';
import Case from './pages/case/case';
import Home from './pages/home/home';
import Faq from './pages/faq/faq';
import MyMessages from './pages/my-messages/my-messages';
import GameSelection from './pages/game-selection/game-selection';
import Profile from './pages/profile/profile';
import Notification from './pages/notification/notification';
import Draw from './pages/draw/draw';
import OrderTable from './pages/order-table/order-table';
import ChatCustomer from './pages/chat-customer/chat-customer';
import Support from './pages/support/support';
import PurchasesSales from './pages/purchases-sales/purchases-sales';
import TopUsers from './pages/top-users/top-users';
import RatingWarface from './pages/rating-warface/rating-warface';
import MyProducts from './pages/my-products/my-products';
import ChatSeller from './pages/chat-seller/chat-seller';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={SITE_URL.HOME} element={<Home />} />
          <Route path={SITE_URL.FAQ} element={<Faq />} />
          <Route path={SITE_URL.ACHIEVEMENTS} element={<Achievements />} />
          <Route path={SITE_URL.PROFILE_SETTINGS} element={<ProfileSettings />} />
          <Route path={SITE_URL.VIEW_HISTORY} element={<ViewHistory />} />
          <Route path={SITE_URL.FINANCE} element={<Finance />} />
          <Route path={SITE_URL.CATALOG_WARFACE} element={<CatalogWarface />} />
          <Route path={SITE_URL.REVIEWS} element={<Reviews />} />
          <Route path={SITE_URL.REF_SYSTEMS} element={<RefSystems />} />
          <Route path={SITE_URL.POPULAR_CASES} element={<PopularCases />} />
          <Route path={SITE_URL.GUARANTEES} element={<Guarantees />} />
          <Route path={SITE_URL.RANDOM_ITEM} element={<RandomItem />} />
          <Route path={SITE_URL.BOOKMARKS} element={<Bookmarks />} />
          <Route path={SITE_URL.CASE} element={<Case />} />
          <Route path={SITE_URL.MY_MESSAGE} element={<MyMessages />} />
          <Route path={SITE_URL.GAME_SELECTION} element={<GameSelection />} />
          <Route path={SITE_URL.PROFILE} element={<Profile />} />
          <Route path={SITE_URL.NOTIFICATION} element={<Notification />} />
          <Route path={SITE_URL.DRAW} element={<Draw />} />
          <Route path={SITE_URL.ORDER_TABLE} element={<OrderTable />} />
          <Route path={SITE_URL.CHAT_CUSTOMER} element={<ChatCustomer />} />
          <Route path={SITE_URL.SUPPORT} element={<Support />} />
          <Route path={SITE_URL.PURCHASES_SALES} element={<PurchasesSales />} />
          <Route path={SITE_URL.TOP_USERS} element={<TopUsers />} />
          <Route path={SITE_URL.MY_PRODUCTS} element={<MyProducts />} />
          <Route path={SITE_URL.CHAT_SELLER} element={<ChatSeller />} />
          <Route path={SITE_URL.RATING_WARFACE} element={<RatingWarface />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>

      <AlertSite />
    </>
  );
}

export default App;
