# SkillBridge Lite

A multi-page React application built with Vite and React Router, serving as a preview of the Week 6 capstone student internship platform.

## Tech Stack
- **React (v18+)** with Function Components & Hooks (`useState`, `useEffect`)
- **Vite** for fast bundling and development
- **React Router DOM** for client-side routing and dynamic parameter handling

## Routes List
1. **Home / Listings Page (`/`)**: Displays a grid of 6 hardcoded internship listings.
2. **Listing Detail Page (`/listings/:id`)**: Dynamic route showing full info for a selected internship, with graceful handling for invalid IDs.
3. **Apply Form Page (`/apply`)**: Controlled form with client-side inline validation (Name and Email) and a simulated submission state.
4. **Catch-All 404 Page (`*`)**: Renders a friendly "Page Not Found" view for any unmatched route.

## Explicit Note on Backend
* **Simulated Submission:** The form submission on the Apply page handles client-side validation and toggles a local success state. **No real backend server or database is connected**, and data is not persisted remotely.

## Routing Edge Case Handled (Invalid ID)
* **Before:** Accessing a non-existent dynamic route (e.g., `/listings/999`) would either throw an error or crash the component due to undefined property lookups.
* **After:** The `ListingDetail` component checks if the listing exists. If not found, it gracefully renders a friendly user interface ("Listing Not Found") with a navigation button back to the home page instead of crashing.

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone [https://github.com/mukher181/skillbridge-listingpreview.git](https://github.com/mukher181/skillbridge-listingpreview.git)