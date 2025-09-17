import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ExpandableSectionProps {
  title: string;
  content: string[];
  defaultExpanded?: boolean;
  testId: string;
}

export default function ExpandableSection({ 
  title, 
  content, 
  defaultExpanded = false,
  testId 
}: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <Card className="mb-6 border-purple-200 shadow-lg overflow-hidden hover-elevate" data-testid={testId}>
      <button
        className="w-full px-8 py-6 flex items-center justify-between text-left bg-gradient-to-r from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200 transition-all duration-200"
        onClick={() => {
          setIsExpanded(!isExpanded);
          console.log(`${title} ${isExpanded ? 'collapsed' : 'expanded'}`);
        }}
        data-testid={`${testId}-toggle`}
      >
        <h3 className="text-lg font-bold text-foreground" data-testid={`${testId}-title`}>
          {title}
        </h3>
        {isExpanded ? (
          <ChevronDown className="w-5 h-5 text-blue-700" data-testid={`${testId}-chevron-down`} />
        ) : (
          <ChevronRight className="w-5 h-5 text-blue-700" data-testid={`${testId}-chevron-right`} />
        )}
      </button>
      
      {isExpanded && (
        <div className="px-8 pb-6 bg-gradient-to-r from-blue-50 to-purple-50 border-t border-purple-200/50" data-testid={`${testId}-content`}>
          <div className="space-y-3 pt-6">
            {content.map((item, index) => (
              <div 
                key={index}
                className="text-base text-foreground leading-relaxed font-medium text-justify"
                data-testid={`${testId}-item-${index}`}
                dangerouslySetInnerHTML={{ __html: `• ${item}` }}
              />
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}