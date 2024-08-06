// pages/index.tsx
import React from 'react';
import TextRewriter from '../components/TextRewriter';
import ChatgptRewriter from '../components/ChatgptRewriter';
import FeaturesSection from '../components/Features';
import AdvantagesSection from '../components/AdvantagesSection';
import FinalThoughts from '../components/FinalThoughts';
import FAQ from '../components/FAQs';
import SecondNavbar from '../components/SecondNavbar';
import WorkingSection from '../components/WorkingSection';
import DifferenceTable from '../components/DifferenceTable';
import PrecautionsSection from '../components/PrecautionsSection';

const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen">
      <SecondNavbar />
      <main className="px-4 md:px-6 lg:px-8 xl:px-10">
        <TextRewriter />
        <ChatgptRewriter />
        <WorkingSection />
        <DifferenceTable />
        <FeaturesSection />
        <AdvantagesSection />
        <PrecautionsSection />
        <FinalThoughts />
        <FAQ />
      </main>
    </div>
  );
};

export default Home;
