import ExpandableSection from '../ExpandableSection';

export default function ExpandableSectionExample() {
  const mockContent = [
    'Demonstrates exceptional stakeholder calibration through advanced buzzword synthesis',
    'Leverages cross-functional synergies to optimize value-stream delivery mechanisms',
    'Exhibits thought leadership in agile transformation and digital excellence initiatives',
    'Proactively manages technical debt while maximizing developer velocity metrics'
  ];

  return (
    <div className="p-8 bg-background min-h-screen">
      <div className="max-w-2xl mx-auto space-y-4">
        <ExpandableSection 
          title="Core Competencies" 
          content={mockContent}
          defaultExpanded={true}
          testId="section-core-competencies"
        />
        <ExpandableSection 
          title="Impact Highlights" 
          content={mockContent.slice(0, 2)}
          testId="section-impact-highlights"
        />
        <ExpandableSection 
          title="Leadership & Culture" 
          content={mockContent.slice(1, 3)}
          testId="section-leadership-culture"
        />
      </div>
    </div>
  );
}