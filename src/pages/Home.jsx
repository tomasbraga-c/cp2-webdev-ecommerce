import Navbar from "../components/Navbar";

export default function Home() {
  
  return (
    <div>
        <Navbar/>
        <div>
        <div className="text-yellow-400 bg-black px-6 py-4 flex justify-between items-center">Eletrônicos</div>
        <section>
          <h2>Produtos em destaque</h2>
        </section>
        <div className="text-yellow-400 bg-black px-6 py-4 flex justify-between items-center">Roupas</div>
        <section>
        </section>
        <div className="text-yellow-400 bg-black px-6 py-4 flex justify-between items-center">Joias</div>
        <section>
          
        </section>
        </div>
    </div>
  );
}
