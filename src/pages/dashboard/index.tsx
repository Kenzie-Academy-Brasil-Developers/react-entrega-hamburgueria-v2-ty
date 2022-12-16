import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

export function DashboardPage() {

    const { products } = useContext(UserContext)
    console.log(products)

    return(
        <div>
            <h1>Funcionou</h1>
        </div>
    )
}