export default function Skills() {
    return (
        <div className="container">
            <div className="hexagonArea first">
                <div className="hexagon">
                    <img src="react.svg" />
                </div>
                <div className="hexagon">
                    <img src="nodejs.svg" />
                </div>
                <div className="hexagon">
                    <img src="mongo.svg" />
                </div>
                <div className="hexagon">
                    <img src="next.svg" />
                </div>
            </div>

            <div className="hexagonArea second">
                <div className="hexagon">
                    <img src="tailwind.png" alt="" />
                </div>
                <div className="hexagon">
                    <img src="django.svg" width={55} height={55} alt="" />
                </div>
                <div className="hexagon">
                    <img src="docker.svg" />
                </div>
                <div className="hexagon">
                    <img src="redux.svg" width={65} height={60} />
                </div>
                <div className="hexagon">
                    <img src="git.png" />
                </div>
            </div>

            <div className="hexagonArea first">
                <div className="hexagon">
                    <img src="javascript.svg" />
                </div>
                <div className="hexagon">
                    <img src="python.svg" alt="" />
                </div>
                <div className="hexagon">
                    <img src="cpp.svg" />
                </div>
                <div className="hexagon">
                    <img src="typescript.svg" width={65} height={60} />
                </div>
            </div>
        </div>
    )
}