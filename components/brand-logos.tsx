import Image from "next/image";

interface BrandLogosProps {
  title: string;
  brands: string[];
  category: 'laptop' | 'printer' | 'ups' | 'general' | 'desktop';
}

export function BrandLogos({ title, brands }: BrandLogosProps) {
  const getBrandLogo = (brand: string) => {
    // Format the brand name to lowercase for file naming consistency
    const brandLower = brand.toLowerCase();
    
    // Check if the logo file exists based on the brands we know have logos
    const knownLogos: Record<string, string> = {
      'dell': '/logos/dell.svg',
      'hp': '/logos/hp.svg',
      'acer': '/logos/acer.png',
      'asus': '/logos/asus.svg',
      'canon': '/logos/canon.png',
      'lenovo': '/logos/lenovo.svg',
      'samsung': '/logos/samsung.svg',
      'kingston': '/logos/kingston.png',
      'adata': '/logos/adata.png',
      'epson': '/logos/epson.svg',
      'wd': '/logos/wd.svg',
      'sandisk': '/logos/sandisk.jpg',
      'seagate': '/logos/seagate.png',
      'crucial': '/logos/crucial.jpg',
      'apple': '/logos/apple.svg',
      'toshiba': '/logos/toshiba.png',
      'sony': '/logos/sony.svg',
      'msi': '/logos/msi.png',
      'compaq': '/logos/compaq.png',
      'nexus': '/logos/nexus.jpeg',
      'apc': '/logos/apc.jpg',
      'microtek': '/logos/microtek.jpeg',
      'gigabyte': '/logos/gigabyte.svg',
      'intel': '/logos/intel.png',
      'amd': '/logos/amd.svg',

      // Add other known logos here as they become available
    };
    
    // Return the known logo path or undefined (which will trigger the fallback)
    return knownLogos[brandLower];
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
        {title}
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 items-center justify-items-center">
        {brands.map((brand, index) => {
          const logoPath = getBrandLogo(brand);
          
          return (
            <div 
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-24 h-16 flex items-center justify-center relative">
                {logoPath ? (
                  <Image
                    src={logoPath}
                    alt={`${brand} logo`}
                    fill
                    sizes="(max-width: 768px) 80px, 120px"
                    style={{
                      objectFit: 'contain',
                      maxHeight: '80px',
                      filter: 'grayscale(100%)',
                    }}
                    className="hover:filter-none transition duration-300"
                  />
                ) : (
                  <span className="text-xs font-medium text-gray-600 text-center">
                    {brand}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-xs text-gray-500 text-center mt-4">
        * All brand names and logos are trademarks of their respective owners. 
        We are an independent service provider and not affiliated with these brands.
      </p>
    </div>
  );
}
