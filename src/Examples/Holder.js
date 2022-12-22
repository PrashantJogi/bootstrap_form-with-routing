import React from 'react';
function Holder({children}) {
    // eslint-disable-next-line no-restricted-globals
    return <>{localStorage.getItem("authenticate") ?  (<>{children}</>) : location.href = "/Auth"}</>;
}

export default Holder;