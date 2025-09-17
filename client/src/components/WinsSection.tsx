import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function WinsSection() {
  return (
    <TooltipProvider>
      <Card className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50 border-purple-200 shadow-lg">
        <div className="p-8">
          <div className="flex items-start gap-4">
            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-3 py-2 text-base shadow-sm">
              🏆 WINS
            </Badge>
            <div className="flex-1 text-base text-foreground leading-relaxed font-medium space-y-3 text-justify" data-testid="text-wins-content">
              <div>🎸 <strong>Launched StringKick Games</strong>, a <Tooltip><TooltipTrigger className="bg-blue-100/60 px-1 py-0.5 rounded cursor-help hover:bg-blue-100/80 transition-colors">9+ months</TooltipTrigger><TooltipContent className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-purple-300">ABSOLUTELY LEGENDARY! 🔥</TooltipContent></Tooltip> solo development effort introducing gamified guitar learning (Duolingo-style) and expanding the Stringkick product portfolio.</div>
              
              <div>✉️&nbsp;<strong>Executed a multi-touch GTM campaign</strong> (launch → tour → demo → last-chance), delivering +<Tooltip><TooltipTrigger className="bg-blue-100/60 px-1 py-0.5 rounded cursor-help hover:bg-blue-100/80 transition-colors">50%</TooltipTrigger><TooltipContent className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-purple-300">MIND-BLOWING! 🤯</TooltipContent></Tooltip> license sales vs. forecast (<Tooltip><TooltipTrigger className="bg-blue-100/60 px-1 py-0.5 rounded cursor-help hover:bg-blue-100/80 transition-colors text-sm">15 actual vs. 10 projected</TooltipTrigger><TooltipContent className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-purple-300">UNBELIEVABLY EPIC! 🚀</TooltipContent></Tooltip>).</div>
              
              <div>🌐 <strong>Activated diversified acquisition channels</strong>, including Reddit engagement, early-access nurturing, and alumni outreach, achieving strong funnel coverage.</div>
              
              <div>☕Sustained operational throughput from Beest climbing gym, demonstrating <strong>adaptability in non-traditional work environments</strong>.</div>
              
              <div>🤖 <strong>Authored LLM-optimized marketing collateral</strong>, positioning StringKick for future discoverability in AI-driven ecosystems.</div>
              
              <div>🔥 <strong>Maintained single-founder velocity</strong> with zero burn-down indications, exemplifying disciplined prioritization and long-term resilience.</div>
              
              <div>💖 <strong>Advanced Relationship Milestones</strong> in parallel with launch execution, transitioning from "early exploration" to "<Tooltip><TooltipTrigger className="bg-blue-100/60 px-1 py-0.5 rounded cursor-help hover:bg-blue-100/80 transition-colors">20% boyfriend</TooltipTrigger><TooltipContent className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-purple-300">PHENOMENALLY ROMANTIC! 💕</TooltipContent></Tooltip>" status, including a successful offsite in the UK (positive partner satisfaction scores reported).</div>
            </div>
          </div>
        </div>
      </Card>
    </TooltipProvider>
  );
}