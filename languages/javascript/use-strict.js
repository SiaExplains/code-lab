'use strict';

function funcStrictBlock() {
    x = 2;
    console.log(x);
}

/*
    will throw error becuase in strict mode all vars should declared before hand
*/
funcStrictBlock();
