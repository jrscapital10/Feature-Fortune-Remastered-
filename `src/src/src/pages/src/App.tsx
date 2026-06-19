import Header from './components/Header'
import Marketplace from './pages/Marketplace'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Marketplace />
      </main>
    </div>
  )
}
