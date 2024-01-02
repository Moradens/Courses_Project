import '../index.css'
export function Header() {
    return (
        <div>
            <ul className="header_list">
                <li><img src={"../../src/assets/Logo_img.png"} alt="Kurzy logo"/></li>
                <li>Courses</li>
                <li>Speakers</li>
                <li>Locations</li>
            </ul>
            <hr className={"top_line"}/>
        </div>
    )
}