import Profile from "./Profile";
import UserSearch from "./search-input";

export default function Hero() {
    return (
        <div className="lg:m-16 mx-8 h-[70vh] border border-gray-500 py-5  rounded-2xl">
            <div className="flex mx-9 items-center justify-center">
                <UserSearch />
            </div>
        </div>
    )
}
