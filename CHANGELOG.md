## - 2026-01-11

    ### Summary

        This app was developed in order to display star wars data such as people, star ships and planets.

    ### Added Features

        Data display: This app contains 3 tabs containing 1 table each: People, Star ships and Planets data. Each of them containing sort, filter (for relevant info), search and pagination features in order to have a better UI experience. This app also has a drawer that can be used to display single row info.

    ### Used Tech

        API fetching: Axios
        Data cache: React Query
        UI components: Ant Design
        Data source: Star Wars Dev API

    ### Folder Structure

        This app was made separating the data fetching file (/serives) from components (/components). All the info used and shared by components can be accessed using personalized hooks. Constants where also defined in a constants file.
