import ListItems from "../ListItems";

function Header()
{
    return(
        <header>
            <p>Free<span>lancer</span></p>
            <ul>
                <ListItems text="Home" />
                <ListItems text="About" />
                <ListItems text="Services" />
                <ListItems text="Portfolio" />
                <ListItems text="Pricing" />
                <ListItems text="Experience" />
            </ul>
        </header>
    );
}

export default Header