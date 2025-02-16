import React from 'react';

const SectionSecurity = () => {
  return (
    <section id="security" className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white py-20 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-4">Segurança de Alto Nível</h2>
      <p className="text-lg mb-6">
        Next.js oferece recursos avançados de segurança para proteger seus dados e evitar vulnerabilidades.
      </p>
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-2">Proteção Contra Ataques</h3>
        <p>Com Next.js, sua aplicação está protegida contra ataques comuns como XSS e CSRF.</p>
      </div>
    </section>
  );
};

export default SectionSecurity;
