import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/lib/LanguageContext";
import Navbar from "@/components/navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Booking from "@/pages/booking";
import HotelBooking from "@/pages/hotels";
import TripListing from "@/pages/trips";
import TripDetails from "@/pages/trips/[id]";

function Router() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        {" "}
        {/* Add padding to account for fixed navbar */}
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/booking" component={Booking} />
          <Route path="/hotels" component={HotelBooking} />
          <Route path="/trips" component={TripListing} />
          <Route path="/trips/:id" component={TripDetails} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <WhatsAppButton />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Router />
        <Toaster />
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
