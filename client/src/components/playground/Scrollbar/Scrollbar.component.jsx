import React from 'react';
import SimpleBarReact from "simplebar-react";

import "simplebar/src/simplebar.css";
    
const Scrollbar = () => {
    return <SimpleBarReact style={{ maxHeight: '100vh' }} />
};

export default Scrollbar;