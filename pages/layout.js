import NavBar from "../components/NavBar";
import TopNav from "../components/TopNav";


export default function Layout({ children }) {
    return (
        <>
            <TopNav />
            <main>{children}</main>
        </>
    )
}