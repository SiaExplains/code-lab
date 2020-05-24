### Advantages

-   Use new frontend frameworks on the old architecture
-   No more shared codebase and conflicts
-   Independent deployment
-   Each team can pick their own stack
-   You can easily sclae your frontend app

### How to split

-   By functionality on the page
-   By Page (routing)
-   By section (sidebar, main, footer ,etc.)

### Implementation

-   External app bootstrapping
-   IFrames (exist since 1990's)
-   Single-spa library
-   Frint framework (React+Vuejs)

#### External app bootstrapping

-   Code lives on different server
-   Independent depolyment
-   Communication is done through:
    -- Window Object
    -- Event Bus
