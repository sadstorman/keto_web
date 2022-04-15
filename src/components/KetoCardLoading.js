import { Spinner } from "react-bootstrap";

const KetoCardLoading = ({

}) => {

    return (

        <div className="spiner text-center">
            <Spinner  animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        </div>
        

    )
}

export default KetoCardLoading