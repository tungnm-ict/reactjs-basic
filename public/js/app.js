class AuthorComp extends React.Component {
    render() {
        return (
            <div>
                <h1 className="bg-yellow">Manh Tung React Js</h1>
                <CourseComp/>
            </div>
        )
    }
}
class CourseComp extends React.Component {
    render() {
        return (
            <h3>Programing with React JS</h3>
        )
    }
}

ReactDOM.render(
    <div>
    <AuthorComp/>
</div>, document.getElementById("root"));