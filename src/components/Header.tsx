import Logo from "./Logo.tsx";
import Counter from "./Counter.tsx";

const Header = ({ todos }) => {
    return (
        <header className="flex justify-between items-center col-[1/3] rows-[1/2] bg-[#fbf5ed] border-b border-black/[0.08] 
        px-[25px] bg-opacity-15">
            <Logo />

            <Counter todos={todos}/>
        </header>
    );
}

export default Header;