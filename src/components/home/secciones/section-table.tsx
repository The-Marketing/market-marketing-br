import Link from 'next/link';
import React from 'react';

const PriceTable = () => {
  return (
    <section className="py-32 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-700">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Tabela de Preços</h2>
        <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
          <table className="min-w-full table-auto border-separate border-spacing-0">
            <thead>
              <tr className="bg-black text-white">
                <th className="py-3 px-6 text-left border-b border-white">Serviço</th>
                <th className="py-3 px-6 text-left border-b border-white">Descrição</th>
                <th className="py-3 px-6 text-left border-b border-white">Preço</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100 text-gray-800 hover:bg-gray-200 transition-all duration-300">
                <td className="py-3 px-6 border-b border-gray-300 hover:border-b-4 hover:border-blue-500">Campanhas de Meta Ads</td>
                <td className="py-3 px-6 border-b border-gray-300">Criação e gerenciamento de campanhas para alcançar novos clientes.</td>
                <td className="py-3 px-6 border-b border-gray-300 text-lg font-semibold text-transparent bg-clip-text  hover:text-2xl transition-all duration-500 transform hover:scale-102">

                <Link href={'/'}>
                  R$ 1.500/mês
                
                </Link>
                </td>
              </tr>
              <tr className="bg-gray-100 text-gray-800 hover:bg-gray-200 transition-all duration-300">
                <td className="py-3 px-6 border-b border-gray-300 hover:border-b-4 hover:border-blue-500">Desenvolvimento Web</td>
                <td className="py-3 px-6 border-b border-gray-300">Criação de sites personalizados para o seu negócio.</td>
                <td className="py-3 px-6 border-b border-gray-300 text-lg font-semibold text-transparent bg-clip-text  hover:text-2xl transition-all duration-500 transform hover:scale-102">
                  <Link href={'/'}>
                  R$ 5.000
                  </Link>
                </td>
              </tr>
              <tr className="bg-gray-100 text-gray-800 hover:bg-gray-200 transition-all duration-300">
                <td className="py-3 px-6 border-b border-gray-300 hover:border-b-4 hover:border-blue-500">Gestão de Redes Sociais</td>
                <td className="py-3 px-6 border-b border-gray-300">Desenvolvimento de conteúdo e estratégias de engajamento.</td>
                <td className="py-3 px-6 border-b border-gray-300 text-lg font-semibold text-transparent bg-clip-text  hover:text-2xl transition-all duration-500 transform hover:scale-102">
                  <Link href={'/'}>
                  R$ 2.000/mês
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PriceTable;
