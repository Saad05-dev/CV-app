
function ListItems({link, text, icon})
{

    return(
        <li><a href={link}>
             {icon ? icon : text}
        </a></li>
    )
}

export default ListItems