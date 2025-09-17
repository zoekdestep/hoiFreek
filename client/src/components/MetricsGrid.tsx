import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface MetricCardProps {
  title: string;
  value: string;
  subtext?: string;
  color: 'green' | 'blue' | 'orange' | 'gray';
  testId: string;
}

function MetricCard({ title, value, subtext, color, testId }: MetricCardProps) {
  const colorClasses = {
    green: 'text-green-600 bg-green-50',
    blue: 'text-blue-600 bg-blue-50',
    orange: 'text-orange-600 bg-orange-50',
    gray: 'text-gray-600 bg-gray-50',
  };

  return (
    <Card className="p-4 text-center hover-elevate" data-testid={testId}>
      <div className="text-sm text-muted-foreground mb-2 font-medium" data-testid={`${testId}-title`}>
        {title}
      </div>
      <div className={`text-2xl font-bold mb-1 ${colorClasses[color]}`} data-testid={`${testId}-value`}>
        {value}
      </div>
      {subtext && (
        <div className="text-xs text-muted-foreground" data-testid={`${testId}-subtext`}>
          {subtext}
        </div>
      )}
    </Card>
  );
}

export default function MetricsGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <MetricCard
        title="Stakeholder Joy Index"
        value="92/100"
        color="green"
        testId="metric-stakeholder-joy"
      />
      <MetricCard
        title="Bug—Hug Ratio"
        value="1:27"
        color="blue"
        testId="metric-bug-hug"
      />
      <MetricCard
        title="Roadmap Reality Alignment"
        value="99%"
        color="orange"
        testId="metric-roadmap-alignment"
      />
      <MetricCard
        title="Burn-Down Drama"
        value="LOW"
        subtext="---"
        color="gray"
        testId="metric-burn-down"
      />
    </div>
  );
}