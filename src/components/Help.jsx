import React, {useEffect} from 'react';
import $ from 'jquery'
export default function Help() {
    useEffect(() => {
        $("#help")
            .slideDown(1000)
            .delay(2000)
            .slideUp();
        $("#help").show()
    }, [])

    return (
        <>
            <div id="help" > Click on a gif to copy it</div>
        </>
    );
}

