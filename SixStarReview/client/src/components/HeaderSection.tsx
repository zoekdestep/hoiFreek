import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function HeaderSection() {
  return (
    <Card className="mb-8 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 border-emerald-200 shadow-xl">
      <div className="p-8 text-center">
        {/* Executive Summary Badge */}
        <div className="inline-flex items-center gap-3 bg-emerald-600 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
          <CheckCircle className="w-6 h-6" data-testid="icon-approved" />
          <span className="text-xl font-bold tracking-wide" data-testid="text-status">
            PROMOTION APPROVED
          </span>
        </div>
        
        {/* Main Title */}
        <div className="space-y-4 mb-6">
          <h1 className="text-5xl font-bold text-slate-800 tracking-tight" data-testid="text-main-title">
            PROMOTABLE BEYOND REASON
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-1 w-12 bg-gradient-to-r from-transparent to-emerald-400"></div>
            <p className="text-2xl text-slate-600 font-medium" data-testid="text-progression">
              5-Star → 6-Star Product Builder
            </p>
            <div className="h-1 w-12 bg-gradient-to-r from-emerald-400 to-transparent"></div>
          </div>
        </div>
        
      </div>
    </Card>
  );
}