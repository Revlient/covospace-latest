import { useState, useEffect } from 'react';
import { cmsApi } from '../../lib/api';
import { Client } from '../../types/cms';

export default function ClientMarquee() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const data = await cmsApi.getClients();
        setClients(data);
      } catch (error) {
        console.error('Failed to fetch clients:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  if (loading) return null; // Or a small loader

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Trusted by Leading Companies
        </h3>
        
        <div className="overflow-hidden">
          <div className="animate-marquee flex space-x-16">
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="flex-shrink-0">
                {client.logoUrl ? (
                   <img src={client.logoUrl} alt={client.name} className="h-12 object-contain" />
                ) : (
                  <div className="bg-gray-100 px-8 py-4 rounded-lg text-gray-600 font-semibold text-lg whitespace-nowrap">
                    {client.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}