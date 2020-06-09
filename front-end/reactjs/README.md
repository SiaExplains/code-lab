### How to optimize reactapp

-   separate containers components vs presentation components
-   using utilize performance timeline (chrome devtools) to determine bottlenecks
-   remove unnecessaey renders (using shouldComponentUpdate)
-   prioritize netweork calls (app seems faster) (Chrome DevTools > Network)
    -- HTML
    -- Styles
    -- Ajax/XHR/Fetch
    -- Images
    -- Scripts
    -- Fonts

    by setting rel attribute: "preload"

    -   prefetch
    -   preload
    -   preconnect
    -   dns-prefetch
    -   prerender

-   Code Splitting
-   optimize REDUX
    -- Set state is okay
    -- Connect at multiple compoents
    -- Normalized state shape

-   active React DevTools in development mode (reactjs)

### Conventions

-   put all client's files into `client` directory
-   Using `ReactJs` as front-end library
-   Active `CSS Modules` in `reactjs` for writing better code
-   Take advantage of `Redux` for making statful apps.
-   Using `axios` for calling back-end API's
-   Using Environment config for (Production/Development)
-   for Animation `react-spring` is a good choice

### Accessibility

-   using aria labels
-   react-a11y or react-axe for accessibility testing

### Testing

-   jest + enzyme
