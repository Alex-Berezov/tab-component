import logo from './logo.svg'
import Table from './components/Table'

function App() {
    return (
        <div className="app">
            <header className="app__header">
                <div className="wrapper">
                    <img src={logo} className="app__header_logo" alt="logo"/>
                    <p>Some header information</p>
                </div>
            </header>

            <article>
                <Table/>
            </article>

            <footer>
                Some footer information
            </footer>
        </div>
    )
}

export default App
