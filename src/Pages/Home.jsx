import {Link} from "react-router-dom"

function Home() {
    return (
        <div className="bg-gray-300">
            <div className="text-2xl h-screen flex flex-col items-center justify-between py-4 w-1/4 mx-auto text-center">
                <p className="font-bold">Welcome to the Trivia Challenge!</p>
                <p>You will be presented with 10 True of False questions</p>
                <p>Can you score a 100% ?</p>
                <div>
                    <Link to="/trivia">BEGIN</Link>
                </div>
            </div>
        </div>
    )
}

export default Home