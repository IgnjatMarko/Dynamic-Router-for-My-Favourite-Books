import { useParams } from "react-router-dom"

export default function Publisher() {
    const { itemId } = useParams();

return (
    <>
    {
        itemId ? (
            <div>
                <h1>Book publishing companies</h1>
                <ul>
                    <ol>Penguin Random House</ol>
                    <ol>Scholastic</ol>
                    <ol>LPI Media</ol>
                </ul>
            </div>
        ) : (
            <p>Page item is not present</p>
        )
    }
    </>
)
}