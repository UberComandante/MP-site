import React from "react";
import Text from "./Text";

const App = () => {
    return (
        <div>
            <React.Fragment>
                <p>Check this text from the other component:</p>
                <Text />
            </React.Fragment>
        </div>    
    );
}

export default App;