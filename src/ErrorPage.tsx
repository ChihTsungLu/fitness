interface ErrorPageProps { }
import { useRouteError } from "react-router-dom";

const ErrorPage = ({ }: ErrorPageProps) => {
    const error = useRouteError();
    console.error(error);
    return (
        <div>
            <div className="text-center pt-10 space-y-2">
                <p>此網頁出現問題</p>
                <p>請麻煩您回報此問題：lu001224@gmail.com</p>
                <p className="italic text-gray-400">成功回報問題提供免費諮詢🙌</p>
            </div>
        </div>
    );
};

export default ErrorPage;