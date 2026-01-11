# Changelog

## Features Implemented

### Core Requirements ✅

1. **SWAPI Integration**

   - Created Axios client (`services/swapi.ts`) to interact with the Star Wars API
   - Implemented TypeScript interfaces for Planets, People, and Starships
   - Configured proper error handling and timeout settings

2. **React Query Integration**

   - Configured React Query provider in `_app.tsx`
   - Created custom hooks for data fetching:
     - `usePlanets()` - Fetches planets data
     - `usePeople()` - Fetches people data
     - `useStarships()` - Fetches starships data
   - Implemented proper caching and stale time configuration

3. **Tabbed Interface**

   - Implemented three tabs using Ant Design's `Tabs` component:
     - **Planets Tab**: Displays table of planets with columns: Name, Climate, Terrain, Population, Diameter
     - **People Tab**: Displays table of people with columns: Name, Height, Mass, Gender, Birth Year
     - **Starships Tab**: Displays table of starships with columns: Name, Model, Manufacturer, Cost, Crew, Starship Class

4. **Ant Design Tables**
   - Used Ant Design's `Table` component for all three tabs
   - Configured proper column definitions with custom renderers
   - Implemented row keys using unique URLs from API
   - Added loading states for better UX

### Bonus Features ✅

5. **Detail Drawer**

   - Implemented Ant Design's `Drawer` component
   - Clicking on any table row opens a drawer with detailed information
   - Displays all item properties in a formatted, readable way
   - Handles arrays and links appropriately
   - Clean and organized layout

6. **Search Functionality**
   - Added `Input.Search` component from Ant Design to each tab
   - Real-time filtering of table results based on search input
   - Case-insensitive search
   - Search is scoped to the name field of each item
   - Search resets when switching between tabs

### Additional Improvements

7. **Error Handling**

   - Added error states with Ant Design `Alert` component
   - User-friendly error messages for failed API requests

8. **Code Organization**

   - Separated concerns: services, hooks, and components
   - TypeScript interfaces for type safety
   - Clean and maintainable code structure

9. **UI/UX Enhancements**
   - Responsive layout with max-width container
   - Centered title
   - Proper spacing and padding
   - Cursor pointer on table rows to indicate interactivity
   - Loading indicators during data fetching

## Technical Decisions

- **React Query**: Chosen for efficient data fetching, caching, and state management
- **Axios**: Used for HTTP requests with proper configuration and error handling
- **Ant Design**: Leveraged for consistent, professional UI components
- **TypeScript**: Full type safety throughout the application
- **Custom Hooks**: Created reusable hooks for better code organization and separation of concerns
- **useMemo**: Used for optimized filtering to avoid unnecessary re-renders

## Files Created/Modified

### New Files

- `services/swapi.ts` - Axios client and service functions
- `hooks/usePlanets.ts` - React Query hook for planets
- `hooks/usePeople.ts` - React Query hook for people
- `hooks/useStarships.ts` - React Query hook for starships
- `CHANGELOG.md` - This file

### Modified Files

- `pages/_app.tsx` - Added React Query provider
- `pages/index.tsx` - Complete implementation of the main page with all features
