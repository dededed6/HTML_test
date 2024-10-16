import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    const toHome = () => {
        navigate("/");
    }

    const toResult = () => {
        navigate('/result');
    }

    return (
        <div>

        </div>
    );
}