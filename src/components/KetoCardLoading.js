import { Spinner } from "react-bootstrap";

const KetoCardLoading = ({

}) => {

    return (

        <div className="spiner text-center">
            <span className="text-white">Loading...</span>
            <Spinner  animation="border" role="status">
            <span className="visually-hidden text-white">Loading...</span>
        </Spinner>
        </div>
        

    )
}

export default KetoCardLoading