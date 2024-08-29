import React from "react";
import smallCert1 from "./assets/cert-databases.jpg";
import smallCert2 from "./assets/cert-html.jpg";
import smallCert3 from "./assets/cert-java.jpg";
import smallCert4 from "./assets/cert-networking.jpg";
import smallCert5 from "./assets/cert-ns.jpg";
import largeCert from "./assets/ncii.jpg";

const Certifications = () => {
    return (
        <section id="certifications" className="bg-gray-950">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center text-white">Certifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {/* Smaller Certificates */}
                    <div className="flex justify-center items-center">
                        <img src={smallCert1} alt="Certificate 1" className="w-full h-auto object-contain rounded-lg shadow-lg" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={smallCert2} alt="Certificate 2" className="w-full h-auto object-contain rounded-lg shadow-lg" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={smallCert3} alt="Certificate 3" className="w-full h-auto object-contain rounded-lg shadow-lg" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={smallCert4} alt="Certificate 4" className="w-full h-auto object-contain rounded-lg shadow-lg" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={smallCert5} alt="Certificate 5" className="w-full h-auto object-contain rounded-lg shadow-lg" />
                    </div>
                </div>

                {/* Larger Certificate */}
                <div className="flex justify-center">
                    <img src={largeCert} alt="Large Certificate" className="w-full max-w-2xl h-auto object-contain rounded-lg shadow-lg" />
                </div>
            </div>
        </section>
    );
};

export default Certifications;
