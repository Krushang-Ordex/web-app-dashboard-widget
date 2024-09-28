import React from "react";
import PersonIcon from "./../assets/images/icon-person.png"; // Importing the Person Icon image for profile

// Functional component for the header section
const HeaderSection = () => {
  return (
    <header>
      <div className="row mx-0 px-0">
        {/* Full-width section with a search bar and icon buttons -symantic tag use */}
        <section className="col-12 section d-flex flex-wrap justify-content-sm-between justify-content-start align-items-center gap-md-0 gap-2">
          
          {/* Search bar */}
          <div className="col-lg-4 col-md-6 col-12 searchbar-section">
            <form className="search-field" role="search"> {/* Using form for search functionality */}
              {/* Search icon using FontAwesome */}
              <i className="fa-solid fa-magnifying-glass icon-search" aria-hidden="true"></i>
              {/* Input field for search functionality */}
              <input
                type="search"  // Search input type for better semantics
                className="form-control"
                placeholder="Search your page..." 
                aria-label="Search your page"  // aria-label for screen readers
              />
              {/* "OK" button to submit the search */}
              <button className="btn text-bg-primary" type="submit" aria-label="Submit Search">
                ok
              </button>
            </form>
          </div>

          {/* Section for notification, message, settings, and profile icons */}
          <section className="col-lg-8 col-md-6 col-12 d-flex align-items-center justify-content-sm-end justify-content-between gap-md-4 gap-2">
            
            {/* Notification button with a bell icon */}
            <button className="btn btn-icon-section" aria-label="Notifications">
              <i className="font-20 fa-solid fa-bell" aria-hidden="true"></i> {/* aria-hidden for decorative icon */}
              {/* Hidden text for screen readers to indicate unread notifications */}
              <span className="visually-hidden">Unread notifications</span>
              <span className="dot bg-warning"></span>
            </button>

            {/* Message button with message icon */}
            <button className="btn btn-icon-section" aria-label="Messages">
              <i className="font-20 fa-solid fa-message" aria-hidden="true"></i>
              {/* Hidden text for screen readers to indicate unread messages */}
              <span className="visually-hidden">Unread messages</span>
              <span className="dot bg-success"></span>
            </button>

            {/* Settings button with a gear icon */}
            <button className="btn btn-icon-section" aria-label="Settings">
              <i className="font-20 fa-solid fa-gear" aria-hidden="true"></i>
            </button>

            {/* Profile icon */}
            <img src={PersonIcon} alt="Profile Icon" width={40} height={40} />
          </section>
        </section>
      </div>
    </header>
  );
}

export default HeaderSection;
