import React from 'react'

export const KetoSearch = () => {

    return (
        <div>

            <form className="example" action="action_page.php">
                <input type="text" placeholder="Search.." name="search" />
                    <button type="submit"><i className="fa fa-search"></i></button>
            </form>

        </div>
    )
}
