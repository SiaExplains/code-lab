#### checking null or not

-   expect(something).isNUll()
-   expect(something).not.isNUll()

#### checking Falsy

-   expect(something).toBeFalsy()

#### checking prmitive types

-   expect(something).toBe(something)

#### checking object types

-   expect(something).toEqual(something)

#### comparison > < >= <=

-   expect(something).lessThan(something)
-   expect(something).greaterThan(something)
-   expect(something).lessThanOrEqual(something)
-   expect(something).greaterThanOrEqual(something)

#### checking strings

-   expect(string).contain(character)
-   expect(string).toMatch(regexPattern)

---

#### async data checking

<pre>
    expect.assertions(1) {
        return myFunc().then(d => {
        epect(d).toBe('test1);
    })
    }
</pre>

---

#### JEST Life Cycle

<pre>
    beforeEach( () => () {})
    AfterEach( () => () {})
    beforeAll( () => () {})
    afterAll( () => () {})
</pre>

-   using `describe` to make scope for lifecycle for some specific tests.
